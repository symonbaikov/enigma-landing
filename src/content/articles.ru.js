/* Russian Research Lab pages.
   Uses audited Russian blog posts as canonical source where topics overlap. */

import aiCrawlersRobotsTxt from './blog/ai-crawlers-robots-txt.js';
import structuredDataAiSeoMyths from './blog/structured-data-ai-seo-myths.js';
import howAnswerEnginesWork from './blog/how-answer-engines-work.js';
import zeroClickBusinessRisk from './blog/zero-click-business-risk.js';
import googleAiOverviewsGuide from './blog/google-ai-overviews-guide.js';
import aiVisibilityInstability from './blog/ai-visibility-instability.js';

function asArticle(post, overrides) {
  return {
    ...post,
    date: 'Май 2026',
    ...overrides,
  };
}

export const articlesRu = [
  asArticle(aiCrawlersRobotsTxt, {
    slug: 'ai-bots-robots-txt',
    eyebrow: 'Research Lab · Технический гайд',
    title: 'Доступ AI-ботов: robots.txt для GPTBot, ClaudeBot, PerplexityBot, CCBot',
    subtitle: 'robots.txt решает, какие агенты могут читать ваш контент. Это дешёвая проверка GEO-аудита и частая точка незаметной потери видимости.',
  }),
  asArticle(structuredDataAiSeoMyths, {
    slug: 'structured-data-for-aeo',
    eyebrow: 'Research Lab · Технический гайд',
    title: 'Structured data для AEO: что разметка даёт, а что нет',
    subtitle: 'Разметка делает сущности явными и помогает Search-eligibility, но не является прямым билетом в AI-ответы.',
  }),
  {
    slug: 'passage-ready-content',
    date: 'Май 2026',
    readTime: '6 мин чтения',
    eyebrow: 'Research Lab · Технический гайд',
    title: 'Как писать passage-ready контент: практический чек-лист',
    subtitle: 'Passage-ready блок помогает retrieval-системе извлечь законченный ответ: тезис, контекст, доказательство и границы применения находятся рядом.',
    sections: [
      {
        type: 'lead',
        text: 'Passage-ready контент - это структурирование смысла, а не попытка обмануть алгоритм. Блок должен быть понятен отдельно от страницы: если его извлекут без соседних абзацев, он всё равно должен отвечать на вопрос пользователя.',
      },
      { type: 'heading', text: 'Почему блок, а не длинная проза' },
      {
        type: 'paragraph',
        text: 'ColBERT показывает, что retrieval может работать на уровне коротких пассажей [Источник 27]. Поэтому длинная подводка ухудшает извлекаемость: ответ есть, но он находится слишком далеко от формулировки вопроса.',
      },
      { type: 'heading', text: 'Чек-лист одного блока' },
      {
        type: 'list',
        items: [
          { title: 'Тезис в первом предложении', desc: 'Сначала прямой ответ, затем пояснение. Это снижает риск lost-in-the-middle [Источник 35].' },
          { title: 'Один intent', desc: 'Не смешивайте определение, сравнение и инструкцию в одном фрагменте.' },
          { title: 'Доказательство рядом', desc: 'Источник, дата, число или проверяемый пример должны быть в том же блоке.' },
          { title: 'Ограничение', desc: 'Укажите, где вывод не работает или является эвристикой, чтобы не создавать ложную гарантию.' },
          { title: 'Видимый FAQ', desc: 'Вопрос-ответ должен быть видимым на странице; JSON-LD не заменяет текст для пользователя.' },
        ],
      },
      { type: 'heading', text: 'Что не стоит делать' },
      {
        type: 'paragraph',
        text: 'Не дробите страницу механически и не пишите скрытые блоки «для AI». Google указывает, что специальный chunking не требуется для generative AI features; полезна ясность контента для аудитории [Источник 85].',
      },
      { type: 'heading', text: 'Частые вопросы' },
      {
        type: 'list',
        items: [
          { title: 'Что такое passage-ready блок?', desc: 'Это самодостаточный фрагмент: один вопрос, один ответ, доказательство и ограничение в одном видимом блоке.' },
          { title: 'Гарантирует ли такая структура цитирование?', desc: 'Нет. Она повышает пригодность к извлечению, но inclusion зависит от retrieval, конкурентов, источников и конкретной платформы.' },
          { title: 'Нужно ли писать отдельный текст для AI?', desc: 'Нет. Текст должен быть полезен людям; машинная извлекаемость достигается ясной структурой и источниками, а не скрытым дублем.' },
        ],
      },
      { type: 'heading', text: 'Источники (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '27 · Khattab and Zaharia, 2020', desc: 'ColBERT: passage-level retrieval. https://arxiv.org/abs/2004.12832' },
          { title: '35 · Liu et al., 2024', desc: 'Lost in the Middle. https://aclanthology.org/2024.tacl-1.9/' },
          { title: '85 · Google Search Central, 2026', desc: 'Google guide to optimizing for generative AI features. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' },
        ],
      },
    ],
  },
  {
    slug: 'prompt-query-clusters',
    date: 'Май 2026',
    readTime: '6 мин чтения',
    eyebrow: 'Research Lab · Методология',
    title: 'От ключевых слов к prompt/query clusters',
    subtitle: 'AI-видимость нельзя оценивать одним ключом. Нужен набор вопросов вокруг intent: бренд, категория, сравнение, покупка, проблема и авторитет источников.',
    sections: [
      {
        type: 'lead',
        text: 'Один ключ не описывает весь спрос. Пользователь спрашивает разными словами, а answer engine может выбрать разные источники под каждую формулировку. Поэтому GEO-аудит начинается с prompt/query cluster, а не с одиночной фразы.',
      },
      { type: 'heading', text: 'Почему кластер сильнее ключа' },
      {
        type: 'paragraph',
        text: 'Natural Questions построен на реальных вопросах пользователей [Источник 30], а BEIR показывает, что retrieval-качество зависит от типа задачи и домена [Источник 28]. Практический вывод: тестовый набор должен покрывать несколько intent-типов, иначе замер будет случайным.',
      },
      {
        type: 'list',
        items: [
          { title: 'Brand visibility', desc: 'Видит ли модель бренд по прямому вопросу.' },
          { title: 'Category discovery', desc: 'Появляется ли бренд в списке решений категории.' },
          { title: 'Competitor comparison', desc: 'Как бренд описывается рядом с альтернативами.' },
          { title: 'Buying intent', desc: 'Рекомендуют ли бренд при выборе поставщика или продукта.' },
          { title: 'Problem / use case', desc: 'Появляется ли бренд до того, как пользователь назвал категорию.' },
          { title: 'Source authority', desc: 'Какие внешние источники подтверждают или вытесняют бренд.' },
        ],
      },
      { type: 'heading', text: 'Как превратить кластер в работу' },
      {
        type: 'paragraph',
        text: 'Каждый prompt должен возвращать не только mention, но и цитаты, конкурентов, позицию бренда, тональность и фрагмент ответа. Только так cluster становится backlog: какие страницы написать, какие факты подтвердить, какие внешние источники усилить.',
      },
      { type: 'heading', text: 'Частые вопросы' },
      {
        type: 'list',
        items: [
          { title: 'Сколько промптов нужно для первого аудита?', desc: 'Для лёгкого baseline достаточно 6 intent-кластеров по нескольким моделям. Один промпт не репрезентирует видимость.' },
          { title: 'Нужно ли копировать ключевые слова из SEO?', desc: 'SEO-ключи полезны как вход, но промпты должны звучать как естественные вопросы и задачи пользователя.' },
          { title: 'Что делать с результатами?', desc: 'Группировать gaps по intent: где нужна brand facts page, comparison page, FAQ, методология или внешний authority source.' },
        ],
      },
      { type: 'heading', text: 'Источники (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '28 · Thakur et al., 2021', desc: 'BEIR benchmark for retrieval. https://arxiv.org/abs/2104.08663' },
          { title: '30 · Kwiatkowski et al., 2019', desc: 'Natural Questions: real user questions. https://ai.google.com/research/NaturalQuestions' },
          { title: '64 · Craswell et al., 2020', desc: 'ORCAS: query-document click pairs for search research. https://arxiv.org/abs/2006.05324' },
        ],
      },
    ],
  },
  asArticle(zeroClickBusinessRisk, {
    slug: 'zero-click',
    eyebrow: 'Research Lab · Рынок',
    title: 'Zero-click: почему ценность поиска смещается в сам ответ',
    subtitle: 'Когда часть поиска завершается без перехода на сайт, присутствие бренда внутри AI-ответа становится отдельной метрикой, а не побочным эффектом SEO.',
  }),
  asArticle(googleAiOverviewsGuide, {
    slug: 'ai-overviews-vs-serp',
    eyebrow: 'Research Lab · AI Overviews',
    title: 'AI Overviews против SERP top-10: насколько AI цитирует то, что уже в топе',
    subtitle: 'AI Overviews опираются на Search-системы Google, но независимые замеры показывают: набор цитируемых источников не всегда совпадает с классической первой страницей.',
  }),
  asArticle(aiVisibilityInstability, {
    slug: 'answer-instability',
    eyebrow: 'Research Lab · Методология',
    title: 'Нестабильность AI-ответов: почему один замер вводит в заблуждение',
    subtitle: 'Ответы и источники меняются между запусками. GEO-мониторинг должен измерять распределение, а не делать вывод по одному промпту.',
  }),
  {
    slug: 'citation-bias',
    date: 'Май 2026',
    readTime: '6 мин чтения',
    eyebrow: 'Research Lab · Цитируемость',
    title: 'Citation bias: почему AI-цитата не равна объективной видимости',
    subtitle: 'AI-система может чаще выбирать одни типы источников, игнорировать brand-owned контент или давать корректный ответ с неидеальной атрибуцией.',
    sections: [
      {
        type: 'lead',
        text: 'Citation bias - это смещение в том, какие источники answer engine выбирает и как связывает их с утверждениями. Для бренда опасно считать любую цитату победой: источник может быть выбран, но не повлиять на смысл ответа.',
      },
      { type: 'heading', text: 'Selection и absorption - разные сигналы' },
      {
        type: 'paragraph',
        text: 'Работы по citation selection / absorption разделяют факт выбора ссылки и реальное влияние источника на ответ [Источник 07]. Поэтому GEO-дашборд должен считать mention, citation, absorption и faithfulness отдельно.',
      },
      { type: 'heading', text: 'Correctness не равна faithfulness' },
      {
        type: 'paragraph',
        text: 'Wallat et al. показывают, что правильность ответа и верность атрибуции - разные свойства [Источник 39]. Ответ может быть по сути верным, но ссылка не подтверждает конкретное утверждение или подтверждает только часть контекста.',
      },
      { type: 'heading', text: 'Что измерять в аудите' },
      {
        type: 'list',
        items: [
          { title: 'Owned vs third-party split', desc: 'Какая доля цитат идёт на ваши страницы, а какая - на независимые источники.' },
          { title: 'Source type', desc: 'Медиа, каталоги, конкуренты, документация, Wikipedia, community-форумы.' },
          { title: 'Citation context', desc: 'Какое утверждение поддерживает ссылка и совпадает ли оно с содержанием страницы.' },
          { title: 'Competitor replacement', desc: 'Где ответ выбирает конкурента как более подтверждённый источник.' },
        ],
      },
      { type: 'heading', text: 'Частые вопросы' },
      {
        type: 'list',
        items: [
          { title: 'Почему AI цитирует сторонний обзор, а не наш сайт?', desc: 'Во многих сценариях независимый источник выглядит более авторитетным или лучше отвечает на сравнительный intent. Это проблема внешнего authority layer, а не только текста сайта.' },
          { title: 'Что делать с citation bias?', desc: 'Усилить owned source layer проверяемыми фактами и одновременно развивать сторонние источники: обзоры, каталоги, методологии, партнёрские материалы.' },
          { title: 'Можно ли считать цитату KPI?', desc: 'Да, но не одну. Нужны уровни: mention, citation, absorption, faithfulness и source quality.' },
        ],
      },
      { type: 'heading', text: 'Источники (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '07 · Zhang, He, Yao, 2026', desc: 'Citation selection and absorption framework. https://arxiv.org/abs/2604.25707' },
          { title: '39 · Wallat et al., 2024/25', desc: 'Correctness vs faithfulness in attribution. https://dl.acm.org/doi/10.1145/3731120.3744592' },
          { title: '41 · Xu et al., 2025', desc: 'Citation evaluation principles. https://aclanthology.org/2025.acl-long.1574/' },
        ],
      },
    ],
  },
];
