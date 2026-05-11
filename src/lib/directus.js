import { createDirectus, rest, staticToken, readItems } from '@directus/sdk';

const url = import.meta.env.VITE_DIRECTUS_URL;
const token = import.meta.env.VITE_DIRECTUS_TOKEN;

export const directus = url
  ? createDirectus(url).with(staticToken(token || '')).with(rest())
  : null;

export async function getPageContent(slug) {
  if (!directus) return null;
  try {
    const items = await directus.request(
      readItems('pages', {
        filter: { slug: { _eq: slug } },
        limit: 1,
        fields: ['*'],
      })
    );
    return items[0] ?? null;
  } catch {
    return null;
  }
}
