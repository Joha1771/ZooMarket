export const ru = {
  nav: {
    courses: "Курсы",
    roadmap: "Карта пути",
    pricing: "Цены",
    community: "Сообщество",
    login: "Войти",
    start: "Начать →",
    lang: "Русский",
    dragHint: "💡 Перетащите навбар в любую сторону",
  },

  hero: {
    badge: "Бесплатный старт — зарегистрируйтесь",
    title1: "Frontend",
    title2: "разработчик",
    title3: "начинается",
    title4: "здесь.",
    sub: "Визуальные уроки, редактор кода в браузере и AI помощник — на узбекском и русском. Всё в одном месте.",
    cta: "Начать бесплатно",
    demo: "Смотреть демо",
    stat1num: "8 месяцев",
    stat1label: "Полная продолжительность курса",
    stat2num: "100%",
    stat2label: "На узбекском — первые",
    stat3num: "Бесплатно",
    stat3label: "Для начала",
    scroll: "Scroll",
    floatLesson: "Текущий урок",
    floatStreak: "🔥 Streak",
    floatStreakVal: "14 дней",
    floatStreakSub: "Продолжайте!",
    floatXpLabel: "Уровень XP",
    floatXpSub: "Следующий: 3,000 XP",
  },

  features: {
    label: "// Что внутри?",
    title1: "Больше нигде",
    title2: "не найдёшь",
  },

  features_data: [
    {
      icon: "⚡",
      title: "Визуальные Уроки",
      desc: "Анимации и интерактивные схемы помогают понять каждую тему — видишь, а не просто читаешь.",
    },
    {
      icon: "⌨️",
      title: "Код в Браузере",
      desc: "Без установки VS Code — пишите код прямо в браузере и сразу видите результат.",
    },
    {
      icon: "🤖",
      title: "AI Помощник",
      desc: "Задавайте любые вопросы. AI объясняет на русском и узбекском без осуждения.",
    },
  ],

  curriculum: {
    label: "// Программа",
    title1: "8-месячная",
    title2: "карта пути",
    subtitle: "В этом месяце изучите:",
  },

  curriculum_data: [
    {
      month: "01",
      title: "HTML & CSS Основы",
      topics: [
        "Semantic HTML",
        "Flexbox & Grid",
        "Адаптивный дизайн",
        "CSS анимации",
      ],
    },
    {
      month: "02",
      title: "JavaScript Углублённо",
      topics: [
        "ES6+ синтаксис",
        "DOM манипуляции",
        "Async/Await",
        "Работа с API",
      ],
    },
    {
      month: "03",
      title: "React.js",
      topics: [
        "Структура компонентов",
        "useState & useEffect",
        "React Router",
        "Context API",
      ],
    },
    {
      month: "04",
      title: "TypeScript",
      topics: [
        "Типы и интерфейсы",
        "Generic типы",
        "React + TS",
        "Предотвращение ошибок",
      ],
    },
    {
      month: "05",
      title: "Tailwind & UI",
      topics: [
        "Utility-first CSS",
        "Библиотеки компонентов",
        "Dark mode",
        "Accessibility",
      ],
    },
    {
      month: "07",
      title: "Next.js",
      topics: ["SSR & SSG", "App Router", "Деплой", "SEO оптимизация"],
    },
    {
      month: "08",
      title: "Портфолио",
      topics: ["3 проекта", "GitHub профиль"],
    },
  ],

  pricing: {
    label: "// Цены",
    title1: "Подходящий",
    title2: "вариант для вас",
    monthly: "Месячно",
    yearly: "Годово",
    yearlySave: "−20% экономия",
    perMonth: "в месяц",
    perMonthYearly: "в месяц · годовая оплата",
  },

  pricing_data: [
    {
      name: "Бесплатно",
      monthlyPrice: 0,
      yearlyPrice: 0,
      period: "Всегда бесплатно",
      features: [
        { text: "Визуальные уроки (ограничено)", on: true },
        { text: "Code editor", on: false },
        { text: "AI помощник", on: false },
      ],
      cta: "Начать",
      featured: false,
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      yearlyPrice: 23,
      badge: "ПОПУЛЯРНЫЙ",
      features: [
        { text: "Все визуальные уроки", on: true },
        { text: "Code editor + AI чат", on: true },
        { text: "XP и уровни", on: true },
      ],
      cta: "Начать →",
      featured: true,
    },
    {
      name: "Курс",
      monthlyPrice: 199,
      yearlyPrice: 159,
      period: "8 месяцев, единоразово",
      features: [
        { text: "Всё из Pro +", on: true },
        { text: "Проверка ментором", on: true },
        { text: "Помощь с портфолио", on: true },
      ],
      cta: "Записаться на курс",
      featured: false,
    },
  ],

  faq: {
    label: "// Вопросы",
    title1: "Часто задаваемые",
    title2: "вопросы",
  },

  faqs_data: [
    {
      q: "Можно начать без опыта в программировании?",
      a: "Да, конечно! Курс начинается с нуля. Достаточно уметь пользоваться компьютером.",
    },
    {
      q: "Что выгоднее — месячная или годовая оплата?",
      a: "Годовая подписка экономит 20% — то есть 2 месяца бесплатно. Если планируете долго учиться — выбирайте годовую.",
    },
    {
      q: "Сколько длится каждый урок?",
      a: "Занимаясь 1-2 часа в день, вы станете полноценным разработчиком за 8 месяцев. Учитесь в своём темпе.",
    },
  ],

  cta: {
    badge: "Бесплатный старт — карта не нужна",
    title1: "Сделайте первый",
    title2: "шаг",
    title3: "сегодня",
    sub: "Зарегистрируйтесь и получите ранний доступ к первому уроку.",
    placeholder: "Ваш email адрес",
    btn: "Начать →",
    success: "Вы зарегистрированы! Скоро пришлём письмо.",
    spam: "Без спама · Отписаться в любой момент",
  },

  footer: {
    desc: "Платформа для изучения frontend на узбекском языке. Визуально, интерактивно, с AI помощником.",
    copyright: "© 2025 VizoCode. Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
  },

  footer_links: {
    Платформа: ["Курсы", "Карта пути", "Code Editor", "AI Помощник"],
    Компания: ["О нас", "Блог", "Карьера", "Пресса"],
    Помощь: ["FAQ", "Документация", "Сообщество", "Контакты"],
  },
  // ─── JS INTRO PAGE ──────────────────────────────────────────────────────────
  jsIntro: {
    topBar: {
      title: "JavaScript",
      subtitle: "— Введение",
      skip: "Пропустить →",
    },
    nav: { prev: "← Назад", next: "Далее →", start: "Начать уроки →" },

    s1: {
      label: "01 — Что такое JavaScript?",
      title: "Язык общения с браузером",
      sub: "JavaScript — это язык, которым ты отдаёшь команды браузеру. Ты пишешь — браузер выполняет.",
      cards: [
        { icon: "👤", title: "Ты", desc: "Пишешь код" },
        { icon: "📄", title: "JavaScript", desc: "Передаёт команды" },
        { icon: "🌐", title: "Браузер", desc: "Выполняет и показывает" },
      ],
      note: "JavaScript — это обычный текст. Браузер его читает и что-то делает на странице.",
    },

    s2: {
      label: "02 — Где работает?",
      title: "V8 — мозг JavaScript",
      sub: "Ты пишешь код → Браузер передаёт его движку V8 → V8 читает и выполняет. Больше ничего не нужно.",
      steps: [
        {
          icon: "✏️",
          label: "Ты пишешь код",
          desc: "Например: console.log('Привет')",
          color: "#c85c1a",
        },
        {
          icon: "📁",
          label: "Браузер получает",
          desc: "Chrome, Firefox, Safari...",
          color: "#185FA5",
        },
        {
          icon: "⚙️",
          label: "V8 читает",
          desc: "Понимает и переводит код",
          color: "#4a9e60",
        },
        {
          icon: "✅",
          label: "Результат",
          desc: "Видишь на экране",
          color: "#b07820",
        },
      ],
      note: "V8 — движок созданный Google. Работает внутри Chrome и Node.js. Ты его не видишь, но он всегда работает.",
    },

    s3: {
      label: "03 — HTML, CSS, JS — тройка",
      title: "Они работают вместе",
      sub: "Каждый делает своё. Без одного — не работает полностью.",
      trio: [
        {
          lang: "HTML",
          icon: "🦴",
          color: "#e34c26",
          role: "Структура",
          desc: "Определяет что есть на странице. Заголовок, кнопка, картинка — это HTML.",
          example: "<button>Нажми</button>",
        },
        {
          lang: "CSS",
          icon: "🎨",
          color: "#264de4",
          role: "Внешний вид",
          desc: "Определяет как выглядит. Цвет, размер, расположение — CSS.",
          example: "button { color: red; }",
        },
        {
          lang: "JS",
          icon: "⚡",
          color: "#f7df1e",
          role: "Действие",
          desc: "Определяет что делает. Что происходит при нажатии — JS.",
          example: "btn.onclick = () => {}",
        },
      ],
      connectionNote:
        "Внутри HTML файла есть ссылки на CSS и JS. Браузер загружает все три и использует вместе.",
      connectionCode: `<link rel="stylesheet" href="style.css">\n<script src="main.js"></script>`,
    },

    s4: {
      label: "04 — DevTools и console.log",
      title: "Глаза разработчика",
      sub: "console.log — твой первый инструмент. Проверять код, находить ошибки — всё здесь.",
      whatIs: "Что такое console.log?",
      whatIsDesc:
        "console — специальный объект браузера. log — его метод. Вместе: команда 'напиши в консоль браузера'.",
      howOpen: "Как открыть DevTools?",
      shortcuts: [
        { key: "F12", desc: "Самый быстрый способ" },
        { key: "Ctrl + Shift + I", desc: "Windows / Linux" },
        { key: "Cmd + Option + I", desc: "Mac" },
        { key: "Мышь → Inspect", desc: "Правая кнопка мыши" },
      ],
      examples: [
        {
          code: 'console.log("Привет!")',
          result: "Привет!",
          desc: "Вывод текста",
        },
        { code: "console.log(2 + 2)", result: "4", desc: "Вычисление" },
        {
          code: 'console.log(typeof "JS")',
          result: "string",
          desc: "Проверка типа",
        },
        {
          code: "console.error('Ошибка!')",
          result: "Ошибка!",
          desc: "Вывод ошибки",
          isError: true,
        },
      ],
      note: "console.log не меняет код. Только показывает. Используйте постоянно — стесняться не нужно.",
    },

    s5: {
      label: "05 — Ошибки — ваш друг",
      title: "Красный текст — не враг",
      sub: "Каждый разработчик делает ошибки. Ошибка — это компьютер говорит тебе где именно что-то не так.",
      types: [
        {
          name: "SyntaxError",
          color: "#e06c75",
          desc: "Ошибка написания. Скобка не закрыта, запятая забыта.",
          example: "console.log('Привет'",
          fix: "Закройте скобку: console.log('Привет')",
        },
        {
          name: "ReferenceError",
          color: "#c85c1a",
          desc: "Обращение к несуществующей переменной.",
          example: "console.log(name)",
          fix: "Сначала объявите: const name = 'Ali'",
        },
        {
          name: "TypeError",
          color: "#b07820",
          desc: "Операция с неправильным типом значения.",
          example: "null.toUpperCase()",
          fix: "Проверьте что значение не null и не undefined",
        },
      ],
      howToRead: "Как читать ошибку?",
      steps: [
        "Видите красный текст — это название ошибки",
        "После двоеточия — описание ошибки",
        "Справа — имя файла и номер строки",
        "Перейдите на эту строку и проверьте",
      ],
      note: "Увидели ошибку — не пугайтесь. Читайте, пытайтесь понять. Ищите название ошибки в Google — ответ найдётся всегда.",
    },
  },
  // ─── HTML INTRO PAGE ─────────────────────────────────────────────────────────
  htmlIntro: {
    topBar: { title: "HTML", subtitle: "— Введение", skip: "Пропустить →" },
    nav: { prev: "← Назад", next: "Далее →", start: "Начать уроки →" },

    s1: {
      label: "01 — Что такое HTML?",
      title: "Скелет веб-страницы",
      sub: "HTML говорит браузеру 'здесь заголовок, здесь картинка, здесь кнопка'. Это не про внешний вид — это про структуру.",
      analogy: {
        icon: "🏗️",
        title: "Метафора строителя",
        desc: "HTML — это чертёж здания. CSS — краска и декор. JS — лифты и двери. Без чертежа куда наносить краску?",
      },
      cards: [
        { icon: "🦴", title: "Структура", desc: "Что есть на странице" },
        { icon: "📝", title: "Содержимое", desc: "Текст, картинки, ссылки" },
        { icon: "📋", title: "Порядок", desc: "Как расположены элементы" },
      ],
      note: "HTML — не язык программирования. Это язык разметки. Вы говорите браузеру что есть, он показывает.",
    },

    s2: {
      label: "02 — Как работают теги?",
      title: "Открыть → Контент → Закрыть",
      sub: "Каждый HTML элемент находится между двумя тегами: открывающим и закрывающим. Это система коробок.",
      rule: "Каждый открытый тег должен быть закрыт. Это главное правило HTML.",
      examples: [
        {
          tag: "<h1>",
          close: "</h1>",
          content: "Текст заголовка",
          desc: "Самый большой заголовок",
          color: "#e34c26",
        },
        {
          tag: "<p>",
          close: "</p>",
          content: "Текст абзаца",
          desc: "Обычный блок текста",
          color: "#c85c1a",
        },
        {
          tag: "<a>",
          close: "</a>",
          content: "Текст ссылки",
          desc: "Переход на другую страницу",
          color: "#4a9e60",
        },
        {
          tag: "<img>",
          close: null,
          content: 'src="фото.jpg"',
          desc: "Закрывающий тег не нужен",
          color: "#185FA5",
        },
      ],
      note: "Некоторые теги самозакрывающиеся: <img>, <br>, <input>. В них нет содержимого.",
    },

    s3: {
      label: "03 — Как браузер читает HTML?",
      title: "DOM — Объектная модель документа",
      sub: "Браузер читает HTML и хранит его в памяти в виде дерева. Это дерево называется DOM. JavaScript потом работает с этим деревом.",
      steps: [
        {
          icon: "📄",
          label: "HTML файл",
          desc: "Код который вы написали",
          color: "#e34c26",
        },
        {
          icon: "🔍",
          label: "Браузер читает",
          desc: "Сверху вниз, строка за строкой",
          color: "#185FA5",
        },
        {
          icon: "🌳",
          label: "Строит DOM",
          desc: "Древовидная структура в памяти",
          color: "#4a9e60",
        },
        {
          icon: "🖥️",
          label: "Отображает",
          desc: "Видите на экране",
          color: "#b07820",
        },
      ],
      treeNote:
        "В DOM дереве каждый элемент — это узел (node). Parent, child, sibling — эти отношения критически важны для CSS и JS.",
    },

    s4: {
      label: "04 — Что такое атрибуты?",
      title: "Дополнительная информация для тегов",
      sub: "Атрибуты — это дополнительные настройки тега. Куда ведёт ссылка? Откуда загружается картинка? На эти вопросы отвечают атрибуты.",
      examples: [
        {
          code: '<a href="https://google.com">Google</a>',
          attr: "href",
          desc: "Адрес ссылки",
          color: "#4a9e60",
        },
        {
          code: '<img src="photo.jpg" alt="Картинка">',
          attr: "src, alt",
          desc: "Источник и описание картинки",
          color: "#185FA5",
        },
        {
          code: '<input type="text" placeholder="Введите">',
          attr: "type, placeholder",
          desc: "Тип поля и подсказка",
          color: "#c85c1a",
        },
        {
          code: '<div class="card" id="main">',
          attr: "class, id",
          desc: "Мишени для CSS",
          color: "#b07820",
        },
      ],
      note: "class и id — самые используемые атрибуты. class — для нескольких элементов, id — только для одного.",
    },

    s5: {
      label: "05 — Структура страницы",
      title: "Скелетная форма каждой страницы",
      sub: "Каждый HTML файл имеет одинаковую структуру. Этот шаблон говорит браузеру 'это полноценный HTML документ'.",
      skeleton: `<!DOCTYPE html>\n<html lang="ru">\n  <head>\n    <meta charset="UTF-8">\n    <title>Название страницы</title>\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n    <h1>Привет мир!</h1>\n    <p>Это моя первая страница.</p>\n    <script src="main.js"></script>\n  </body>\n</html>`,
      parts: [
        {
          tag: "<!DOCTYPE html>",
          desc: "Говорит браузеру: это HTML5",
          color: "#7a7468",
        },
        {
          tag: "<head>",
          desc: "Невидимая информация: title, CSS, meta",
          color: "#185FA5",
        },
        {
          tag: "<body>",
          desc: "Всё видимое находится здесь",
          color: "#e34c26",
        },
        {
          tag: "<script>",
          desc: "Подключение JS — в самом конце body",
          color: "#f7df1e",
        },
      ],
      note: "<script> в конце body — потому что JS должен запускаться когда HTML уже полностью загружен.",
    },
  },

  // ─── CSS INTRO PAGE ──────────────────────────────────────────────────────────
  cssIntro: {
    topBar: { title: "CSS", subtitle: "— Введение", skip: "Пропустить →" },
    nav: { prev: "← Назад", next: "Далее →", start: "Начать уроки →" },

    s1: {
      label: "01 — Что такое CSS?",
      title: "Язык который стилизует HTML",
      sub: "CSS — Cascading Style Sheets. Говорит HTML как выглядеть: цвет, размер, расположение, анимация. CSS — это красота которую вы видите.",
      analogy: {
        icon: "🎨",
        title: "Метафора художника",
        desc: "HTML — это карандашный набросок. CSS — краски. Из одного HTML с разным CSS получаются совершенно разные сайты.",
      },
      cards: [
        { icon: "🎨", title: "Цвет", desc: "Цвет, фон, границы" },
        { icon: "📐", title: "Размер", desc: "Ширина, высота, шрифт" },
        { icon: "📍", title: "Расположение", desc: "Flexbox, Grid, Position" },
      ],
      note: "CSS — не язык программирования. Это язык описания. Вы говорите 'этот элемент должен быть красным', браузер делает.",
    },

    s2: {
      label: "02 — Как работает CSS?",
      title: "Селектор → Свойство → Значение",
      sub: "Каждое CSS правило состоит из трёх частей: кому (селектор), что (свойство), как (значение).",
      rule: "p { color: red; } означает 'все элементы p должны быть красными'.",
      parts: [
        {
          name: "Селектор",
          example: "p",
          desc: "Кому применяем стиль",
          color: "#c85c1a",
        },
        {
          name: "Свойство",
          example: "color",
          desc: "Что меняем",
          color: "#185FA5",
        },
        {
          name: "Значение",
          example: "red",
          desc: "Как меняем",
          color: "#4a9e60",
        },
      ],
      selectors: [
        { sel: "p", desc: "Все элементы p", color: "#e34c26" },
        { sel: ".card", desc: "Элементы с классом card", color: "#c85c1a" },
        { sel: "#main", desc: "Один элемент с id main", color: "#185FA5" },
        { sel: "h1, h2", desc: "И h1 и h2", color: "#4a9e60" },
      ],
      note: "Чем конкретнее селектор, тем он мощнее. Это Specificity — ключевая концепция CSS.",
    },

    s3: {
      label: "03 — Что такое Cascade?",
      title: "Почему CSS называется 'Cascading'",
      sub: "К одному элементу может применяться несколько правил. Браузер решает какое победит по точному порядку.",
      rules: [
        {
          priority: "1",
          title: "!important",
          desc: "Самое мощное. Побеждает всё. Не злоупотребляйте.",
          color: "#e06c75",
        },
        {
          priority: "2",
          title: "Inline стиль",
          desc: 'Написан прямо в HTML: style="color:red"',
          color: "#c85c1a",
        },
        {
          priority: "3",
          title: "ID селектор",
          desc: "#main { } — для одного конкретного элемента",
          color: "#185FA5",
        },
        {
          priority: "4",
          title: "Class селектор",
          desc: ".card { } — для нескольких элементов",
          color: "#4a9e60",
        },
        {
          priority: "5",
          title: "Тег селектор",
          desc: "p { } — для всех p элементов",
          color: "#7a7468",
        },
      ],
      note: "При одинаковой силе — побеждает последнее написанное правило. Это 'Cascade' — как водопад сверху вниз.",
    },

    s4: {
      label: "04 — Box Model",
      title: "Каждый элемент — коробка",
      sub: "В CSS каждый элемент — это прямоугольная коробка. У этих коробок 4 слоя. Без понимания этого нельзя делать layout.",
      layers: [
        {
          name: "Content",
          desc: "Основной контент: текст, картинка",
          color: "#185FA5",
        },
        {
          name: "Padding",
          desc: "Внутренний отступ вокруг контента",
          color: "#4a9e60",
        },
        { name: "Border", desc: "Граница — видимая или нет", color: "#c85c1a" },
        {
          name: "Margin",
          desc: "Внешний отступ от других элементов",
          color: "#b07820",
        },
      ],
      tip: "Напишите box-sizing: border-box — padding и border включаются в ширину. Это стандартный подход.",
      note: "В DevTools наведите мышь на элемент — покажется box model. Это очень удобно.",
    },

    s5: {
      label: "05 — Куда писать CSS?",
      title: "Три способа — один правильный",
      sub: "CSS можно писать в трёх местах. Но профессиональный способ — отдельный файл.",
      methods: [
        {
          title: "Отдельный файл (Правильно)",
          code: '<link rel="stylesheet" href="style.css">',
          pros: "Упорядоченно, переиспользуется, кешируется",
          color: "#4a9e60",
          recommended: true,
        },
        {
          title: "Внутри тега style",
          code: "<style>\n  p { color: red; }\n</style>",
          pros: "Подходит для маленьких проектов",
          color: "#185FA5",
          recommended: false,
        },
        {
          title: "Inline стиль (Избегать)",
          code: '<p style="color: red;">Текст</p>',
          pros: "Только в крайнем случае",
          color: "#e06c75",
          recommended: false,
        },
      ],
      note: "Inline стили нарушают specificity и делают код нечитаемым. Всегда используйте отдельный CSS файл.",
    },
  },

  // ─── COURSES PAGE ───────────────────────────────────────────────────────────
  courses: {
    label: "// Курсы",
    title: "Учебный путь",
    lessonsCompleted: "уроков пройдено",
    getPro: "Получить PRO",
    free: "бесплатно",
    interactive: "интерактивно",
    proModal: {
      title: "Pro подписка",
      desc: "Все уроки, интерактивные визуалы и редактор кода. Начните прямо сейчас.",
      features: [
        "96 полных уроков",
        "Интерактивные визуальные объяснения",
        "Live редактор кода + превью",
        "Система Quiz и XP",
        "Проекты и экзамены",
      ],
      cta: "Получить Pro — $19/мес",
      close: "Закрыть",
    },
  },

  // ─── INTRO PAGE ─────────────────────────────────────────────────────────────
  intro: {
    topBar: {
      title: "VizoCode",
      subtitle: "— Вводный урок",
      skip: "Пропустить →",
    },
    nav: {
      prev: "← Назад",
      next: "Далее →",
      start: "Начать уроки →",
    },
    s1: {
      label: "01 — Что такое компьютер?",
      title: "Компьютер — что это за устройство?",
      sub: "Компьютер — электронное устройство для обработки, хранения и передачи данных. Нажмите и загляните внутрь 👇",
      hint: "👆 Нажмите, чтобы открыть",
      opened: "Открыто!",
      closed: "Нажми",
    },
    s2: {
      label: "02 — Внутреннее устройство",
      title: "Что внутри компьютера?",
      sub: "Нажмите на каждый компонент и узнайте его функцию",
      clickHint: "👆 Нажмите на компонент",
      cpu: {
        title: "Процессор (CPU)",
        desc: "«Мозг» компьютера. Выполняет все вычисления и инструкции. Миллиарды операций в секунду.",
      },
      ram: {
        title: "Оперативная память (RAM)",
        desc: "«Рабочий стол» памяти. Временно хранит данные, с которыми работаешь сейчас. При выключении очищается.",
      },
      gpu: {
        title: "Видеокарта (GPU)",
        desc: "Для графики и изображений. Тысячи маленьких ядер. Незаменима для параллельных вычислений.",
      },
      ssd: {
        title: "Жёсткий диск (SSD/HDD)",
        desc: "Постоянная память. Хранит файлы, программы, ОС. Данные сохраняются при выключении.",
      },
      mb: {
        title: "Материнская плата (Motherboard)",
        desc: "Соединяет все компоненты. CPU, RAM, GPU и остальные подключаются к ней.",
      },
    },
    s3: {
      label: "03 — Ввод / Вывод",
      title: "Работа с устройствами",
      sub: "Устройства ввода и вывода данных. Нажмите, чтобы подключить/отключить!",
      inputLabel: "Устройства ввода (Input)",
      outputLabel: "Устройства вывода (Output)",
      input: [
        { icon: "⌨️", name: "Клавиатура", desc: "Ввод текста и команд" },
        { icon: "🖱️", name: "Мышь", desc: "Указатель и клики" },
        { icon: "🎤", name: "Микрофон", desc: "Ввод звука" },
        { icon: "📷", name: "Камера", desc: "Ввод изображения" },
      ],
      output: [
        { icon: "🖥️", name: "Монитор", desc: "Отображение картинки" },
        { icon: "🖨️", name: "Принтер", desc: "Печать на бумаге" },
        { icon: "🔊", name: "Колонки", desc: "Вывод звука" },
        { icon: "📱", name: "Проектор", desc: "Вывод на большой экран" },
      ],
    },
    s4: {
      label: "04 — Единицы памяти",
      title: "Бит, Байт, ГБ... в чём разница?",
      sub: "Единицы памяти от меньшего к большему. Нажмите, чтобы увидеть примеры.",
      units: [
        { unit: "Бит", val: "0 или 1", example: "Наименьшая единица данных" },
        { unit: "Байт", val: "8 бит", example: "1 символ (например: 'A')" },
        { unit: "КБ", val: "1 024 Байт", example: "~1 короткое SMS" },
        {
          unit: "МБ",
          val: "1 024 КБ",
          example: "~1 минута музыки или 1 000 маленьких фото",
        },
        { unit: "ГБ", val: "1 024 МБ", example: "~1 000 фото или один фильм" },
        {
          unit: "ТБ",
          val: "1 024 ГБ",
          example: "~500 000 песен или 200 фильмов",
        },
        { unit: "ПБ", val: "1 024 ТБ", example: "Объём крупных дата-центров" },
      ],
    },
    s5: {
      label: "05 — Программное обеспечение",
      title: "Слои программного обеспечения",
      sub: "Программы делятся на слои. Нажмите на слой, чтобы узнать о нём.",
      layers: [
        {
          label: "Прикладные программы",
          sublabel: "Браузер, Офис, Игры",
          desc: "Программы, которые пользователь использует напрямую. Chrome, Word, Photoshop — всё это прикладные программы.",
        },
        {
          label: "Системные программы",
          sublabel: "Драйверы, Утилиты",
          desc: "Обеспечивают работу с устройствами. Драйвер принтера, антивирус — системные программы.",
        },
        {
          label: "Операционная система",
          sublabel: "Windows · macOS · Linux",
          desc: "Главная система, управляющая всеми программами. Мост между пользователем и железом.",
        },
        {
          label: "Железо (Hardware)",
          sublabel: "CPU · RAM · SSD · GPU",
          desc: "Физические устройства. Программы работают поверх железа.",
        },
      ],
    },
    s6: {
      label: "06 — Как работает интернет?",
      title: "Один URL — много шагов",
      sub: "Что происходит за 0.1 секунды, когда вы вводите google.com в браузер?",
      steps: [
        { icon: "🌐", label: "Браузер", desc: "Вводите URL: google.com" },
        { icon: "📖", label: "DNS", desc: "IP адрес: 142.250.190.78" },
        { icon: "🖥️", label: "Сервер", desc: "Файлы HTML/CSS/JS" },
        { icon: "📄", label: "Ответ", desc: "Браузер показывает страницу" },
      ],
      tipLabel: "💡 Вопрос",
      tip: "Кто пишет HTML, CSS и JavaScript файлы, которые возвращает сервер?",
      tipQ: "",
      tipA: "→ Frontend разработчики!",
    },
    s7: {
      label: "07 — Языки Frontend",
      title: "3 языка для создания веба",
      sub: "Нажмите на каждый язык, чтобы увидеть описание и пример кода",
      frameworksLabel: "+ Фреймворки (изучите позже)",
      langs: [
        {
          lang: "HTML",
          emoji: "🦴",
          metaphor: "Скелет",
          desc: "Структура страницы. Заголовки, параграфы, картинки, кнопки — всё это HTML теги.",
          code: "<h1>Привет!</h1>\n<p>Это параграф.</p>\n<button>Нажми</button>",
        },
        {
          lang: "CSS",
          emoji: "🎨",
          metaphor: "Одежда",
          desc: "Внешний вид и дизайн. Цвета, шрифты, расположение — всё это CSS.",
          code: "h1 {\n  color: #c85c1a;\n  font-size: 32px;\n}",
        },
        {
          lang: "JavaScript",
          emoji: "⚡",
          metaphor: "Движение",
          desc: "Интерактивность и логика. Что происходит при нажатии кнопки, анимации — это JS!",
          code: "btn.addEventListener(\n  'click',\n  () => alert('Привет!')\n)",
        },
      ],
    },
    s8: {
      label: "08 — О Backend",
      title: "Невидимая часть айсберга",
      sub: "Веб — это не только то, что видно. Большая работа происходит «под водой».",
      waterLine: "─────── поверхность воды ───────",
      frontendLabel: "FRONTEND",
      frontendSub: "Видимая часть",
      backendLabel: "BACKEND",
      backendSub: "Невидимая часть (на стороне сервера)",
      courseNote: "В этом курсе мы",
      courseNoteBold: "Frontend",
      courseNoteSuffix: "сосредоточимся только на нём.",
      coursePath: "HTML → CSS → JavaScript → React → Next.js",
      readyLabel: "Готовы?",
      ctaBtn: "Начать уроки →",
      ctaSub: "8 модулей · 96 уроков · Практические проекты",
    },
  },

  // ─── LESSON UI ──────────────────────────────────────────────────────────────
  lesson: {
    phases: {
      theory: "Теория",
      explain: "Что это?",
      learn: "Как работает?",
      code: "Напиши сам",
    },
    back: "Назад",
    prev: "Предыдущий",
    next: "Следующий",
    prevPhase: "Предыдущий этап",
    nextPhase: "Следующий этап",
    quizLabel: "Вопрос",
    check: "Проверить",
    correct: "✓ Верно!",
    wrong: "✗ Неверно.",
    comingSoon: "Скоро",
    comingSoonSub: "Этот урок готовится",
  },

  // ─── MODULES ────────────────────────────────────────────────────────────────
  modules: {
    htmlCss: {
      title: "HTML & CSS",
      weeks: "6 недель",
      lessons: {
        howWebWorks: "How the internet and browser work",
        htmlBasics: "HTML: page skeleton",
        textLinksImg: "Text, links, images",
        formsTables: "Lists, tables, forms",
        semanticHtml: "Semantic HTML",
        cssIntro: "CSS: how styles work",
        colorsFonts: "Color, font, text",
        boxModel: "Box Model",
        flexbox: "Display and Flexbox",
        grid: "CSS Grid",
        github: "GitHub — version control",
        projectLanding: "Project: build a Figma landing page",
      },
    },
    cssSass: {
      title: "CSS Advanced & SASS",
      weeks: "5 недель",
      lessons: {
        position: "Position: relative, absolute, fixed",
        pseudo: "Pseudo-classes and pseudo-elements",
        transforms: "Transform and shadows",
        animations: "CSS Animations",
        gradients: "Gradients and backgrounds",
        responsive: "Responsive design",
        figmaCss: "Figma → CSS: working with a mockup",
        transition: "CSS Transition",
        sassBasics: "SASS: variables, nesting",
        sassAdvanced: "SASS: mixins, import, 7-1",
        tailwind: "Tailwind CSS",
        examFigma: "Exam: build a Figma mockup",
      },
    },
    javascript: {
      title: "JavaScript — Basics",
      weeks: "5 недель",
      lessons: {
        jsIntro: "What is JavaScript and why",
        variables: "Variables and data types",
        operators: "Operators and expressions",
        conditions: "Conditions: if/else, switch, ternary",
        loops: "Loops: for, while, do...while",
        functions: "Functions",
        strings: "Strings and string methods",
        arrays: "Arrays and array methods",
        objects: "Objects",
        mathDate: "Math, Date, random numbers",
        destructuring: "Destructuring and spread/rest",
        arrayMethods: "Functional array methods",
      },
    },
    advancedJs: {
      title: "Advanced JavaScript",
      weeks: "5 недель",
      lessons: {
        hoisting: "Execution Context and Hoisting",
        closure: "Scope and Closure",
        fnTypes: "Function types and IIFE",
        hof: "HOF, currying, pipe",
        prototypes: "Prototypes and OOP",
        classes: "Classes: inheritance, encapsulation",
        mapSet: "Map, Set, WeakMap, WeakSet",
        errors: "Error handling",
        eventLoop: "Async: Event Loop",
        promise: "Promise",
        asyncAwait: "async/await and Fetch API",
        codewars: "Codewars — algorithms",
      },
    },
    jsDom: {
      title: "JavaScript DOM",
      weeks: "5 недель",
      lessons: {
        domIntro: "What is DOM and its structure",
        domSelect: "Selecting and traversing elements",
        domStyle: "Changing styles and classes",
        domCreate: "Creating and removing elements",
        domAttrs: "Attributes and data-attributes",
        events: "Events: click, keyboard, scroll",
        bubbling: "Bubbling, capturing, delegation",
        modules: "JS Modules (ES Modules)",
        storage: "LocalStorage and JSON",
        fetchDom: "Fetch + DOM: real data",
        crudStorage: "CRUD with LocalStorage",
        examSpa: "Exam: SPA without a framework",
      },
    },
    react: {
      title: "React",
      weeks: "6 недель",
      lessons: {
        reactIntro: "Why React: Virtual DOM",
        components: "Components, JSX, project structure",
        propsMapping: "Props and mapping",
        usestate: "useState: state management",
        reactEvents: "Handling events in React",
        useeffect: "useEffect: lifecycle",
        axios: "Axios and working with APIs",
        router: "React Router DOM",
        optimization: "useRef, memo, useCallback, useMemo",
        context: "useReducer and useContext",
        customHooks: "Custom hooks, i18n",
        reactProject: "Project: full React application",
      },
    },
    redux: {
      title: "Redux & React Ecosystem",
      weeks: "5 недель",
      lessons: {
        rtkBasics: "Redux Toolkit: store, slice, actions",
        rtkThunk: "RTK: async thunk and extraReducers",
        rtkQuery: "RTK Query",
        zustand: "Zustand",
        protected: "Protected routes and authentication",
        validation: "Form validation: Yup + RHF",
        uiLibs: "UI libraries: Ant Design",
        swagger: "Swagger, Postman, FormData",
        lazy: "Lazy loading, Suspense",
        charts: "Charts: Chart.js / recharts",
        pagination: "Pagination, filtering, search",
        admin: "Project: Admin Panel",
      },
    },
    nextTs: {
      title: "Next.js & TypeScript",
      weeks: "5 недель",
      lessons: {
        tsIntro: "TypeScript: what are static types",
        tsTypes: "Types, interfaces, union, generics",
        tsClasses: "TS: classes, guard, assertion",
        reactTs: "React + TypeScript",
        nextRendering: "Next.js: CSR / SSR / SSG / ISR",
        appRouter: "App Router: structure and routing",
        serverClient: "Server vs Client components",
        dataFetching: "Data fetching in Next.js",
        optimization: "Optimization: Image, Font, Meta",
        middleware: "Middleware and Route Handlers",
        finalPrep: "Final project: preparation",
        finalExam: "Final exam",
      },
    },
  },

  // ─── INDIVIDUAL LESSON CONTENT ──────────────────────────────────────────────
  lessons: {
    boxModel: {
      title: "Box Model — блочная модель",
      explain: {
        intro:
          "Каждый HTML элемент — это блок (box). Эти блоки состоят из 4 слоёв. Нажмите на слой — увидите объяснение.",
        hint: "Нажмите на слой — увидите объяснение",
        margin:
          "Пустое пространство снаружи элемента. Отодвигает соседние элементы.",
        border: "Граница вокруг элемента. Может иметь толщину, цвет и стиль.",
        padding:
          "Пространство между контентом и border. Внутренний отступ элемента.",
        content: "Основной контент: текст, изображение или другие элементы.",
      },
      learn: {
        intro: "Двигайте ползунки и наблюдайте, как меняется блок:",
      },
      quiz: {
        q: "Выберите порядок CSS box model (изнутри наружу):",
        options: [
          "margin → border → padding → content",
          "content → padding → border → margin",
          "padding → content → margin → border",
          "border → padding → margin → content",
        ],
        correct: 1,
        explain:
          "Правильный порядок: content → padding → border → margin. Каждый слой обёртывает предыдущий.",
      },
    },
    flexbox: {
      title: "Display и Flexbox",
      explain: {
        intro:
          "Flexbox — удобный способ расположить элементы в строку или колонку. Одно свойство —",
        intro2: "— меняет всё.",
        tipLabel: "Главная идея:",
        tip: "Добавьте display: flex к родительскому элементу, и дочерние автоматически выстроятся в ряд.",
      },
      learn: {
        intro: "Нажимайте кнопки и наблюдайте, как работает flexbox:",
      },
      quiz: {
        q: "Что делает `justify-content: space-between`?",
        options: [
          "Располагает элементы по центру",
          "Равное пространство между элементами, прижатыми к краям",
          "Сближает элементы друг с другом",
          "Располагает элементы вертикально",
        ],
        correct: 1,
        explain:
          "space-between: первый и последний элемент прижаты к краям, пространство между ними делится поровну.",
      },
    },
    hoisting: {
      title: "Execution Context и Hoisting",
      explain: {
        step0: {
          title: "JS читает код в 2 этапа",
          desc: "Перед выполнением JavaScript просматривает код один раз. Это называется «фаза создания» (Creation Phase).",
          phase1: "1. Фаза создания",
          phase2: "2. Фаза выполнения",
        },
        step1: {
          title: "var — поднимается (с undefined)",
          desc: "В фазе создания переменные с var обнаруживаются и им присваивается undefined.",
          yourCode: "ВАШ КОД",
          jsCode: "КАК ВИДИТ JS",
        },
        step2: {
          title: "let — TDZ (Temporal Dead Zone)",
          desc: "let и const тоже поднимаются, но без значения. Попытка использовать — ошибка!",
          withVar: "С var",
          withLet: "С let",
        },
      },
      learn: {
        intro:
          "Смотрите код в 2 этапа — наблюдайте, как меняются значения переменных на каждом этапе:",
        creation: "1. Фаза создания",
        execution: "2. Фаза выполнения",
        codeLabel: "КОД",
        memoryLabel: "ПАМЯТЬ (Memory)",
      },
      quiz: {
        q: "Как `var` и `let` отличаются при hoisting?",
        options: [
          "Нет разницы",
          "var — с undefined, let — в TDZ",
          "let — с undefined, var — в TDZ",
          "Оба недоступны",
        ],
        correct: 1,
        explain:
          "var в фазе объявления получает undefined. let находится в TDZ (Temporal Dead Zone) — использовать до объявления нельзя.",
      },
    },
  },

  "dom-intro": {
    explain: {
      title: "Введение в DOM",
      body: "DOM (Document Object Model) — это древовидное представление HTML-страницы. Каждый тег, атрибут и текст становится узлом. JavaScript может читать и изменять эти узлы — именно так работают динамические веб-страницы.",
    },
    learn: {
      title: "Что такое DOM?",
      items: [
        "DOM — дерево объектов, представляющих HTML-документ",
        "Каждый HTML-элемент является узлом в дереве",
        "JavaScript обращается к узлам через объект `document`",
        "`document.getElementById('id')` — найти элемент по id",
        "`document.querySelector('.class')` — найти по CSS-селектору",
        "Браузер строит DOM при загрузке страницы",
      ],
    },
    quiz: {
      q: "Что означает аббревиатура DOM?",
      options: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Manager",
        "Document Oriented Markup",
      ],
      correct: 1,
      explain:
        "DOM — Document Object Model. Это представление HTML-документа в виде дерева объектов, с которым взаимодействует JavaScript.",
    },
  },

  "dom-selecting": {
    explain: {
      title: "Выбор элементов DOM",
      body: "Прежде чем что-то менять на странице, нужно найти элемент. JavaScript предоставляет несколько методов: getElementById, querySelector, querySelectorAll, getElementsByClassName и другие.",
    },
    learn: {
      title: "Как выбирать элементы",
      items: [
        "`document.getElementById('id')` — по id (возвращает один элемент)",
        "`document.querySelector('selector')` — первое совпадение по CSS-селектору",
        "`document.querySelectorAll('selector')` — все совпадения (NodeList)",
        "`document.getElementsByClassName('cls')` — по имени класса",
        "`document.getElementsByTagName('tag')` — по имени тега",
        "querySelectorAll возвращает статический NodeList; перебирайте через forEach",
      ],
    },
    quiz: {
      q: "Какой метод возвращает ВСЕ элементы, соответствующие CSS-селектору?",
      options: [
        "getElementById",
        "querySelector",
        "querySelectorAll",
        "getElementsById",
      ],
      correct: 2,
      explain:
        "querySelectorAll возвращает NodeList всех элементов, соответствующих заданному CSS-селектору.",
    },
  },

  "dom-styling": {
    explain: {
      title: "Изменение стилей через DOM",
      body: "Вы можете динамически менять внешний вид элемента с помощью свойства `style` или добавляя/убирая CSS-классы через `classList`.",
    },
    learn: {
      title: "Стилизация DOM-элементов",
      items: [
        "`element.style.color = 'red'` — задать inline CSS-свойство",
        "`element.style.fontSize = '20px'` — camelCase для CSS-свойств",
        "`element.classList.add('active')` — добавить CSS-класс",
        "`element.classList.remove('active')` — убрать CSS-класс",
        "`element.classList.toggle('active')` — переключить CSS-класс",
        "`element.classList.contains('active')` — проверить наличие класса",
      ],
    },
    quiz: {
      q: "Как переключить CSS-класс на элементе?",
      options: [
        "element.style.toggle('cls')",
        "element.classList.toggle('cls')",
        "element.class.toggle('cls')",
        "element.toggleClass('cls')",
      ],
      correct: 1,
      explain:
        "element.classList.toggle('cls') добавляет класс, если его нет, или убирает, если он уже есть.",
    },
  },

  "dom-manipulating": {
    explain: {
      title: "Манипуляции с DOM",
      body: "Вы можете создавать новые элементы, менять их содержимое, вставлять и удалять их со страницы динамически с помощью JavaScript.",
    },
    learn: {
      title: "Создание и изменение элементов",
      items: [
        "`document.createElement('tag')` — создать новый элемент",
        "`element.textContent = 'text'` — задать текстовое содержимое",
        "`element.innerHTML = '<b>text</b>'` — задать HTML-содержимое",
        "`parent.appendChild(child)` — добавить дочерний элемент в конец",
        "`parent.removeChild(child)` — удалить дочерний элемент",
        "`element.remove()` — удалить элемент напрямую",
        "`parent.insertBefore(newEl, refEl)` — вставить перед указанным элементом",
      ],
    },
    quiz: {
      q: "Какой метод добавляет дочерний элемент в конец родителя?",
      options: [
        "parent.insertChild(child)",
        "parent.addChild(child)",
        "parent.appendChild(child)",
        "parent.append(child, 'end')",
      ],
      correct: 2,
      explain:
        "parent.appendChild(child) вставляет дочерний узел в конец списка детей родителя.",
    },
  },

  "dom-attributes": {
    explain: {
      title: "Работа с атрибутами",
      body: "HTML-атрибуты, такие как `src`, `href`, `disabled` и `data-*`, можно читать и изменять через JavaScript с помощью getAttribute, setAttribute и связанных методов.",
    },
    learn: {
      title: "Методы для атрибутов",
      items: [
        "`element.getAttribute('attr')` — получить значение атрибута",
        "`element.setAttribute('attr', 'value')` — задать атрибут",
        "`element.removeAttribute('attr')` — удалить атрибут",
        "`element.hasAttribute('attr')` — проверить наличие атрибута",
        "`element.dataset.name` — обратиться к атрибуту data-name",
        "Прямые свойства: `img.src`, `a.href`, `input.value`",
      ],
    },
    quiz: {
      q: "Как задать атрибут DOM-элементу?",
      options: [
        "element.attr('name', 'value')",
        "element.setAttribute('name', 'value')",
        "element.addAttribute('name', 'value')",
        "element['name'] = 'value'",
      ],
      correct: 1,
      explain:
        "element.setAttribute('name', 'value') устанавливает или обновляет указанный атрибут элемента.",
    },
  },

  "dom-events": {
    explain: {
      title: "События DOM",
      body: "События позволяют реагировать на действия пользователя: клики, нажатия клавиш, отправку форм, движения мыши. Обработчики привязываются к элементам через addEventListener.",
    },
    learn: {
      title: "Обработка событий",
      items: [
        "`element.addEventListener('click', handler)` — привязать обработчик",
        "`element.removeEventListener('click', handler)` — отвязать обработчик",
        "Частые события: click, input, submit, keydown, mouseover, scroll",
        "Объект события `e` содержит информацию о событии",
        "`e.target` — элемент, вызвавший событие",
        "`e.preventDefault()` — отменить поведение браузера по умолчанию",
        "`e.stopPropagation()` — остановить всплытие события",
      ],
    },
    quiz: {
      q: "Какой метод привязывает обработчик события к DOM-элементу?",
      options: [
        "element.on('click', fn)",
        "element.addEvent('click', fn)",
        "element.addEventListener('click', fn)",
        "element.listen('click', fn)",
      ],
      correct: 2,
      explain:
        "addEventListener — стандартный метод для привязки обработчика события к DOM-элементу.",
    },
  },

  "dom-delegation": {
    explain: {
      title: "Делегирование событий",
      body: "Вместо того чтобы вешать обработчики на множество дочерних элементов, достаточно повесить один обработчик на родителя. При клике на дочернем элементе событие всплывает до родителя. Используйте `e.target`, чтобы определить, на каком именно дочернем элементе произошло событие.",
    },
    learn: {
      title: "Зачем использовать делегирование?",
      items: [
        "События по умолчанию всплывают от дочернего к родительскому элементу",
        "Один обработчик на родителе обрабатывает события всех детей",
        "Работает и для динамически добавленных элементов",
        "`e.target` — фактический элемент, на котором произошёл клик",
        "`e.target.matches('selector')` — проверить, подходит ли target под селектор",
        "Эффективнее, чем вешать N обработчиков на N детей",
      ],
    },
    quiz: {
      q: "Что такое делегирование событий?",
      options: [
        "Передача события другой функции",
        "Привязка обработчика к родителю для обработки событий дочерних элементов",
        "Отмена срабатывания событий",
        "Создание кастомных событий",
      ],
      correct: 1,
      explain:
        "Делегирование событий использует всплытие — обработчик на родителе обрабатывает события его детей, определяя источник через e.target.",
    },
  },

  "js-modules": {
    explain: {
      title: "Модули JavaScript",
      body: "Модули позволяют разбить код на отдельные файлы. Каждый файл может экспортировать функции, классы или значения, а другие файлы — импортировать их. Это делает код организованным и переиспользуемым.",
    },
    learn: {
      title: "Синтаксис ES-модулей",
      items: [
        "`export function foo() {}` — именованный экспорт",
        "`export default function() {}` — экспорт по умолчанию",
        "`import { foo } from './file.js'` — именованный импорт",
        "`import foo from './file.js'` — импорт по умолчанию",
        "`import * as utils from './file.js'` — импортировать всё",
        "Добавьте `type='module'` в тег script в HTML",
        "Модули по умолчанию работают в строгом режиме",
      ],
    },
    quiz: {
      q: "Как экспортировать именованную функцию из модуля?",
      options: [
        "module.export = function foo() {}",
        "export function foo() {}",
        "exports.foo = function() {}",
        "export.named = function foo() {}",
      ],
      correct: 1,
      explain:
        "export function foo() {} — синтаксис ES-модулей для именованного экспорта. Импортируется как import { foo } from './file.js'.",
    },
  },

  localstorage: {
    explain: {
      title: "localStorage",
      body: "localStorage — браузерный API для сохранения пар ключ-значение. Данные сохраняются при перезагрузке страницы и даже после перезапуска браузера. Значения всегда строки.",
    },
    learn: {
      title: "Работа с localStorage",
      items: [
        "`localStorage.setItem('key', 'value')` — сохранить данные",
        "`localStorage.getItem('key')` — прочитать данные",
        "`localStorage.removeItem('key')` — удалить ключ",
        "`localStorage.clear()` — очистить все данные",
        "Значения — строки; для объектов используйте JSON.stringify/parse",
        "`JSON.stringify(obj)` — преобразовать объект в строку",
        "`JSON.parse(str)` — преобразовать строку обратно в объект",
      ],
    },
    quiz: {
      q: "Как сохранить объект в localStorage?",
      options: [
        "localStorage.setItem('key', obj)",
        "localStorage.setItem('key', JSON.stringify(obj))",
        "localStorage.save(obj)",
        "localStorage.store('key', obj)",
      ],
      correct: 1,
      explain:
        "localStorage хранит только строки. Используйте JSON.stringify(obj) перед сохранением и JSON.parse() при чтении.",
    },
  },

  "fetch-dom": {
    explain: {
      title: "Fetch API и DOM",
      body: "Fetch API позволяет асинхронно загружать данные с сервера. После получения данных вы можете использовать методы DOM для их отображения на странице без перезагрузки.",
    },
    learn: {
      title: "Загрузка данных и обновление DOM",
      items: [
        "`fetch(url)` — возвращает Promise",
        "`.then(res => res.json())` — разобрать JSON-ответ",
        "`.then(data => { /* использовать данные */ })` — обработать данные",
        "`.catch(err => { /* обработать ошибку */ })` — обработать ошибки",
        "Или используйте `async/await` для более чистого синтаксиса",
        "После загрузки создавайте элементы и добавляйте в DOM",
        "Всегда обрабатывайте состояния загрузки и ошибки в интерфейсе",
      ],
    },
    quiz: {
      q: "Что возвращает fetch()?",
      options: [
        "Данные напрямую",
        "Promise",
        "Callback",
        "Объект XMLHttpRequest",
      ],
      correct: 1,
      explain:
        "fetch() возвращает Promise, который разрешается в объект Response. Вызовите .json() для разбора тела ответа как JSON.",
    },
  },

  "crud-localstorage": {
    explain: {
      title: "CRUD с localStorage",
      body: "CRUD — это Создание, Чтение, Обновление, Удаление (Create, Read, Update, Delete) — четыре базовые операции для управления данными. Можно реализовать полноценное CRUD-приложение, используя localStorage как хранилище и DOM для интерфейса.",
    },
    learn: {
      title: "CRUD-операции",
      items: [
        "Create — добавить новый элемент и сохранить обновлённый массив",
        "Read — загрузить элементы из localStorage и отобразить в DOM",
        "Update — найти элемент по id, изменить значение, сохранить снова",
        "Delete — отфильтровать элемент по id, сохранить новый массив",
        "Хранить данные как JSON-массив: JSON.stringify(array)",
        "Генерировать уникальные id: Date.now() или crypto.randomUUID()",
        "Перерисовывать список после каждой операции",
      ],
    },
    quiz: {
      q: "Как удалить элемент в CRUD-приложении с localStorage?",
      options: [
        "localStorage.delete(id)",
        "Отфильтровать его из массива и сохранить новый массив",
        "Установить его значение в null",
        "Вызвать removeItem с содержимым элемента",
      ],
      correct: 1,
      explain:
        "Отфильтруйте элемент (items.filter(i => i.id !== id)), затем сохраните новый массив через JSON.stringify обратно в localStorage.",
    },
  },

  "spa-exam": {
    explain: {
      title: "Экзаменационный проект SPA",
      body: "Single Page Application (SPA) — одностраничное приложение, которое обновляет контент динамически без перезагрузки страницы. В этом экзаменационном проекте вы создадите небольшое SPA с использованием vanilla JS, манипуляций с DOM, localStorage и Fetch API.",
    },
    learn: {
      title: "Ключевые концепции SPA",
      items: [
        "SPA — один HTML-файл, контент меняется через JavaScript",
        "Используйте роутер для показа/скрытия секций по URL-хэшу",
        "Храните состояние приложения в JS-объекте или localStorage",
        "Перерисовывайте интерфейс при каждом изменении состояния",
        "Разделяйте ответственность: слой данных, слой отображения, слой событий",
        "Используйте модули для организации кода по файлам",
        "Проверьте CRUD, fetch и обновления DOM перед сдачей",
      ],
    },
    quiz: {
      q: "Что определяет одностраничное приложение (SPA)?",
      options: [
        "В нём только один CSS-файл",
        "В нём никогда не используется JavaScript",
        "Контент обновляется динамически без полной перезагрузки страницы",
        "Оно может показывать только один компонент одновременно",
      ],
      correct: 2,
      explain:
        "SPA загружает одну HTML-страницу и динамически обновляет её содержимое через JavaScript — без полной перезагрузки при навигации.",
    },
  },

  // ─── THEORIES ───────────────────────────────────────────────────────────────
  theories: {
    variables: {
      title: "Variables and data types",
      content: [
        { type: "h", text: "Что такое переменная?" },
        {
          type: "p",
          text: "Переменная — именованный «ящик» для хранения данных. Выделяет место в памяти и даёт ему имя. Позже через это имя обращаются к значению.",
        },
        {
          type: "pre",
          text: `// Объявление и присвоение\nlet name = "Ali";\nconst age = 25;\nvar city = "Tashkent"; // старый способ\n\n// Использование\nconsole.log(name);  // "Ali"\nconsole.log(age);   // 25`,
        },
        { type: "h", text: "Различия var, let, const" },
        {
          type: "table",
          headers: [
            "Ключевое слово",
            "Scope",
            "Hoisting",
            "Переобъявление",
            "Переприсвоение",
          ],
          rows: [
            ["var", "Function", "undefined", "✓ Да", "✓ Да"],
            ["let", "Block {}", "TDZ (ошибка)", "✗ Нет", "✓ Да"],
            ["const", "Block {}", "TDZ (ошибка)", "✗ Нет", "✗ Нет"],
          ],
        },
        {
          type: "pre",
          text: `// let — значение может меняться\nlet score = 0;\nscore = 10;  // ✓ OK\nscore = 20;  // ✓ OK\n\n// const — значение не должно меняться\nconst PI = 3.14159;\n// PI = 3;  ✗ TypeError: Assignment to constant variable\n\n// const + объект/массив — внутри менять можно\nconst user = { name: "Ali" };\nuser.name = "Vali";  // ✓ OK — изменить внутри можно\n// user = {};         // ✗ Ошибка — переприсвоить нельзя`,
        },
        {
          type: "note",
          noteType: "tip",
          text: "<strong>Правило:</strong> Всегда используйте <code>const</code>. Если значение должно меняться — <code>let</code>. <code>var</code> никогда не используйте.",
        },
        { type: "h", text: "Типы данных (Data Types)" },
        {
          type: "table",
          headers: ["Тип", "Пример", "Описание"],
          rows: [
            ["string", "\"Привет\", 'JS'", "Текст — внутри кавычек"],
            ["number", "42, 3.14, -7, NaN", "Целые и дробные числа"],
            ["boolean", "true, false", "Да или Нет"],
            ["undefined", "let x;", "Значение не присвоено"],
            ["null", "let n = null;", "Намеренно пустое значение"],
            ["bigint", "9007199254740991n", "Очень большие числа"],
            ["symbol", "Symbol('id')", "Уникальный идентификатор"],
            ["object", "{ }, [ ], null", "Сложная структура данных"],
          ],
        },
        {
          type: "pre",
          text: `// оператор typeof — определение типа\ntypeof "привет"   // "string"\ntypeof 42         // "number"\ntypeof true       // "boolean"\ntypeof undefined  // "undefined"\ntypeof null       // "object" ← историческая ошибка!\ntypeof {}         // "object"\ntypeof []         // "object" ← массив тоже object!\ntypeof function(){} // "function"\n\n// Динамическая типизация — тип может меняться\nlet x = 5;       // number\nx = "привет";    // string — JS это разрешает`,
        },
        { type: "h", text: "Naming conventions (Соглашения об именовании)" },
        {
          type: "pre",
          text: `// ✓ Правильные имена\nlet firstName = "Ali";     // camelCase — стандарт JS\nconst MAX_SIZE = 100;      // SCREAMING_SNAKE — константы\nclass UserProfile {}       // PascalCase — классы\n\n// ✗ Неправильные имена\nlet 1name = "x";   // Нельзя начинать с цифры\nlet my-var = "x";  // Дефис недопустим\nlet let = "x";     // Нельзя использовать ключевое слово\n\n// ✓ Осмысленные имена\nlet u = "Ali";          // ✗ Непонятно\nlet userName = "Ali";   // ✓ Понятно`,
        },
        {
          type: "note",
          noteType: "warning",
          text: "JavaScript — <strong>case-sensitive</strong>! <code>name</code>, <code>Name</code> и <code>NAME</code> — три разные переменные.",
        },
      ],
    },
  },
  // ─── REACT INTRO PAGE — ru.js га добавляется ──────────────────────────────────
  // t.reactIntro.* ключи

  reactIntro: {
    topBar: {
      title: "React",
      subtitle: "— Введение",
      skip: "Пропустить →",
    },
    nav: { prev: "← Назад", next: "Далее →", start: "Начать уроки →" },

    s1: {
      label: "01 — Что такое React?",
      title: "Библиотека для создания UI",
      sub: "React — это JavaScript-библиотека от Facebook. Она помогает строить сложные интерфейсы из маленьких, переиспользуемых частей.",
      analogy: {
        icon: "🧩",
        title: "Метафора Lego",
        desc: "React — это Lego. Каждый кусочек (компонент) создаётся отдельно. Потом они соединяются в большой интерфейс. Изменение одного кусочка не затрагивает остальные.",
      },
      cards: [
        { icon: "⚡", title: "Скорость", desc: "Через Virtual DOM" },
        {
          icon: "♻️",
          title: "Переиспользование",
          desc: "Компонентная система",
        },
        { icon: "🌍", title: "Экосистема", desc: "Крупнейшее сообщество" },
      ],
      note: "React — не полноценный фреймворк, а библиотека. В отличие от Angular или Vue — отвечает только за UI.",
    },

    s2: {
      label: "02 — Real DOM vs Virtual DOM",
      title: "Почему React быстрый?",
      sub: "Обычный JS перерисовывает страницу целиком. React обновляет только изменившиеся части. Это огромная разница.",
      real: {
        title: "Real DOM",
        color: "#e06c75",
        points: [
          "При каждом изменении перерисовывается вся страница",
          "Медленно при большом количестве элементов",
          "Браузер тратит много ресурсов",
        ],
      },
      virtual: {
        title: "Virtual DOM",
        color: "#61DAFB",
        points: [
          "Хранит лёгкую копию в памяти",
          "Находит только отличия (diffing)",
          "Обновляет только изменённые части",
        ],
      },
      steps: [
        { icon: "📝", label: "State изменился", color: "#c85c1a" },
        { icon: "🔮", label: "Virtual DOM обновился", color: "#61DAFB" },
        { icon: "🔍", label: "Вычисляется diff", color: "#4a9e60" },
        { icon: "✅", label: "Только разница → Real DOM", color: "#b07820" },
      ],
      note: "Этот процесс называется 'Reconciliation'. React выполняет его автоматически и очень быстро.",
    },

    s3: {
      label: "03 — SPA и MPA",
      title: "Как работают приложения?",
      sub: "React — это SPA технология. Важно понимать разницу между SPA и MPA.",
      spa: {
        title: "SPA",
        full: "Single Page Application",
        color: "#61DAFB",
        desc: "Загружается одна страница, всё остальное меняется через JavaScript.",
        pros: ["Быстрая навигация", "Хороший UX", "Меньше нагрузки на сервер"],
        cons: ["Медленная первая загрузка", "Сложнее для SEO"],
        examples: ["Gmail", "Facebook", "Figma"],
      },
      mpa: {
        title: "MPA",
        full: "Multi Page Application",
        color: "#c85c1a",
        desc: "При каждом переходе сервер присылает новый HTML и страница перезагружается.",
        pros: ["Хорошее SEO", "Быстрая первая загрузка", "Простая архитектура"],
        cons: ["Медленная навигация", "Много запросов к серверу"],
        examples: ["Wikipedia", "Amazon", "Гос. сайты"],
      },
      note: "С React строится SPA. Но через Next.js React может быть SEO-friendly.",
    },

    s4: {
      label: "04 — JSX и Компоненты",
      title: "Языковая система React",
      sub: "JSX — это HTML-подобный синтаксис внутри JavaScript. Компоненты — переиспользуемые части UI.",
      jsxTitle: "Что такое JSX?",
      jsxDesc:
        "JSX — JavaScript XML. Это синтаксический сахар. Браузер не понимает JSX — Babel преобразует его в обычный JS.",
      jsxExample: `// JSX (ты пишешь)\nconst el = <h1>Привет, {name}!</h1>;\n\n// Babel преобразует\nconst el = React.createElement(\n  'h1', null, \`Привет, \${name}!\`\n);`,
      componentTitle: "Правила компонентов",
      rules: [
        {
          icon: "🔤",
          text: "Имя начинается с заглавной буквы: UserCard, NavBar",
        },
        { icon: "📦", text: "Возвращает JSX — один родительский элемент" },
        {
          icon: "♻️",
          text: "Можно переиспользовать — <UserCard /> где угодно",
        },
        { icon: "🔒", text: "Получает данные через props, не изменяет их" },
      ],
      note: "Fragment <></> позволяет вернуть несколько элементов без лишнего div.",
    },

    s5: {
      label: "05 — NodeJS и окружение",
      title: "Как установить React?",
      sub: "Для работы с React нужен Node.js. npm или yarn — для управления пакетами.",
      nodeTitle: "Что такое Node.js?",
      nodeDesc:
        "Node.js позволяет запускать JavaScript вне браузера (на сервере или в терминале). Необходим для создания React-проектов.",
      steps: [
        {
          num: "01",
          title: "Установите Node.js",
          code: "# Скачайте с nodejs.org\nnode --version  # v18+",
          color: "#4a9e60",
        },
        {
          num: "02",
          title: "Создайте проект через Vite",
          code: "npm create vite@latest my-app\ncd my-app",
          color: "#61DAFB",
        },
        {
          num: "03",
          title: "Установите пакеты",
          code: "npm install",
          color: "#c85c1a",
        },
        {
          num: "04",
          title: "Запустите",
          code: "npm run dev\n# http://localhost:5173",
          color: "#b07820",
        },
      ],
      structure: {
        title: "Структура файлов",
        items: [
          { name: "src/", desc: "Основная папка с кодом", color: "#61DAFB" },
          { name: "src/components/", desc: "Компоненты", color: "#4a9e60" },
          { name: "src/pages/", desc: "Страницы", color: "#c85c1a" },
          {
            name: "src/assets/",
            desc: "Изображения, шрифты",
            color: "#b07820",
          },
          { name: "package.json", desc: "Список пакетов", color: "#7a7468" },
        ],
      },
      note: "Vite — современный быстрый инструмент сборки. В отличие от create-react-app — работает значительно быстрее.",
    },
  },
};
