import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getPageContent } from '../lib/directus.js';

export function useContent(slug, fallback) {
  const { i18n } = useTranslation();
  const fallbackRef = useRef(fallback);
  fallbackRef.current = fallback;

  const [content, setContent] = useState(fallback);

  useEffect(() => {
    setContent(fallbackRef.current);
    getPageContent(slug).then(remote => {
      if (remote) setContent(prev => ({ ...prev, ...remote }));
    });
  }, [slug, i18n.language]);

  return content;
}
