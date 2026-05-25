import { createContext, useContext, useState, useCallback } from 'react';
import { defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'psg_content_v1';

/** Naikkan angka ini setiap defaultContent.js diubah agar cache browser ikut refresh. */
export const CONTENT_VERSION = 13;

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

function sanitizeProcessSteps(steps) {
  if (!Array.isArray(steps)) return steps;
  const patches = [
    { meta: '', desc: 'Gas alam dari PT Pertamina Hulu Rokan Regional 1 Zona 4.' },
    null,
    null,
    { meta: '710 MT/Hari' },
    { meta: 'Domestik' },
  ];
  return steps.map((s, i) => {
    const patch = patches[i];
    if (!patch) return s;
    return { ...s, ...patch };
  });
}

function sanitizeProducts(products) {
  if (!Array.isArray(products)) return products;
  return products.map((p) => {
    if (!/lpg\s*mixed/i.test(String(p?.title ?? ''))) return p;
    const desc = String(p.desc ?? '').replace(/\s*untuk memenuhi kebutuhan domestik nasional\s*\(PSO\)\.?/i, '.').replace(/\s*to meet national domestic demand\s*\(PSO\)\.?/i, '.');
    return { ...p, desc };
  });
}

function sanitizeMilestones(milestones) {
  const defaults = defaultContent.milestones;
  if (!defaults?.length) return milestones;
  if (!Array.isArray(milestones)) return defaults;
  const has2010 = milestones.some((m) => String(m?.year) === '2010');
  const stale =
    milestones.length !== defaults.length ||
    !has2010 ||
    milestones.some((m) => /Proper Hijau|Patra Nirbaya/i.test(String(m?.title ?? '')));
  if (stale) return defaults;
  return milestones.map((m) => {
    let year = String(m.year ?? '');
    if (year === '2026+') year = '2026';
    let desc = String(m.desc ?? '');
    desc = desc.replace(/PT Pertamina Gas Negara\s*&/i, 'PT Pertamina Gas dan');
    desc = desc.replace(/PT Pertamina Gas Negara and/i, 'PT Pertamina Gas and');
    const next = year !== m.year || desc !== m.desc ? { ...m, year, desc } : m;
    return next;
  });
}

function sortAwardsLikeDefaults(awards) {
  if (!Array.isArray(awards) || !defaultContent.awards?.length) return awards;
  const order = defaultContent.awards.map((a) => a.title);
  const sorted = [...awards].sort(
    (a, b) => order.indexOf(a.title) - order.indexOf(b.title),
  );
  const known = sorted.filter((a) => order.includes(a.title));
  const extra = awards.filter((a) => !order.includes(a.title));
  return [...known, ...extra];
}

function withoutEsdmPartner(partners) {
  if (!Array.isArray(partners)) return partners;
  const filtered = partners.filter(
    (p) => !/kementerian\s*esdm|kementrian_esdm/i.test(String(p?.name ?? '') + String(p?.logo ?? '')),
  );
  return filtered.length === partners.length ? partners : filtered;
}

function sanitizePartners(partners) {
  return withoutEsdmPartner(partners);
}

function sanitizeAwards(awards) {
  if (!Array.isArray(awards)) return defaultContent.awards;
  const hasSertifikat = awards.some((a) => String(a?.img ?? '').includes('/sertifikat/'));
  const hasUnsplash = awards.some((a) => String(a?.img ?? '').includes('unsplash'));
  if (hasUnsplash || !hasSertifikat) return defaultContent.awards;
  return sortAwardsLikeDefaults(awards);
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
  const noLeanGas = withoutLeanGas(next.products);
  if (noLeanGas !== next.products) next = { ...next, products: noLeanGas };
  const withFac = withOperationalFacilitiesOnly(next);
  if (withFac !== next) next = withFac;
  const process = sanitizeProcessSteps(next.process);
  if (process !== next.process) next = { ...next, process };
  const productsClean = sanitizeProducts(next.products);
  if (productsClean !== next.products) next = { ...next, products: productsClean };
  const milestones = sanitizeMilestones(next.milestones);
  if (milestones !== next.milestones) next = { ...next, milestones };
  const awardsClean = sanitizeAwards(next.awards);
  if (awardsClean !== next.awards) next = { ...next, awards: awardsClean };
  const partnersClean = sanitizePartners(next.partners);
  if (partnersClean !== next.partners) next = { ...next, partners: partnersClean };
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
    milestones: defaultContent.milestones,
    awards: defaultContent.awards,
    partners: defaultContent.partners,
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
