import Article from "./Article";
import { useArticle } from "../context/ArticlesContext";
import LoadingIndicator from "./LoadingIndicator";

const Articles = () => {
  const { isLoading, articles } = useArticle();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-10">
      {!isLoading &&
        articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
    </div>
  );
};

export default Articles;
