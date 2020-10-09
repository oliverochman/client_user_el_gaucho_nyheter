import React from "react";

const SingleArticle = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p data-cy="content">{article.content}</p>
    </div>
  );
};

export default SingleArticle;
