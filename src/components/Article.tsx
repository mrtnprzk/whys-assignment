import { ArticleType } from "../../types";
import Comments from "./Comments";

interface ArticleProps {
  article: ArticleType;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <div>
      <p>{article.author}</p>
      <p>{article.text}</p>
      <Comments comments={article.comments}/>
    </div>
  );
};

export default Article;
