import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.7 — UI LIBRARIES: ANT DESIGN
// ═══════════════════════════════════════════════════════════════════════════════

const MOCK_USERS = [
  {
    id: 1,
    name: "Ali Karimov",
    email: "ali@example.com",
    role: "admin",
    status: "active",
  },
  {
    id: 2,
    name: "Zulfiya Nazarova",
    email: "zulfiya@example.com",
    role: "user",
    status: "active",
  },
  {
    id: 3,
    name: "Bobur Toshmatov",
    email: "bobur@example.com",
    role: "user",
    status: "inactive",
  },
  {
    id: 4,
    name: "Malika Yusupova",
    email: "malika@example.com",
    role: "moderator",
    status: "active",
  },
];

export function UiLibsExplain() {
  const [tab, setTab] = useState("overview");
  const [users, setUsers] = useState(MOCK_USERS);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "user" });

  const handleDelete = (id) => setUsers((u) => u.filter((x) => x.id !== id));
  const handleEdit = (user) => {
    setEditUser(user);
    setForm({ name: user.name, email: user.email, role: user.role });
    setShowModal(true);
  };
  const handleSave = () => {
    if (editUser) {
      setUsers((u) =>
        u.map((x) => (x.id === editUser.id ? { ...x, ...form } : x)),
      );
    } else {
      setUsers((u) => [...u, { id: Date.now(), ...form, status: "active" }]);
    }
    setShowModal(false);
    setEditUser(null);
    setForm({ name: "", email: "", role: "user" });
  };

  const roleColor = { admin: "#764abc", moderator: "#185FA5", user: "#4a9e60" };
  const statusColor = { active: "#4a9e60", inactive: "#7a7468" };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["overview", "table", "form"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "overview"
              ? "Kutubxonalar"
              : id === "table"
                ? "Table Demo"
                : "Form + Modal"}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            UI komponent kutubxonalari tayyor dizayni mavjud komponentlar
            to'plami. Siz faqat logikaga focus qilasiz.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                name: "Ant Design",
                color: "#1677ff",
                stars: "91k",
                desc: "Enterprise-grade, to'liq",
              },
              {
                name: "Material UI",
                color: "#007fff",
                stars: "93k",
                desc: "Google Material dizayn",
              },
              {
                name: "Shadcn/ui",
                color: "#1a1814",
                stars: "70k",
                desc: "Copy-paste komponentlar",
              },
            ].map(({ name, color, stars, desc }) => (
              <div
                key={name}
                className="p-3 text-center border rounded-xl"
                style={{ background: `${color}08`, borderColor: `${color}30` }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  {name}
                </div>
                <div className="text-[10px] text-[#7a7468]">{desc}</div>
                <div className="font-mono text-[9px] mt-1.5 text-[#c85c1a]">
                  ⭐ {stars}
                </div>
              </div>
            ))}
          </div>
          <CodeSnippet
            lines={[
              [{ text: "// Ant Design o'rnatish:", color: C.cmt }],
              [{ text: "yarn add antd", color: C.str }],
              [{ text: "" }],
              [{ text: "// Import:", color: C.cmt }],
              [
                { text: "import ", color: C.kw },
                {
                  text: "{ Button, Table, Form, Modal, Input, Space }",
                  color: C.fn,
                },
                { text: " from ", color: C.op },
                { text: "'antd'", color: C.str },
                { text: ";", color: C.op },
              ],
              [
                { text: "import ", color: C.kw },
                { text: "'antd/dist/reset.css'", color: C.str },
                { text: ";", color: C.op },
              ],
            ]}
          />
          <div className="flex flex-wrap gap-2">
            {[
              "Button",
              "Table",
              "Form",
              "Modal",
              "Select",
              "DatePicker",
              "Upload",
              "Chart",
              "Menu",
              "Drawer",
            ].map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] px-2 py-0.5 rounded"
                style={{ background: "#1677ff10", color: "#1677ff" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {tab === "table" && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#7a7468]">
              Foydalanuvchilar ({users.length})
            </span>
            <button
              onClick={() => {
                setEditUser(null);
                setForm({ name: "", email: "", role: "user" });
                setShowModal(true);
              }}
              className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
              style={{
                background: "#c85c1a",
                color: "#fff",
                boxShadow: "0 2px 0 0 #8a3a0a",
              }}
            >
              + Qo'shish
            </button>
          </div>
          <div className="bg-white rounded-xl border border-[rgba(26,24,20,0.10)] overflow-hidden">
            <div
              className="grid text-[10px] font-mono font-bold text-[#7a7468] uppercase px-3 py-2 border-b border-[rgba(26,24,20,0.08)]"
              style={{ gridTemplateColumns: "1fr 1.5fr 80px 70px 100px" }}
            >
              <span>Ism</span>
              <span>Email</span>
              <span>Rol</span>
              <span>Status</span>
              <span>Amallar</span>
            </div>
            {users.map((u) => (
              <div
                key={u.id}
                className="grid items-center px-3 py-2.5 border-b border-[rgba(26,24,20,0.06)] hover:bg-[#f2efe830]"
                style={{ gridTemplateColumns: "1fr 1.5fr 80px 70px 100px" }}
              >
                <span className="font-mono text-xs font-bold text-[#1a1814]">
                  {u.name}
                </span>
                <span className="font-mono text-[10px] text-[#7a7468]">
                  {u.email}
                </span>
                <span
                  className="font-mono text-[9px] px-1.5 py-0.5 rounded w-fit"
                  style={{
                    background: `${roleColor[u.role]}15`,
                    color: roleColor[u.role],
                  }}
                >
                  {u.role}
                </span>
                <span
                  className="font-mono text-[9px]"
                  style={{ color: statusColor[u.status] }}
                >
                  {u.status === "active" ? "● Faol" : "○ Nofaol"}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEdit(u)}
                    className="px-2 py-1 rounded font-mono text-[9px] border-none cursor-pointer"
                    style={{ background: "#185FA515", color: "#185FA5" }}
                  >
                    Tahrir
                  </button>
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="px-2 py-1 rounded font-mono text-[9px] border-none cursor-pointer"
                    style={{ background: "#e06c7515", color: "#e06c75" }}
                  >
                    O'chir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "form" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">Ant Design Form bilan Modal:</p>
          <CodeSnippet
            lines={[
              [
                { text: "function ", color: C.kw },
                { text: "UserModal", color: C.fn },
                { text: "({ open, onClose, onSubmit }) {", color: C.op },
              ],
              [
                { text: "  const ", color: C.kw },
                { text: "[form]", color: C.fn },
                { text: " = Form.useForm();", color: C.op },
              ],
              [{ text: "  return (", color: C.op }],
              [
                { text: "    <Modal ", color: C.str },
                { text: "title=", color: C.fn },
                { text: '"Foydalanuvchi"', color: C.str },
                {
                  text: " open={open} onOk={() => form.submit()}>",
                  color: C.fn,
                },
              ],
              [
                { text: "      <Form form={form} layout=", color: C.str },
                { text: '"vertical"', color: C.str },
                { text: " onFinish={onSubmit}>", color: C.fn },
              ],
              [
                { text: "        <Form.Item name=", color: C.str },
                { text: '"name"', color: C.str },
                { text: " label=", color: C.fn },
                { text: '"Ism"', color: C.str },
              ],
              [
                { text: "          rules={[{ required: ", color: C.fn },
                { text: "true", color: C.kw },
                { text: " }]}>", color: C.op },
              ],
              [{ text: "          <Input />", color: C.str }],
              [{ text: "        </Form.Item>", color: C.str }],
              [{ text: "      </Form>", color: C.str }],
              [{ text: "    </Modal>", color: C.str }],
              [{ text: "  );", color: C.op }],
              [{ text: "}", color: C.op }],
            ]}
          />
          <InfoBox color="#c85c1a" icon="💡">
            <Tag color="#c85c1a">Form.useForm()</Tag> Ant Design formini
            boshqarish uchun.
            <code> form.submit()</code> — Modal OK tugmasi bosiganda formni
            submit qiladi.
          </InfoBox>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-[rgba(26,24,20,0.5)] flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#f2efe8] rounded-2xl p-6 w-80 border border-[rgba(26,24,20,0.10)]"
            style={{ boxShadow: "0 20px 50px rgba(26,24,20,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono font-black text-sm text-[#1a1814] mb-4">
              {editUser ? "Tahrirlash" : "Yangi foydalanuvchi"}
            </div>
            {[
              { key: "name", label: "Ism", type: "text" },
              { key: "email", label: "Email", type: "email" },
            ].map(({ key, label, type }) => (
              <div key={key} className="mb-3">
                <label className="text-[10px] font-mono text-[#7a7468] uppercase mb-1 block">
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[rgba(26,24,20,0.15)] bg-white text-sm outline-none"
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="text-[10px] font-mono text-[#7a7468] uppercase mb-1 block">
                Rol
              </label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[rgba(26,24,20,0.15)] bg-white text-sm outline-none"
              >
                {["user", "moderator", "admin"].map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 rounded-lg border border-[rgba(26,24,20,0.15)] bg-transparent font-mono text-xs cursor-pointer"
              >
                Bekor
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-2 font-mono text-xs font-bold text-white border-none rounded-lg cursor-pointer"
                style={{ background: "#c85c1a" }}
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
