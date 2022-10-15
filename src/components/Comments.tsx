import { CommentType } from "../../types";

interface CommentsProps {
  comments: CommentType[];
}

const Comments = ({comments}: CommentsProps) => {
  return (
    <div>
        {comments.map((comment) => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  )
}

export default Comments