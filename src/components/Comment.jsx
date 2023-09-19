/* eslint-disable react/prop-types */
import { useState } from "react";
import CommentInput from "./CommentInput";

function Comment({ comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const [comments, setComments] = useState(comment?.comments || []);

  const onComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
    setIsReplying(false);
  };

  return (
    <div className="flex flex-col border-l border-gray-500">
      <div className="p-2">{comment.text}</div>
      <div className="flex gap-2">
        {isReplying ? (
          <div
            className="text-sm p-2 w-max font-bold border rounded-md m-2 cursor-pointer"
            onClick={() => setIsReplying(false)}
          >
            Cancel
          </div>
        ) : (
          <div
            className="text-sm p-2 w-max font-bold border rounded-md m-2 cursor-pointer"
            onClick={() => setIsReplying(true)}
          >
            Reply
          </div>
        )}
      </div>
      {isReplying && <CommentInput onComment={onComment} />}

      <div className="pl-5 flex flex-col gap-2">
        {comments?.map((item) => {
          return <Comment key={item.id} comment={item} />;
        })}
      </div>
    </div>
  );
}

export default Comment;
