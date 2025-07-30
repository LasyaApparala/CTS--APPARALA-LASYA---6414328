import React from 'react';

function Post({ title, body }) {
  return (
    <div className="post">
      <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
      <p>{body.charAt(0).toUpperCase() + body.slice(1)}...</p>
    </div>
  );
}

export default Post;
