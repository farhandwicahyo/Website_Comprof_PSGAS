import { createContext, useContext, useState, useCallback } from 'react';
import { defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'psg_content_v1';

/** Naikkan angka ini setiap defaultContent.js diubah agar cache browser ikut refresh. */
export const CONTENT_VERSION = 7;

/**
 * Deep merge: values from `stored` override `defaults`,
 * but any key that exists in `defaults` but is missing from
 * `stored` will be filled in from `defaults`.
 * Arrays are taken as-is from `stored` (not merged element-by-element).
 */
function mergeWithDefaults(defaults, stored) {
  const result = { ...defaults };
  for (const key of Object.keys(stored)) {
    if (key === '_contentVersion') continue;
    const storedVal = stored[key];
    const defaultVal = defaults[key];
    if (
      storedVal !== null &&
      typeof storedVal === 'object' &&
      !Array.isArray(storedVal) &&
      defaultVal !== null &&
      typeof defaultVal === 'object' &&
      !Array.isArray(defaultVal)
    ) {
      result[key] = mergeWithDefaults(defaultVal, storedVal);
    } else {
      result[key] = storedVal;
    }
  }
  return result;
}

/** Remove deprecated Lean Gas product from saved or merged content */
function withoutLeanGas(products) {
  if (!Array.isArray(products)) return products;
  return products.filter((p) => !/lean\s*gas/i.test(String(p?.title ?? '')));
}

const REMOVED_FACILITY_RE =
  /pipa\s*ngl|ngl\s*pipeline|depot|jetty|distribution\s*hub|distribusi/i;

/** Hanya kilang ekstraksi & fraksinasi — bukan pipa/depot. */
function isOperationalPlant(f) {
  const text = `${f?.title ?? ''} ${f?.label ?? ''}`;
  if (REMOVED_FACILITY_RE.test(text)) return false;
  return /ekstraksi|extraction|fraksinasi|fractionation/i.test(text);
}

function withOperationalFacilitiesOnly(data) {
  const defaults = defaultContent.facilities;
  if (!Array.isArray(data.facilities)) {
    return { ...data, facilities: defaults };
  }
  const kept = data.facilities.filter(isOperationalPlant);
  let next = defaults;
  if (kept.length >= 2) next = kept.slice(0, 2);
  else if (kept.length === 1) next = [kept[0], defaults[1]].filter(Boolean);
  if (
    next.length === data.facilities.length &&
    next.every((f, i) => f.title === data.facilities[i]?.title)
  ) {
    return data;
  }
  return { ...data, facilities: next };
}

function withCsrContributePhotos(data) {
  const defaults = defaultContent.contribute;
  if (!defaults?.photos?.length) return data;
  const stored = data.contribute?.photos;
  const allCsr =
    Array.isArray(stored) &&
    stored.length > 0 &&
    stored.every((p) => String(p?.src ?? '').includes('/csr/'));
  if (allCsr && stored.length === defaults.photos.length) return data;
  return {
    ...data,
    contribute: { ...defaults, ...data.contribute, photos: defaults.photos },
  };
}

function withOurContributeNav(data) {
  const items = data.navbar?.menuItems;
  if (!Array.isArray(items)) return data;
  let changed = false;
  const menuItems = items.map((item) => {
    let next = item;
    if (item?.label === 'Kontribusi Kami') {
      changed = true;
      next = { ...next, label: 'Kontribusi Kami' };
    }
    if (next?.link === '#berita' || next?.label === 'Kontribusi Kami') {
      if (next.link !== '#contribute') {
        changed = true;
        next = { ...next, label: 'Kontribusi Kami', link: '#contribute' };
      }
    }
    return next;
  });
  if (!changed) return data;
  return { ...data, navbar: { ...data.navbar, menuItems } };
}

function sanitizeContent(data) {
  let next = { ...data, _contentVersion: CONTENT_VERSION };
  const products = withoutLeanGas(next.products);
  if (products !== next.products) next = { ...next, products };
  const withFac = withOperationalFacilitiesOnly(next);
  if (withFac !== next) next = withFac;
  const withNav = withOurContributeNav(next);
  if (withNav !== next) next = withNav;
  const withCsr = withCsrContributePhotos(next);
  if (withCsr !== next) next = withCsr;
  return next;
}

/** Setelah update defaultContent.js, muat ulang dari file & pertahankan berita CMS jika ada. */
function migrateFromDefaults(stored) {
  return sanitizeContent({
    ...defaultContent,
    news: Array.isArray(stored?.news) && stored.news.length ? stored.news : defaultContent.news,
  });
}

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      if (stored._contentVersion !== CONTENT_VERSION) {
        const migrated = migrateFromDefaults(stored);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        return migrated;
      }
      const merged = mergeWithDefaults(
        { ...defaultContent, _contentVersion: CONTENT_VERSION },
        stored,
      );
      const sanitized = sanitizeContent(merged);
      if (JSON.stringify(sanitized) !== JSON.stringify(merged)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
      }
      return sanitized;
    }
  } catch { /* ignore */ }
  return sanitizeContent(defaultContent);
}

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(loadContent);

  const updateSection = useCallback((section, data) => {
    setContent((prev) => {
      const payload = section === 'products' ? withoutLeanGas(data) : data;
      const next = sanitizeContent({ ...prev, [section]: payload });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetSection = useCallback((section) => {
    setContent((prev) => {
      const next = sanitizeContent({ ...prev, [section]: defaultContent[section] });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    const fresh = sanitizeContent(defaultContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    setContent(fresh);
  }, []);

  const reloadFromDefaults = useCallback(() => {
    const fresh = migrateFromDefaults(content);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    setContent(fresh);
  }, [content]);

  return (
    <ContentContext.Provider
      value={{ content, updateSection, resetSection, resetAll, reloadFromDefaults }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
}
