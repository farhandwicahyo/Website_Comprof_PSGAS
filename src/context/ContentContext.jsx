import { createContext, useContext, useState, useCallback } from 'react';
import { defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'psg_content_v1';

/**
 * Deep merge: values from `stored` override `defaults`,
 * but any key that exists in `defaults` but is missing from
 * `stored` will be filled in from `defaults`.
 * Arrays are taken as-is from `stored` (not merged element-by-element).
 */
function mergeWithDefaults(defaults, stored) {
  const result = { ...defaults };
  for (const key of Object.keys(stored)) {
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
  let next = data;
  const products = withoutLeanGas(next.products);
  if (products !== next.products) next = { ...next, products };
  const withNav = withOurContributeNav(next);
  if (withNav !== next) next = withNav;
  const withCsr = withCsrContributePhotos(next);
  if (withCsr !== next) next = withCsr;
  return next;
}

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      // Merge: new top-level keys in defaultContent (e.g. navbar, sections, settings)
      // are automatically filled in even if stored data is old.
      const merged = mergeWithDefaults(defaultContent, stored);
      const sanitized = sanitizeContent(merged);
      if (JSON.stringify(sanitized) !== JSON.stringify(merged)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
      }
      return sanitized;
    }
  } catch { /* ignore */ }
  return defaultContent;
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
      const next = { ...prev, [section]: defaultContent[section] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContent));
    setContent(defaultContent);
  }, []);

  return (
    <ContentContext.Provider value={{ content, updateSection, resetSection, resetAll }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
}
