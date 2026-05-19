// AI-краулери та robots.txt — локалізовано з docs/blog/uk/ai-crawlers-robots-txt.md (audited draft)
export default {
  slug: 'ai-crawlers-robots-txt',
  date: 'Травень 2026',
  readTime: '8 хв читання',
  eyebrow: 'Блог · Тренди AI-пошуку',
  title: 'AI-краулери та robots.txt: практичний огляд для власника сайту',
  subtitle: 'robots.txt впливає на поведінку конкретних краулерів, а не працює як єдиний рубильник. Google-Extended керує використанням контенту для навчання та grounding Gemini Apps і Vertex AI, але НЕ керує включенням у Google Search AI Overviews; для AI-функцій самого Google Search ключовими залишаються Googlebot і eligibility сторінки (індексація плюс можливість показу сніпета). Щоб коректно керувати видимістю, потрібно знати точні імена ботів і розуміти, де правила не діють.',
  sections: [
    { type: 'heading', text: 'Контекст / Проблема' },
    {
      type: 'list',
      items: [
        { title: 'Видимість проти навчання', desc: 'Ви хочете потрапити в AI-пошук, але не хочете безкоштовно віддавати контент у навчання чужих моделей.' },
        { title: 'Десятки user-agent’ів', desc: 'У логах десятки user-agent’ів, і незрозуміло, який блокувати, а який пропускати.' },
        { title: 'robots.txt не рубильник', desc: 'robots.txt здається універсальним рубильником, але для деяких user-initiated fetchers правила можуть застосовуватися інакше залежно від політики платформи.' },
      ],
    },
    { type: 'heading', text: 'Ключова відмінність: навчання, пошук і запит користувача' },
    {
      type: 'paragraph',
      text: 'Теза: у великих AI-компаній краулери розділені за призначенням, і блокувати їх «гуртом» — помилка. Аргумент: бот для навчання моделі й бот для індексації в AI-пошуку — це різні user-agent’и з різною політикою. Доказ: OpenAI явно рекомендує дозволяти OAI-SearchBot для видимості в пошуку ChatGPT, але забороняти GPTBot, якщо ви не хочете потрапляти в навчальні дані [Джерело 70].',
    },
    {
      type: 'paragraph',
      text: 'Теза: запити, ініційовані користувачем, — окрема категорія. Аргумент: коли людина просить асистента відкрити сторінку, це не масовий краул, а дія користувача. Доказ: OpenAI зазначає, що для ChatGPT-User «правила robots.txt можуть не застосовуватися», а Perplexity прямо пише, що Perplexity-User «як правило ігнорує robots.txt», оскільки «фетч запросив користувач» [Джерело 74].',
    },
    { type: 'heading', text: 'Таблиця user-agent’ів основних AI-краулерів' },
    {
      type: 'list',
      items: [
        { title: 'GPTBot', desc: 'Оператор: OpenAI. Ідентифікатор: +https://openai.com/gptbot. Призначення: збір контенту для навчання foundation-моделей. Підкоряється robots.txt: Так — Disallow, щоб виключити з навчання.' },
        { title: 'OAI-SearchBot', desc: 'Оператор: OpenAI. Ідентифікатор: +https://openai.com/searchbot. Призначення: індексація для пошуку всередині ChatGPT. Підкоряється robots.txt: Так — Allow для видимості в пошуку.' },
        { title: 'ChatGPT-User', desc: 'Оператор: OpenAI. Ідентифікатор: +https://openai.com/bot. Призначення: перехід на сторінку за запитом користувача. Підкоряється robots.txt: «Може не застосовуватися» (ініційований користувачем).' },
        { title: 'OAI-AdsBot', desc: 'Оператор: OpenAI. Ідентифікатор: +https://openai.com/adsbot. Призначення: перевірка безпеки рекламних лендингів. Підкоряється robots.txt: застосовується до сторінок поданих оголошень.' },
        { title: 'PerplexityBot', desc: 'Оператор: Perplexity. Ідентифікатор: +https://perplexity.ai/perplexitybot. Призначення: індексація та посилання в пошуку Perplexity (не для навчання моделей). Підкоряється robots.txt: Так — рекомендується Allow.' },
        { title: 'Perplexity-User', desc: 'Оператор: Perplexity. Ідентифікатор: +https://perplexity.ai/perplexity-user. Призначення: відвідування сторінки за питанням користувача. Підкоряється robots.txt: «Як правило ігнорує» (ініційований користувачем).' },
        { title: 'ClaudeBot', desc: 'Оператор: Anthropic. Ідентифікатор: claude.com/crawling/bots.json. Призначення: збір веб-контенту для навчання та розробки моделей. Підкоряється robots.txt: Так — дотримується «do not crawl» у robots.txt.' },
        { title: 'Claude-User', desc: 'Оператор: Anthropic. Ідентифікатор: claude.com/crawling/bots.json. Призначення: отримання сайтів за прямим запитом користувачів Claude. Підкоряється robots.txt: дія користувача.' },
        { title: 'Claude-SearchBot', desc: 'Оператор: Anthropic. Ідентифікатор: claude.com/crawling/bots.json. Призначення: індексація для якості результатів пошуку. Підкоряється robots.txt: Так.' },
        { title: 'Googlebot', desc: 'Оператор: Google. Ідентифікатор: загальний пошуковий краулер. Призначення: Пошук, Images, Video, News, Discover (вкл. AI Overviews/AI Mode). Підкоряється robots.txt: Так.' },
        { title: 'Google-Extended', desc: 'Оператор: Google. Ідентифікатор: керує лише навчанням. Призначення: навчання майбутніх Gemini і grounding у Gemini Apps / Vertex AI. Підкоряється robots.txt: Так — не впливає на ранжування й AI Overviews.' },
        { title: 'GoogleOther', desc: 'Оператор: Google. Ідентифікатор: generic-краулер. Призначення: разові дослідницькі краули. Підкоряється robots.txt: Так — не впливає на конкретний продукт.' },
        { title: 'CCBot', desc: 'Оператор: Common Crawl. Ідентифікатор: CCBot/2.0 (https://commoncrawl.org/faq/). Призначення: відкритий веб-датасет (використовується в т.ч. для досліджень). Підкоряється robots.txt: Так — Disallow для блокування.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Джерела user-agent’ів: OpenAI [Джерело 70], Perplexity [Джерело 74], Anthropic [Джерело 75], Google [Джерело 76], Common Crawl [Джерело 77].',
    },
    { type: 'heading', text: 'Готові директиви robots.txt' },
    {
      type: 'paragraph',
      text: 'Нижче — приклад політики, не універсальна рекомендація: підбирайте директиви під свої цілі та юрисдикцію.',
    },
    {
      type: 'paragraph',
      text: 'Приклад політики «заблокувати навчання, але залишитися в AI-пошуку» (директиви перелічені інлайн): «User-agent: GPTBot · Disallow: /» · «User-agent: Google-Extended · Disallow: /» · «User-agent: CCBot · Disallow: /» · «User-agent: OAI-SearchBot · Allow: /» · «User-agent: PerplexityBot · Allow: /».',
    },
    {
      type: 'paragraph',
      text: 'Приклад політики «обмежити навантаження ClaudeBot замість повного блокування» (за документацією Anthropic): «User-agent: ClaudeBot · Crawl-delay: 1».',
    },
    {
      type: 'paragraph',
      text: 'Кожна директива — це компроміс, а не безкоштовне покращення.',
    },
    {
      type: 'list',
      items: [
        { title: 'Disallow для GPTBot / CCBot', desc: 'Що дає: training opt-out для OpenAI і обмеження майбутнього включення у відкритий веб-датасет Common Crawl; нові краули не мають збирати контент для відповідного призначення. Чим платите: це не означає автоматичного видалення вже зібраних копій або старих архівів; знижуються шанси бути процитованим у ChatGPT і продуктах на базі Common Crawl поза Google Search.' },
        { title: 'Disallow для Google-Extended', desc: 'Що дає: opt-out з навчання майбутніх Gemini і grounding у Gemini Apps / Vertex AI. Чим платите: не впливає на Google Search AI Overviews і ранжування — тобто не вирішує задачу «прибрати сайт з AI-відповідей Google».' },
        { title: 'Allow для OAI-SearchBot / PerplexityBot', desc: 'Що дає: видимість і цитування в пошуку ChatGPT і Perplexity. Чим платите: ці платформи продовжують індексувати контент; контроль над тим, як він переформульовується у відповіді, залишається обмеженим.' },
      ],
    },
    { type: 'heading', text: 'Важлива деталь про Google' },
    {
      type: 'paragraph',
      text: 'Теза: Google-Extended — це не вимикач AI Overviews. Аргумент: Google явно заявляє, що «Google-Extended не впливає на включення сайту в Google Пошук і не використовується як сигнал ранжування». Доказ: блокування Google-Extended прибирає контент лише з навчання Gemini і grounding у Vertex AI, але AI Overviews будуються на основному індексі Googlebot [Джерело 76]. Це позиція самої платформи Google, а не незалежна оцінка.',
    },
    { type: 'heading', text: 'Межі robots.txt: чого файл не робить' },
    {
      type: 'paragraph',
      text: 'Теза: robots.txt — це запит, а не технічне блокування. Аргумент: дотримання залежить від добросовісності оператора, а user-initiated fetchers легально його обходять. Доказ: OpenAI і Perplexity прямо документують, що ChatGPT-User і Perplexity-User можуть не підкорятися robots.txt, тому що дія ініційована людиною [Джерело 70, 74].',
    },
    {
      type: 'paragraph',
      text: 'Теза: підробка user-agent існує, і блокування за рядком ненадійне. Аргумент: боти можуть маскуватися під легітимні. Доказ: Common Crawl попереджає про «краулери, які хибно ідентифікують себе як CCBot», і пропонує звіряти IP за index.commoncrawl.org/ccbot.json; Anthropic аналогічно рекомендує перевіряти автентичність за своїм списком IP, а не за IP-блокуванням [Джерело 77, 75].',
    },
    { type: 'heading', text: 'E-E-A-T: офіційні джерела' },
    {
      type: 'list',
      items: [
        { title: 'OpenAI', desc: 'Офіційна документація ботів — Імена та призначення GPTBot/OAI-SearchBot/ChatGPT-User [Джерело 70].' },
        { title: 'Perplexity', desc: 'Офіційний гайд по ботах — Політика robots.txt для PerplexityBot/Perplexity-User [Джерело 74].' },
        { title: 'Anthropic', desc: 'Довідкова стаття підтримки — ClaudeBot/Claude-User/Claude-SearchBot, Crawl-delay [Джерело 75].' },
        { title: 'Google', desc: 'Документація для розробників — Google-Extended не впливає на ранжування [Джерело 76].' },
        { title: 'Common Crawl', desc: 'Сторінка CCBot — User-agent CCBot, блокування, верифікація IP [Джерело 77].' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Усі наведені правила та формулювання — це офіційна позиція відповідних платформ; політики можуть змінюватися, перевіряйте першоджерела перед впровадженням.',
    },
    { type: 'heading', text: 'Часті питання' },
    {
      type: 'list',
      items: [
        { title: 'Як залишитися в AI-пошуку, але не потрапити в навчання моделей?', desc: 'Забороніть навчальні боти (GPTBot, Google-Extended, CCBot) і дозвольте пошукові (OAI-SearchBot, PerplexityBot). Це різні user-agent’и з різною політикою.' },
        { title: 'Блокування Google-Extended прибере мене з AI Overviews?', desc: 'Ні. Google заявляє, що Google-Extended не впливає на включення в Пошук і ранжування. AI Overviews будуються на індексі Googlebot, а не на Google-Extended.' },
        { title: 'Чому AI-асистент відкрив сторінку, закриту в robots.txt?', desc: 'Якщо перехід ініціював користувач (ChatGPT-User, Perplexity-User), robots.txt може не застосовуватися — це задокументована поведінка OpenAI і Perplexity.' },
        { title: 'Чи можна блокувати AI-ботів за IP-адресою?', desc: 'Ненадійно. Anthropic і Common Crawl попереджають про підробку user-agent і рекомендують звіряти запити з офіційними списками IP, а не блокувати діапазони вручну.' },
      ],
    },
    { type: 'heading', text: 'Джерела (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '70 · OpenAI, Current version', desc: 'OpenAI crawlers and user agents. https://developers.openai.com/api/docs/bots — офіційний документ платформи.' },
        { title: '74 · Perplexity Help Center, Current version', desc: 'How does Perplexity follow robots.txt? https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt — офіційний документ платформи.' },
        { title: '75 · Anthropic Support, Current version', desc: 'Does Anthropic crawl data from the web and how can site owners block the crawler? https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler — офіційний документ платформи.' },
        { title: '76 · Google Search Central, 2026', desc: 'Overview of Google crawlers and fetchers. https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers — офіційний документ платформи.' },
        { title: '77 · Common Crawl, Current version', desc: 'CCBot documentation. https://commoncrawl.org/ccbot — офіційний документ data infrastructure.' },
      ],
    },
    { type: 'heading', text: 'Як ми перевіряли матеріал' },
    {
      type: 'list',
      items: [
        { title: 'Автор', desc: 'Редакція Enigma.' },
        { title: 'Опубліковано', desc: '18 травня 2026.' },
        { title: 'Оновлено', desc: '19 травня 2026.' },
        { title: 'Джерела', desc: 'peer-reviewed, препринти та industry research — тип указано поряд із кожним твердженням.' },
        { title: 'Звірка', desc: 'ключові тези звірені з актуальною документацією Google Search Central (травень 2026).' },
        { title: 'Застереження', desc: 'препринти та галузеві звіти наведені з методологічними обмеженнями; перевіряйте висновки на своєму проєкті.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Повний перелік джерел і рівні надійності — у каталозі досліджень.',
    },
  ],
};
