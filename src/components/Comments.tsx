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
    <div className="space-y-3">
      <h4 className="text-xl font-bold text-gray-500 mt-5">Comments:</h4>
      {comments
        .sort(
          (a: CommentType, b: CommentType) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .map((comment) => <Comment key={comment?.id} comment={comment} />)
        .splice(0, sliceNumber)}
      {comments.length > 2 && <Button showMore={showMore} onClick={onClick} />}
    </div>
  );
};

export default Comments;
