import { useState } from "react";
import "./App.css";
import Comment from "./components/Comment";
import { v4 as uuidv4 } from "uuid";

const comments = [
  {
    id: 1,
    text: "This is the first comment",
    comments: [
      {
        id: 11,
        text: "Reply to the first comment",
        comments: [
          {
            id: 111,
            text: "Nested reply 1 to the first comment",
          },
          {
            id: 112,
            text: "Nested reply 2 to the first comment",
          },
        ],
      },
      {
        id: 12,
        text: "Another reply to the first comment",
      },
    ],
  },
  {
    id: 2,
    text: "This is the second comment",
    comments: [
      {
        id: 21,
        text: "Reply to the second comment",
      },
    ],
  },
  {
    id: 3,
    text: "This is the third comment",
  },
];

function App() {
  const [comment, setComment] = useState(comments);
  const [commentBody, setCommentBody] = useState("");
  return (
    <div className="flex flex-col gap-6 h-screen w-screen p-6">
      <input
        className="p-2 border border-gray-600 w-1/2"
        type="text"
        placeholder="What are your thoughts?"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />

      <button
        className="border-2 p-2 border-blue-400 w-max"
        type="submit"
        onClick={() => {
          setComment((prev) => [{ id: uuidv4(), text: commentBody }, ...prev]);
        }}
      >
        Add Comment
      </button>
      <div className="flex flex-col gap-2">
        {comment.map((item) => (
          <Comment key={item.id} comment={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
