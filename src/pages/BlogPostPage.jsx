import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBlogPosts } from '../content/blog.js';
import { ContentPageLayout } from './ContentPageRenderer.jsx';

/* Build Article + FAQPage JSON-LD from the post (SMART FRAME → schema). */
function jsonLd(post) {
  const faqHeading = /питанн|faq|вопрос/i;
  const faqItems = [];
  post.sections.forEach((s, i) => {
    const prev = post.sections[i - 1];
    if (s.type === 'list' && prev?.type === 'heading' && faqHeading.test(prev.text || '')) {
      s.items.forEach((it) => faqItems.push({
        '@type': 'Question',
        name: it.title,
        acceptedAnswer: { '@type': 'Answer', text: it.desc },
      }));
    }
  });

  const graph = [{
    '@type': 'Article',
    headline: post.title,
    description: post.subtitle,
    articleSection: post.eyebrow,
  }];
  if (faqItems.length) {
    graph.push({ '@type': 'FAQPage', mainEntity: faqItems });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

export default function BlogPostPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const blogPosts = getBlogPosts(i18n.language);
  const idx = blogPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return <Navigate to="/blog" replace/>;

  const post = blogPosts[idx];
  const next = blogPosts.length > 1 ? blogPosts[(idx + 1) % blogPosts.length] : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(post) }}/>
      <ContentPageLayout
        item={post}
        backPath="/blog"
        backLabel={t('nav.tiles.aiSearchTrends')}
        nextItem={next}
        nextPath="/blog"
      />
    </>
  );
}
