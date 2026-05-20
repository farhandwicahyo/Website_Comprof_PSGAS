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

function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      // Merge: new top-level keys in defaultContent (e.g. navbar, sections, settings)
      // are automatically filled in even if stored data is old.
      return mergeWithDefaults(defaultContent, stored);
    }
  } catch { /* ignore */ }
  return defaultContent;
}

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(loadContent);

  const updateSection = useCallback((section, data) => {
    setContent((prev) => {
      const next = { ...prev, [section]: data };
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
