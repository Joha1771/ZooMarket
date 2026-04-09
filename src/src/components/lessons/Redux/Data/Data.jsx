// ═══════════════════════════════════════════════════════════════════════════════
// DATA — Redux & React Ecosystem STARTERS & QUIZZES
// ═══════════════════════════════════════════════════════════════════════════════

export const STARTERS = {
  "rtk-basics": {
    code: `// Redux Toolkit — Store, Slice, Actions
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 1. Slice yaratish
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 2. Store yaratish
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// 3. Ishlatish
console.log('Initial state:', store.getState());

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(incrementByAmount(5));
console.log('After +1, +1, +5:', store.getState());

store.dispatch(decrement());
console.log('After -1:', store.getState());`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  "rtk-thunk": {
    code: `// RTK — Async Thunk va extraReducers
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Async thunk — API so'rov
const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
  return res.json();
});

// 2. Slice with extraReducers
const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending,   (state) => { state.status = 'loading'; })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// 3. Store
const store = configureStore({ reducer: { user: userSlice.reducer } });

// 4. Dispatch va subscribe
store.subscribe(() => {
  const { status, data } = store.getState().user;
  if (status === 'loading')   console.log('⏳ Loading...');
  if (status === 'succeeded') console.log('✅ User:', data.name, '|', data.email);
});

store.dispatch(fetchUser(1));`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  "rtk-query": {
    code: `// RTK Query — createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// RTK Query — API definition
const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    // GET so'rov — query
    getPosts: builder.query({
      query: () => '/posts?_limit=5',
    }),
    // GET bitta — query with param
    getPost: builder.query({
      query: (id) => \`/posts/\${id}\`,
    }),
    // POST so'rov — mutation
    createPost: builder.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
    }),
  }),
});

// React componentda ishlatish:
// const { data, isLoading, error } = useGetPostsQuery();
// const [createPost, { isLoading }] = useCreatePostMutation();

console.log('RTK Query endpoints:', Object.keys(postsApi.endpoints));
console.log('Generated hooks:', [
  'useGetPostsQuery',
  'useGetPostQuery',
  'useCreatePostMutation'
]);`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  zustand: {
    code: `// Zustand — State Management
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Oddiy store
const useCounterStore = create((set, get) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  getDoubled: () => get().count * 2,
}));

// 2. Persist middleware bilan store
const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, done: false }]
      })),
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(t =>
          t.id === id ? { ...t, done: !t.done } : t
        )
      })),
      removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(t => t.id !== id)
      })),
    }),
    { name: 'todo-storage' }
  )
);

// Componentda ishlatish:
// const { count, increment } = useCounterStore();
// const { todos, addTodo } = useTodoStore();

console.log('Counter store:', useCounterStore.getState());
console.log('Todo store:', useTodoStore.getState());`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  protected: {
    code: `// Protected Routes — React Router v6
import { Navigate, Outlet, useParams } from 'react-router-dom';

// 1. Auth hook (token tekshiruvi)
function useAuth() {
  const token = localStorage.getItem('token');
  return { isAuthenticated: !!token };
}

// 2. Protected Route komponenti
function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated
    ? <Outlet />          // ✓ Token bor — sahifani ko'rsat
    : <Navigate to="/login" replace />;  // ✗ Yo'q — loginга jo'nat
}

// 3. Router tuzilmasi
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <LoginPage /> },
      {
        element: <ProtectedRoute />,  // Guard
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'profile',   element: <Profile /> },
          { path: 'posts/:id', element: <PostDetail /> },  // Dynamic
        ],
      },
    ],
  },
]);

// 4. Dynamic route
function PostDetail() {
  const { id } = useParams();
  return <div>Post ID: {id}</div>;
}

console.log('Router structure ready!');
console.log('Protected paths: /dashboard, /profile, /posts/:id');`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  validation: {
    code: `// Form Validation — Yup + React Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 1. Yup schema
const schema = yup.object({
  name: yup
    .string()
    .required('Ism majburiy')
    .min(2, 'Kamida 2 harf'),
  email: yup
    .string()
    .email('Email noto\'g\'ri')
    .required('Email majburiy'),
  password: yup
    .string()
    .min(8, 'Kamida 8 belgi')
    .matches(/[A-Z]/, 'Bitta katta harf kerak')
    .required('Parol majburiy'),
  age: yup
    .number()
    .positive('Musbat son bo\'lishi kerak')
    .integer()
    .min(18, 'Kamida 18 yosh')
    .required('Yosh majburiy'),
});

// 2. React Hook Form
function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log('✅ Valid data:', data);
    // await api.register(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Ism" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Yuborilmoqda...' : 'Ro\'yxatdan o\'tish'}
      </button>
    </form>
  );
}`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  "ui-libs": {
    code: `// Ant Design — UI Library
import { Button, Table, Form, Input, Modal, Space } from 'antd';

// 1. Table komponenti
const columns = [
  { title: 'Ism',    dataIndex: 'name',  key: 'name' },
  { title: 'Yoshi',  dataIndex: 'age',   key: 'age' },
  { title: 'Shahar', dataIndex: 'city',  key: 'city' },
  {
    title: 'Amallar',
    key: 'actions',
    render: (_, record) => (
      <Space>
        <Button type="primary" size="small" onClick={() => handleEdit(record)}>
          Tahrirlash
        </Button>
        <Button danger size="small" onClick={() => handleDelete(record.id)}>
          O'chirish
        </Button>
      </Space>
    ),
  },
];

// 2. Form bilan Modal
function UserModal({ open, onClose, onSubmit }) {
  const [form] = Form.useForm();
  return (
    <Modal title="Foydalanuvchi" open={open} onCancel={onClose}
      onOk={() => form.submit()}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="name" label="Ism"
          rules={[{ required: true, message: 'Ism kiriting!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email"
          rules={[{ type: 'email', message: 'Email noto\'g\'ri!' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

console.log('Ant Design components: Button, Table, Form, Modal, Input, Space...');`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  swagger: {
    code: `// Swagger / Postman — Auth + FormData
import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.example.com' });

// 1. Token interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

// 2. Login — token olish
async function login(email, password) {
  const { data } = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', data.token);
  return data;
}

// 3. FormData — rasm yuklash
async function uploadAvatar(file) {
  const formData = new FormData();
  formData.append('avatar', file);   // rasm
  formData.append('userId', '123');  // qo'shimcha ma'lumot

  const { data } = await api.post('/users/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (e) => {
      const percent = Math.round((e.loaded * 100) / e.total);
      console.log(\`Yuklash: \${percent}%\`);
    },
  });
  return data.avatarUrl;
}

// 4. Protected API
async function getProfile() {
  const { data } = await api.get('/profile');  // token avtomatik qo'shiladi
  return data;
}

console.log('API methods ready: login, uploadAvatar, getProfile');`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  lazy: {
    code: `// Lazy Loading + Suspense
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1. Lazy import — komponent faqat kerak bo'lganda yuklanadi
const Dashboard  = lazy(() => import('./pages/Dashboard'));
const Profile    = lazy(() => import('./pages/Profile'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

// 2. Loading fallback
function PageLoader() {
  return (
    <div style={{ display:'flex', justifyContent:'center', padding:'40px' }}>
      <div className="spinner" />
      <span>Yuklanmoqda...</span>
    </div>
  );
}

// 3. Suspense bilan wrap
function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

// 4. Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'profile',   element: <Profile /> },
      { path: 'admin',     element: <AdminPanel /> },
    ],
  },
]);

console.log('Lazy loaded routes: Dashboard, Profile, AdminPanel');
console.log('Bundle split automatically by Vite/Webpack');`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  charts: {
    code: `// Charts — recharts + Chart.js
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Bar } from 'react-chartjs-2';

// 1. Recharts — Line chart
const salesData = [
  { month: 'Yan', sales: 4000, users: 240 },
  { month: 'Fev', sales: 3000, users: 139 },
  { month: 'Mar', sales: 5000, users: 380 },
  { month: 'Apr', sales: 4800, users: 350 },
  { month: 'May', sales: 6000, users: 460 },
  { month: 'Iyn', sales: 5500, users: 420 },
];

function SalesChart() {
  return (
    <LineChart width={600} height={300} data={salesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#c85c1a" strokeWidth={2} />
      <Line type="monotone" dataKey="users" stroke="#4a9e60" strokeWidth={2} />
    </LineChart>
  );
}

// 2. Chart.js — Bar chart
const barData = {
  labels: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
  datasets: [{
    label: 'O\'quvchilar soni',
    data: [120, 95, 180, 160, 80],
    backgroundColor: ['#e34c26','#264de4','#f7df1e','#61dafb','#764abc'],
  }],
};

console.log('Charts ready: LineChart, BarChart, DoughnutChart');`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  pagination: {
    code: `// Pagination + Filter + Search
import { useState, useMemo, useCallback } from 'react';

const ITEMS_PER_PAGE = 5;

function useProductList(products) {
  const [page, setPage]         = useState(1);
  const [search, setSearch]     = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy]     = useState('name');

  // 1. Filter + search
  const filtered = useMemo(() => {
    return products
      .filter(p => category === 'all' || p.category === category)
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => sortBy === 'price'
        ? a.price - b.price
        : a.name.localeCompare(b.name)
      );
  }, [products, category, search, sortBy]);

  // 2. Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // 3. Search handler — reset page
  const handleSearch = useCallback((value) => {
    setSearch(value);
    setPage(1);
  }, []);

  return {
    items: paginated,
    page, setPage,
    totalPages,
    search, handleSearch,
    category, setCategory,
    sortBy, setSortBy,
    total: filtered.length,
  };
}

console.log('Hooks: useProductList — filter, search, sort, paginate');`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },

  admin: {
    code: `// Admin Panel — Full structure
import { configureStore } from '@reduxjs/toolkit';

// Slice-lar
import authSlice from './slices/authSlice';
import usersSlice from './slices/usersSlice';
import productsSlice from './slices/productsSlice';
import { usersApi } from './api/usersApi';

// Store
const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    products: productsSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (gDM) => gDM().concat(usersApi.middleware),
});

// Admin Panel sahifalari:
// /login          — LoginPage (auth)
// /dashboard      — DashboardPage (statistika)
// /users          — UsersTable (CRUD)
// /users/:id      — UserDetail
// /products       — ProductsTable (CRUD + filter)
// /settings       — SettingsPage

// CRUD hooks (RTK Query):
// useGetUsersQuery()
// useCreateUserMutation()
// useUpdateUserMutation()
// useDeleteUserMutation()

// Auth flow:
// 1. Login → token saqlash (localStorage)
// 2. Interceptor → har so'rovga token qo'shish
// 3. 401 → logout + /login ga yo'naltirish

console.log('Admin Panel structure ready!');
console.log('Routes: /login, /dashboard, /users, /products, /settings');`,
    html: `<!DOCTYPE html><html><body><script></script></body></html>`,
    lang: "js",
  },
};

// ─── QUIZZES ─────────────────────────────────────────────────────────────────
export const QUIZZES = {
  "rtk-basics": {
    q: "Redux Toolkit'da slice nima?",
    options: [
      "Faqat reducerlar to'plami",
      "Reducer + actions + initial state birlashgan ob'yekt",
      "Faqat action creator",
      "Store konfiguratsiyasi",
    ],
    correct: 1,
    explain:
      "createSlice — name, initialState va reducers dan iborat ob'yekt. U avtomatik action creator-lar yaratadi va reducer eksport qiladi.",
  },
  "rtk-thunk": {
    q: "createAsyncThunk'ning 3 holati qaysilar?",
    options: [
      "start, process, end",
      "pending, fulfilled, rejected",
      "loading, success, failure",
      "init, done, error",
    ],
    correct: 1,
    explain:
      "createAsyncThunk avtomatik 3 action yaratadi: pending (boshlanish), fulfilled (muvaffaqiyat), rejected (xato). extraReducers orqali ularni handle qilinadi.",
  },
  "rtk-query": {
    q: "RTK Query'da query va mutation farqi nima?",
    options: [
      "Farqi yo'q",
      "query — ma'lumot olish (GET), mutation — o'zgartirish (POST/PUT/DELETE)",
      "mutation — ma'lumot olish, query — o'zgartirish",
      "Ikkalasi ham faqat GET",
    ],
    correct: 1,
    explain:
      "query — serverdan ma'lumot olish (GET), caching qo'llab-quvvatlanadi. mutation — serverda ma'lumot o'zgartirish (POST, PUT, DELETE, PATCH).",
  },
  zustand: {
    q: "Zustand'da set funksiyasi nima qiladi?",
    options: [
      "Storeni o'chiradi",
      "State'ni yangilaydi (React'ni re-render qiladi)",
      "Faqat log qiladi",
      "Yangi store yaratadi",
    ],
    correct: 1,
    explain:
      "set() — Zustand store'ini yangilaydi. (state) => ({...}) shaklidagi funksiya oldingi state'ga asoslanib yangilaydi. Bu Redux'ning dispatch/action tizimidan ancha sodda.",
  },
  protected: {
    q: "React Router'da Outlet nima uchun ishlatiladi?",
    options: [
      "Sahifani yuklatish uchun",
      "Nested (ichki) routelar uchun joy belgilash",
      "404 sahifasi ko'rsatish",
      "Redirect qilish",
    ],
    correct: 1,
    explain:
      "Outlet — parent route componentida child route'larning renderlanish joyini belgilaydi. ProtectedRoute Outlet ishlatsa, faqat authenticated holatda child komponentlar ko'rsatiladi.",
  },
  validation: {
    q: "React Hook Form'dagi register nima qiladi?",
    options: [
      "Foydalanuvchini ro'yxatga oladi",
      "Input elementni form bilan bog'laydi (ref + onChange + onBlur)",
      "Faqat validatsiya qiladi",
      "Formni serverga yuboradi",
    ],
    correct: 1,
    explain:
      "register('fieldName') — ref, onChange, onBlur va name propslarini qaytaradi. Bular spread qilinib input'ga beriladi: <input {...register('name')} />. Shu orqali RHF input qiymatini kuzatadi.",
  },
  "ui-libs": {
    q: "Ant Design Form.Item'ning rules prop'i nima uchun?",
    options: [
      "Stilni belgilash uchun",
      "Validatsiya qoidalarini belgilash uchun",
      "Input turini aniqlash uchun",
      "Maydon nomini ko'rsatish uchun",
    ],
    correct: 1,
    explain:
      "rules={[{required: true, message: '...'}, {min: 3}]} — validatsiya qoidalari. Form submit bo'lganda avtomatik tekshiriladi va xato xabarlari ko'rsatiladi.",
  },
  swagger: {
    q: "FormData nima uchun ishlatiladi?",
    options: [
      "Faqat JSON jo'natish uchun",
      "Fayl (rasm, video) va ma'lumotlarni birga yuborish uchun",
      "Faqat GET so'rovlar uchun",
      "LocalStorage'ga saqlash uchun",
    ],
    correct: 1,
    explain:
      "FormData — multipart/form-data formatida fayl va oddiy maydonlarni birga yuboradi. Rasm yuklash, avatar o'zgartirish kabi amallar uchun zarur.",
  },
  lazy: {
    q: "React.lazy va Suspense birgalikda nima qiladi?",
    options: [
      "Komponentni xotirada saqlaydi",
      "Komponentni faqat kerak bo'lganda yuklaydi, yuklanish vaqtida fallback ko'rsatadi",
      "Komponentni serverda render qiladi",
      "Komponentni cache'laydi",
    ],
    correct: 1,
    explain:
      "lazy(() => import('./Page')) — code splitting qiladi. Suspense fallback — yuklanayotganda spinner ko'rsatadi. Natija: boshlang'ich bundle kichikroq, tezroq ishlaydi.",
  },
  charts: {
    q: "recharts'da ma'lumot qanday formatda beriladi?",
    options: [
      "Oddiy massiv: [1, 2, 3]",
      "Ob'yektlar massivi: [{name: 'Yan', value: 100}]",
      "String: '1,2,3'",
      "Ikki o'lchamli massiv: [[1,2], [3,4]]",
    ],
    correct: 1,
    explain:
      "recharts data prop ob'yektlar massivini kutadi: [{month: 'Yan', sales: 4000}]. dataKey prop orqali qaysi maydon ishlatilishini ko'rsatiladi.",
  },
  pagination: {
    q: "useMemo nima uchun ishlatiladi?",
    options: [
      "State saqlash uchun",
      "Og'ir hisob-kitoblar natijasini keshlash, qayta hisoblamaylik",
      "Effect ishlatish uchun",
      "Ref saqlash uchun",
    ],
    correct: 1,
    explain:
      "useMemo(() => heavyCalc(), [deps]) — deps o'zgarmasa qayta hisoblaydi, ya'ni filter/sort operatsiyalarini keraksiz takrorlamaydi. Bu katta ro'yxatlarda performance'ni oshiradi.",
  },
  admin: {
    q: "Admin Panel'da RTK Query'dan foydalanishning asosiy afzalligi?",
    options: [
      "Ko'proq kod yozish imkoniyati",
      "Avtomatik caching, loading/error holatlari va re-fetch",
      "Faqat GET so'rovlar uchun ishlaydi",
      "Redux'ni almashtiradi",
    ],
    correct: 1,
    explain:
      "RTK Query avtomatik: serverdan ma'lumotni cache'laydi, loading/error state'larini boshqaradi, muddati o'tganda yangilab oladi. Bu boilerplate kodni keskin kamaytiradi.",
  },
};

// ─── CONTENT KEYS ────────────────────────────────────────────────────────────
export const REDUX_CONTENT_KEYS = Object.fromEntries(
  Object.keys(QUIZZES).map((id) => [
    id,
    {
      xp: ["rtk-query", "admin", "validation"].includes(id)
        ? 100
        : ["rtk-thunk", "zustand", "charts"].includes(id)
          ? 90
          : 70,
      type: "interactive",
      phases: [
        { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
        { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
        { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
        {
          id: "code",
          labelKey: "lesson.phases.code",
          icon: "✏️",
          starterCode: STARTERS[id]?.code || "",
          starterHTML: STARTERS[id]?.html || "",
          lang: STARTERS[id]?.lang || "js",
        },
      ],
      quizKey: `lessons.redux.${id}.quiz`,
    },
  ]),
);
