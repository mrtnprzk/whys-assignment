import Article from "./Article";
import { useArticle } from '../context/ArticlesContext'

const Articles = () => {
  const {isLoading, articles} = useArticle()

  if (!isLoading) {
    return <p>Loading...</p>
  }
  
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {isLoading && articles.map((article)=> (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
