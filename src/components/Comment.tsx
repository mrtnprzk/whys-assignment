import { CommentType } from "../../types";
import { getFormatedDate } from "../utilities/functions";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div>
      <p>{comment?.text}</p>
      <p>{getFormatedDate(comment?.date)}</p>
    </div>
  );
};

export default Comment;
