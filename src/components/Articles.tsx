import Article from "./Article";
import { useArticle } from '../context/ArticlesContext'

const Articles = () => {
  const {isLoading, articles} = useArticle()

  if (!isLoading) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
      {isLoading && articles.map((article)=> (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
