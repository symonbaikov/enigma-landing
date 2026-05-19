// Structured data, FAQPage і міфи AI SEO — converted from docs/blog/uk/structured-data-ai-seo-myths.md (audited draft)
export default {
  slug: 'structured-data-ai-seo-myths',
  date: 'Травень 2026',
  readTime: '6 хв читання',
  eyebrow: 'Блог · Тренди AI-пошуку',
  title: 'Structured data, FAQPage і міфи AI SEO',
  subtitle: 'Structured data корисна для rich results у класичній видачі, але не є «квитком в AI-відповіді»; розбираємо, де розмітка працює, а де починається міф про «особливий AI-маркап».',
  sections: [
    { type: 'heading', text: 'Контекст / Проблема' },
    {
      type: 'list',
      items: [
        { title: 'Нав’язана AI-розмітка', desc: 'Вам продають «AI-розмітку» або «семантичний чанкінг під LLM» як обов’язкову умову потрапляння в AI Overviews.' },
        { title: 'Незрозумілість щодо FAQPage', desc: 'Незрозуміло, чи потрібна FAQPage-розмітка і чи дає вона гарантію rich-сніпета.' },
        { title: 'Розмітка «про запас»', desc: 'Є спокуса додати structured data «про запас», зокрема про невидимий користувачеві контент.' },
      ],
    },
    { type: 'heading', text: 'Що structured data реально робить' },
    {
      type: 'paragraph',
      text: 'Structured data — це «стандартизований формат для надання інформації про сторінку та класифікації її контенту», який допомагає Google явно зрозуміти зміст сторінки [Джерело 68]. Її прикладна мета — rich results, розширені елементи видачі, які підвищують залученість.',
    },
    {
      type: 'paragraph',
      text: 'Ефект на CTR вимірний, але це про класичну видачу, а не про AI. У кейсах Google: Rotten Tomatoes зафіксували «на 25% вищий CTR для сторінок зі structured data», а Nestlé — «на 82% вищий CTR» у сторінок із rich results проти звичайних [Джерело 68]. Важливе застереження: це окремі кейси Google, а не прогноз приросту CTR для кожної сторінки. Це аргумент за розмітку як таку — але не доказ впливу на генеративні відповіді.',
    },
    {
      type: 'finding',
      stat: '+82%',
      statLabel: 'CTR у Nestlé на rich results',
      label: 'Окремий кейс Google, не прогноз для кожної сторінки',
      text: 'У кейсах Google Rotten Tomatoes зафіксували +25% CTR для сторінок зі structured data, а Nestlé — +82% CTR у сторінок із rich results проти звичайних. Це окремі кейси Google, а не прогноз приросту CTR для кожної сторінки [Джерело 68].',
    },
    {
      type: 'paragraph',
      text: 'JSON-LD — рекомендований формат: Google підтримує JSON-LD, Microdata і RDFa, але відзначає JSON-LD як «(Recommended)» і «найлегше рішення для власників сайтів».',
    },
    { type: 'heading', text: 'Міф №1: «Потрібна спеціальна AI-розмітка»' },
    {
      type: 'paragraph',
      text: 'Теза міфу: для AI Overviews є особлива schema. Аргумент проти — пряма позиція Google: «Немає спеціальної schema.org structured data, яку потрібно додати» і «Вам не потрібно створювати нові machine-readable файли, AI-текстові файли або розмітку, щоб з’явитися в цих функціях» [Джерело 65]. Посібник з AI-оптимізації повторює: «Structured data не потрібна для генеративного AI-пошуку, і немає спеціальної schema.org-розмітки, яку потрібно додати» [Джерело 85].',
    },
    { type: 'heading', text: 'Міф №2: «Контент треба дробити на шматки під AI»' },
    {
      type: 'paragraph',
      text: 'Google прямо спростовує: «Немає вимоги дробити ваш контент на крихітні шматки, щоб AI краще його розумів» і «Системи Google здатні розуміти нюанси багатьох тем на сторінці» [Джерело 85]. Штучний «чанкінг під LLM» як обов’язкова техніка — це міф.',
    },
    { type: 'heading', text: 'Міф №3: «Можна розмічати все підряд про запас»' },
    {
      type: 'paragraph',
      text: 'Це не просто марно, а порушення. Google забороняє фабрикацію: «Не створюйте порожні сторінки лише заради structured data і не додавайте structured data про інформацію, не видиму користувачеві» [Джерело 68]. Розмітка про невидимий контент — порушення правил structured data і ризик втрати eligibility для rich results або manual action, а не оптимізація.',
    },
    { type: 'heading', text: 'FAQPage: де правда' },
    {
      type: 'paragraph',
      text: 'FAQPage — це валідна schema, але не гарантія. Google підкреслює, що structured data «не гарантує появу rich result»; важливіше «менше, але повні й точні рекомендовані властивості», ніж «кожна можлива властивість із менш повними, погано сформованими або неточними даними». Плюс правило видимості з Міфу №3: FAQ-розмітка має відповідати реально видимим на сторінці запитанням і відповідям.',
    },
    { type: 'heading', text: 'FAQPage: важливе застереження на 2026 рік' },
    {
      type: 'paragraph',
      text: 'З 7 травня 2026 FAQ rich results більше не показуються в Google Search. Розмітка FAQPage при цьому залишається валідною schema.org-розміткою і може використовуватися для не-Google споживачів (інших парсерів і систем), але як інструмент Google rich-result вона застаріла. Включати FAQPage варто лише якщо на сторінці є видимий FAQ, який точно збігається з розміткою [Джерело 68].',
    },
    { type: 'heading', text: 'E-E-A-T: що відділяє користь від міфу' },
    {
      type: 'list',
      items: [
        { title: 'Особлива AI-розмітка обов’язкова для AIO', desc: 'Міф — Google: AI features; AI optimization guide' },
        { title: 'Контент потрібно дробити на шматки під AI', desc: 'Міф — Google AI optimization guide' },
        { title: 'Можна розмічати невидимий контент «про запас»', desc: 'Міф (порушення) — Google: Intro to structured data' },
        { title: 'Structured data може підвищувати CTR у класичній видачі', desc: 'Факт у кейсах Google, не універсальна гарантія — Кейси Rotten Tomatoes (+25%), Nestlé (+82%)' },
        { title: 'FAQPage гарантує rich-сніпет', desc: 'Міф — Google: structured data не гарантує rich result' },
        { title: 'JSON-LD — рекомендований Google формат', desc: 'Факт — Google: JSON-LD позначено як Recommended' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Головна напруженість: structured data об’єктивно корисна (вимірне зростання CTR на rich results), але її цінність лежить у класичній видачі та валідному машинному розумінні сторінки — а не в міфічному «AI-каналі». Ті самі документи Google, що хвалять розмітку, прямо заперечують її обов’язковість для генеративних функцій.',
    },
    { type: 'heading', text: 'Часті питання' },
    {
      type: 'list',
      items: [
        { title: 'Чи потрібна спеціальна schema-розмітка, щоб потрапити в AI Overviews?', desc: 'Ні. Google прямо заявляє, що немає спеціальної schema.org-розмітки і не потрібні AI-файли; для eligibility достатньо звичайної індексованості, права на сніпет і якості контенту; це не гарантує появу в AI Overviews.' },
        { title: 'Чи гарантує FAQPage-розмітка розширений сніпет?', desc: 'Ні. Google прямо вказує, що structured data не гарантує rich result; важливіші повнота й точність властивостей, а також відповідність видимому контенту сторінки.' },
        { title: 'Чи потрібно дробити статті на маленькі блоки заради AI?', desc: 'Ні. Google заявляє, що немає вимоги дробити контент на крихітні шматки — його системи розуміють багато тем на одній сторінці.' },
        { title: 'Чи можна додати structured data про прихований контент?', desc: 'Ні, це порушення. Google забороняє розмітку інформації, не видимої користувачеві, і порожні сторінки заради structured data.' },
      ],
    },
    { type: 'heading', text: 'Як ми перевіряли матеріал' },
    {
      type: 'list',
      items: [
        { title: 'Автор', desc: 'Редакція Enigma' },
        { title: 'Опубліковано', desc: '18 травня 2026' },
        { title: 'Оновлено', desc: '19 травня 2026' },
        { title: 'Джерела', desc: 'peer-reviewed, препринти та industry research — тип указано поряд із кожним твердженням' },
        { title: 'Звірка', desc: 'ключові тези звірено з актуальною документацією Google Search Central (травень 2026)' },
        { title: 'Застереження', desc: 'препринти та галузеві звіти наведено з методологічними обмеженнями; перевіряйте висновки на своєму проєкті' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Повний перелік джерел і рівні надійності — у каталозі досліджень.',
    },
    { type: 'heading', text: 'Джерела (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '65 · Google Search Central, 2026', desc: 'AI features and your website. https://developers.google.com/search/docs/appearance/ai-features — офіц. документ.' },
        { title: '68 · Google Search Central, тек. версія', desc: 'Introduction to structured data markup in Google Search. https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data — офіц. документ.' },
        { title: '85 · Google Search Central, 2026', desc: 'Google\'s Guide to Optimizing for Generative AI Features on Google Search. https://developers.google.com/search/docs/fundamentals/ai-optimization-guide — офіц. документ.' },
      ],
    },
  ],
};
