// ═══════════════════════════════════════════════════════════════════════════════
// DOM DATA — Quizlar va Content Keys
// ═══════════════════════════════════════════════════════════════════════════════

// Quizlar i18n orqali keladi — bu yerda faqat lessonId → quizKey mapping
const DOM_LESSON_IDS = [
  "dom-intro",
  "dom-selecting",
  "dom-styling",
  "dom-manipulating",
  "dom-attributes",
  "dom-events",
  "dom-delegation",
  "js-modules",
  "localstorage",
  "fetch-dom",
  "crud-localstorage",
  "spa-exam",
];

// Starter kodlar (code editor uchun)
export const DOM_STARTERS = {
  "dom-intro": {
    code: `// DOM daraxti bilan tanishing
const heading = document.querySelector('h1');
console.log(heading.nodeType);    // 1 = Element
console.log(heading.nodeName);    // "H1"
console.log(heading.textContent); // "Salom DOM!"`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  h1 { color: #c85c1a; }
</style></head>
<body>
  <h1>Salom DOM!</h1>
  <p>Bu paragraf.</p>
  <!-- Bu izoh -->
  <script></script>
</body>
</html>`,
  },
  "dom-selecting": {
    code: `// Elementlarni tanlash usullari
const title = document.getElementById('title');
const btn = document.querySelector('.btn');
const allCards = document.querySelectorAll('.card');

console.log(title.textContent);
console.log(allCards.length);

// Traversing
console.log(btn.parentElement);
console.log(btn.nextElementSibling);`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  .card { background: white; padding: 16px; margin: 8px 0; border-radius: 8px; border: 1px solid rgba(26,24,20,0.1); }
  .btn { background: #c85c1a; color: white; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; }
</style></head>
<body>
  <h1 id="title">Sarlavha</h1>
  <div class="card">Karta 1</div>
  <div class="card">Karta 2</div>
  <div class="card">Karta 3</div>
  <button class="btn">Tugma</button>
  <script></script>
</body>
</html>`,
  },
  "dom-styling": {
    code: `// Style va classList bilan ishlash
const box = document.querySelector('.box');

// Inline style
box.style.backgroundColor = '#c85c1a';
box.style.transform = 'rotate(5deg)';

// classList
document.querySelector('.toggle-btn').addEventListener('click', () => {
  box.classList.toggle('active');
});`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; display: flex; flex-direction: column; gap: 16px; }
  .box { width: 100px; height: 100px; background: #185FA5; border-radius: 12px; transition: all 0.3s; }
  .box.active { background: #c85c1a; border-radius: 50%; transform: scale(1.2); }
  .toggle-btn { padding: 8px 16px; background: #1a1814; color: white; border: none; border-radius: 6px; cursor: pointer; }
</style></head>
<body>
  <div class="box"></div>
  <button class="toggle-btn">Toggle</button>
  <script></script>
</body>
</html>`,
  },
  "dom-manipulating": {
    code: `// Elementlar yaratish va o'chirish
const list = document.querySelector('#list');

function addItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.style.padding = '8px';
  
  const btn = document.createElement('button');
  btn.textContent = '×';
  btn.onclick = () => li.remove();
  
  li.appendChild(btn);
  list.appendChild(li);
}

addItem('Birinchi element');
addItem('Ikkinchi element');`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  ul { list-style: none; padding: 0; }
  li { background: white; margin: 4px 0; border-radius: 8px; border: 1px solid rgba(26,24,20,0.1); display: flex; justify-content: space-between; align-items: center; }
  li button { background: #c85c1a; color: white; border: none; border-radius: 4px; padding: 2px 8px; cursor: pointer; margin-right: 8px; }
</style></head>
<body>
  <ul id="list"></ul>
  <script></script>
</body>
</html>`,
  },
  "dom-attributes": {
    code: `// Atributlar bilan ishlash
const link = document.querySelector('a');
const img = document.querySelector('img');

console.log(link.getAttribute('href'));
link.setAttribute('target', '_blank');

// data-* atributlari
const card = document.querySelector('.card');
console.log(card.dataset.userId);
console.log(card.dataset.color);`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  a { color: #c85c1a; }
  img { width: 100px; border-radius: 8px; }
  .card { background: white; padding: 16px; border-radius: 8px; margin-top: 16px; }
</style></head>
<body>
  <a href="https://google.com">Google</a>
  <img src="https://picsum.photos/100" alt="Rasm">
  <div class="card" data-user-id="42" data-color="red">
    Karta (data-* atributlari bor)
  </div>
  <script></script>
</body>
</html>`,
  },
  "dom-events": {
    code: `// Hodisalar bilan ishlash
const btn = document.querySelector('#clickBtn');
const input = document.querySelector('#textInput');
const log = document.querySelector('#log');

const addLog = (msg) => {
  const p = document.createElement('p');
  p.textContent = msg;
  p.style.margin = '4px 0';
  log.prepend(p);
};

btn.addEventListener('click', (e) => {
  addLog(\`Click: x=\${e.clientX}, y=\${e.clientY}\`);
});

input.addEventListener('input', (e) => {
  addLog(\`Input: "\${e.target.value}"\`);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addLog('Enter bosildi!');
});`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
  #clickBtn { padding: 10px 20px; background: #c85c1a; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; }
  #textInput { padding: 8px 12px; border: 1.5px solid rgba(26,24,20,0.15); border-radius: 8px; font-size: 14px; }
  #log { background: #1a1814; color: #c3e88d; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; min-height: 80px; max-height: 150px; overflow-y: auto; }
</style></head>
<body>
  <button id="clickBtn">Bosing</button>
  <input id="textInput" placeholder="Yozing...">
  <div id="log"></div>
  <script></script>
</body>
</html>`,
  },
  "dom-delegation": {
    code: `// Event delegation
const list = document.querySelector('#list');

// Bitta tinglаgich — barchasi uchun
list.addEventListener('click', (e) => {
  const item = e.target.closest('.item');
  if (!item) return;
  
  if (e.target.classList.contains('delete')) {
    item.remove();
  } else {
    item.classList.toggle('done');
  }
});

// Yangi elementlar ham ishlaydi!
document.querySelector('#addBtn').addEventListener('click', () => {
  const li = document.createElement('div');
  li.className = 'item';
  li.innerHTML = \`<span>Yangi element</span><button class="delete">×</button>\`;
  list.appendChild(li);
});`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  .item { display: flex; justify-content: space-between; background: white; padding: 10px 14px; margin: 6px 0; border-radius: 8px; border: 1px solid rgba(26,24,20,0.1); cursor: pointer; }
  .item.done { text-decoration: line-through; color: #7a7468; background: #f9f7f2; }
  .delete { background: #c85c1a; color: white; border: none; border-radius: 4px; padding: 2px 8px; cursor: pointer; }
  #addBtn { padding: 8px 16px; background: #4a9e60; color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 8px; }
</style></head>
<body>
  <div id="list">
    <div class="item"><span>Birinchi vazifa</span><button class="delete">×</button></div>
    <div class="item"><span>Ikkinchi vazifa</span><button class="delete">×</button></div>
  </div>
  <button id="addBtn">+ Qo'shish</button>
  <script></script>
</body>
</html>`,
  },
  "js-modules": {
    code: `// ES Modules — type="module" kerak
// Bu faylda boshqa modulni import qilib ishlating

import { formatDate, capitalize } from './utils.js';

const name = capitalize('ali valiey');
const today = formatDate(new Date());

document.querySelector('h1').textContent = \`\${name} — \${today}\`;`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  h1 { color: #c85c1a; }
  p { color: #7a7468; font-size: 14px; }
</style></head>
<body>
  <h1>Modul testi</h1>
  <p>type="module" bilan skript ishlatilmoqda</p>
  <script type="module">
    // Bu yerda ES module sintaksisi ishlaydi
    const greet = (name) => \`Salom, \${name}!\`;
    document.querySelector('p').textContent = greet('Dasturchiman');
  </script>
</body>
</html>`,
  },
  localstorage: {
    code: `// localStorage bilan ishlash
const STORAGE_KEY = 'app_data';

// Saqlash
function saveData(key, value) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  data[key] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render();
}

// O'qish
function getData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

// Ko'rsatish
function render() {
  const data = getData();
  document.querySelector('#output').textContent = JSON.stringify(data, null, 2);
}

saveData('name', 'Ali');
saveData('theme', 'dark');
render();`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  #output { background: #1a1814; color: #c3e88d; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 13px; white-space: pre; }
</style></head>
<body>
  <h2>LocalStorage</h2>
  <pre id="output">// Yuklanmoqda...</pre>
  <script></script>
</body>
</html>`,
  },
  "fetch-dom": {
    code: `// Fetch + DOM
async function loadPosts() {
  const container = document.querySelector('#posts');
  container.innerHTML = '<p>Yuklanmoqda...</p>';
  
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const posts = await res.json();
    
    container.innerHTML = posts.map(post => \`
      <div class="card">
        <h3>#\${post.id} — \${post.title}</h3>
        <p>\${post.body.slice(0, 80)}...</p>
      </div>
    \`).join('');
  } catch (err) {
    container.innerHTML = \`<p style="color:red">Xato: \${err.message}</p>\`;
  }
}

loadPosts();`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; }
  .card { background: white; padding: 16px; margin: 8px 0; border-radius: 10px; border: 1px solid rgba(26,24,20,0.1); }
  .card h3 { font-size: 14px; color: #c85c1a; margin: 0 0 6px; }
  .card p { font-size: 13px; color: #7a7468; margin: 0; }
</style></head>
<body>
  <h2>API dan postlar</h2>
  <div id="posts"></div>
  <script></script>
</body>
</html>`,
  },
  "crud-localstorage": {
    code: `// CRUD with LocalStorage
const KEY = 'todos';

let todos = JSON.parse(localStorage.getItem(KEY) || '[]');

function save() {
  localStorage.setItem(KEY, JSON.stringify(todos));
}

function render() {
  const list = document.querySelector('#list');
  list.innerHTML = todos.map((t, i) => \`
    <div class="todo \${t.done ? 'done' : ''}">
      <input type="checkbox" \${t.done ? 'checked' : ''} onchange="toggle(\${i})">
      <span>\${t.text}</span>
      <button onclick="remove(\${i})">×</button>
    </div>
  \`).join('');
}

function add() {
  const input = document.querySelector('#input');
  if (!input.value.trim()) return;
  todos.push({ text: input.value.trim(), done: false });
  input.value = '';
  save(); render();
}

function toggle(i) { todos[i].done = !todos[i].done; save(); render(); }
function remove(i) { todos.splice(i, 1); save(); render(); }

render();`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  body { font-family: sans-serif; background: #f2efe8; padding: 24px; max-width: 400px; }
  .input-row { display: flex; gap: 8px; margin-bottom: 12px; }
  input[type=text] { flex: 1; padding: 8px 12px; border: 1.5px solid rgba(26,24,20,0.15); border-radius: 8px; font-size: 14px; }
  button.add { background: #4a9e60; color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; }
  .todo { display: flex; align-items: center; gap: 10px; background: white; padding: 10px 14px; margin: 6px 0; border-radius: 8px; border: 1px solid rgba(26,24,20,0.1); }
  .todo.done span { text-decoration: line-through; color: #7a7468; }
  .todo button { margin-left: auto; background: #c85c1a; color: white; border: none; border-radius: 4px; padding: 2px 8px; cursor: pointer; }
</style></head>
<body>
  <h2>Todo CRUD</h2>
  <div class="input-row">
    <input id="input" type="text" placeholder="Yangi vazifa..." onkeydown="if(event.key==='Enter')add()">
    <button class="add" onclick="add()">Qo'shish</button>
  </div>
  <div id="list"></div>
  <script></script>
</body>
</html>`,
  },
  "spa-exam": {
    code: `// SPA — Hash Router
const routes = {
  '/home': () => \`<h1>🏠 Bosh sahifa</h1><p>Xush kelibsiz!</p>\`,
  '/about': () => \`<h1>ℹ️ Biz haqimizda</h1><p>SPA misoli.</p>\`,
  '/todos': renderTodos,
};

let todos = JSON.parse(localStorage.getItem('spa_todos') || '[]');

function renderTodos() {
  return \`
    <h1>✅ Vazifalar</h1>
    <div id="todo-list">
      \${todos.map((t, i) => \`<p>\${i+1}. \${t}</p>\`).join('') || '<p>Bo'sh</p>'}
    </div>
  \`;
}

function render() {
  const hash = location.hash.slice(1) || '/home';
  const page = routes[hash] || routes['/home'];
  document.querySelector('#app').innerHTML = page();
  document.querySelectorAll('nav a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + hash ? '#c85c1a' : '#7a7468';
  });
}

window.addEventListener('hashchange', render);
render();`,
    html: `<!DOCTYPE html>
<html>
<head><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: sans-serif; background: #f2efe8; }
  nav { background: #1a1814; padding: 12px 24px; display: flex; gap: 20px; }
  nav a { color: #7a7468; text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.2s; }
  #app { padding: 24px; }
  #app h1 { color: #c85c1a; margin-bottom: 8px; }
</style></head>
<body>
  <nav>
    <a href="#/home">Home</a>
    <a href="#/todos">Todos</a>
    <a href="#/about">About</a>
  </nav>
  <div id="app"></div>
  <script></script>
</body>
</html>`,
  },
};

export const DOM_CONTENT_KEYS = Object.fromEntries(
  DOM_LESSON_IDS.map((id) => [
    id,
    {
      xp:
        id === "spa-exam" ? 150
        : id === "crud-localstorage" || id === "fetch-dom" ? 100
        : id === "localstorage" || id === "dom-delegation" ? 80
        : 60,
      type: [
        "dom-intro",
        "dom-selecting",
        "dom-styling",
        "dom-events",
        "dom-delegation",
        "fetch-dom",
        "crud-localstorage",
        "spa-exam",
      ].includes(id)
        ? "interactive"
        : "visual",
      phases: [
        { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
        { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
        { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
        {
          id: "code",
          labelKey: "lesson.phases.code",
          icon: "✏️",
          starterCode: DOM_STARTERS[id]?.code || "",
          starterHTML: DOM_STARTERS[id]?.html || "",
        },
      ],
      quizKey: `lessons.${id}.quiz`,
    },
  ])
);
