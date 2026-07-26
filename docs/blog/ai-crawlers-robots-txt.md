---
title: "AI-краулеры и robots.txt: практический обзор для владельца сайта"
slug: ai-crawlers-robots-txt
sources: [70, 74, 75, 76, 77]
status: review
author: "Редакция Enigma"
datePublished: 2026-05-18
dateModified: 2026-05-18
schema: BlogPosting
description: "Какие AI-краулеры существуют, как ими управлять через robots.txt и где этот файл не действует."
---

# AI-краулеры и robots.txt: практический обзор для владельца сайта

robots.txt влияет на поведение конкретных краулеров, а не работает как единый рубильник. `Google-Extended` управляет использованием контента для обучения и grounding Gemini Apps и Vertex AI, но НЕ управляет включением в Google Search AI Overviews; для AI-функций самого Google Search ключевыми остаются `Googlebot` и eligibility страницы (индексация плюс возможность показа сниппета). Чтобы корректно управлять видимостью, нужно знать точные имена ботов и понимать, где правила не действуют.

> **Enigma** показывает, где ваш сайт упоминается и цитируется в AI-поиске. [Запросить демо](#)

## Контекст / Проблема

- Вы хотите попасть в AI-поиск, но не хотите бесплатно отдавать контент в обучение чужих моделей.
- В логах десятки user-agent'ов, и непонятно, какой блокировать, а какой пропускать.
- robots.txt кажется универсальным рубильником — но часть запросов его игнорирует на законных основаниях.

## Ключевое различие: обучение, поиск и запрос пользователя

Тезис: у крупных AI-компаний краулеры разделены по назначению, и блокировать их «оптом» — ошибка. Аргумент: бот для обучения модели и бот для индексации в AI-поиске — это разные user-agent'ы с разной политикой. Доказательство: OpenAI явно рекомендует разрешать `OAI-SearchBot` для видимости в поиске ChatGPT, но запрещать `GPTBot`, если вы не хотите попадать в обучающие данные ([OpenAI, developers.openai.com](https://developers.openai.com/api/docs/bots)).

Тезис: запросы, инициированные пользователем, — отдельная категория. Аргумент: когда человек просит ассистента открыть страницу, это не массовый краул, а действие пользователя. Доказательство: OpenAI отмечает, что для `ChatGPT-User` «правила robots.txt могут не применяться», а Perplexity прямо пишет, что `Perplexity-User` «как правило игнорирует robots.txt», поскольку «фетч запросил пользователь» ([Perplexity, docs.perplexity.ai](https://docs.perplexity.ai/guides/bots)).

## Таблица user-agent'ов основных AI-краулеров

| User-agent | Владелец | Назначение | Подчиняется robots.txt | Идентификатор / справка |
|---|---|---|---|---|
| `GPTBot` | OpenAI | Сбор контента для обучения foundation-моделей | Да — `Disallow`, чтобы исключить из обучения | `+https://openai.com/gptbot` |
| `OAI-SearchBot` | OpenAI | Индексация для поиска внутри ChatGPT | Да — `Allow` для видимости в поиске | `+https://openai.com/searchbot` |
| `ChatGPT-User` | OpenAI | Переход по странице по запросу пользователя | «Может не применяться» (инициирован пользователем) | `+https://openai.com/bot` |
| `OAI-AdsBot` | OpenAI | Проверка безопасности рекламных лендингов | Применяется к страницам поданных объявлений | `+https://openai.com/adsbot` |
| `PerplexityBot` | Perplexity | Индексация и ссылки в поиске Perplexity (не для обучения моделей) | Да — рекомендуется `Allow` | `+https://perplexity.ai/perplexitybot` |
| `Perplexity-User` | Perplexity | Посещение страницы по вопросу пользователя | «Как правило игнорирует» (инициирован пользователем) | `+https://perplexity.ai/perplexity-user` |
| `ClaudeBot` | Anthropic | Сбор веб-контента для обучения и разработки моделей | Да — соблюдает «do not crawl» в robots.txt | `claude.com/crawling/bots.json` |
| `Claude-User` | Anthropic | Получение сайтов по прямому запросу пользователей Claude | Действие пользователя | `claude.com/crawling/bots.json` |
| `Claude-SearchBot` | Anthropic | Индексация для качества результатов поиска | Да | `claude.com/crawling/bots.json` |
| `Googlebot` | Google | Поиск, Images, Video, News, Discover (вкл. AI Overviews/AI Mode) | Да | Общий поисковый краулер |
| `Google-Extended` | Google | Обучение будущих Gemini и grounding в Gemini Apps / Vertex AI | Да — не влияет на ранжирование и AI Overviews | Управляет только обучением |
| `GoogleOther` | Google | Разовые исследовательские краулы | Да — не влияет на конкретный продукт | Generic-краулер |
| `CCBot` | Common Crawl | Открытый веб-датасет (используется в т.ч. для исследований) | Да — `Disallow` для блокировки | `CCBot/2.0 (https://commoncrawl.org/faq/)` |

Источники user-agent'ов: [OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers), [Common Crawl](https://commoncrawl.org/ccbot).

### Готовые директивы robots.txt

Ниже — **пример политики, не универсальная рекомендация**: подбирайте директивы под свои цели и юрисдикцию.

Заблокировать обучение, но остаться в AI-поиске:

```
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

Ограничить нагрузку ClaudeBot вместо полной блокировки (по документации Anthropic):

```
User-agent: ClaudeBot
Crawl-delay: 1
```

Каждая директива — это компромисс, а не бесплатное улучшение:

| Директива | Что даёт | Чем платите |
|---|---|---|
| `Disallow` для `GPTBot` / `CCBot` | Privacy и training opt-out: контент не уходит в обучающие датасеты OpenAI и открытый веб-датасет Common Crawl | Снижение AI-discoverability вне Google Search — меньше шансов быть процитированным в ChatGPT и продуктах на базе Common Crawl |
| `Disallow` для `Google-Extended` | Opt-out из обучения будущих Gemini и grounding в Gemini Apps / Vertex AI | Не влияет на Google Search AI Overviews и ранжирование — то есть не решает задачу «убрать сайт из AI-ответов Google» |
| `Allow` для `OAI-SearchBot` / `PerplexityBot` | Видимость и цитирование в поиске ChatGPT и Perplexity | Эти платформы продолжают индексировать контент; контроль над тем, как он переформулируется в ответе, остаётся ограниченным |

### Важная деталь про Google

Тезис: `Google-Extended` — это не выключатель AI Overviews. Аргумент: Google явно заявляет, что «Google-Extended не влияет на включение сайта в Google Поиск и не используется как сигнал ранжирования». Доказательство: блокировка `Google-Extended` убирает контент только из обучения Gemini и grounding в Vertex AI, но AI Overviews строятся на основном индексе Googlebot ([Google, developers.google.com](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)). Это позиция самой платформы Google, а не независимая оценка.

## Пределы robots.txt: чего файл не делает

Тезис: robots.txt — это запрос, а не техническая блокировка. Аргумент: соблюдение зависит от добросовестности оператора, а user-инициированные фетчи легально его обходят. Доказательство: OpenAI и Perplexity прямо документируют, что `ChatGPT-User` и `Perplexity-User` могут не подчиняться robots.txt, потому что действие инициировано человеком ([OpenAI](https://developers.openai.com/api/docs/bots); [Perplexity](https://docs.perplexity.ai/guides/bots)).

Тезис: подделка user-agent существует, и блокировка по строке ненадёжна. Аргумент: боты могут маскироваться под легитимные. Доказательство: Common Crawl предупреждает о «краулерах, ложно идентифицирующих себя как CCBot», и предлагает сверять IP по `index.commoncrawl.org/ccbot.json`; Anthropic аналогично рекомендует проверять подлинность по своему списку IP, а не по IP-блокировке ([Common Crawl](https://commoncrawl.org/ccbot); [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).

## E-E-A-T: официальные источники

| Платформа | Тип документа | Что подтверждает | Ссылка |
|---|---|---|---|
| OpenAI | Официальная документация ботов | Имена и назначение GPTBot/OAI-SearchBot/ChatGPT-User | [developers.openai.com](https://developers.openai.com/api/docs/bots) |
| Perplexity | Официальный гайд по ботам | Политика robots.txt для PerplexityBot/Perplexity-User | [docs.perplexity.ai](https://docs.perplexity.ai/guides/bots) |
| Anthropic | Справочная статья поддержки | ClaudeBot/Claude-User/Claude-SearchBot, Crawl-delay | [support.claude.com](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Google | Документация для разработчиков | Google-Extended не влияет на ранжирование | [developers.google.com](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) |
| Common Crawl | Страница CCBot | User-agent CCBot, блокировка, верификация IP | [commoncrawl.org/ccbot](https://commoncrawl.org/ccbot) |

Все приведённые правила и формулировки — это официальная позиция соответствующих платформ; политики могут меняться, проверяйте первоисточники перед внедрением.

## FAQ

### Как остаться в AI-поиске, но не попасть в обучение моделей?
Запретите обучающие боты (`GPTBot`, `Google-Extended`, `CCBot`) и разрешите поисковые (`OAI-SearchBot`, `PerplexityBot`). Это разные user-agent'ы с разной политикой.

### Блокировка Google-Extended уберёт меня из AI Overviews?
Нет. Google заявляет, что Google-Extended не влияет на включение в Поиск и ранжирование. AI Overviews строятся на индексе Googlebot, а не на Google-Extended.

### Почему AI-ассистент открыл страницу, закрытую в robots.txt?
Если переход инициировал пользователь (`ChatGPT-User`, `Perplexity-User`), robots.txt может не применяться — это документированное поведение OpenAI и Perplexity.

### Можно ли блокировать AI-ботов по IP-адресу?
Ненадёжно. Anthropic и Common Crawl предупреждают о подделке user-agent и рекомендуют сверять запросы с официальными списками IP, а не блокировать диапазоны вручную.

---

### Как мы проверяли материал

| Параметр | Значение |
|---|---|
| Автор | Редакция Enigma |
| Опубликовано | 18 мая 2026 |
| Обновлено | 18 мая 2026 |
| Источники | peer-reviewed, препринты и industry research — тип указан рядом с каждым утверждением |
| Сверка | ключевые тезисы сверены с актуальной документацией Google Search Central (май 2026) |
| Оговорка | препринты и отраслевые отчёты приведены с методологическими ограничениями; проверяйте выводы на своём проекте |

Полный перечень источников и уровни надёжности — в [каталоге исследований](../blog-research.md).
