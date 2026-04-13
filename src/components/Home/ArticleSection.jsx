import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import article1 from "../../assets/articl1.png";
import article2 from "../../assets/article2.png";
import article3 from "../../assets/article3.png";

const articles = [
  {
    id: 1,
    slug: "10-prichin-zavesti-lva",
    title: "10 причин завести льва и 34 причины этого не делать",
    date: "02 июня 2020 г.",
    image: article1,
  },
  {
    id: 2,
    slug: "kak-strich-lisu-fenek",
    title: "Как стричь Лису-фенек дома. Подводные камни и лайфхаки",
    date: "02 июня 2020 г.",
    image: article2,
  },
  {
    id: 3,
    slug: "on-est-vse-podryad",
    title: "Он ест все подряд – что делать?",
    date: "02 июня 2020 г.",
    image: article3,
  },
];

function ArticleCard({ article }) {
  return (
    <div className="flex flex-col border border-gray-200 dark:border-gray-700 group hover:border-orange-200 hover:shadow-md transition-all duration-200 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="object-cover w-full h-52 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {article.date}
        </p>
        <h3 className="text-sm font-medium leading-snug text-gray-800 dark:text-gray-200 transition-colors duration-150 group-hover:text-orange-500">
          {article.title}
        </h3>
      </div>
    </div>
  );
}

export default function ArticlesSection() {
  return (
    <section className="py-8" id="article">
      <div className="max-w-[1170px] mx-auto px-5">
        <SectionHeader title="Интересные статьи" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
