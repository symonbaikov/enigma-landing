// AI-краулеры и robots.txt — converted from docs/blog/ai-crawlers-robots-txt.md (audited draft)
export default {
  slug: 'ai-crawlers-robots-txt',
  date: 'Май 2026',
  readTime: '8 мин чтения',
  eyebrow: 'Блог · Тренды AI-поиска',
  title: 'AI-краулеры и robots.txt: практический обзор для владельца сайта',
  subtitle: 'robots.txt влияет на поведение конкретных краулеров, а не работает как единый рубильник. Google-Extended управляет использованием контента для обучения и grounding Gemini Apps и Vertex AI, но НЕ управляет включением в Google Search AI Overviews; для AI-функций самого Google Search ключевыми остаются Googlebot и eligibility страницы (индексация плюс возможность показа сниппета). Чтобы корректно управлять видимостью, нужно знать точные имена ботов и понимать, где правила не действуют.',
  sections: [
    { type: 'heading', text: 'Контекст / Проблема' },
    {
      type: 'list',
      items: [
        { title: 'Видимость против обучения', desc: 'Вы хотите попасть в AI-поиск, но не хотите бесплатно отдавать контент в обучение чужих моделей.' },
        { title: 'Десятки user-agent\'ов', desc: 'В логах десятки user-agent\'ов, и непонятно, какой блокировать, а какой пропускать.' },
        { title: 'robots.txt не рубильник', desc: 'robots.txt кажется универсальным рубильником — но часть запросов его игнорирует на законных основаниях.' },
      ],
    },
    { type: 'heading', text: 'Ключевое различие: обучение, поиск и запрос пользователя' },
    {
      type: 'paragraph',
      text: 'Тезис: у крупных AI-компаний краулеры разделены по назначению, и блокировать их «оптом» — ошибка. Аргумент: бот для обучения модели и бот для индексации в AI-поиске — это разные user-agent\'ы с разной политикой. Доказательство: OpenAI явно рекомендует разрешать OAI-SearchBot для видимости в поиске ChatGPT, но запрещать GPTBot, если вы не хотите попадать в обучающие данные [Источник 70].',
    },
    {
      type: 'paragraph',
      text: 'Тезис: запросы, инициированные пользователем, — отдельная категория. Аргумент: когда человек просит ассистента открыть страницу, это не массовый краул, а действие пользователя. Доказательство: OpenAI отмечает, что для ChatGPT-User «правила robots.txt могут не применяться», а Perplexity прямо пишет, что Perplexity-User «как правило игнорирует robots.txt», поскольку «фетч запросил пользователь» [Источник 74].',
    },
    { type: 'heading', text: 'Таблица user-agent\'ов основных AI-краулеров' },
    {
      type: 'list',
      items: [
        { title: 'GPTBot', desc: 'Оператор: OpenAI. Идентификатор: +https://openai.com/gptbot. Назначение: сбор контента для обучения foundation-моделей. Подчиняется robots.txt: Да — Disallow, чтобы исключить из обучения.' },
        { title: 'OAI-SearchBot', desc: 'Оператор: OpenAI. Идентификатор: +https://openai.com/searchbot. Назначение: индексация для поиска внутри ChatGPT. Подчиняется robots.txt: Да — Allow для видимости в поиске.' },
        { title: 'ChatGPT-User', desc: 'Оператор: OpenAI. Идентификатор: +https://openai.com/bot. Назначение: переход по странице по запросу пользователя. Подчиняется robots.txt: «Может не применяться» (инициирован пользователем).' },
        { title: 'OAI-AdsBot', desc: 'Оператор: OpenAI. Идентификатор: +https://openai.com/adsbot. Назначение: проверка безопасности рекламных лендингов. Подчиняется robots.txt: применяется к страницам поданных объявлений.' },
        { title: 'PerplexityBot', desc: 'Оператор: Perplexity. Идентификатор: +https://perplexity.ai/perplexitybot. Назначение: индексация и ссылки в поиске Perplexity (не для обучения моделей). Подчиняется robots.txt: Да — рекомендуется Allow.' },
        { title: 'Perplexity-User', desc: 'Оператор: Perplexity. Идентификатор: +https://perplexity.ai/perplexity-user. Назначение: посещение страницы по вопросу пользователя. Подчиняется robots.txt: «Как правило игнорирует» (инициирован пользователем).' },
        { title: 'ClaudeBot', desc: 'Оператор: Anthropic. Идентификатор: claude.com/crawling/bots.json. Назначение: сбор веб-контента для обучения и разработки моделей. Подчиняется robots.txt: Да — соблюдает «do not crawl» в robots.txt.' },
        { title: 'Claude-User', desc: 'Оператор: Anthropic. Идентификатор: claude.com/crawling/bots.json. Назначение: получение сайтов по прямому запросу пользователей Claude. Подчиняется robots.txt: действие пользователя.' },
        { title: 'Claude-SearchBot', desc: 'Оператор: Anthropic. Идентификатор: claude.com/crawling/bots.json. Назначение: индексация для качества результатов поиска. Подчиняется robots.txt: Да.' },
        { title: 'Googlebot', desc: 'Оператор: Google. Идентификатор: общий поисковый краулер. Назначение: Поиск, Images, Video, News, Discover (вкл. AI Overviews/AI Mode). Подчиняется robots.txt: Да.' },
        { title: 'Google-Extended', desc: 'Оператор: Google. Идентификатор: управляет только обучением. Назначение: обучение будущих Gemini и grounding в Gemini Apps / Vertex AI. Подчиняется robots.txt: Да — не влияет на ранжирование и AI Overviews.' },
        { title: 'GoogleOther', desc: 'Оператор: Google. Идентификатор: generic-краулер. Назначение: разовые исследовательские краулы. Подчиняется robots.txt: Да — не влияет на конкретный продукт.' },
        { title: 'CCBot', desc: 'Оператор: Common Crawl. Идентификатор: CCBot/2.0 (https://commoncrawl.org/faq/). Назначение: открытый веб-датасет (используется в т.ч. для исследований). Подчиняется robots.txt: Да — Disallow для блокировки.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Источники user-agent\'ов: OpenAI [Источник 70], Perplexity [Источник 74], Anthropic [Источник 75], Google [Источник 76], Common Crawl [Источник 77].',
    },
    { type: 'heading', text: 'Готовые директивы robots.txt' },
    {
      type: 'paragraph',
      text: 'Ниже — пример политики, не универсальная рекомендация: подбирайте директивы под свои цели и юрисдикцию.',
    },
    {
      type: 'paragraph',
      text: 'Пример политики «заблокировать обучение, но остаться в AI-поиске» (директивы перечислены инлайн): «User-agent: GPTBot · Disallow: /» · «User-agent: Google-Extended · Disallow: /» · «User-agent: CCBot · Disallow: /» · «User-agent: OAI-SearchBot · Allow: /» · «User-agent: PerplexityBot · Allow: /».',
    },
    {
      type: 'paragraph',
      text: 'Пример политики «ограничить нагрузку ClaudeBot вместо полной блокировки» (по документации Anthropic): «User-agent: ClaudeBot · Crawl-delay: 1».',
    },
    {
      type: 'paragraph',
      text: 'Каждая директива — это компромисс, а не бесплатное улучшение.',
    },
    {
      type: 'list',
      items: [
        { title: 'Disallow для GPTBot / CCBot', desc: 'Что даёт: privacy и training opt-out — контент не уходит в обучающие датасеты OpenAI и открытый веб-датасет Common Crawl. Чем платите: снижение AI-discoverability вне Google Search — меньше шансов быть процитированным в ChatGPT и продуктах на базе Common Crawl.' },
        { title: 'Disallow для Google-Extended', desc: 'Что даёт: opt-out из обучения будущих Gemini и grounding в Gemini Apps / Vertex AI. Чем платите: не влияет на Google Search AI Overviews и ранжирование — то есть не решает задачу «убрать сайт из AI-ответов Google».' },
        { title: 'Allow для OAI-SearchBot / PerplexityBot', desc: 'Что даёт: видимость и цитирование в поиске ChatGPT и Perplexity. Чем платите: эти платформы продолжают индексировать контент; контроль над тем, как он переформулируется в ответе, остаётся ограниченным.' },
      ],
    },
    { type: 'heading', text: 'Важная деталь про Google' },
    {
      type: 'paragraph',
      text: 'Тезис: Google-Extended — это не выключатель AI Overviews. Аргумент: Google явно заявляет, что «Google-Extended не влияет на включение сайта в Google Поиск и не используется как сигнал ранжирования». Доказательство: блокировка Google-Extended убирает контент только из обучения Gemini и grounding в Vertex AI, но AI Overviews строятся на основном индексе Googlebot [Источник 76]. Это позиция самой платформы Google, а не независимая оценка.',
    },
    { type: 'heading', text: 'Пределы robots.txt: чего файл не делает' },
    {
      type: 'paragraph',
      text: 'Тезис: robots.txt — это запрос, а не техническая блокировка. Аргумент: соблюдение зависит от добросовестности оператора, а user-инициированные фетчи легально его обходят. Доказательство: OpenAI и Perplexity прямо документируют, что ChatGPT-User и Perplexity-User могут не подчиняться robots.txt, потому что действие инициировано человеком [Источник 70, 74].',
    },
    {
      type: 'paragraph',
      text: 'Тезис: подделка user-agent существует, и блокировка по строке ненадёжна. Аргумент: боты могут маскироваться под легитимные. Доказательство: Common Crawl предупреждает о «краулерах, ложно идентифицирующих себя как CCBot», и предлагает сверять IP по index.commoncrawl.org/ccbot.json; Anthropic аналогично рекомендует проверять подлинность по своему списку IP, а не по IP-блокировке [Источник 77, 75].',
    },
    { type: 'heading', text: 'E-E-A-T: официальные источники' },
    {
      type: 'list',
      items: [
        { title: 'OpenAI', desc: 'Официальная документация ботов — Имена и назначение GPTBot/OAI-SearchBot/ChatGPT-User [Источник 70].' },
        { title: 'Perplexity', desc: 'Официальный гайд по ботам — Политика robots.txt для PerplexityBot/Perplexity-User [Источник 74].' },
        { title: 'Anthropic', desc: 'Справочная статья поддержки — ClaudeBot/Claude-User/Claude-SearchBot, Crawl-delay [Источник 75].' },
        { title: 'Google', desc: 'Документация для разработчиков — Google-Extended не влияет на ранжирование [Источник 76].' },
        { title: 'Common Crawl', desc: 'Страница CCBot — User-agent CCBot, блокировка, верификация IP [Источник 77].' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Все приведённые правила и формулировки — это официальная позиция соответствующих платформ; политики могут меняться, проверяйте первоисточники перед внедрением.',
    },
    { type: 'heading', text: 'Частые вопросы' },
    {
      type: 'list',
      items: [
        { title: 'Как остаться в AI-поиске, но не попасть в обучение моделей?', desc: 'Запретите обучающие боты (GPTBot, Google-Extended, CCBot) и разрешите поисковые (OAI-SearchBot, PerplexityBot). Это разные user-agent\'ы с разной политикой.' },
        { title: 'Блокировка Google-Extended уберёт меня из AI Overviews?', desc: 'Нет. Google заявляет, что Google-Extended не влияет на включение в Поиск и ранжирование. AI Overviews строятся на индексе Googlebot, а не на Google-Extended.' },
        { title: 'Почему AI-ассистент открыл страницу, закрытую в robots.txt?', desc: 'Если переход инициировал пользователь (ChatGPT-User, Perplexity-User), robots.txt может не применяться — это документированное поведение OpenAI и Perplexity.' },
        { title: 'Можно ли блокировать AI-ботов по IP-адресу?', desc: 'Ненадёжно. Anthropic и Common Crawl предупреждают о подделке user-agent и рекомендуют сверять запросы с официальными списками IP, а не блокировать диапазоны вручную.' },
      ],
    },
    { type: 'heading', text: 'Источники (E-E-A-T)' },
    {
      type: 'list',
      items: [
        { title: '70 · OpenAI, Current version', desc: 'OpenAI crawlers and user agents. https://developers.openai.com/api/docs/bots — официальный документ платформы.' },
        { title: '74 · Perplexity Help Center, Current version', desc: 'How does Perplexity follow robots.txt? https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt — официальный документ платформы.' },
        { title: '75 · Anthropic Support, Current version', desc: 'Does Anthropic crawl data from the web and how can site owners block the crawler? https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler — официальный документ платформы.' },
        { title: '76 · Google Search Central, 2026', desc: 'Overview of Google crawlers and fetchers. https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers — официальный документ платформы.' },
        { title: '77 · Common Crawl, Current version', desc: 'CCBot documentation. https://commoncrawl.org/ccbot — официальный документ data infrastructure.' },
      ],
    },
    { type: 'heading', text: 'Как мы проверяли материал' },
    {
      type: 'list',
      items: [
        { title: 'Автор', desc: 'Редакция Enigma.' },
        { title: 'Опубликовано', desc: '18 мая 2026.' },
        { title: 'Обновлено', desc: '18 мая 2026.' },
        { title: 'Источники', desc: 'peer-reviewed, препринты и industry research — тип указан рядом с каждым утверждением.' },
        { title: 'Сверка', desc: 'ключевые тезисы сверены с актуальной документацией Google Search Central (май 2026).' },
        { title: 'Оговорка', desc: 'препринты и отраслевые отчёты приведены с методологическими ограничениями; проверяйте выводы на своём проекте.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'Полный перечень источников и уровни надёжности — в каталоге исследований.',
    },
  ],
};
