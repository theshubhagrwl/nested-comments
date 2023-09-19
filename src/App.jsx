import { useState } from "react";
import "./App.css";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";

//eslint-disable-next-line
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
  const [comment, setComment] = useState([]);
  const onComment = (newComment) => {
    setComment((prev) => [newComment, ...prev]);
  };
  return (
    <div className="flex flex-col gap-6 h-screen w-screen p-6">
      <CommentInput onComment={onComment} />
      <div className="flex flex-col gap-2">
        {comment?.map((item) => (
          <Comment key={item.id} comment={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
