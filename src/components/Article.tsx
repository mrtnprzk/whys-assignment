import { ArticleType } from "../../types";
import Comments from "./Comments";

interface ArticleProps {
  article: ArticleType;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <div className="m-5 p-5 border-2 rounded-xl shadow-md">
      <h3 className="text-[#4863FE] text-2xl font-bold">Article by {article.author}</h3>
      <p>{article.text}</p>
      {article?.comments.length !== 0 && <Comments comments={article.comments}/>}
    </div>
  );
};

export default Article;
