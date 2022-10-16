import { useEffect, useState } from "react";
import { CommentType } from "../../types";
import Button from "./Button";
import Comment from "./Comment";
import LoadingIndicator from "./LoadingIndicator";

interface CommentsProps {
  comments: CommentType[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [commentsAll, setCommentsAll] = useState<CommentType[]>([]);
  const [commentsLess, setCommentsLess] = useState<CommentType[]>([]);
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isLoadingComments, setIsLoadingComments] = useState<boolean>(true);

  const onClick = () => {
    setIsMore((prevState) => !prevState);
  };

  const sortByNewest = () => {
    const sortedComments = comments.sort(
      (a: CommentType, b: CommentType) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const slicedSortedComments = sortedComments.slice(0, 2);

    setCommentsAll([...sortedComments]);
    setCommentsLess([...slicedSortedComments]);
    setIsLoadingComments(false);
  };

  const showAllComments = commentsAll.map((comment) => (
    <Comment key={comment?.id} comment={comment} />
  ));
  const showLessComments = commentsLess.map((comment) => (
    <Comment key={comment?.id} comment={comment} />
  ));

  useEffect(() => {
    sortByNewest();
  }, []);

  if (isLoadingComments) return <LoadingIndicator />;

  return (
    <div className="space-y-3">
      <h4 className="text-xl font-bold text-gray-500 mt-5">Comments:</h4>
      {!isMore ? showLessComments : showAllComments}
      {comments.length > 2 && <Button isMore={isMore} onClick={onClick} />}
    </div>
  );
};

export default Comments;
