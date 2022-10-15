import { useState } from "react";
import { CommentType } from "../../types";
import Button from "./Button";
import Comment from "./Comment";

interface CommentsProps {
  comments: CommentType[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [showMore, setShowMore] = useState(false);

  const onClick = () => {
    setShowMore((prevState) => !prevState);
  };

  const sliceNumber = showMore ? comments.length : 2;

  return (
    <div>
      {comments
        .sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((comment) => <Comment key={comment?.id} comment={comment} />)
        .splice(0, sliceNumber)}
      {comments.length > 2 && <Button showMore={showMore} onClick={onClick} />}
    </div>
  );
};

export default Comments;
