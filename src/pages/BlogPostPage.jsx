import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBlogPosts, blogLocales } from '../content/blog.js';
import { ContentPageLayout } from './ContentPageRenderer.jsx';

export default function BlogPostPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const blogPosts = getBlogPosts(i18n.language);
  const idx = blogPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/blog" replace/>;

  const post = blogPosts[idx];
  const next = blogPosts.length > 1 ? blogPosts[(idx + 1) % blogPosts.length] : null;

  return (
    <ContentPageLayout
      item={post}
      backPath="/blog"
      backLabel={t('nav.tiles.aiSearchTrends')}
      nextItem={next}
      translatedIn={blogLocales}
      nextPath="/blog"
    />
  );
}
