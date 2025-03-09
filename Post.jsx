import { useState } from "react";

const Post = ({ title, content }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post-container">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleLike}>Curtir ({likes})</button>
    </div>
  );
};

export default Post;
