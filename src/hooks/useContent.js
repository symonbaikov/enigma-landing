import { useState, useEffect, useRef } from 'react';
import { getPageContent } from '../lib/directus.js';

export function useContent(slug, fallback) {
  const fallbackRef = useRef(fallback);
  fallbackRef.current = fallback;

  const [content, setContent] = useState(fallback);

  useEffect(() => {
    setContent(fallbackRef.current);
    getPageContent(slug).then(remote => {
      if (remote) setContent(prev => ({ ...prev, ...remote }));
    });
  }, [slug]);

  return content;
}
