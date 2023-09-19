import React from "react";

function Comment({ comment }) {
  return (
    <div className="flex flex-col gap-3 w-1/2 border border-gray-500">
      <div className="p-2">{comment.text}</div>

      <div className="pl-5 flex flex-col gap-2 my-2">
        {comment?.comments?.map((item) => {
          return <Comment comment={item} />;
        })}
      </div>
    </div>
  );
}

export default Comment;
