import { useTranslation } from 'react-i18next';
import { Reveal } from '../scroll-anims.jsx';
import { ArrowRight } from './icons.jsx';
import { AILogoAvatar } from './BrandLogos.jsx';


const ChatBubble = ({ text, cited, citedLabel, url }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
    <div style={{ marginTop: 2 }}>
      <AILogoAvatar name="ChatGPT" size={28}/>
    </div>
    <div style={{ flex: 1, background: 'white', border: '1px solid var(--line)', borderRadius: '4px 16px 16px 16px', padding: '14px 16px', fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }}>
      {text}
      {cited && (
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, background: 'rgba(107,63,255,0.1)', color: '#6B3FFF', padding: '3px 8px', borderRadius: 99, fontWeight: 600 }}>{citedLabel}</span>
          <span style={{ fontSize: 12, color: '#6B3FFF', fontFamily: 'monospace' }}>{url}</span>
        </div>
      )}
    </div>
  </div>
);

const CitationDemo = () => {
  const { t } = useTranslation();
  return (
    <div className="axp-citation-demo" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900, margin: '0 auto' }}>

      {/* Without AXP */}
      <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px -8px rgba(31,26,20,0.1)' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <AILogoAvatar name="ChatGPT" size={20}/>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>ChatGPT</span>
          </div>
          <span style={{ fontSize: 11, background: 'rgba(239,68,68,0.1)', color: '#DC2626', padding: '3px 10px', borderRadius: 99, fontWeight: 600 }}>{t('axp.withoutLabel')}</span>
        </div>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ background: '#F4F4F4', borderRadius: '16px 4px 16px 16px', padding: '10px 14px', fontSize: 13, color: 'var(--ink)', maxWidth: '85%', lineHeight: 1.5 }}>
              {t('axp.query')}
            </div>
          </div>
          <ChatBubble text={
            <>
              {t('axp.withoutText1')} <strong>AgentCore</strong>, <strong>NeuralOps</strong> {t('axp.withoutAnd')} <strong>CloudMind AI</strong> {t('axp.withoutText2')}
              <br/><br/>
              <span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>{t('axp.withoutText3')}</span>
            </>
          }/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', display: 'inline-block' }}/>
            <span style={{ fontSize: 12, color: '#DC2626', fontWeight: 500 }}>{t('axp.brandNotMentioned')}</span>
          </div>
        </div>
      </div>

      {/* With AXP */}
      <div style={{ background: 'white', border: '1.5px solid rgba(107,63,255,0.3)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px -8px rgba(107,63,255,0.2)' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <AILogoAvatar name="ChatGPT" size={20}/>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>ChatGPT</span>
          </div>
          <span style={{ fontSize: 11, background: 'rgba(107,63,255,0.1)', color: '#6B3FFF', padding: '3px 10px', borderRadius: 99, fontWeight: 600 }}>{t('axp.withLabel')}</span>
        </div>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ background: '#F4F4F4', borderRadius: '16px 4px 16px 16px', padding: '10px 14px', fontSize: 13, color: 'var(--ink)', maxWidth: '85%', lineHeight: 1.5 }}>
              {t('axp.query')}
            </div>
          </div>
          <ChatBubble cited citedLabel={t('axp.cited')} url="voltaic.systems" text={
            <>
              <strong>Voltaic Systems</strong> {t('axp.withText1')}
              <br/><br/>
              {t('axp.withText2')}
            </>
          }/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }}/>
            <span style={{ fontSize: 12, color: '#059669', fontWeight: 500 }}>{t('axp.brandCitedFirst')}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default function AXPSection() {
  const { t } = useTranslation();
  return (
    <section style={{background: 'var(--cream)', paddingBottom: 120}}>
      <div className="container-wide">
        <div className="split-section">
          <Reveal variant="right" className="col-l">
            <div className="col-eye">{t('axp.eyebrow')}</div>
            <h3 className="h2">
              {t('axp.h2Line1')}<br/>
              <span className="serif italic">{t('axp.h2Highlight')}</span>
            </h3>
          </Reveal>
          <Reveal variant="left" delay={2} className="col-r">
            <p>{t('axp.desc')}</p>
            <button className="btn btn-cobalt btn-lg">{t('axp.exploreBtn')} <ArrowRight/></button>
          </Reveal>
        </div>

        <Reveal variant="up-sm"><CitationDemo/></Reveal>

        <div className="feature-row">
          <Reveal variant="up" delay={1} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.45"/>
                <circle cx="14" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
                <line x1="14" y1="14" x2="21.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="14" cy="14" r="1.8" fill="currentColor"/>
                <circle cx="20.5" cy="9.5" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h4>{t('axp.feature1.title')}</h4>
            <p>{t('axp.feature1.desc')}</p>
          </Reveal>
          <Reveal variant="up" delay={2} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M11 4v5a2 2 0 0 1-2 2H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 4v5a2 2 0 0 0 2 2h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 24v-5a2 2 0 0 0-2-2H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 24v-5a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>{t('axp.feature2.title')}</h4>
            <p>{t('axp.feature2.desc')}</p>
          </Reveal>
          <Reveal variant="up" delay={3} className="feature-card">
            <div className="feature-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>{t('axp.feature3.title')}</h4>
            <p>{t('axp.feature3.desc')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
