import { CommentType } from "../../types";
import { getFormatedDate } from "../utilities/functions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="border border-[#5B72FB] rounded p-2">
      <div className="flex space-x-2">
        <AccountCircleIcon className="text-[#4863FE]" fontSize="large" />
        <p className="mt-1.5">{comment?.text}</p>
      </div>
      <div className="text-right">
        <span className="text-xs text-gray-400">
          Commented on {getFormatedDate(comment?.date)}
        </span>
      </div>
    </div>
  );
};

export default Comment;
