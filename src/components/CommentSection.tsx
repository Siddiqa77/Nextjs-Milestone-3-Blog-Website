"use client";

import { useState } from "react";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="mb-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-2 p-2 border rounded bg-gray-100"
            >
              {comment}
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={3}
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentSection;
