# Content Implementation Plan — GEO/AEO (Enigma)

> Контракт генерации контента. Источник истины: `docs/research.md` (84 источника, in-repo каталог; `geo_aeo_research_catalogue.docx` — его экспорт, не отдельный источник). Правила: `CLAUDE.md` (Smart Frame, команды `clerk`).
>
> **Статус (2026-05-16): APPROVED FOR IMPLEMENTATION / ready for code migration.** Кластер 1 (`docs/drafts/1.0`–`1.6`) прошёл три аудита: структура/источники + два fact-check прохода (overclaim, FAQPage, robots.txt, RAG-память). Все H/M/L правки применены. Следующий шаг — перенос в код (`Article` + видимый FAQ; `FAQPage` опционально/feature-flag).
>
> **Внедрение в код (2026-05-17) ЗАВЕРШЕНО: ВСЕ 28 страниц в коде, build зелёный.** Cluster 2 (2.1–2.4 технические гайды) добавлены в `src/content/articles.js` как ArticlePage-статьи (uk, ContentPageRenderer) под `/resources/research-lab/<slug>` + в хаб `researchLab.articles` (uk+ru); 2.1 синхронизирован с патч-таксономией агентов (OAI-SearchBot/Claude-SearchBot/Perplexity-User), как на Agent Traffic. Research Lab теперь: 4 тех-гайда (2.x) + 4 research-разбора (5.x) = 8 статей. Новых маршрутов не потребовалось (slug'и research-lab/...).
>
> **Внедрение в код (2026-05-17) ЗАВЕРШЕНО для Clusters 3–6 + Home; build зелёный.** Cluster 6 полностью: 6.1 Home (Hero/Problem → Smart Frame 6.1; нейтрализованы выдуманные числа/отзывы в Hero-карусели, StatQuote, TestimonialLight, MonitoringSection — заменены на sourced-утверждения и схемы), 6.2 Pricing, 6.3 AEO-FAQ/глоссарий (новая страница `AeoFaqPage` + маршрут `/resources/aeo-faq` + пункт меню desktop/mobile, uk+ru), 6.4 Changelog. **Остаётся вне кода: Cluster 2 (2.1–2.4 технические гайды) — черновики в docs готовы, но в код не вели (нет существующего маршрута/структуры; это отдельная порция как доп. статьи).** Cluster 1 (chapters 1.0–1.6) уже был в коде ранее.
>
> **Внедрение в код (2026-05-17), прогресс: Clusters 3,4,5 + 6.2/6.4 перенесены, build зелёный.** C4 (Solutions): `SolutionPage` расширен (Context/Sources/FAQ + JSON-LD), убраны фейк quote/stat и «Trusted by»-логотипы, 4.1–4.3 в uk+ru. C5 (Research Lab): `articles.js` заменён на 5.1–5.4 (uk, ContentPageRenderer; удалён выдуманный демо-контент 2.4M/34%), хаб 5.0 в uk+ru. C6: Pricing (6.2) hero+FAQ и Changelog (6.4) переписаны honest-events в uk+ru (плановые цены из PLAN_META не трогали). **Остаётся: 6.1 Home (композиция из 11 секционных компонентов со своими фейк-метриками — отдельный объём), 6.3 AEO-FAQ/глоссарий (нужен новый маршрут + пункт меню).**
>
> **Внедрение в код (2026-05-17): Cluster 3 (Products, 5 стр.) перенесён — uk+ru.** Гибрид: `ProductPage.jsx` расширен секциями Context / Sources (E-E-A-T) / FAQ + Article JSON-LD; `ProductVisual` заменён нейтральной схемой (убраны выдуманные числа 128 440 / −98.99% / %% платформ), удалена фейковая клиентская цитата; `getProducts` обновлён (context/eeat/faq, без badge/stats); `content.products` в uk.js и ru.js заменён на Smart Frame 3.1–3.5. Build зелёный, висячих ссылок нет. Дальше: Cluster 4 (Solutions) → 5 (Research Lab) → 6 (Home/Pricing/FAQ/Changelog).
>
> **Обновление (2026-05-17): черновики сгенерированы для ВСЕХ 28 страниц + применён pre-merge patch по аудиту достоверности.** Кластеры 3–6 (`docs/drafts/3.1`–`6.4`, 17 стр.) написаны по Smart Frame с attribution по матрице §3. Прошёл аудит достоверности (17.05) → применены все правки High/Medium/Low: смягчены passage/chunking-абсолютизмы (+крос-реф 65, Google не требует chunking); обновлён список агентов (GPTBot/OAI-SearchBot, ClaudeBot/Claude-User/Claude-SearchBot, PerplexityBot/Perplexity-User); добавлен caveat Bing AI Performance (citations ≠ ranking/placement/authority/role); B2B/e-commerce/agencies переписаны как risk-based (+Merchant Center контур, source 65); добавлен methodology-caveat zero-click (panel/clickstream); AEO в глоссарии переатрибутирован 01→65. Статус «на ревʼю»; финальные fact-check проходы ещё НЕ выполнены. Solution-страницы содержат `[QUOTE]`/`[STAT]`-плейсхолдеры. Кластер 2 — на ревʼю. APPROVED остаётся только Кластер 1.

## Решения по контракту
- **Язык:** двуязычно — основной `uk` (дефолт сайта), затем `ru`-перевод. Оба слоя пишутся в i18n (`src/i18n/uk.js`, `src/i18n/ru.js`).
- **Формат вывода:** сначала Markdown-черновики в `docs/` (Smart Frame, на ревью), перенос в код (`src/content/index.js`, `chapters.js`, `articles.js`, i18n) — только после утверждения черновика.
- **Лимит сайта:** ≤30 страниц. План использует 28, запас 2.

---

## 1. Инженерные выводы из источников

| # | Вывод | Источники | Влияние на архитектуру |
|---|-------|-----------|------------------------|
| A | Retrieval часто на уровне passage; «середина» длинного контекста используется хуже | 26, 27, 35, 47 | Блок H2/H3 — самодостаточный; тезис в начале блока — **редакционная эвристика** (снижает риск потери смысла), не доказанный фактор inclusion |
| B | Цитирование ≠ absorption; правильность ≠ верность атрибуции | 07, 32, 39, 40, 41, 54 | Формула Тезис→Аргумент→Доказ — **редакционная эвристика** из проблемы attribution/faithfulness, не научная формула из источников |
| C | QA-бенчмарки показывают природу question-answering задач; structured data помогает машинному пониманию в Google Search | 29, 30, 31 (QA datasets); 68 (structured data) | Таблицы при 3+ позициях; **Article + видимый FAQ-контент**; FAQPage — опционально (семантика / не-Google потребители), **не** Google rich-result lever (FAQ rich results убраны с 07.05.2026). «Ответ <50 слов» — эвристика, **не** вывод из источников |
| D | Видимость нестабильна + важна свежесть; отдельно — внешний контур (earned media) | 06, 20, 33 (нестабильность/свежесть); 02, 08 (earned media / typology источников) | Видимая дата обновления; повторяемый мониторинг; работа с внешними авторитетными источниками |

---

## 2. Структура сайта (28 страниц)

**Кластер 1 — Базовые понятия / Pillar** (`ResourcePage`+`ChapterPage`) — 7 стр.
1.0 GEO Playbook (хаб) · 1.1 GEO и AEO vs SEO · 1.2 RAG и answer engines · 1.3 Passage retrieval · 1.4 Citation selection vs absorption · 1.5 Нестабильность AI-видимости · 1.6 Техническое SEO как фундамент

**Кластер 2 — Технические руководства** (`ArticlePage`) — 4 стр.
2.1 robots.txt для AI-ботов · 2.2 Structured data для AEO · 2.3 Passage-ready контент · 2.4 Prompt/query clusters

**Кластер 3 — Продукты** (`ProductPage`) — 5 стр.
3.1 AXP · 3.2 Agent Traffic · 3.3 Site Maps · 3.4 Monitoring & Citations · 3.5 Insights

**Кластер 4 — Решения** (`SolutionPage`) — 3 стр.
4.1 B2B SaaS · 4.2 E-commerce · 4.3 Agencies

**Кластер 5 — Research Lab / E-E-A-T** (`ResourcePage`+`ArticlePage`) — 5 стр.
5.0 Research Lab (хаб) · 5.1 Zero-click · 5.2 AI Overviews vs SERP top-10 · 5.3 Нестабильность ответов (данные) · 5.4 Citation bias

**Кластер 6 — FAQ-хаб + конверсия** — 4 стр.
6.1 Home · 6.2 Pricing (+AEO-FAQ) · 6.3 AEO FAQ/Глоссарий · 6.4 Changelog

Запас (2): «GEO vs SEO сравнение», «Методология E-E-A-T».

---

## 3. Attribution Matrix

| Страница | Опора на источники |
|----------|--------------------|
| 1.0/1.1 | 01, 02, 08, 09; контраст 57, 58 |
| 1.2 | 24, 25, 37, 38, 48, 18, 14 |
| 1.3 | 26, 27, 35, 47, 49 |
| 1.4 | 07, 32, 39, 40, 41, 54 |
| 1.5 | 06, 20, 36, 44, 45 |
| 1.6 | 57, 60, 65, 67, 68, 76 |
| 2.1 | 70, 71, 74, 75, 76, 77 |
| 2.2 | 68, 17, 65, 73 |
| 2.3 | 27, 35, 03, 17, 26 |
| 2.4 | 61, 28, 15, 30, 64 |
| 3.1 AXP | 17, 26, 27, 35, 49, 70, 75 |
| 3.2 Agent Traffic | 70, 74, 75, 76, 77 |
| 3.3 Site Maps | 28, 45, 35, 03, 12 |
| 3.4 Monitoring | 06, 07, 10, 39, 72, 80, 81 |
| 3.5 Insights | 20, 36, 44, 06, 46 |
| 4.1 B2B SaaS | 02, 15, 78, 83 |
| 4.2 E-commerce | 04, 59, 80 |
| 4.3 Agencies | 22, 69, 60, 80, 82 |
| 5.1 Zero-click | 78, 83, 84 |
| 5.2 Overlap | 80, 81, 82, 09 |
| 5.3 Нестабильность | 06, 20 |
| 5.4 Citation bias | 10, 21, 39 |
| 6.1 Home | 01, 09, 78, 83, 84 |
| 6.2 Pricing FAQ | 15, 30, 31 |
| 6.3 FAQ/Глоссарий | 01, 24, 27, 32, 39, 65, 68 |
| 6.4 Changelog | 65, 70, 72 |

Правило: **≥2 source references** (ссылки на источники из своей строки) в E-E-A-T-блоке каждой страницы. Дословные цитаты — опционально, в copyright-safe пределах. Никаких выдуманных фактов/URL.

**Глоссарий терминологии (uk-слой, применять единообразно):** retrieval → «вилучення/retrieval»; passage → «пасаж/фрагмент»; answer engine → «answer engine»; attribution → «атрибуція»; faithfulness → «вірність (faithfulness)»; structured data → «structured data / мікророзмітка»; pre-training → «переднавчання» (не «предобучення»). Русизмы в uk-тексте недопустимы. **Разрешённые англоязычные термины (оставлять единообразно):** retrieval, passage, answer engine, RAG, attribution, faithfulness, structured data, rich results, inclusion, snippet, practical levers, share of voice. Остальное — украинский вариант.

---

## 4. Пайплайн генерации

Каждая страница = Smart Frame: Hero H1 → Context/Problem → Core Value (Тезис→Аргумент→Доказ — редакционная эвристика, абзац ≤4 строк) → E-E-A-T блок с source references → AEO/FAQ (3–4 пары, ответ <50 слов как эвристика) → **Article JSON-LD + видимый FAQ-контент** (FAQPage опционально, не Google lever). Сначала uk-черновик в `docs/`, ревью, затем uk+ru в код.

| Этап | Содержание | Команда | Выход |
|------|------------|---------|-------|
| 0 | Зафиксировать query clusters + эту матрицу | — | этот файл |
| 1 | Кластер 1 (7 стр.) | `clerk gen-page` | docs-черновики → `geoPlaybook`/`chapters.js`+i18n |
| 2 | Кластер 2 (4 стр.) | `clerk gen-page` → `clerk validate-seo` | research-lab guides |
| 3 | Кластеры 3+4 (8 стр.) | `clerk gen-page` → `clerk enrich-eeat` | `products`,`solutions` |
| 4 | Кластер 5 (5 стр.) | `clerk gen-page` + `clerk enrich-eeat` | `researchLab`/`articles.js` |
| 5 | Кластер 6 + FAQ/JSON-LD на ВСЕ страницы | `clerk validate-seo` по сайту | FAQ-хаб, схема везде |
| 6 | Повторяемый мониторинг (dogfood Monitoring) | — | дашборд GEO-метрик |

QA на этапах 2 и 5 — `clerk validate-seo` обязателен: AI-штампы, пассивный залог, переусложнение, отсутствие Schema. **Schema в коде:** `Article` всегда; видимый FAQ-контент всегда; `FAQPage` — опционально / за feature-flag (не по умолчанию). Перед деплоем удалить все комментарии из JSON-LD (`// …`, `/* … */`), заполнить `mainEntity`/entities, прогнать Rich Results Test / Schema validator; не полагаться на FAQPage как на Google rich-result.

**Запрещённые формулировки (lint-правило):** «гарантирует попадание в AI-ответ» → «повышает шанс / техническая предпосылка / эвристика / не гарантия inclusion». robots.txt = контроль доступа краулера, **не** удаление из Search (исключение — `noindex`/пароль). RAG-ответ = retrieval + параметрическая память модели, не «только из источников» (кроме явно retrieval-only систем). Practical-формулы (Тезис→Аргумент→Доказ и т.п.) маркировать как редакционные эвристики.
