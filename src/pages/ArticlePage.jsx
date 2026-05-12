import { useParams, Navigate } from 'react-router-dom';
import { articles } from '../content/articles.js';
import { ContentPageLayout } from './ContentPageRenderer.jsx';

export default function ArticlePage() {
  const { slug } = useParams();
  const idx = articles.findIndex(a => a.slug === slug);
  if (idx === -1) return <Navigate to="/resources/research-lab" replace/>;

  const article = articles[idx];
  const next = articles[(idx + 1) % articles.length];

  return (
    <ContentPageLayout
      item={article}
      backPath="/resources/research-lab"
      backLabel="Research Lab"
      nextItem={next}
      nextPath="/resources/research-lab"
    />
  );
}
