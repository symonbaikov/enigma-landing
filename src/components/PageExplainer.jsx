import { Reveal } from '../scroll-anims.jsx';
import { renderText } from '../lib/cite.jsx';

const asArray = (value) => (Array.isArray(value) ? value : []);

export default function PageExplainer({ content }) {
  const blocks = asArray(content?.blocks);

  if (!content || blocks.length === 0) return null;

  return (
    <section className="page-explainer inner-section">
      <div className="container-wide">
        <div className="page-explainer-head">
          <Reveal variant="up">
            {content.eyebrow && <div className="section-label">{content.eyebrow}</div>}
            <h2 className="h2">{content.title}</h2>
          </Reveal>
          {content.lead && (
            <Reveal variant="up" delay={2}>
              <p className="page-explainer-lead">{renderText(content.lead)}</p>
            </Reveal>
          )}
        </div>

        {content.answer && (
          <Reveal variant="up" delay={3}>
            <div className="page-explainer-answer">
              {content.answerLabel && <span>{content.answerLabel}</span>}
              <p>{renderText(content.answer)}</p>
            </div>
          </Reveal>
        )}

        <div className="page-explainer-grid">
          {blocks.map((block, index) => (
            <Reveal key={`${block.title}-${index}`} variant="up" delay={(index % 3) + 1}>
              <article className="page-explainer-card">
                {block.kicker && <span className="page-explainer-kicker">{block.kicker}</span>}
                <h3>{block.title}</h3>
                <p>{renderText(block.body)}</p>
                <dl>
                  {block.evidence && (
                    <>
                      <dt>{content.evidenceLabel}</dt>
                      <dd>{renderText(block.evidence)}</dd>
                    </>
                  )}
                  {block.action && (
                    <>
                      <dt>{content.actionLabel}</dt>
                      <dd>{renderText(block.action)}</dd>
                    </>
                  )}
                  {block.limit && (
                    <>
                      <dt>{content.limitLabel}</dt>
                      <dd>{renderText(block.limit)}</dd>
                    </>
                  )}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
