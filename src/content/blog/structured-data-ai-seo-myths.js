// Structured data, FAQPage и мифы AI SEO — converted from docs/blog/structured-data-ai-seo-myths.md (audited draft)
export default {
  slug: 'structured-data-ai-seo-myths',
  date: 'Май 2026',
  readTime: '6 мин чтения',
  eyebrow: 'Блог · Тренды AI-поиска',
  title: 'Structured data, FAQPage и мифы AI SEO',
  subtitle: 'Structured data полезна для rich results в классической выдаче, но не является «билетом в AI-ответы»; разбираем, где разметка работает, а где начинается миф об «особом AI-маркапе».',
  sections: [
    { type: 'heading', text: 'Контекст / Проблема' },
    {
      type: 'list',
      items: [
        { title: 'Навязанная AI-разметка', desc: 'Вам продают «AI-разметку» или «семантический чанкинг под LLM» как обязательное условие попадания в AI Overviews.' },
        { title: 'Неясность по FAQPage', desc: 'Непонятно, нужна ли FAQPage-разметка и даёт ли она гарантию rich-сниппета.' },
        { title: 'Разметка «про запас»', desc: 'Есть соблазн добавить structured data «про запас», в том числе про невидимый пользователю контент.' },
      ],
    },
    { type: 'heading', text: 'Что structured data реально делает' },
    {
      type: 'paragraph',
      text: 'Structured data — это «стандартизированный формат для предоставления информации о странице и классификации её контента», помогающий Google явно понять смысл страницы [Источник 68]. Её прикладная цель — rich results, расширенные элементы выдачи, которые повышают вовлечённость.',
    },
    {
      type: 'paragraph',
      text: 'Эффект на CTR измерим, но это про классическую выдачу, а не про AI. В кейсах Google: Rotten Tomatoes зафиксировали «на 25% выше CTR для страниц с structured data», а Nestlé — «на 82% выше CTR» у страниц с rich results против обычных [Источник 68]. Важная оговорка: это отдельные кейсы Google, а не прогноз прироста CTR для каждой страницы. Это аргумент за разметку как таковую — но не доказательство влияния на генеративные ответы.',
    },
    {
      type: 'finding',
      stat: '+82%',
      statLabel: 'CTR у Nestlé на rich results',
      label: 'Отдельный кейс Google, не прогноз для каждой страницы',
      text: 'В кейсах Google Rotten Tomatoes зафиксировали +25% CTR для страниц с structured data, а Nestlé — +82% CTR у страниц с rich results против обычных. Это отдельные кейсы Google, а не прогноз прироста CTR для каждой страницы [Источник 68].',
    },
    {
      type: 'paragraph',
      text: 'JSON-LD — рекомендуемый формат: Google поддерживает JSON-LD, Microdata и RDFa, но отмечает JSON-LD как «(Recommended)» и «самое лёгкое решение для владельцев сайтов».',
    },
    { type: 'heading', text: 'Миф №1: «Нужна специальная AI-разметка»' },
    {
      type: 'paragraph',
      text: 'Тезис мифа: для AI Overviews есть особая schema. Аргумент против — прямая позиция Google: «Нет специальной schema.org structured data, которую нужно добавить» и «Вам не нужно создавать новые machine-readable файлы, AI-текстовые файлы или разметку, чтобы появиться в этих функциях» [Источник 65]. Руководство по AI-оптимизации повторяет: «Structured data не требуется для генеративного AI-поиска, и нет специальной schema.org-разметки, которую нужно добавить» [Источник 85].',
    },
    { type: 'heading', text: 'Миф №2: «Контент надо дробить на куски под AI»' },
    {
      type: 'paragraph',
      text: 'Google прямо опровергает: «Нет требования дробить ваш контент на крошечные куски, чтобы AI лучше его понимал» и «Системы Google способны понимать нюансы множества тем на странице» [Источник 85]. Искусственный «чанкинг под LLM» как обязательная техника — это миф.',
    },
    { type: 'heading', text: 'Миф №3: «Можно размечать всё подряд про запас»' },
    {
      type: 'paragraph',
      text: 'Это не просто бесполезно, а нарушение. Google запрещает фабрикацию: «Не создавайте пустые страницы только ради structured data и не добавляйте structured data об информации, не видимой пользователю» [Источник 68]. Разметка про невидимый контент — спам-нарушение, а не оптимизация.',
    },
    { type: 'heading', text: 'FAQPage: где правда' },
    {
      type: 'paragraph',
      text: 'FAQPage — это валидная schema, но не гарантия. Google подчёркивает, что structured data «не гарантирует появление rich result»; важнее «меньше, но полные и точные рекомендованные свойства», чем «каждое возможное свойство с менее полными, плохо сформированными или неточными данными». Плюс правило видимости из Мифа №3: FAQ-разметка должна соответствовать реально видимым на странице вопросам и ответам.',
    },
    { type: 'heading', text: 'FAQPage: важная оговорка на 2026 год' },
    {
      type: 'paragraph',
      text: 'С 7 мая 2026 FAQ rich results больше не показываются в Google Search. Разметка FAQPage при этом остаётся валидной schema.org-разметкой и может использоваться для не-Google потребителей (других парсеров и систем), но как инструмент Google rich-result она устарела. Включать FAQPage стоит только если на странице есть видимый FAQ, точно совпадающий с разметкой [Источник 68].',
    },
    { type: 'heading', text: 'E-E-A-T: что отделяет пользу от мифа' },
    {
      type: 'list',
      items: [
        { title: 'Особая AI-разметка обязательна для AIO', desc: 'Миф — Google: AI features; AI optimization guide' },
        { title: 'Контент нужно дробить на куски под AI', desc: 'Миф — Google AI optimization guide' },
        { title: 'Можно размечать невидимый контент «про запас»', desc: 'Миф (нарушение) — Google: Intro to structured data' },
        { title: 'Structured data повышает CTR в классической выдаче', desc: 'Факт — Кейсы Rotten Tomatoes (+25%), Nestlé (+82%)' },
        { title: 'FAQPage гарантирует rich-сниппет', desc: 'Миф — Google: structured data не гарантирует rich result' },
        { title: 'JSON-LD — предпочтительный формат', desc: 'Факт — Google: JSON-LD помечен как Recommended' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Главная напряжённость: structured data объективно полезна (измеримый рост CTR на rich results), но её ценность лежит в классической выдаче и валидном машинном понимании страницы — а не в мифическом «AI-канале». Те же документы Google, что хвалят разметку, прямо отрицают её обязательность для генеративных функций.',
    },
    { type: 'heading', text: 'Частые вопросы' },
    {
      type: 'list',
      items: [
        { title: 'Нужна ли специальная schema-разметка, чтобы попасть в AI Overviews?', desc: 'Нет. Google прямо заявляет, что нет специальной schema.org-разметки и не нужны AI-файлы; достаточно обычной индексируемости и качества контента.' },
        { title: 'Гарантирует ли FAQPage-разметка расширенный сниппет?', desc: 'Нет. Google прямо указывает, что structured data не гарантирует rich result; важнее полнота и точность свойств, а также соответствие видимому контенту страницы.' },
        { title: 'Нужно ли дробить статьи на маленькие блоки ради AI?', desc: 'Нет. Google заявляет, что нет требования дробить контент на крошечные куски — его системы понимают множество тем на одной странице.' },
        { title: 'Можно ли добавить structured data про скрытый контент?', desc: 'Нет, это нарушение. Google запрещает разметку информации, не видимой пользователю, и пустые страницы ради structured data.' },
      ],
    },
    { type: 'heading', text: 'Как мы проверяли материал' },
    {
      type: 'list',
      items: [
        { title: 'Автор', desc: 'Редакция Enigma' },
        { title: 'Опубликовано', desc: '18 мая 2026' },
        { title: 'Обновлено', desc: '18 мая 2026' },
        { title: 'Источники', desc: 'peer-reviewed, препринты и industry research — тип указан рядом с каждым утверждением' },
        { title: 'Сверка', desc: 'ключевые тезисы сверены с актуальной документацией Google Search Central (май 2026)' },
        { title: 'Оговорка', desc: 'препринты и отраслевые отчёты приведены с методологическими ограничениями; проверяйте выводы на своём проекте' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Полный перечень источников и уровни надёжности — в каталоге исследований.',
    },
    { type: 'heading', text: 'Источники (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '65 · Google Search Central, 2026', desc: 'AI features and your website. https://developers.google.com/search/docs/appearance/ai-features — офиц. документ.' },
        { title: '68 · Google Search Central, тек. версия', desc: 'Introduction to structured data markup in Google Search. https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data — офиц. документ.' },
        { title: '85 · Google Search Central, 2026', desc: 'Google\'s Guide to Optimizing for Generative AI Features on Google Search. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — офиц. документ.' },
      ],
    },
  ],
};
