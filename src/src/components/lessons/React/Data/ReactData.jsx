// ─── REACT MODULE — DATA ──────────────────────────────────────────────────────

export const REACT_STARTERS = {
  "react-intro": {
    code: `// Virtual DOM test
// Quyidagi kodda state o'zgartirib, React
// faqat o'zgargan joyni yangilashini kuzating

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log('Render bo\'ldi!'); // nechi marta?

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`,
    html: "",
    lang: "jsx",
  },

  components: {
    code: `// Komponent yarating va chaqiring

function UserCard({ name, role, avatar }) {
  return (
    <div style={{
      padding: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      marginBottom: '8px'
    }}>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name="Ali" role="Frontend Dev" />
      <UserCard name="Vali" role="Backend Dev" />
      <UserCard name="Gani" role="UI/UX Designer" />
    </div>
  );
}`,
    html: "",
    lang: "jsx",
  },

  "props-mapping": {
    code: `// Massivni map qilib komponentlar render qiling

const products = [
  { id: 1, name: 'MacBook', price: 1299, inStock: true },
  { id: 2, name: 'iPad', price: 799, inStock: false },
  { id: 3, name: 'iPhone', price: 999, inStock: true },
];

function ProductCard({ name, price, inStock }) {
  return (
    <div style={{ padding: '12px', border: '1px solid #ccc', marginBottom: '8px', borderRadius: '6px' }}>
      <h3>{name}</h3>
      <p>\${price}</p>
      <span style={{ color: inStock ? 'green' : 'red' }}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Bu yerda products ni map qiling */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}`,
    html: "",
    lang: "jsx",
  },

  usestate: {
    code: `// Todo list yasang
// useState bilan items boshqaring

import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState(['React o\'rganish', 'Loyiha qilish']);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Todo List ({todos.length})</h2>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="Yangi task..."
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px', background: '#61DAFB', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Qo'shish
        </button>
      </div>
      {todos.map((todo, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', marginBottom: '4px', background: '#f5f5f5', borderRadius: '4px' }}>
          <span>{todo}</span>
          <button onClick={() => removeTodo(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}>✕</button>
        </div>
      ))}
    </div>
  );
}`,
    html: "",
    lang: "jsx",
  },

  "react-events": {
    code: `// Form bilan ishlang
// preventDefault va controlled inputs

import { useState } from 'react';

function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Sahifa yangilanmaydi
    setSubmitted(true);
    console.log('Form:', form);
  };

  if (submitted) {
    return <div style={{ padding: '20px', color: 'green' }}>✓ Login: {form.email}</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
      <h2>Login</h2>
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input name="password" type="password" placeholder="Parol" value={form.password} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <button type="submit" style={{ padding: '10px', background: '#61DAFB', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
        Kirish
      </button>
    </form>
  );
}`,
    html: "",
    lang: "jsx",
  },

  useeffect: {
    code: `// useEffect bilan timer yasang

import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup — interval to'xtatiladi
    return () => clearInterval(interval);
  }, [running]); // running o'zganda qayta ishlaydi

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return \`\${String(m).padStart(2,'0')}:\${String(sec).padStart(2,'0')}\`;
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'monospace', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: '#61DAFB' }}>
        {formatTime(seconds)}
      </div>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button onClick={() => setRunning(!running)} style={{ padding: '8px 20px', background: running ? '#e06c75' : '#4a9e60', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset} style={{ padding: '8px 20px', background: '#ccc', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Reset
        </button>
      </div>
    </div>
  );
}`,
    html: "",
    lang: "jsx",
  },

  axios: {
    code: `// JSONPlaceholder dan post'larni fetch qiling

import { useState, useEffect } from 'react';

// Real projectda: import axios from 'axios';
// Bu yerda fetch ishlatamiz (axios o'rniga)

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ padding: '20px', fontFamily: 'monospace' }}>⏳ Yuklanmoqda...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red', fontFamily: 'monospace' }}>Xato: {error}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Posts ({posts.length})</h2>
      {posts.map(post => (
        <div key={post.id} style={{ padding: '12px', marginBottom: '8px', background: '#f5f5f5', borderRadius: '6px', borderLeft: '3px solid #61DAFB' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{post.title}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>{post.body.slice(0, 80)}...</div>
        </div>
      ))}
    </div>
  );
}`,
    html: "",
    lang: "jsx",
  },
};

export const REACT_QUIZZES = {
  "react-intro": [
    {
      q: "React da Virtual DOM nima uchun ishlatiladi?",
      options: [
        "Faqat o'zgargan joyni Real DOM'ga yozish uchun",
        "CSS stillarni boshqarish uchun",
        "API so'rovlar qilish uchun",
        "Router ishlashi uchun",
      ],
      correct: 0,
    },
    {
      q: "SPA (Single Page Application) da sahifalar qanday o'zgaradi?",
      options: [
        "Har safar serverdan yangi HTML yuklanadi",
        "JavaScript orqali faqat kontent o'zgartiriladi",
        "Brauzer cache ishlatiladi",
        "CSS animation bilan",
      ],
      correct: 1,
    },
    {
      q: "React qanday texnologiya?",
      options: [
        "To'liq framework (Angular kabi)",
        "Backend texnologiyasi",
        "UI kutubxonasi (library)",
        "Database ORM",
      ],
      correct: 2,
    },
  ],

  components: [
    {
      q: "React komponent nomi qanday boshlanishi kerak?",
      options: ["kichik harf", "Katta harf", "_ belgisi", "Raqam"],
      correct: 1,
    },
    {
      q: "JSX da bir nechta elementni qo'shimcha div siz qaytarish uchun nima ishlatiladi?",
      options: ["<wrapper>", "<container>", "<></> (Fragment)", "<group>"],
      correct: 2,
    },
    {
      q: ".jsx va .js fayllar orasidagi farq nima?",
      options: [
        "Hech qanday farq yo'q",
        ".jsx faqat komponentlar uchun, .js utils/hooks uchun",
        ".jsx server, .js client uchun",
        ".jsx kattaroq hajmli fayllar uchun",
      ],
      correct: 1,
    },
  ],

  "props-mapping": [
    {
      q: ".map() da nima uchun key prop kerak?",
      options: [
        "CSS stillash uchun",
        "React elementlarni farqlash va tez yangilash uchun",
        "Event handler uchun",
        "TypeScript uchun",
      ],
      correct: 1,
    },
    {
      q: "Qaysi key prop eng yaxshi?",
      options: ["Math.random()", "index (i)", "item.id (noyob)", "item.name"],
      correct: 2,
    },
    {
      q: "Boolean prop qanday uzatiladi?",
      options: [
        '<Card isOfficial="true" />',
        "<Card isOfficial={true} />",
        "<Card isOfficial />",
        "B va C ikkalasi ham to'g'ri",
      ],
      correct: 3,
    },
  ],

  usestate: [
    {
      q: "useState qaytaradigan massivning 2 elementi nima?",
      options: [
        "qiymat va eski qiymat",
        "qiymat va uni o'zgartiruvchi funksiya",
        "initial value va final value",
        "ref va dispatch",
      ],
      correct: 1,
    },
    {
      q: "State ni to'g'ridan-to'g'ri o'zgartirish (count++) nima qiladi?",
      options: [
        "Ishlaydi, lekin sekin",
        "Re-render bo'lmaydi — UI yangilanmaydi",
        "Avtomatik re-render bo'ladi",
        "Console da xato chiqadi",
      ],
      correct: 1,
    },
    {
      q: "useState ni qayerda chaqirish mumkin?",
      options: [
        "if bloki ichida",
        "for sikli ichida",
        "Komponent tepasida (top level)",
        "setTimeout ichida",
      ],
      correct: 2,
    },
  ],

  "react-events": [
    {
      q: "React da onclick o'rniga nima ishlatiladi?",
      options: ["onclick", "on-click", "onClick", "OnClick"],
      correct: 2,
    },
    {
      q: "Form submit da sahifa yangilanishini to'xtatish uchun nima kerak?",
      options: [
        "return false",
        "e.stopPropagation()",
        "e.preventDefault()",
        "e.cancelBubble()",
      ],
      correct: 2,
    },
    {
      q: "Input qiymatini React da qanday olish mumkin?",
      options: [
        "document.getElementById('input').value",
        "e.target.value (onChange da)",
        "input.getValue()",
        "ref.value",
      ],
      correct: 1,
    },
  ],

  useeffect: [
    {
      q: "useEffect dependency array bo'sh [] bo'lsa qachon ishlaydi?",
      options: [
        "Har renderda",
        "Hech qachon",
        "Faqat komponent birinchi yuklanganda (mount)",
        "Komponent o'chganda",
      ],
      correct: 2,
    },
    {
      q: "useEffect cleanup funksiyasi qachon chaqiriladi?",
      options: [
        "Komponent mount bo'lganda",
        "Har renderdan oldin va unmount da",
        "Faqat xato bo'lganda",
        "useEffect ichida har safar",
      ],
      correct: 1,
    },
    {
      q: "setInterval uchun cleanup nima bo'lishi kerak?",
      options: [
        "setInterval(null)",
        "clearInterval(id)",
        "interval.stop()",
        "clearTimeout(id)",
      ],
      correct: 1,
    },
  ],
};

export const REACT_CONTENT_KEYS = {
  "react-intro": {
    xp: 100,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      {
        id: "code",
        labelKey: "lesson.phases.code",
        icon: "✏️",
        lang: "jsx",
      },
    ],
    quizKey: "lessons.react.reactIntro.quiz",
  },
  components: {
    xp: 100,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.components.quiz",
  },
  "props-mapping": {
    xp: 120,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.propsMapping.quiz",
  },
  usestate: {
    xp: 130,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.usestate.quiz",
  },
  "react-events": {
    xp: 110,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.reactEvents.quiz",
  },
  useeffect: {
    xp: 140,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.useeffect.quiz",
  },
  axios: {
    xp: 130,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.axios.quiz",
  },
  router: {
    xp: 140,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.router.quiz",
  },
  optimization: {
    xp: 150,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.optimization.quiz",
  },
  context: {
    xp: 150,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.context.quiz",
  },
  "custom-hooks": {
    xp: 140,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.customHooks.quiz",
  },
  "react-project": {
    xp: 200,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      { id: "code", labelKey: "lesson.phases.code", icon: "✏️", lang: "jsx" },
    ],
    quizKey: "lessons.react.reactProject.quiz",
  },
};
