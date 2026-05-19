import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { chapters } from '../content/chapters.js';
import { ContentPageLayout } from './ContentPageRenderer.jsx';

export default function ChapterPage() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const idx = chapters.findIndex(c => c.slug === slug);
  if (idx === -1) return <Navigate to="/resources/geo-playbook" replace/>;

  const chapter = chapters[idx];
  const next = chapters[(idx + 1) % chapters.length];

  return (
    <ContentPageLayout
      item={chapter}
      backPath="/resources/geo-playbook"
      backLabel={t('nav.tiles.geoPlaybook')}
      nextItem={next}
      nextPath="/resources/geo-playbook"
    />
  );
}
