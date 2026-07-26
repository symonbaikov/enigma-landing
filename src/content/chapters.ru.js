/* Russian GEO Playbook chapters.
   Reuses audited Russian blog materials where topics match, and keeps the
   chapter slugs stable for existing resource routes. */

import geoAeoVsSeo from './blog/geo-aeo-vs-seo.js';
import howAnswerEnginesWork from './blog/how-answer-engines-work.js';
import citationSelectionVsAbsorption from './blog/citation-selection-vs-absorption.js';
import aiVisibilityInstability from './blog/ai-visibility-instability.js';

function asChapter(post, overrides) {
  return {
    ...post,
    date: undefined,
    ...overrides,
  };
}

export const chaptersRu = [
  asChapter(geoAeoVsSeo, {
    slug: 'geo-aeo-vs-seo',
    num: '01',
    eyebrow: 'GEO Playbook · Раздел 01',
    readTime: '7 мин чтения',
    title: 'GEO и AEO против SEO: в чем разница',
    subtitle: 'AI-видимость добавляет к SEO новый слой: не только ранжирование URL, но и попадание фрагмента в сгенерированный ответ, цитату и итоговый вывод модели.',
  }),
  asChapter(howAnswerEnginesWork, {
    slug: 'how-answer-engines-work',
    num: '02',
    eyebrow: 'GEO Playbook · Раздел 02',
    readTime: '9 мин чтения',
    title: 'Как работают answer engines: RAG и retrieval',
    subtitle: 'Чтобы стать источником ответа AI, нужно понимать пайплайн «поиск → генерация». Этот раздел показывает, где именно решается ваша видимость.',
  }),
  {
    slug: 'passage-retrieval',
    num: '03',
    eyebrow: 'GEO Playbook · Раздел 03',
    readTime: '7 мин чтения',
    title: 'Passage retrieval: почему блоки страницы должны быть самодостаточными',
    subtitle: 'Во многих retrieval/RAG-сценариях система извлекает не всю страницу, а короткие пассажи. Поэтому каждый блок должен отвечать на один вопрос без скрытого контекста.',
    sections: [
      {
        type: 'lead',
        text: 'Passage-ready контент - это не «текст для роботов», а ясная структура для людей и машинных потребителей. Если ключевой тезис спрятан в середине длинного абзаца, retrieval-система может извлечь фрагмент без нужного контекста, а модель не использует его в ответе.',
      },
      { type: 'heading', text: 'Семантика важнее плотности ключей' },
      {
        type: 'paragraph',
        text: 'Dense Passage Retrieval показал, что плотные представления могут превосходить sparse retrieval в open-domain QA [Источник 26]. Практический вывод: абзац должен ясно раскрывать сущность, сценарий и ограничение, а не просто повторять ключевое слово.',
      },
      { type: 'heading', text: 'Извлекается фрагмент, а не вся страница' },
      {
        type: 'paragraph',
        text: 'ColBERT описывает эффективный поиск на уровне пассажей через contextualized late interaction [Источник 27]. Это не означает, что Google требует дробить страницу; это означает, что самостоятельный H2/H3-блок легче использовать в retrieval-сценариях и проще цитировать без потери смысла.',
      },
      { type: 'heading', text: 'Lost in the middle' },
      {
        type: 'paragraph',
        text: 'Liu et al. показали: модели лучше используют информацию в начале или конце длинного контекста и хуже - в середине [Источник 35]. Поэтому тезис должен стоять в первом предложении блока, а доказательство - рядом, в том же фрагменте.',
      },
      {
        type: 'list',
        items: [
          { title: 'Один блок - один ответ', desc: 'Не смешивайте определение, пример и исключение в длинную простыню: retrieval может забрать только часть.' },
          { title: 'Тезис в начале', desc: 'Снижает риск, что смысл потеряется в длинном контексте [Источник 35].' },
          { title: 'Доказательство рядом', desc: 'Факт, дата, источник или пример должны находиться в том же блоке, что и утверждение.' },
          { title: 'Границы применения', desc: 'Укажите, когда вывод работает, а когда это только эвристика, чтобы не создавать overclaim.' },
        ],
      },
      { type: 'heading', text: 'Активный retrieval во время ответа' },
      {
        type: 'paragraph',
        text: 'FLARE описывает класс active-retrieval архитектур, где модель может доизвлекать информацию во время генерации [Источник 47]. Это не правило для каждого продукта, но оно усиливает редакционный вывод: блок должен быть понятен и при первичном поиске, и при уточняющем запросе.',
      },
      { type: 'heading', text: 'Частые вопросы' },
      {
        type: 'list',
        items: [
          { title: 'Что такое passage retrieval?', desc: 'Это извлечение короткого релевантного фрагмента документа вместо обработки всей страницы целиком или до неё; разные продукты могут сочетать пассажи, сниппеты и full-page fetch [Источник 27].' },
          { title: 'Нужно ли искусственно дробить страницу?', desc: 'Нет. Google не требует chunking. Самодостаточные блоки нужны для ясности, цитируемости и машинного извлечения, а не для обхода алгоритмов.' },
          { title: 'Как сделать блок passage-ready?', desc: 'Начните с прямого тезиса, добавьте аргумент, доказательство и ограничение. Один блок должен отвечать на один конкретный intent.' },
          { title: 'Ключевые слова всё ещё важны?', desc: 'Да, но как часть семантики. Dense retrieval ценит смысловую близость и полноту ответа, а не механическую плотность ключей [Источник 26].' },
        ],
      },
      { type: 'heading', text: 'Источники (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '26 · Karpukhin et al., 2020, EMNLP', desc: 'Dense Passage Retrieval for Open-Domain Question Answering. https://aclanthology.org/2020.emnlp-main.550/' },
          { title: '27 · Khattab and Zaharia, 2020, SIGIR', desc: 'ColBERT: Efficient and Effective Passage Search. https://arxiv.org/abs/2004.12832' },
          { title: '35 · Liu et al., 2024, TACL', desc: 'Lost in the Middle: How Language Models Use Long Contexts. https://aclanthology.org/2024.tacl-1.9/' },
          { title: '47 · Jiang et al., 2023, EMNLP', desc: 'FLARE: Forward-Looking Active Retrieval Augmented Generation. https://aclanthology.org/2023.emnlp-main.495/' },
        ],
      },
    ],
  },
  asChapter(citationSelectionVsAbsorption, {
    slug: 'selection-vs-absorption',
    num: '04',
    eyebrow: 'GEO Playbook · Раздел 04',
    readTime: '7 мин чтения',
    title: 'Citation selection против absorption: почему одной ссылки мало',
    subtitle: 'Ссылка в AI-ответе ещё не доказывает, что источник повлиял на смысл ответа. Важно различать selection, absorption и faithfulness.',
  }),
  asChapter(aiVisibilityInstability, {
    slug: 'why-visibility-unstable',
    num: '05',
    eyebrow: 'GEO Playbook · Раздел 05',
    readTime: '6 мин чтения',
    title: 'Почему AI-видимость нестабильна и как её измерять правильно',
    subtitle: 'Один промпт - это наблюдение, а не метрика. AI-видимость нужно измерять повторяемыми прогонами по платформам, интентам и временным окнам.',
  }),
  {
    slug: 'technical-seo-foundation',
    num: '06',
    eyebrow: 'GEO Playbook · Раздел 06',
    readTime: '7 мин чтения',
    title: 'Техническое SEO как фундамент GEO',
    subtitle: 'GEO не отменяет crawling, indexing, snippets, structured data и доступность для ботов. Если страницу нельзя получить и понять, её сложнее процитировать.',
    sections: [
      {
        type: 'lead',
        text: 'Техническое SEO - базовый слой GEO. Retrieval не поможет странице, которую краулер не может получить, индекс не может показать со сниппетом, а система не может связать с понятной сущностью. Это предпосылка видимости, не гарантия попадания в AI-ответ.',
      },
      { type: 'heading', text: 'Базовый слой поиска остался прежним' },
      {
        type: 'paragraph',
        text: 'Crawling, indexing и ranking остаются первым уровнем видимости. Brin and Page описали эту архитектуру как основу веб-поиска [Источник 57], а Google SEO starter guide подтверждает: доступность, качество и структура - базовые условия [Источник 67]. GEO добавляет генерацию и цитирование поверх этого слоя.',
      },
      { type: 'heading', text: 'Официальная позиция Google по AI-функциям' },
      {
        type: 'paragraph',
        text: 'Google Search Central документирует, что для AI Overviews / AI Mode нет специальных требований сверх обычного Search eligibility: страница должна быть проиндексирована и иметь право показываться со сниппетом [Источник 65]. Отдельной schema.org-разметки «под AI» тоже нет.',
      },
      { type: 'heading', text: 'Доступ для краулеров и агентов' },
      {
        type: 'paragraph',
        text: 'robots.txt управляет доступом краулера к URL, но не удаляет страницу из Search. Заблокированный URL может появиться без описания, если на него ссылаются другие страницы; для полного исключения нужны noindex или password protection [Источник 76]. Для GEO-аудита важно проверять Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot и CCBot отдельно.',
      },
      { type: 'heading', text: 'Structured data помогает понять страницу, но не даёт прямой AI-буст' },
      {
        type: 'paragraph',
        text: 'Structured data даёт explicit clues и может дать eligibility для rich results [Источник 68]. Но Google прямо указывает: специальных structured data для generative AI features нет [Источник 65]. Поэтому разметка полезна как слой ясности, а не как обещание цитирования.',
      },
      {
        type: 'list',
        items: [
          { title: 'Crawlability', desc: 'Страница доступна нужным ботам и не закрыта ошибочно firewall/CDN.' },
          { title: 'Indexability', desc: 'URL может быть проиндексирован и показан со сниппетом.' },
          { title: 'Canonical и title/H1', desc: 'Системе ясно, какой URL и тема являются основными.' },
          { title: 'Structured data', desc: 'Сущности и свойства явно описаны, но без overclaim про прямой AI-буст.' },
          { title: 'Visible answer blocks', desc: 'FAQ и доказательные блоки видимы пользователю, а не существуют только в JSON-LD.' },
        ],
      },
      { type: 'heading', text: 'Частые вопросы' },
      {
        type: 'list',
        items: [
          { title: 'Заменяет ли GEO техническое SEO?', desc: 'Нет. GEO добавляет слой генерации и цитирования, но не отменяет crawlability, indexability, canonical, snippets и качество страницы [Источник 67].' },
          { title: 'Что проверить первым?', desc: 'Доступ ботов, robots.txt, firewall/CDN, noindex, canonical и возможность показа сниппета. Это самые дешёвые причины потери AI-видимости.' },
          { title: 'Structured data гарантирует попадание в AI Overviews?', desc: 'Нет. Structured data помогает Google понять страницу и получить rich-result eligibility, но специальной AI schema нет [Источник 65, 68].' },
          { title: 'Можно ли закрыть training, но открыть retrieval?', desc: 'Да, если политика ботов разделяет user agents. Это бизнес-решение о данных и видимости; его нужно фиксировать отдельно для каждого агента.' },
        ],
      },
      { type: 'heading', text: 'Источники (E-E-A-T)' },
      {
        type: 'list',
        items: [
          { title: '57 · Brin and Page, 1998', desc: 'The Anatomy of a Large-Scale Hypertextual Web Search Engine.' },
          { title: '65 · Google Search Central', desc: 'AI features and your website. https://developers.google.com/search/docs/appearance/ai-features' },
          { title: '67 · Google Search Central', desc: 'SEO Starter Guide. https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
          { title: '68 · Google Search Central', desc: 'Intro to structured data. https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
          { title: '76 · Google Search Central', desc: 'Google crawlers and fetchers. https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers' },
        ],
      },
    ],
  },
];
