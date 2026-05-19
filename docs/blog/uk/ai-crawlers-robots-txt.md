---
title: "AI-краулери та robots.txt: практичний огляд для власника сайту"
slug: ai-crawlers-robots-txt
sources: [70, 74, 75, 76, 77]
status: review
author: "Редакція Enigma"
datePublished: 2026-05-18
dateModified: 2026-05-19
schema: BlogPosting
description: "Які AI-краулери існують, як ними керувати через robots.txt і де цей файл не діє."
---

# AI-краулери та robots.txt: практичний огляд для власника сайту

robots.txt впливає на поведінку конкретних краулерів, а не працює як єдиний рубильник. `Google-Extended` керує використанням контенту для навчання та grounding Gemini Apps і Vertex AI, але НЕ керує включенням у Google Search AI Overviews; для AI-функцій самого Google Search ключовими залишаються `Googlebot` і eligibility сторінки (індексація плюс можливість показу сніпета). Щоб коректно керувати видимістю, потрібно знати точні імена ботів і розуміти, де правила не діють.

> **Enigma** показує, де ваш сайт згадується та цитується в AI-пошуку. [Запросити демо](#)

## Контекст / Проблема

- Ви хочете потрапити в AI-пошук, але не хочете безкоштовно віддавати контент у навчання чужих моделей.
- У логах десятки user-agent'ів, і незрозуміло, який блокувати, а який пропускати.
- robots.txt здається універсальним рубильником, але для деяких user-initiated fetchers правила можуть застосовуватися інакше залежно від політики платформи.

## Ключова відмінність: навчання, пошук і запит користувача

Теза: у великих AI-компаній краулери розділені за призначенням, і блокувати їх «гуртом» — помилка. Аргумент: бот для навчання моделі й бот для індексації в AI-пошуку — це різні user-agent'и з різною політикою. Доказ: OpenAI явно рекомендує дозволяти `OAI-SearchBot` для видимості в пошуку ChatGPT, але забороняти `GPTBot`, якщо ви не хочете потрапляти в навчальні дані ([OpenAI, developers.openai.com](https://developers.openai.com/api/docs/bots)).

Теза: запити, ініційовані користувачем, — окрема категорія. Аргумент: коли людина просить асистента відкрити сторінку, це не масовий краул, а дія користувача. Доказ: OpenAI зазначає, що для `ChatGPT-User` «правила robots.txt можуть не застосовуватися», а Perplexity прямо пише, що `Perplexity-User` «як правило ігнорує robots.txt», оскільки «фетч запросив користувач» ([Perplexity, docs.perplexity.ai](https://docs.perplexity.ai/guides/bots)).

## Таблиця user-agent'ів основних AI-краулерів

| User-agent | Власник | Призначення | Підкоряється robots.txt | Ідентифікатор / довідка |
|---|---|---|---|---|
| `GPTBot` | OpenAI | Збір контенту для навчання foundation-моделей | Так — `Disallow`, щоб виключити з навчання | `+https://openai.com/gptbot` |
| `OAI-SearchBot` | OpenAI | Індексація для пошуку всередині ChatGPT | Так — `Allow` для видимості в пошуку | `+https://openai.com/searchbot` |
| `ChatGPT-User` | OpenAI | Перехід на сторінку за запитом користувача | «Може не застосовуватися» (ініційований користувачем) | `+https://openai.com/bot` |
| `OAI-AdsBot` | OpenAI | Перевірка безпеки рекламних лендингів | Застосовується до сторінок поданих оголошень | `+https://openai.com/adsbot` |
| `PerplexityBot` | Perplexity | Індексація та посилання в пошуку Perplexity (не для навчання моделей) | Так — рекомендується `Allow` | `+https://perplexity.ai/perplexitybot` |
| `Perplexity-User` | Perplexity | Відвідування сторінки за питанням користувача | «Як правило ігнорує» (ініційований користувачем) | `+https://perplexity.ai/perplexity-user` |
| `ClaudeBot` | Anthropic | Збір веб-контенту для навчання та розробки моделей | Так — дотримується «do not crawl» у robots.txt | `claude.com/crawling/bots.json` |
| `Claude-User` | Anthropic | Отримання сайтів за прямим запитом користувачів Claude | Так, за документацією Anthropic; блокування може знизити видимість у user-directed web search | privacy.claude.com |
| `Claude-SearchBot` | Anthropic | Індексація для якості результатів пошуку | Так | `claude.com/crawling/bots.json` |
| `Googlebot` | Google | Пошук, Images, Video, News, Discover (вкл. AI Overviews/AI Mode) | Так | Загальний пошуковий краулер |
| `Google-Extended` | Google | Навчання майбутніх Gemini і grounding у Gemini Apps / Vertex AI | Так — не впливає на ранжування й AI Overviews | Керує лише навчанням |
| `GoogleOther` | Google | Разові дослідницькі краули | Так — не впливає на конкретний продукт | Generic-краулер |
| `CCBot` | Common Crawl | Відкритий веб-датасет (використовується в т.ч. для досліджень) | Так — `Disallow` для блокування | `CCBot/2.0 (https://commoncrawl.org/faq/)` |

Джерела user-agent'ів: [OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots), [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers), [Common Crawl](https://commoncrawl.org/ccbot).

### Готові директиви robots.txt

Нижче — **приклад політики, не універсальна рекомендація**: підбирайте директиви під свої цілі та юрисдикцію.

Заблокувати навчання, але залишитися в AI-пошуку:

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

Обмежити навантаження ClaudeBot замість повного блокування (за документацією Anthropic):

```
User-agent: ClaudeBot
Crawl-delay: 1
```

Кожна директива — це компроміс, а не безкоштовне покращення:

| Директива | Що дає | Чим платите |
|---|---|---|
| `Disallow` для `GPTBot` | training opt-out для OpenAI; не блокує ChatGPT Search, якщо OAI-SearchBot дозволено | нові краули не мають збирати контент для відповідного призначення; це не означає автоматичного видалення вже зібраних копій або старих архівів |
| `Disallow` для `CCBot` | обмежує майбутнє включення в Common Crawl; може впливати на системи, що залежать від Common Crawl; не видаляє старі архіви | нові краули не мають збирати контент для відповідного призначення; це не означає автоматичного видалення вже зібраних копій або старих архівів |
| `Disallow` для `Google-Extended` | Opt-out з навчання майбутніх Gemini і grounding у Gemini Apps / Vertex AI | Не впливає на Google Search AI Overviews і ранжування — тобто не вирішує задачу «прибрати сайт з AI-відповідей Google» |
| `Allow` для `OAI-SearchBot` / `PerplexityBot` | Видимість і цитування в пошуку ChatGPT і Perplexity | Ці платформи продовжують індексувати контент; контроль над тим, як він переформульовується у відповіді, залишається обмеженим |

### Важлива деталь про Google

Теза: `Google-Extended` — це не вимикач AI Overviews. Аргумент: Google явно заявляє, що «Google-Extended не впливає на включення сайту в Google Пошук і не використовується як сигнал ранжування». Доказ: блокування `Google-Extended` прибирає контент лише з навчання Gemini і grounding у Vertex AI, але AI Overviews будуються на основному індексі Googlebot ([Google, developers.google.com](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)). Це позиція самої платформи Google, а не незалежна оцінка.

## Межі robots.txt: чого файл не робить

Теза: robots.txt — це запит, а не технічне блокування. Аргумент: дотримання залежить від добросовісності оператора. OpenAI і Perplexity документують user-initiated fetchers окремо: для них robots.txt може не застосовуватися або зазвичай ігнорується. Anthropic описує інший підхід і заявляє, що його bots поважають robots.txt. Доказ: OpenAI і Perplexity прямо документують, що `ChatGPT-User` і `Perplexity-User` можуть не підкорятися robots.txt, тому що дія ініційована людиною ([OpenAI](https://developers.openai.com/api/docs/bots); [Perplexity](https://docs.perplexity.ai/guides/bots)).

Теза: підробка user-agent існує, і блокування за рядком ненадійне. Аргумент: боти можуть маскуватися під легітимні. Доказ: Common Crawl попереджає про «краулери, які хибно ідентифікують себе як CCBot», і пропонує звіряти IP за `index.commoncrawl.org/ccbot.json`; Anthropic аналогічно рекомендує перевіряти автентичність за своїм списком IP, а не за IP-блокуванням ([Common Crawl](https://commoncrawl.org/ccbot); [Anthropic](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)).

## E-E-A-T: офіційні джерела

| Платформа | Тип документа | Що підтверджує | Посилання |
|---|---|---|---|
| OpenAI | Офіційна документація ботів | Імена та призначення GPTBot/OAI-SearchBot/ChatGPT-User | [developers.openai.com](https://developers.openai.com/api/docs/bots) |
| Perplexity | Офіційний гайд по ботах | Політика robots.txt для PerplexityBot/Perplexity-User | [docs.perplexity.ai](https://docs.perplexity.ai/guides/bots) |
| Anthropic | Довідкова стаття підтримки | ClaudeBot/Claude-User/Claude-SearchBot, Crawl-delay | [support.claude.com](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Google | Документація для розробників | Google-Extended не впливає на ранжування | [developers.google.com](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) |
| Common Crawl | Сторінка CCBot | User-agent CCBot, блокування, верифікація IP | [commoncrawl.org/ccbot](https://commoncrawl.org/ccbot) |

Усі наведені правила та формулювання — це офіційна позиція відповідних платформ; політики можуть змінюватися, перевіряйте першоджерела перед впровадженням.

## FAQ

### Як залишитися в AI-пошуку, але не потрапити в навчання моделей?
Забороніть навчальні боти (`GPTBot`, `Google-Extended`, `CCBot`) і дозвольте пошукові (`OAI-SearchBot`, `PerplexityBot`). Це різні user-agent'и з різною політикою.

### Блокування Google-Extended прибере мене з AI Overviews?
Ні. Google заявляє, що Google-Extended не впливає на включення в Пошук і ранжування. AI Overviews будуються на індексі Googlebot, а не на Google-Extended.

### Чому AI-асистент відкрив сторінку, закриту в robots.txt?
Якщо перехід ініціював користувач (`ChatGPT-User`, `Perplexity-User`), robots.txt може не застосовуватися — це задокументована поведінка OpenAI і Perplexity.

### Чи можна блокувати AI-ботів за IP-адресою?
Ненадійно. Anthropic і Common Crawl попереджають про підробку user-agent і рекомендують звіряти запити з офіційними списками IP, а не блокувати діапазони вручну.

---

### Як ми перевіряли матеріал

| Параметр | Значення |
|---|---|
| Автор | Редакція Enigma |
| Опубліковано | 18 травня 2026 |
| Оновлено | 19 травня 2026 |
| Джерела | peer-reviewed, препринти та industry research — тип указано поряд із кожним твердженням |
| Звірка | ключові тези звірені з актуальною документацією Google Search Central (травень 2026) |
| Застереження | препринти та галузеві звіти наведені з методологічними обмеженнями; перевіряйте висновки на своєму проєкті |

Повний перелік джерел і рівні надійності — у [каталозі досліджень](../blog-research.md).
