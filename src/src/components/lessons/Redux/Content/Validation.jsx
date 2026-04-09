import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.6 — FORM VALIDATION: YUP + REACT HOOK FORM
// ═══════════════════════════════════════════════════════════════════════════════

function validate(values) {
  const errors = {};
  if (!values.name || values.name.length < 2)
    errors.name = "Ism kamida 2 harf bo'lishi kerak";
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Email noto'g'ri formatda";
  if (!values.password || values.password.length < 8)
    errors.password = "Parol kamida 8 belgi";
  else if (!/[A-Z]/.test(values.password))
    errors.password = "Bitta katta harf kerak (A-Z)";
  const age = Number(values.age);
  if (!values.age || age < 18) errors.age = "Kamida 18 yosh bo'lishi kerak";
  return errors;
}

export function ValidationExplain() {
  const [tab, setTab] = useState("yup");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, val) => {
    const newVals = { ...values, [field]: val };
    setValues(newVals);
    if (Object.keys(errors).length) setErrors(validate(newVals));
  };

  const handleSubmit = () => {
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const fields = [
    { key: "name", label: "Ism", type: "text", placeholder: "Ali Karimov" },
    {
      key: "email",
      label: "Email",
      type: "email",
      placeholder: "ali@example.com",
    },
    {
      key: "password",
      label: "Parol",
      type: "password",
      placeholder: "Min 8 belgi, 1 katta harf",
    },
    { key: "age", label: "Yosh", type: "number", placeholder: "18+" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["yup", "rhf", "demo"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#4a9e60" : "#f2efe8",
              borderColor: tab === id ? "#4a9e60" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "yup"
              ? "Yup Schema"
              : id === "rhf"
                ? "React Hook Form"
                : "Demo"}
          </button>
        ))}
      </div>

      {tab === "yup" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Yup — JavaScript ob'yektlar uchun schema validatsiya kutubxonasi.
            Har bir maydon uchun qoidalar zanjirlab yoziladi.
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "import * as ", color: C.kw },
                { text: "yup", color: C.fn },
                { text: " from ", color: C.op },
                { text: "'yup'", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "schema", color: C.fn },
                { text: " = yup.object({", color: C.op },
              ],
              [
                {
                  text: "  name: yup.string()",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [
                { text: "    .required(", color: "rgba(255,255,255,0.7)" },
                { text: "'Ism majburiy'", color: C.str },
                { text: ")", color: C.op },
              ],
              [
                { text: "    .min(", color: "rgba(255,255,255,0.7)" },
                { text: "2", color: C.num },
                { text: ", 'Kamida 2 harf'),", color: C.str },
              ],
              [
                {
                  text: "  email: yup.string()",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [
                { text: "    .email(", color: "rgba(255,255,255,0.7)" },
                { text: "'Email noto\\'g\\'ri'", color: C.str },
                { text: ")", color: C.op },
              ],
              [
                { text: "    .required(", color: "rgba(255,255,255,0.7)" },
                { text: "'Email majburiy'", color: C.str },
                { text: "),", color: C.op },
              ],
              [
                {
                  text: "  password: yup.string()",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [
                { text: "    .min(", color: "rgba(255,255,255,0.7)" },
                { text: "8", color: C.num },
                { text: ", 'Kamida 8 belgi')", color: C.str },
              ],
              [
                {
                  text: "    .matches(/[A-Z]/, ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'Katta harf kerak'", color: C.str },
                { text: "),", color: C.op },
              ],
              [
                {
                  text: "  age: yup.number().min(",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "18", color: C.num },
                { text: ", 'Kamida 18'),", color: C.str },
              ],
              [{ text: "});", color: C.op }],
            ]}
          />
          <InfoBox color="#4a9e60" icon="💡">
            <Tag color="#4a9e60">yupResolver(schema)</Tag> Yup'ni React Hook
            Form bilan bog'laydi. O'rnatish:{" "}
            <code>yarn add yup @hookform/resolvers</code>
          </InfoBox>
        </div>
      )}

      {tab === "rhf" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React Hook Form — controlled state'siz, uncontrolled input'lar bilan
            ishlaydi. Shu tufayli juda tez:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "{", color: C.op },
              ],
              [
                { text: "  register,  ", color: C.fn },
                { text: "// input'ni bog'lash", color: C.cmt },
              ],
              [
                { text: "  handleSubmit,  ", color: C.fn },
                { text: "// form submit", color: C.cmt },
              ],
              [
                { text: "  reset,  ", color: C.fn },
                { text: "// tozalash", color: C.cmt },
              ],
              [{ text: "  formState: { errors, isSubmitting }", color: C.fn }],
              [
                { text: "} = ", color: C.op },
                { text: "useForm", color: C.fn },
                { text: "({ resolver: ", color: C.op },
                { text: "yupResolver", color: C.fn },
                { text: "(schema) });", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Input'ga register qo'shish:", color: C.cmt }],
              [
                { text: "<input ", color: C.str },
                { text: "{...register('name')}", color: C.fn },
                { text: " />", color: C.str },
              ],
              [
                { text: "{errors.name && ", color: "rgba(255,255,255,0.7)" },
                { text: "<p>", color: C.str },
                { text: "{errors.name.message}", color: C.fn },
                { text: "</p>", color: C.str },
                { text: "}", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Submit:", color: C.cmt }],
              [
                { text: "<form ", color: C.str },
                { text: "onSubmit={handleSubmit(onSubmit)}", color: C.fn },
                { text: ">", color: C.str },
              ],
            ]}
          />
          <div className="grid grid-cols-2 gap-2">
            {[
              { hook: "register", desc: "Input'ni kuzatib boradi" },
              { hook: "handleSubmit", desc: "Validatsiya qilib submit" },
              { hook: "watch", desc: "Qiymatni real-time kuzatish" },
              { hook: "reset", desc: "Formni tozalash" },
              { hook: "setValue", desc: "Programmatik qiymat berish" },
              { hook: "errors", desc: "Validatsiya xatolari" },
            ].map(({ hook, desc }) => (
              <div
                key={hook}
                className="flex items-center gap-2 p-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <code className="font-mono text-xs text-[#4a9e60] w-24 flex-shrink-0">
                  {hook}
                </code>
                <span className="text-[10px] text-[#7a7468]">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "demo" && (
        <div className="flex flex-col gap-3">
          {submitted ? (
            <div className="bg-[#4a9e6015] border border-[#4a9e6040] rounded-xl p-6 text-center">
              <div className="mb-2 text-3xl">✅</div>
              <div className="font-mono text-sm font-bold text-[#4a9e60]">
                Form muvaffaqiyatli yuborildi!
              </div>
              <div className="text-xs text-[#7a7468] mt-1">
                Barcha validatsiyadan o'tdi
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setValues({ name: "", email: "", password: "", age: "" });
                  setErrors({});
                }}
                className="mt-3 px-4 py-1.5 rounded-lg font-mono text-xs border-none cursor-pointer"
                style={{ background: "#4a9e60", color: "#fff" }}
              >
                Qayta boshlash
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2.5">
                {fields.map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="text-[10px] font-mono text-[#7a7468] uppercase tracking-wider mb-1 block">
                      {label}
                    </label>
                    <input
                      type={type}
                      value={values[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-3 py-2 font-mono text-sm border rounded-lg outline-none"
                      style={{
                        background: "#f2efe8",
                        borderColor: errors[key]
                          ? "#e06c75"
                          : "rgba(26,24,20,0.15)",
                        color: "#1a1814",
                      }}
                    />
                    {errors[key] && (
                      <div className="text-[10px] text-[#e06c75] mt-0.5">
                        ⚠ {errors[key]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-2.5 rounded-xl font-mono text-sm font-bold border-none cursor-pointer"
                style={{
                  background: "#4a9e60",
                  color: "#fff",
                  boxShadow: "0 3px 0 0 #2a6040",
                }}
              >
                Ro'yxatdan o'tish →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
