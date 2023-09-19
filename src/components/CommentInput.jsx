/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CommentInput({ onComment }) {
  const inputRef = useRef(null);
  const [commentBody, setCommentBody] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 w-1/2 pl-2 my-2">
      <input
        ref={inputRef}
        className="p-2 border border-gray-600 w-full rounded-lg"
        type="text"
        placeholder="What are your thoughts?"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />

      <button
        className="border-2 rounded-lg p-2 border-blue-400 w-max bg-blue-400 text-white"
        type="submit"
        onClick={() => {
          if (commentBody !== "") {
            onComment({ id: uuidv4(), text: commentBody });
            setCommentBody("");
          }
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default CommentInput;
