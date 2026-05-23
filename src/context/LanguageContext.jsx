import { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '../i18n/translations';

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
  const [lang, setLangState] = useState(loadLang);

  const setLang = useCallback((l) => {
    if (l !== 'id' && l !== 'en') return;
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
    setLangState(l);
  }, []);

  const t = useCallback(
    (keyPath) => {
      const keys = keyPath.split('.');
      let node = translations[lang];
      for (const k of keys) {
        if (node == null) return keyPath;
        node = node[k];
      }
      return node ?? keyPath;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, translations: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
