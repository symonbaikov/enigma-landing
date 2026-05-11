import { useState, useEffect } from 'react';
import { getPageContent } from '../lib/directus.js';

export function useContent(slug, fallback) {
  const [content, setContent] = useState(fallback);

  useEffect(() => {
    getPageContent(slug).then(remote => {
      if (remote) setContent(prev => ({ ...prev, ...remote }));
    });
  }, [slug]);

  return content;
}
