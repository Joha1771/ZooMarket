import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Github() {
  return (
    <TheoryWrap>
      <H>Git va GitHub nima?</H>
      <P>
        <strong>Git</strong> — lokal kompyuteringizda kodning tarixini saqlovchi
        tizim (version control).
        <strong>GitHub</strong> — Gitni bulut xizmati, jamoaviy ish va ochiq kod
        uchun platforma.
      </P>
      <Table
        headers={["Git", "GitHub"]}
        rows={[
          ["Lokal kompyuterda ishlaydi", "Internet orqali ishlaydi"],
          ["Versiyalarni saqlaydi", "Versiyalarni bulutda saqlaydi"],
          ["Bepul va open-source", "Bepul (asosiy) va pullik (enterprise)"],
          ["CLI (buyruq qatori)", "Web interfeys + CLI"],
        ]}
      />

      <H>Asosiy tushunchalar</H>
      <Table
        headers={["Atama", "Ma'nosi"]}
        rows={[
          ["Repository (repo)", "Loyiha papkasi — barcha fayllar va tarix"],
          ["Commit", "O'zgarishlarni izoh bilan saqlash (snapshot)"],
          ["Branch", "Mustaqil ishlanma tarmog'i. main — asosiy."],
          ["Merge", "Branchlarni birlashtirish"],
          ["Clone", "GitHub reposini lokal yuklab olish"],
          ["Push", "Lokal o'zgarishlarni GitHub'ga yuklash"],
          ["Pull", "GitHub'dagi o'zgarishlarni lokal tortib olish"],
          ["Fork", "Boshqa birovning reposini o'z akkauntingizga nusxalash"],
          [
            "Pull Request (PR)",
            "O'zgarishlarni asosiy branchga qo'shish so'rovi",
          ],
        ]}
      />

      <H>Birinchi marta sozlash</H>
      <Pre>{`# Git o'rnatilganligini tekshirish
git --version

# Ismingizni sozlash (bir marta)
git config --global user.name "Isming Familiyam"
git config --global user.email "email@example.com"

# Tekshirish
git config --list`}</Pre>

      <H>Yangi loyiha boshlash (to'liq jarayon)</H>
      <Pre>{`# 1. Yangi repo yaratish
git init my-project
cd my-project

# 2. Fayl yaratish va o'zgartirish
echo "# My Project" > README.md

# 3. Staging (sahnaga olish)
git add .              # Barcha fayllarni qo'sh
git add README.md      # Faqat bitta faylni qo'sh

# 4. Commit (saqlash)
git commit -m "Initial commit: README qo'shildi"

# 5. GitHub bilan bog'lash
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main`}</Pre>

      <H>Har kuni ishlatiladigan buyruqlar</H>
      <Pre>{`git status          # O'zgarishlarni ko'rish
git add .           # Barcha o'zgarishlarni sahnaga olish
git commit -m "..."  # Saqlash
git push            # GitHub'ga yuklash
git pull            # GitHub'dan olish
git log --oneline   # Commit tarixini ko'rish
git diff            # O'zgarishlarni ko'rish`}</Pre>

      <H>.gitignore — ba'zi fayllarni e'tiborsiz qoldirish</H>
      <Pre>{`# .gitignore fayli
node_modules/     # npm paketlari (katta, regeneratsiya qilinadi)
.env              # Maxfiy kalitlar
dist/             # Build papkasi
*.log             # Log fayllar
.DS_Store         # MacOS tizim fayli`}</Pre>

      <Note type="tip">
        Commit izohlarini inglizcha, present tense, qisqa yozing: "Add login
        page" "Fix navbar bug" "Update README".
      </Note>
      <Note type="warn">
        Maxfiy ma'lumotlarni (API key, parol) hech qachon commit qilmang!
        .gitignore'ga .env qo'shing.
      </Note>
    </TheoryWrap>
  );
}
