import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.7 — AXIOS AND WORKING WITH APIS
// ═══════════════════════════════════════════════════════════════════════════════

export function AxiosExplain() {
  const [tab, setTab] = useState("methods");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["methods", "instance", "pattern"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#61DAFB" : "#f2efe8",
              borderColor: tab === id ? "#61DAFB" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#0a1a20" : "#1a1814",
            }}
          >
            {id === "methods"
              ? "HTTP metodlar"
              : id === "instance"
                ? "Instance"
                : "Pattern"}
          </button>
        ))}
      </div>

      {tab === "methods" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Axios — HTTP so'rovlar uchun kutubxona:
          </p>
          {[
            {
              method: "GET",
              color: "#4a9e60",
              desc: "Ma'lumot olish",
              code: `axios.get('/api/users')\n  .then(res => setUsers(res.data));`,
            },
            {
              method: "POST",
              color: "#61DAFB",
              desc: "Yangi ma'lumot yaratish",
              code: `axios.post('/api/users', { name: 'Ali' })\n  .then(res => console.log(res.data));`,
            },
            {
              method: "PUT/PATCH",
              color: "#b07820",
              desc: "Ma'lumot yangilash",
              code: `axios.put('/api/users/1', { name: 'Vali' })\n  .then(res => console.log(res.data));`,
            },
            {
              method: "DELETE",
              color: "#e06c75",
              desc: "Ma'lumot o'chirish",
              code: `axios.delete('/api/users/1')\n  .then(() => fetchUsers());`,
            },
          ].map(({ method, color, desc, code }) => (
            <div
              key={method}
              className="overflow-hidden border rounded-xl"
              style={{ borderColor: color + "30" }}
            >
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{ background: color + "10" }}
              >
                <span
                  className="font-mono text-[11px] font-black px-2 py-0.5 rounded text-white"
                  style={{ background: color }}
                >
                  {method}
                </span>
                <span className="text-xs text-[#7a7468]">{desc}</span>
              </div>
              <div className="bg-[#2c2820] p-2.5 font-mono text-[11px] text-[#c3e88d] leading-loose whitespace-pre">
                {code}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "instance" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Axios instance — baseURL va headerni bir marta sozlash:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// api/index.js\nconst api = axios.create({\n  baseURL: 'https://api.example.com',\n  timeout: 5000,\n  headers: {\n    'Authorization': \`Bearer \${token}\`\n  }\n});\n\n// Foydalanish:\napi.get('/users');\napi.post('/users', data);`}
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// Interceptors — har so'rovdan oldin/keyin\napi.interceptors.response.use(\n  response => response,\n  error => {\n    console.log(error.response.status);\n    return Promise.reject(error);\n  }\n);`}
          </div>
        </div>
      )}

      {tab === "pattern" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Loading + Error + Data pattern — professional usul:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`const [data, setData] = useState([]);\nconst [loading, setLoading] = useState(true);\nconst [error, setError] = useState(null);\n\nuseEffect(() => {\n  axios.get('/api/users')\n    .then(res => setData(res.data))\n    .catch(err => setError(err.message))\n    .finally(() => setLoading(false));\n}, []);\n\nif (loading) return <Spinner />;\nif (error) return <Error msg={error} />;\nreturn <UserList data={data} />;`}
          </div>
          <InfoBox color="#4a9e60" icon="💡">
            <code>finally</code> — xato bo'lsa ham, muvaffaqiyatli bo'lsa ham
            ishlaydi. Loading ni o'chirish uchun ideal.
          </InfoBox>
        </div>
      )}
    </div>
  );
}
