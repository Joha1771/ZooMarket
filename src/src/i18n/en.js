export const en = {
  nav: {
    courses: "Courses",
    roadmap: "Roadmap",
    pricing: "Pricing",
    community: "Community",
    login: "Log in",
    start: "Get started →",
    lang: "English",
    dragHint: "💡 Drag the navbar to any side",
  },

  hero: {
    badge: "Free to start — sign up now",
    title1: "Frontend",
    title2: "developer",
    title3: "starts",
    title4: "here.",
    sub: "Visual lessons, in-browser code editor, and AI assistant — in Uzbek. Everything in one place.",
    cta: "Start for free",
    demo: "Watch demo",
    stat1num: "8 month",
    stat1label: "Full course duration",
    stat2num: "100%",
    stat2label: "Uzbek — first of its kind",
    stat3num: "Free",
    stat3label: "To get started",
    scroll: "Scroll",
    floatLesson: "Current lesson",
    floatStreak: "🔥 Streak",
    floatStreakVal: "14 days",
    floatStreakSub: "Keep going!",
    floatXpLabel: "XP level",
    floatXpSub: "Next: 3,000 XP",
  },

  features: {
    label: "// What's inside?",
    title1: "Found nowhere",
    title2: "else",
  },

  features_data: [
    {
      icon: "⚡",
      title: "Visual Lessons",
      desc: "Animations and interactive diagrams help you feel every topic, not just read it.",
    },
    {
      icon: "⌨️",
      title: "Code in Browser",
      desc: "No VS Code install needed — write code in the browser and see results instantly.",
    },
    {
      icon: "🤖",
      title: "AI Assistant",
      desc: "Ask anything without hesitation. AI explains concepts clearly in your language.",
    },
  ],

  curriculum: {
    label: "// Curriculum",
    title1: "8-month",
    title2: "roadmap",
    subtitle: "This month you'll learn:",
  },

  curriculum_data: [
    {
      month: "01",
      title: "HTML & CSS Basics",
      topics: [
        "Semantic HTML",
        "Flexbox & Grid",
        "Responsive design",
        "CSS animations",
      ],
    },
    {
      month: "02",
      title: "JavaScript Deep Dive",
      topics: [
        "ES6+ syntax",
        "DOM manipulation",
        "Async/Await",
        "Working with APIs",
      ],
    },
    {
      month: "03",
      title: "React.js",
      topics: [
        "Component structure",
        "useState & useEffect",
        "React Router",
        "Context API",
      ],
    },
    {
      month: "04",
      title: "TypeScript",
      topics: [
        "Types & interfaces",
        "Generic types",
        "React + TS",
        "Error prevention",
      ],
    },
    {
      month: "05",
      title: "Tailwind & UI",
      topics: [
        "Utility-first CSS",
        "Component libraries",
        "Dark mode",
        "Accessibility",
      ],
    },
    {
      month: "07",
      title: "Next.js",
      topics: ["SSR & SSG", "App Router", "Deployment", "SEO optimization"],
    },
    {
      month: "08",
      title: "Portfolio & Jobs",
      topics: [
        "3 projects",
        "GitHub profile",
        "LinkedIn optimization",
        "CV & Interview",
      ],
    },
  ],

  pricing: {
    label: "// Pricing",
    title1: "The right plan",
    title2: "for you",
    monthly: "Monthly",
    yearly: "Yearly",
    yearlySave: "−20% off",
    perMonth: "/ month",
    perMonthYearly: "/ mo · billed yearly",
  },

  pricing_data: [
    {
      name: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      period: "Always free",
      features: [
        { text: "Visual lessons (limited)", on: true },
        { text: "Code editor", on: false },
        { text: "AI assistant", on: false },
      ],
      cta: "Get started",
      featured: false,
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      yearlyPrice: 23,
      badge: "MOST POPULAR",
      features: [
        { text: "All visual lessons", on: true },
        { text: "Code editor + AI chat", on: true },
        { text: "XP & levels", on: true },
      ],
      cta: "Get started →",
      featured: true,
    },
    {
      name: "Course",
      monthlyPrice: 199,
      yearlyPrice: 159,
      period: "8 months, one-time",
      features: [
        { text: "Everything in Pro +", on: true },
        { text: "Mentor reviews", on: true },
        { text: "Portfolio help", on: true },
      ],
      cta: "Enroll in course",
      featured: false,
    },
  ],

  faq: {
    label: "// FAQ",
    title1: "Frequently asked",
    title2: "questions",
  },

  faqs_data: [
    {
      q: "Can I start with no coding experience?",
      a: "Absolutely! The course starts from scratch. If you can use a computer, you're ready.",
    },
    {
      q: "Monthly or yearly — which is better?",
      a: "Yearly saves 20% — that's 2 months free. If you're serious about learning, go yearly.",
    },
    {
      q: "How long is each lesson?",
      a: "Spending 1-2 hours a day, you'll become a full developer in 8 months. Learn at your own pace.",
    },
  ],

  cta: {
    badge: "Free to start — no card required",
    title1: "Take the first",
    title2: "step",
    title3: "today",
    sub: "Sign up and get early access to the first lesson.",
    placeholder: "Your email address",
    btn: "Get started →",
    success: "You're in! We'll send you a message soon.",
    spam: "No spam · Unsubscribe anytime",
  },

  footer: {
    desc: "Frontend learning platform in Uzbek. Visual, interactive, with AI assistant.",
    copyright: "© 2025 VizoCode. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },

  footer_links: {
    Platform: ["Courses", "Roadmap", "Code Editor", "AI Assistant"],
    Company: ["About us", "Blog", "Careers", "Press"],
    Help: ["FAQ", "Documentation", "Community", "Contact"],
  },

  // ─── JS INTRO PAGE ──────────────────────────────────────────────────────────
  jsIntro: {
    topBar: { title: "JavaScript", subtitle: "— Introduction", skip: "Skip →" },
    nav: { prev: "← Back", next: "Next →", start: "Start lessons →" },

    s1: {
      label: "01 — What is JavaScript?",
      title: "The language that talks to browsers",
      sub: "JavaScript is the language you use to give commands to the browser. You write — the browser executes.",
      cards: [
        { icon: "👤", title: "You", desc: "Write the code" },
        { icon: "📄", title: "JavaScript", desc: "Sends the commands" },
        { icon: "🌐", title: "Browser", desc: "Executes and displays" },
      ],
      note: "JavaScript is just plain text. The browser reads it and does something on the page.",
    },

    s2: {
      label: "02 — Where does it run?",
      title: "V8 — the brain of JavaScript",
      sub: "You write code → Browser passes it to the V8 engine → V8 reads and executes. Nothing else needed.",
      steps: [
        {
          icon: "✏️",
          label: "You write code",
          desc: "Example: console.log('Hello')",
          color: "#c85c1a",
        },
        {
          icon: "📁",
          label: "Browser receives it",
          desc: "Chrome, Firefox, Safari...",
          color: "#185FA5",
        },
        {
          icon: "⚙️",
          label: "V8 reads it",
          desc: "Understands and translates the code",
          color: "#4a9e60",
        },
        {
          icon: "✅",
          label: "Result",
          desc: "You see it on screen",
          color: "#b07820",
        },
      ],
      note: "V8 is an engine created by Google. It runs inside Chrome and Node.js. You never see it but it's always running.",
    },

    s3: {
      label: "03 — HTML, CSS, JS — the trio",
      title: "They work together",
      sub: "Each one does its own job. Without one — it doesn't work fully.",
      trio: [
        {
          lang: "HTML",
          icon: "🦴",
          color: "#e34c26",
          role: "Structure",
          desc: "Defines what exists on the page. Heading, button, image — that's HTML.",
          example: "<button>Click me</button>",
        },
        {
          lang: "CSS",
          icon: "🎨",
          color: "#264de4",
          role: "Appearance",
          desc: "Defines how it looks. Color, size, layout — CSS.",
          example: "button { color: red; }",
        },
        {
          lang: "JS",
          icon: "⚡",
          color: "#f7df1e",
          role: "Behaviour",
          desc: "Defines what it does. What happens on click — JS.",
          example: "btn.onclick = () => {}",
        },
      ],
      connectionNote:
        "Inside the HTML file there are links to CSS and JS. The browser loads all three and uses them together.",
      connectionCode: `<link rel="stylesheet" href="style.css">\n<script src="main.js"></script>`,
    },

    s4: {
      label: "04 — DevTools and console.log",
      title: "The developer's eyes",
      sub: "console.log is your first tool. Checking code, finding errors — it all happens here.",
      whatIs: "What is console.log?",
      whatIsDesc:
        "console is a special browser object. log is its method. Together: a command to 'write to the browser console'.",
      howOpen: "How to open DevTools?",
      shortcuts: [
        { key: "F12", desc: "Fastest way" },
        { key: "Ctrl + Shift + I", desc: "Windows / Linux" },
        { key: "Cmd + Option + I", desc: "Mac" },
        { key: "Mouse → Inspect", desc: "Right click" },
      ],
      examples: [
        {
          code: 'console.log("Hello!")',
          result: "Hello!",
          desc: "Output text",
        },
        { code: "console.log(2 + 2)", result: "4", desc: "Calculate" },
        {
          code: 'console.log(typeof "JS")',
          result: "string",
          desc: "Check type",
        },
        {
          code: "console.error('Error!')",
          result: "Error!",
          desc: "Output error",
          isError: true,
        },
      ],
      note: "console.log doesn't change your code. It only shows. Use it all the time — there's nothing to be embarrassed about.",
    },

    s5: {
      label: "05 — Errors are your friend",
      title: "Red text is not the enemy",
      sub: "Every developer makes errors. An error is the computer telling you exactly where something went wrong.",
      types: [
        {
          name: "SyntaxError",
          color: "#e06c75",
          desc: "Writing mistake. Bracket not closed, comma forgotten.",
          example: "console.log('Hello'",
          fix: "Close the bracket: console.log('Hello')",
        },
        {
          name: "ReferenceError",
          color: "#c85c1a",
          desc: "Accessing a variable that doesn't exist.",
          example: "console.log(name)",
          fix: "Declare it first: const name = 'Ali'",
        },
        {
          name: "TypeError",
          color: "#b07820",
          desc: "Operation with the wrong type of value.",
          example: "null.toUpperCase()",
          fix: "Check the value is not null or undefined",
        },
      ],
      howToRead: "How to read an error?",
      steps: [
        "See the red text — that's the error name",
        "After the colon — the error description",
        "On the right — the file name and line number",
        "Go to that line and check it",
      ],
      note: "Don't panic when you see an error. Read it, try to understand it. Search the error name on Google — you'll always find an answer.",
    },
  },
  // ─── HTML INTRO PAGE ─────────────────────────────────────────────────────────
  htmlIntro: {
    topBar: { title: "HTML", subtitle: "— Introduction", skip: "Skip →" },
    nav: { prev: "← Back", next: "Next →", start: "Start lessons →" },

    s1: {
      label: "01 — What is HTML?",
      title: "The skeleton of a webpage",
      sub: "HTML tells the browser 'there's a heading here, an image here, a button here'. It's not about looks — it's about structure.",
      analogy: {
        icon: "🏗️",
        title: "Builder metaphor",
        desc: "HTML is the blueprint of a building. CSS is the paint and decoration. JS is the elevators and doors. Without a blueprint, where do you put the paint?",
      },
      cards: [
        { icon: "🦴", title: "Structure", desc: "What exists on the page" },
        { icon: "📝", title: "Content", desc: "Text, images, links" },
        { icon: "📋", title: "Order", desc: "How elements are arranged" },
      ],
      note: "HTML is not a programming language. It's a markup language. You tell the browser what's there, it shows it.",
    },

    s2: {
      label: "02 — How do tags work?",
      title: "Open → Content → Close",
      sub: "Every HTML element lives between two tags: an opening tag and a closing tag. This is a box system.",
      rule: "Every opened tag must be closed. This is HTML's core rule.",
      examples: [
        {
          tag: "<h1>",
          close: "</h1>",
          content: "Heading text",
          desc: "The biggest heading",
          color: "#e34c26",
        },
        {
          tag: "<p>",
          close: "</p>",
          content: "Paragraph text",
          desc: "A regular text block",
          color: "#c85c1a",
        },
        {
          tag: "<a>",
          close: "</a>",
          content: "Link text",
          desc: "Navigate to another page",
          color: "#4a9e60",
        },
        {
          tag: "<img>",
          close: null,
          content: 'src="photo.jpg"',
          desc: "No closing tag needed",
          color: "#185FA5",
        },
      ],
      note: "Some tags are self-closing: <img>, <br>, <input>. They have no content inside.",
    },

    s3: {
      label: "03 — How does the browser read HTML?",
      title: "DOM — Document Object Model",
      sub: "The browser reads HTML and stores it in memory as a tree. This tree is called the DOM. JavaScript later works with this tree.",
      steps: [
        {
          icon: "📄",
          label: "HTML file",
          desc: "The code you wrote",
          color: "#e34c26",
        },
        {
          icon: "🔍",
          label: "Browser reads it",
          desc: "Top to bottom, line by line",
          color: "#185FA5",
        },
        {
          icon: "🌳",
          label: "Builds the DOM",
          desc: "A tree structure in memory",
          color: "#4a9e60",
        },
        {
          icon: "🖥️",
          label: "Renders it",
          desc: "You see it on screen",
          color: "#b07820",
        },
      ],
      treeNote:
        "In the DOM tree, every element is a node. Parent, child, sibling — these relationships are critical for CSS and JS.",
    },

    s4: {
      label: "04 — What are attributes?",
      title: "Extra information for tags",
      sub: "Attributes are additional settings on a tag. Where does a link go? Where does an image load from? Attributes answer these questions.",
      examples: [
        {
          code: '<a href="https://google.com">Google</a>',
          attr: "href",
          desc: "Link destination",
          color: "#4a9e60",
        },
        {
          code: '<img src="photo.jpg" alt="Image">',
          attr: "src, alt",
          desc: "Image source and description",
          color: "#185FA5",
        },
        {
          code: '<input type="text" placeholder="Type here">',
          attr: "type, placeholder",
          desc: "Input type and hint",
          color: "#c85c1a",
        },
        {
          code: '<div class="card" id="main">',
          attr: "class, id",
          desc: "Targets for CSS",
          color: "#b07820",
        },
      ],
      note: "class and id are the most used attributes. class — for multiple elements, id — for exactly one.",
    },

    s5: {
      label: "05 — Page structure",
      title: "The skeleton shape of every page",
      sub: "Every HTML file follows the same structure. This template tells the browser 'this is a complete HTML document'.",
      skeleton: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>Page title</title>\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p>This is my first page.</p>\n    <script src="main.js"></script>\n  </body>\n</html>`,
      parts: [
        {
          tag: "<!DOCTYPE html>",
          desc: "Tells browser: this is HTML5",
          color: "#7a7468",
        },
        {
          tag: "<head>",
          desc: "Invisible info: title, CSS, meta",
          color: "#185FA5",
        },
        {
          tag: "<body>",
          desc: "Everything visible goes here",
          color: "#e34c26",
        },
        {
          tag: "<script>",
          desc: "Link JS file — at the very end of body",
          color: "#f7df1e",
        },
      ],
      note: "<script> goes at the end of body — because JS needs HTML to be fully loaded before it runs.",
    },
  },

  // ─── CSS INTRO PAGE ──────────────────────────────────────────────────────────
  cssIntro: {
    topBar: { title: "CSS", subtitle: "— Introduction", skip: "Skip →" },
    nav: { prev: "← Back", next: "Next →", start: "Start lessons →" },

    s1: {
      label: "01 — What is CSS?",
      title: "The language that styles HTML",
      sub: "CSS — Cascading Style Sheets. It tells HTML how to look: color, size, layout, animation. CSS is the beauty you see.",
      analogy: {
        icon: "🎨",
        title: "Painter metaphor",
        desc: "HTML is the pencil sketch. CSS is the paint. The same HTML can become completely different websites with different CSS.",
      },
      cards: [
        { icon: "🎨", title: "Color", desc: "Color, background, borders" },
        { icon: "📐", title: "Size", desc: "Width, height, font size" },
        { icon: "📍", title: "Layout", desc: "Flexbox, Grid, Position" },
      ],
      note: "CSS is not a programming language. It's a description language. You say 'this element should be red', the browser does it.",
    },

    s2: {
      label: "02 — How does CSS work?",
      title: "Selector → Property → Value",
      sub: "Every CSS rule has three parts: who (selector), what (property), how (value).",
      rule: "p { color: red; } means 'all p elements should be red'.",
      parts: [
        {
          name: "Selector",
          example: "p",
          desc: "Who gets the style",
          color: "#c85c1a",
        },
        {
          name: "Property",
          example: "color",
          desc: "What we change",
          color: "#185FA5",
        },
        {
          name: "Value",
          example: "red",
          desc: "How we change it",
          color: "#4a9e60",
        },
      ],
      selectors: [
        { sel: "p", desc: "All p elements", color: "#e34c26" },
        { sel: ".card", desc: "Elements with class 'card'", color: "#c85c1a" },
        {
          sel: "#main",
          desc: "The one element with id 'main'",
          color: "#185FA5",
        },
        { sel: "h1, h2", desc: "Both h1 and h2", color: "#4a9e60" },
      ],
      note: "The more specific the selector, the more powerful it is. This is Specificity — CSS's core concept.",
    },

    s3: {
      label: "03 — What is the Cascade?",
      title: "Why CSS is called 'Cascading'",
      sub: "Multiple rules can apply to one element. The browser decides which one wins using a precise order.",
      rules: [
        {
          priority: "1",
          title: "!important",
          desc: "Most powerful. Beats everything. Don't overuse it.",
          color: "#e06c75",
        },
        {
          priority: "2",
          title: "Inline style",
          desc: 'Written in HTML: style="color:red"',
          color: "#c85c1a",
        },
        {
          priority: "3",
          title: "ID selector",
          desc: "#main { } — for one specific element",
          color: "#185FA5",
        },
        {
          priority: "4",
          title: "Class selector",
          desc: ".card { } — for multiple elements",
          color: "#4a9e60",
        },
        {
          priority: "5",
          title: "Tag selector",
          desc: "p { } — for all p elements",
          color: "#7a7468",
        },
      ],
      note: "If two rules have equal strength — the last one written wins. This is the 'Cascade' — flowing top to bottom like a waterfall.",
    },

    s4: {
      label: "04 — Box Model",
      title: "Every element is a box",
      sub: "In CSS every element is a rectangle box. These boxes have 4 layers. You can't do layout without understanding this.",
      layers: [
        {
          name: "Content",
          desc: "The actual content: text, image",
          color: "#185FA5",
        },
        {
          name: "Padding",
          desc: "Inner space around the content",
          color: "#4a9e60",
        },
        {
          name: "Border",
          desc: "The border — visible or not",
          color: "#c85c1a",
        },
        {
          name: "Margin",
          desc: "Outer space from other elements",
          color: "#b07820",
        },
      ],
      tip: "Write box-sizing: border-box — padding and border are included in the width. This is the standard approach.",
      note: "In DevTools, hover over an element and the box model is shown. This is extremely useful.",
    },

    s5: {
      label: "05 — Where do you write CSS?",
      title: "Three ways — one is right",
      sub: "CSS can be written in three places. But the professional way is a separate file.",
      methods: [
        {
          title: "Separate file (Correct)",
          code: '<link rel="stylesheet" href="style.css">',
          pros: "Organised, reusable, cached",
          color: "#4a9e60",
          recommended: true,
        },
        {
          title: "Inside style tag",
          code: "<style>\n  p { color: red; }\n</style>",
          pros: "Fine for small projects",
          color: "#185FA5",
          recommended: false,
        },
        {
          title: "Inline style (Avoid)",
          code: '<p style="color: red;">Text</p>',
          pros: "Only when forced to",
          color: "#e06c75",
          recommended: false,
        },
      ],
      note: "Inline styles break specificity and make code unreadable. Always use a separate CSS file.",
    },
  },

  // ─── COURSES PAGE ───────────────────────────────────────────────────────────
  courses: {
    label: "// Courses",
    title: "Learning path",
    lessonsCompleted: "lessons done",
    getPro: "Get PRO",
    free: "free",
    interactive: "interactive",
    proModal: {
      title: "Pro subscription",
      desc: "All lessons, interactive visuals and code editor. Start right now.",
      features: [
        "96 full lessons",
        "Interactive visual explanations",
        "Live code editor + preview",
        "Quiz & XP system",
        "Projects & exams",
      ],
      cta: "Get Pro — $19/mo",
      close: "Close",
    },
  },
  // ─── INTRO PAGE ─────────────────────────────────────────────────────────────
  intro: {
    topBar: {
      title: "VizoCode",
      subtitle: "— Intro lesson",
      skip: "Skip →",
    },
    nav: {
      prev: "← Back",
      next: "Next →",
      start: "Start lessons →",
    },
    s1: {
      label: "01 — What is a computer?",
      title: "Computer — what kind of device is it?",
      sub: "A computer is an electronic device designed to process, store and transmit data. Click to open it and look inside 👇",
      hint: "👆 Click the computer to open",
      opened: "Opened!",
      closed: "Click",
    },
    s2: {
      label: "02 — Internal structure",
      title: "What's inside a computer?",
      sub: "Click each component to learn what it does",
      clickHint: "👆 Click on a component",
      cpu: {
        title: "Processor (CPU)",
        desc: "The computer's 'brain'. Executes all calculations and instructions. Billions of operations per second.",
      },
      ram: {
        title: "RAM (Random Access Memory)",
        desc: "'Desk' memory. Temporarily stores data currently in use. Cleared when the computer shuts down.",
      },
      gpu: {
        title: "Graphics Card (GPU)",
        desc: "For graphics and images. Thousands of small cores. Unmatched for parallel computations.",
      },
      ssd: {
        title: "Storage (SSD/HDD)",
        desc: "Permanent memory. Stores files, programs, OS. Data persists when computer is off.",
      },
      mb: {
        title: "Motherboard",
        desc: "Connects all components. CPU, RAM, GPU and others plug into it.",
      },
    },
    s3: {
      label: "03 — Input / Output",
      title: "Working with devices",
      sub: "Devices that input and output data to a computer. Click to connect/disconnect!",
      inputLabel: "Input devices",
      outputLabel: "Output devices",
      input: [
        { icon: "⌨️", name: "Keyboard", desc: "Text and command input" },
        { icon: "🖱️", name: "Mouse", desc: "Pointing and clicking" },
        { icon: "🎤", name: "Microphone", desc: "Audio input" },
        { icon: "📷", name: "Camera", desc: "Image input" },
      ],
      output: [
        { icon: "🖥️", name: "Monitor", desc: "Displaying images" },
        { icon: "🖨️", name: "Printer", desc: "Printing on paper" },
        { icon: "🔊", name: "Speakers", desc: "Audio output" },
        { icon: "📱", name: "Projector", desc: "Output to large screen" },
      ],
    },
    s4: {
      label: "04 — Memory units",
      title: "Bit, Byte, GB... what's the difference?",
      sub: "Memory units from smallest to largest. Click to see examples.",
      units: [
        { unit: "Bit", val: "0 or 1", example: "The smallest unit of data" },
        { unit: "Byte", val: "8 bits", example: "1 character (e.g. 'A')" },
        { unit: "KB", val: "1,024 Bytes", example: "~1 short text message" },
        {
          unit: "MB",
          val: "1,024 KB",
          example: "~1 minute of music or 1,000 small photos",
        },
        { unit: "GB", val: "1,024 MB", example: "~1,000 photos or one movie" },
        {
          unit: "TB",
          val: "1,024 GB",
          example: "~500,000 songs or 200 movies",
        },
        { unit: "PB", val: "1,024 TB", example: "Size of large data centers" },
      ],
    },
    s5: {
      label: "05 — Software",
      title: "Software layers",
      sub: "Computer programs are divided into layers. Click a layer to learn about it.",
      layers: [
        {
          label: "Application software",
          sublabel: "Browser, Office, Games",
          desc: "Programs the user interacts with directly. Chrome, Word, Photoshop — all of these.",
        },
        {
          label: "System software",
          sublabel: "Drivers, Utilities",
          desc: "Enables working with devices. Printer driver, antivirus — system software.",
        },
        {
          label: "Operating system",
          sublabel: "Windows · macOS · Linux",
          desc: "The core system managing all programs. A bridge between the user and hardware.",
        },
        {
          label: "Hardware",
          sublabel: "CPU · RAM · SSD · GPU",
          desc: "Physical devices. Programs run on top of hardware.",
        },
      ],
    },
    s6: {
      label: "06 — How does the internet work?",
      title: "One URL — many steps",
      sub: "What happens in 0.1 seconds when you type google.com into your browser?",
      steps: [
        { icon: "🌐", label: "Browser", desc: "Type URL: google.com" },
        { icon: "📖", label: "DNS", desc: "IP address: 142.250.190.78" },
        { icon: "🖥️", label: "Server", desc: "HTML/CSS/JS files" },
        { icon: "📄", label: "Response", desc: "Browser shows the page" },
      ],
      tipLabel: "💡 Question",
      tip: "Who writes the HTML, CSS and JavaScript files the server sends back?",
      tipQ: "",
      tipA: "→ Frontend developers!",
    },
    s7: {
      label: "07 — Frontend languages",
      title: "3 languages to build the web",
      sub: "Click each language to see its description and code example",
      frameworksLabel: "+ Frameworks (you'll learn later)",
      langs: [
        {
          lang: "HTML",
          emoji: "🦴",
          metaphor: "Skeleton",
          desc: "Page structure. Headings, paragraphs, images, buttons — all HTML tags.",
          code: "<h1>Hello!</h1>\n<p>This is a paragraph.</p>\n<button>Click me</button>",
        },
        {
          lang: "CSS",
          emoji: "🎨",
          metaphor: "Clothing",
          desc: "Appearance and design. Colors, fonts, layout — CSS defines all of this.",
          code: "h1 {\n  color: #c85c1a;\n  font-size: 32px;\n}",
        },
        {
          lang: "JavaScript",
          emoji: "⚡",
          metaphor: "Action",
          desc: "Interactivity and logic. What happens when a button is clicked, animations — that's JS!",
          code: "btn.addEventListener(\n  'click',\n  () => alert('Hello!')\n)",
        },
      ],
    },
    s8: {
      label: "08 — About Backend",
      title: "The invisible part of the iceberg",
      sub: "The web isn't just what you see. The big work happens 'underwater'.",
      waterLine: "─────── water surface ───────",
      frontendLabel: "FRONTEND",
      frontendSub: "The visible part",
      backendLabel: "BACKEND",
      backendSub: "Invisible part (server side)",
      courseNote: "In this course we focus only on",
      courseNoteBold: "Frontend",
      courseNoteSuffix: ".",
      coursePath: "HTML → CSS → JavaScript → React → Next.js",
      readyLabel: "Are you ready?",
      ctaBtn: "Start lessons →",
      ctaSub: "8 modules · 96 lessons · Practical projects",
    },
  },

  // ─── LESSON UI ──────────────────────────────────────────────────────────────
  lesson: {
    phases: {
      theory: "Theory",
      explain: "What is it?",
      learn: "How does it work?",
      code: "Write it yourself",
    },
    back: "Back",
    prev: "Previous",
    next: "Next",
    prevPhase: "Previous step",
    nextPhase: "Next step",
    quizLabel: "Quiz",
    check: "Check answer",
    correct: "✓ Correct!",
    wrong: "✗ Wrong.",
    comingSoon: "Coming soon",
    comingSoonSub: "This lesson is being prepared",
  },

  // ─── MODULES ────────────────────────────────────────────────────────────────
  modules: {
    htmlCss: {
      title: "HTML & CSS",
      weeks: "6 weeks",
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
      weeks: "5 weeks",
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
      weeks: "5 weeks",
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
      weeks: "5 weeks",
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
      weeks: "5 weeks",
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
      weeks: "6 weeks",
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
      weeks: "5 weeks",
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
      weeks: "5 weeks",
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
      title: "Box Model",
      explain: {
        intro:
          "Every HTML element is a box. These boxes consist of 4 layers. Click a layer to see its explanation.",
        hint: "Click a layer to see the explanation",
        margin:
          "Empty space outside the element. Pushes neighboring elements away.",
        border:
          "The boundary around the element. Can have thickness, color and style.",
        padding:
          "Space between the content and border. Inner spacing of the element.",
        content: "The main content: text, image or other elements.",
      },
      learn: {
        intro: "Drag the sliders and watch how the box changes:",
      },
      quiz: {
        q: "Select the CSS box model order (inside out):",
        options: [
          "margin → border → padding → content",
          "content → padding → border → margin",
          "padding → content → margin → border",
          "border → padding → margin → content",
        ],
        correct: 1,
        explain:
          "Correct order: content → padding → border → margin. Each layer wraps the previous one.",
      },
    },
    flexbox: {
      title: "Display and Flexbox",
      explain: {
        intro:
          "Flexbox is a convenient way to arrange elements in a row or column. One property —",
        intro2: "— changes everything.",
        tipLabel: "Key idea:",
        tip: "Add display: flex to the parent element, and the children automatically line up in a row.",
      },
      learn: {
        intro: "Click the buttons and see how flexbox works:",
      },
      quiz: {
        q: "What does `justify-content: space-between` do?",
        options: [
          "Centers elements",
          "Equal space between elements, pressed to edges",
          "Brings elements closer together",
          "Arranges elements vertically",
        ],
        correct: 1,
        explain:
          "space-between: first and last element are pressed to the edges, the space between them is divided equally.",
      },
    },
    hoisting: {
      title: "Execution Context and Hoisting",
      explain: {
        step0: {
          title: "JS reads code in 2 phases",
          desc: "Before executing, JavaScript scans the code once. This is called the 'Creation Phase'.",
          phase1: "1. Creation Phase",
          phase2: "2. Execution Phase",
        },
        step1: {
          title: "var — is hoisted (with undefined)",
          desc: "In the creation phase, variables declared with var are found and assigned undefined.",
          yourCode: "YOUR CODE",
          jsCode: "HOW JS SEES IT",
        },
        step2: {
          title: "let — TDZ (Temporal Dead Zone)",
          desc: "let and const are also hoisted, but without a value. Trying to use them is an error!",
          withVar: "WITH var",
          withLet: "WITH let",
        },
      },
      learn: {
        intro:
          "View the code in 2 phases — observe how variable values change at each phase:",
        creation: "1. Creation Phase",
        execution: "2. Execution Phase",
        codeLabel: "CODE",
        memoryLabel: "MEMORY",
      },
      quiz: {
        q: "How do `var` and `let` differ in hoisting?",
        options: [
          "No difference",
          "var — with undefined, let — in TDZ",
          "let — with undefined, var — in TDZ",
          "Both are inaccessible",
        ],
        correct: 1,
        explain:
          "var gets undefined in the declaration phase. let sits in the TDZ (Temporal Dead Zone) — it can't be used before declaration.",
      },
    },
  },

  "dom-intro": {
    explain: {
      title: "Introduction to DOM",
      body: "DOM (Document Object Model) is a tree representation of an HTML page. Every tag, attribute, and text becomes a node. JavaScript can read and change these nodes — that's how dynamic web pages work.",
    },
    learn: {
      title: "What is the DOM?",
      items: [
        "DOM — a tree of objects representing the HTML document",
        "Each HTML element is a node in the tree",
        "JavaScript accesses nodes via the `document` object",
        "`document.getElementById('id')` — find element by id",
        "`document.querySelector('.class')` — find by CSS selector",
        "The browser builds the DOM when the page loads",
      ],
    },
    quiz: {
      q: "What does DOM stand for?",
      options: [
        "Data Object Model",
        "Document Object Model",
        "Dynamic Object Manager",
        "Document Oriented Markup",
      ],
      correct: 1,
      explain:
        "DOM — Document Object Model. It represents the HTML document as a tree of objects that JavaScript can interact with.",
    },
  },

  "dom-selecting": {
    explain: {
      title: "Selecting DOM Elements",
      body: "Before changing anything on the page, you need to find the element. JavaScript provides several methods: getElementById, querySelector, querySelectorAll, getElementsByClassName, and more.",
    },
    learn: {
      title: "How to select elements",
      items: [
        "`document.getElementById('id')` — by id (returns one element)",
        "`document.querySelector('selector')` — first match by CSS selector",
        "`document.querySelectorAll('selector')` — all matches (NodeList)",
        "`document.getElementsByClassName('cls')` — by class name",
        "`document.getElementsByTagName('tag')` — by tag name",
        "querySelectorAll returns a static NodeList; iterate with forEach",
      ],
    },
    quiz: {
      q: "Which method returns ALL elements matching a CSS selector?",
      options: [
        "getElementById",
        "querySelector",
        "querySelectorAll",
        "getElementsById",
      ],
      correct: 2,
      explain:
        "querySelectorAll returns a NodeList of all elements matching the given CSS selector.",
    },
  },

  "dom-styling": {
    explain: {
      title: "Changing Styles via DOM",
      body: "You can change an element's appearance dynamically using the `style` property or by adding/removing CSS classes with `classList`.",
    },
    learn: {
      title: "Styling DOM elements",
      items: [
        "`element.style.color = 'red'` — set inline CSS property",
        "`element.style.fontSize = '20px'` — camelCase for CSS properties",
        "`element.classList.add('active')` — add a CSS class",
        "`element.classList.remove('active')` — remove a CSS class",
        "`element.classList.toggle('active')` — toggle a CSS class",
        "`element.classList.contains('active')` — check if class exists",
      ],
    },
    quiz: {
      q: "How do you toggle a CSS class on an element?",
      options: [
        "element.style.toggle('cls')",
        "element.classList.toggle('cls')",
        "element.class.toggle('cls')",
        "element.toggleClass('cls')",
      ],
      correct: 1,
      explain:
        "element.classList.toggle('cls') adds the class if it's absent, or removes it if it's present.",
    },
  },

  "dom-manipulating": {
    explain: {
      title: "Manipulating DOM Elements",
      body: "You can create new elements, change their content, and insert or remove them from the page dynamically using JavaScript.",
    },
    learn: {
      title: "Creating and modifying elements",
      items: [
        "`document.createElement('tag')` — create a new element",
        "`element.textContent = 'text'` — set text content",
        "`element.innerHTML = '<b>text</b>'` — set HTML content",
        "`parent.appendChild(child)` — append child to parent",
        "`parent.removeChild(child)` — remove a child element",
        "`element.remove()` — remove element directly",
        "`parent.insertBefore(newEl, refEl)` — insert before a reference",
      ],
    },
    quiz: {
      q: "Which method adds a new child element to the end of a parent?",
      options: [
        "parent.insertChild(child)",
        "parent.addChild(child)",
        "parent.appendChild(child)",
        "parent.append(child, 'end')",
      ],
      correct: 2,
      explain:
        "parent.appendChild(child) inserts the child node at the end of the parent's children list.",
    },
  },

  "dom-attributes": {
    explain: {
      title: "Working with Attributes",
      body: "HTML attributes like `src`, `href`, `disabled`, and `data-*` can be read and changed via JavaScript using getAttribute, setAttribute, and related methods.",
    },
    learn: {
      title: "Attribute methods",
      items: [
        "`element.getAttribute('attr')` — get attribute value",
        "`element.setAttribute('attr', 'value')` — set attribute",
        "`element.removeAttribute('attr')` — remove attribute",
        "`element.hasAttribute('attr')` — check if attribute exists",
        "`element.dataset.name` — access data-name attribute",
        "Direct property: `img.src`, `a.href`, `input.value`",
      ],
    },
    quiz: {
      q: "How do you set an attribute on a DOM element?",
      options: [
        "element.attr('name', 'value')",
        "element.setAttribute('name', 'value')",
        "element.addAttribute('name', 'value')",
        "element['name'] = 'value'",
      ],
      correct: 1,
      explain:
        "element.setAttribute('name', 'value') sets or updates the specified attribute on the element.",
    },
  },

  "dom-events": {
    explain: {
      title: "DOM Events",
      body: "Events let you respond to user actions like clicks, key presses, form submissions, and mouse movements. You attach event listeners to elements using addEventListener.",
    },
    learn: {
      title: "Handling events",
      items: [
        "`element.addEventListener('click', handler)` — attach event listener",
        "`element.removeEventListener('click', handler)` — detach listener",
        "Common events: click, input, submit, keydown, mouseover, scroll",
        "The event object `e` contains info about the event",
        "`e.target` — the element that triggered the event",
        "`e.preventDefault()` — prevent default browser behavior",
        "`e.stopPropagation()` — stop event from bubbling up",
      ],
    },
    quiz: {
      q: "Which method attaches an event listener to a DOM element?",
      options: [
        "element.on('click', fn)",
        "element.addEvent('click', fn)",
        "element.addEventListener('click', fn)",
        "element.listen('click', fn)",
      ],
      correct: 2,
      explain:
        "addEventListener is the standard method to attach an event handler to a DOM element.",
    },
  },

  "dom-delegation": {
    explain: {
      title: "Event Delegation",
      body: "Instead of adding listeners to many child elements, attach one listener to their parent. When a child is clicked, the event bubbles up to the parent. Check `e.target` to identify which child was clicked.",
    },
    learn: {
      title: "Why use event delegation?",
      items: [
        "Events bubble from child to parent by default",
        "One parent listener handles all child events",
        "Works for dynamically added elements too",
        "`e.target` — the actual element that was clicked",
        "`e.target.matches('selector')` — check if target matches",
        "More efficient than attaching N listeners to N children",
      ],
    },
    quiz: {
      q: "What is event delegation?",
      options: [
        "Passing an event to another function",
        "Attaching a listener to a parent to handle child events",
        "Preventing events from firing",
        "Creating custom events",
      ],
      correct: 1,
      explain:
        "Event delegation uses event bubbling — a listener on the parent handles events from its children, identified via e.target.",
    },
  },

  "js-modules": {
    explain: {
      title: "JavaScript Modules",
      body: "Modules let you split code into separate files. Each file can export functions, classes, or values, and other files can import them. This keeps code organized and reusable.",
    },
    learn: {
      title: "ES Modules syntax",
      items: [
        "`export function foo() {}` — named export",
        "`export default function() {}` — default export",
        "`import { foo } from './file.js'` — named import",
        "`import foo from './file.js'` — default import",
        "`import * as utils from './file.js'` — import all",
        "Use `type='module'` in the script tag in HTML",
        "Modules are in strict mode by default",
      ],
    },
    quiz: {
      q: "How do you export a named function from a module?",
      options: [
        "module.export = function foo() {}",
        "export function foo() {}",
        "exports.foo = function() {}",
        "export.named = function foo() {}",
      ],
      correct: 1,
      explain:
        "export function foo() {} is the ES Module syntax for a named export. It can then be imported with import { foo } from './file.js'.",
    },
  },

  localstorage: {
    explain: {
      title: "localStorage",
      body: "localStorage is a browser API that lets you save key-value pairs persistently. Data survives page refreshes and even browser restarts. Values are always strings.",
    },
    learn: {
      title: "Using localStorage",
      items: [
        "`localStorage.setItem('key', 'value')` — save data",
        "`localStorage.getItem('key')` — read data",
        "`localStorage.removeItem('key')` — delete a key",
        "`localStorage.clear()` — clear all data",
        "Values are strings — use JSON.stringify/parse for objects",
        "`JSON.stringify(obj)` — convert object to string",
        "`JSON.parse(str)` — convert string back to object",
      ],
    },
    quiz: {
      q: "How do you save an object in localStorage?",
      options: [
        "localStorage.setItem('key', obj)",
        "localStorage.setItem('key', JSON.stringify(obj))",
        "localStorage.save(obj)",
        "localStorage.store('key', obj)",
      ],
      correct: 1,
      explain:
        "localStorage only stores strings. Use JSON.stringify(obj) to convert an object before saving, and JSON.parse() when reading it back.",
    },
  },

  "fetch-dom": {
    explain: {
      title: "Fetch API & DOM",
      body: "The Fetch API lets you load data from a server asynchronously. Once the data arrives, you can use DOM methods to display it on the page without a full reload.",
    },
    learn: {
      title: "Fetching data and updating the DOM",
      items: [
        "`fetch(url)` — returns a Promise",
        "`.then(res => res.json())` — parse JSON response",
        "`.then(data => { /* use data */ })` — handle the data",
        "`.catch(err => { /* handle error */ })` — handle errors",
        "Or use `async/await` for cleaner syntax",
        "After fetching, create elements and append to DOM",
        "Always handle loading states and errors in UI",
      ],
    },
    quiz: {
      q: "What does fetch() return?",
      options: [
        "The data directly",
        "A Promise",
        "A callback",
        "An XMLHttpRequest object",
      ],
      correct: 1,
      explain:
        "fetch() returns a Promise that resolves to a Response object. You call .json() on it to parse the body as JSON.",
    },
  },

  "crud-localstorage": {
    explain: {
      title: "CRUD with localStorage",
      body: "CRUD stands for Create, Read, Update, Delete — the four basic operations for managing data. You can implement a full CRUD app using localStorage as the data store and DOM for the UI.",
    },
    learn: {
      title: "CRUD operations",
      items: [
        "Create — add a new item and save the updated array",
        "Read — load items from localStorage and render to DOM",
        "Update — find item by id, change its value, save again",
        "Delete — filter out the item by id, save the new array",
        "Store data as JSON array: JSON.stringify(array)",
        "Generate unique ids: Date.now() or crypto.randomUUID()",
        "Re-render the list after every operation",
      ],
    },
    quiz: {
      q: "In a CRUD app with localStorage, how do you delete an item?",
      options: [
        "localStorage.delete(id)",
        "Filter it out of the array, then save the new array",
        "Set its value to null",
        "Call removeItem with the item's content",
      ],
      correct: 1,
      explain:
        "Filter the item out of the array (items.filter(i => i.id !== id)), then save the new array with JSON.stringify back to localStorage.",
    },
  },

  "spa-exam": {
    explain: {
      title: "SPA Exam Project",
      body: "A Single Page Application (SPA) updates content dynamically without reloading the page. In this exam project, you'll build a small SPA using vanilla JS, DOM manipulation, localStorage, and the Fetch API.",
    },
    learn: {
      title: "SPA key concepts",
      items: [
        "SPA — one HTML file, content changes via JavaScript",
        "Use a router to show/hide sections based on URL hash",
        "Store app state in a JS object or localStorage",
        "Re-render the UI whenever state changes",
        "Separate concerns: data layer, render layer, event layer",
        "Use modules to keep code organized across files",
        "Test CRUD, fetch, and DOM updates before submitting",
      ],
    },
    quiz: {
      q: "What defines a Single Page Application?",
      options: [
        "It has only one CSS file",
        "It never uses JavaScript",
        "Content updates dynamically without full page reloads",
        "It can only show one component at a time",
      ],
      correct: 2,
      explain:
        "An SPA loads one HTML page and dynamically updates its content using JavaScript — no full page reloads when navigating.",
    },
  },

  // ─── THEORIES ───────────────────────────────────────────────────────────────
  theories: {
    variables: {
      title: "Variables and data types",
      content: [
        { type: "h", text: "What is a Variable?" },
        {
          type: "p",
          text: 'A variable is a named "box" for storing data. It allocates space in memory and gives it a name. Later, you access the value using that name.',
        },
        {
          type: "pre",
          text: `// Declare and assign\nlet name = "Ali";\nconst age = 25;\nvar city = "Tashkent"; // old way\n\n// Usage\nconsole.log(name);  // "Ali"\nconsole.log(age);   // 25`,
        },
        { type: "h", text: "var, let, const differences" },
        {
          type: "table",
          headers: ["Keyword", "Scope", "Hoisting", "Re-declare", "Re-assign"],
          rows: [
            ["var", "Function", "undefined", "✓ Yes", "✓ Yes"],
            ["let", "Block {}", "TDZ (error)", "✗ No", "✓ Yes"],
            ["const", "Block {}", "TDZ (error)", "✗ No", "✗ No"],
          ],
        },
        {
          type: "pre",
          text: `// let — value can change\nlet score = 0;\nscore = 10;  // ✓ OK\nscore = 20;  // ✓ OK\n\n// const — value should not change\nconst PI = 3.14159;\n// PI = 3;  ✗ TypeError: Assignment to constant variable\n\n// const + object/array — you can mutate inside\nconst user = { name: "Ali" };\nuser.name = "Vali";  // ✓ OK — mutation is allowed\n// user = {};         // ✗ Error — reassignment not allowed`,
        },
        {
          type: "note",
          noteType: "tip",
          text: "<strong>Rule:</strong> Always use <code>const</code>. If the value needs to change — <code>let</code>. Never use <code>var</code>.",
        },
        { type: "h", text: "Data Types" },
        {
          type: "table",
          headers: ["Type", "Example", "Description"],
          rows: [
            ["string", "\"Hello\", 'JS'", "Text — inside quotes"],
            ["number", "42, 3.14, -7, NaN", "Whole and decimal numbers"],
            ["boolean", "true, false", "Yes or No"],
            ["undefined", "let x;", "No value assigned"],
            ["null", "let n = null;", "Intentionally empty value"],
            ["bigint", "9007199254740991n", "Very large numbers"],
            ["symbol", "Symbol('id')", "Unique identifier"],
            ["object", "{ }, [ ], null", "Complex data structure"],
          ],
        },
        {
          type: "pre",
          text: `// typeof operator — type detection\ntypeof "hello"    // "string"\ntypeof 42         // "number"\ntypeof true       // "boolean"\ntypeof undefined  // "undefined"\ntypeof null       // "object" ← historical bug!\ntypeof {}         // "object"\ntypeof []         // "object" ← array is also object!\ntypeof function(){} // "function"\n\n// Dynamic typing — type can change\nlet x = 5;       // number\nx = "hello";     // string — JS allows this`,
        },
        { type: "h", text: "Naming conventions" },
        {
          type: "pre",
          text: `// ✓ Correct names\nlet firstName = "Ali";     // camelCase — JS standard\nconst MAX_SIZE = 100;      // SCREAMING_SNAKE — constants\nclass UserProfile {}       // PascalCase — classes\n\n// ✗ Wrong names\nlet 1name = "x";   // Cannot start with a digit\nlet my-var = "x";  // Hyphens not allowed\nlet let = "x";     // Cannot use a keyword\n\n// ✓ Meaningful names\nlet u = "Ali";          // ✗ Unclear\nlet userName = "Ali";   // ✓ Clear`,
        },
        {
          type: "note",
          noteType: "warning",
          text: "JavaScript — <strong>case-sensitive</strong>! <code>name</code>, <code>Name</code> and <code>NAME</code> — three different variables.",
        },
      ],
    },
  },
  // ─── REACT INTRO PAGE — en.js add this ────────────────────────────────────────
  // t.reactIntro.* keys

  reactIntro: {
    topBar: {
      title: "React",
      subtitle: "— Introduction",
      skip: "Skip →",
    },
    nav: { prev: "← Back", next: "Next →", start: "Start lessons →" },

    s1: {
      label: "01 — What is React?",
      title: "A library for building UIs",
      sub: "React is a JavaScript library created by Facebook. It helps you build complex interfaces from small, reusable pieces.",
      analogy: {
        icon: "🧩",
        title: "Lego metaphor",
        desc: "React is like Lego. Each piece (component) is built separately. Then they combine to form a large interface. Changing one piece doesn't affect the others.",
      },
      cards: [
        { icon: "⚡", title: "Speed", desc: "Via Virtual DOM" },
        { icon: "♻️", title: "Reusability", desc: "Component system" },
        { icon: "🌍", title: "Ecosystem", desc: "Largest community" },
      ],
      note: "React is not a full framework — it's a library. Unlike Angular or Vue, it only handles the UI layer.",
    },

    s2: {
      label: "02 — Real DOM vs Virtual DOM",
      title: "Why is React fast?",
      sub: "Plain JavaScript redraws the whole page. React updates only what changed. That's a huge difference.",
      real: {
        title: "Real DOM",
        color: "#e06c75",
        points: [
          "Redraws the entire page on every change",
          "Slow with many elements",
          "Browser uses a lot of resources",
        ],
      },
      virtual: {
        title: "Virtual DOM",
        color: "#61DAFB",
        points: [
          "Keeps a lightweight copy in memory",
          "Finds only the differences (diffing)",
          "Updates only the changed parts",
        ],
      },
      steps: [
        { icon: "📝", label: "State changes", color: "#c85c1a" },
        { icon: "🔮", label: "Virtual DOM updates", color: "#61DAFB" },
        { icon: "🔍", label: "Diff is calculated", color: "#4a9e60" },
        { icon: "✅", label: "Only diff → Real DOM", color: "#b07820" },
      ],
      note: "This process is called 'Reconciliation'. React does it automatically and extremely fast.",
    },

    s3: {
      label: "03 — SPA and MPA",
      title: "How do apps work?",
      sub: "React is a SPA technology. It's important to understand the difference between SPA and MPA.",
      spa: {
        title: "SPA",
        full: "Single Page Application",
        color: "#61DAFB",
        desc: "One page loads, everything else switches via JavaScript.",
        pros: ["Fast navigation", "Great UX", "Less server load"],
        cons: ["Slow initial load", "Harder for SEO"],
        examples: ["Gmail", "Facebook", "Figma"],
      },
      mpa: {
        title: "MPA",
        full: "Multi Page Application",
        color: "#c85c1a",
        desc: "On every navigation, the server sends a new HTML and the whole page reloads.",
        pros: ["Great SEO", "Fast first load", "Simple architecture"],
        cons: ["Slow navigation", "Many server requests"],
        examples: ["Wikipedia", "Amazon", "Gov sites"],
      },
      note: "React builds SPA. But with Next.js, React can also be SEO-friendly.",
    },

    s4: {
      label: "04 — JSX and Components",
      title: "React's language system",
      sub: "JSX is an HTML-like syntax written inside JavaScript. Components are reusable UI pieces.",
      jsxTitle: "What is JSX?",
      jsxDesc:
        "JSX — JavaScript XML. It's syntactic sugar. The browser doesn't understand JSX — Babel converts it to plain JS.",
      jsxExample: `// JSX (you write)\nconst el = <h1>Hello, {name}!</h1>;\n\n// Babel converts to\nconst el = React.createElement(\n  'h1', null, \`Hello, \${name}!\`\n);`,
      componentTitle: "Component rules",
      rules: [
        { icon: "🔤", text: "Name starts with uppercase: UserCard, NavBar" },
        { icon: "📦", text: "Returns JSX — one parent element" },
        { icon: "♻️", text: "Reusable — <UserCard /> anywhere" },
        { icon: "🔒", text: "Receives data via props, doesn't mutate it" },
      ],
      note: "Fragment <></> lets you return multiple elements without an extra div.",
    },

    s5: {
      label: "05 — NodeJS and environment",
      title: "How to install React?",
      sub: "React requires Node.js. npm or yarn are used for package management.",
      nodeTitle: "What is Node.js?",
      nodeDesc:
        "Node.js lets you run JavaScript outside the browser (on a server or terminal). Required for creating React projects.",
      steps: [
        {
          num: "01",
          title: "Install Node.js",
          code: "# Download from nodejs.org\nnode --version  # v18+",
          color: "#4a9e60",
        },
        {
          num: "02",
          title: "Create a project with Vite",
          code: "npm create vite@latest my-app\ncd my-app",
          color: "#61DAFB",
        },
        {
          num: "03",
          title: "Install packages",
          code: "npm install",
          color: "#c85c1a",
        },
        {
          num: "04",
          title: "Run the app",
          code: "npm run dev\n# http://localhost:5173",
          color: "#b07820",
        },
      ],
      structure: {
        title: "File structure",
        items: [
          { name: "src/", desc: "Main source folder", color: "#61DAFB" },
          { name: "src/components/", desc: "Components", color: "#4a9e60" },
          { name: "src/pages/", desc: "Pages", color: "#c85c1a" },
          {
            name: "src/assets/",
            desc: "Images, fonts, videos",
            color: "#b07820",
          },
          { name: "package.json", desc: "Package list", color: "#7a7468" },
        ],
      },
      note: "Vite is a modern, fast build tool. Unlike create-react-app — it's significantly faster.",
    },
  },
};
