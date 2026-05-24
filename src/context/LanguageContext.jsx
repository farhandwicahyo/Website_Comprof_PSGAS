import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { translations } from '../i18n/translations';
import { useContent } from './ContentContext';
import { buildIdLocale } from '../utils/cmsMerge';

const STORAGE_KEY = 'psg_lang';

/** @returns {'id'|'en'} */
function loadLang() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'id' || v === 'en') return v;
  } catch { /* ignore */ }
  return 'id';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { content } = useContent();
  const [lang, setLangState] = useState(loadLang);

  const locale = useMemo(
    () => (lang === 'id' ? buildIdLocale(content) : translations.en),
    [lang, content],
  );

  const setLang = useCallback((l) => {
    if (l !== 'id' && l !== 'en') return;
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    setLangState(l);
  }, []);

  const t = useCallback(
    (keyPath) => {
      const keys = keyPath.split('.');
      let node = locale;
      for (const k of keys) {
        if (node == null) return keyPath;
        node = node[k];
      }
      return node ?? keyPath;
    },
    [locale],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, translations: locale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
