import { getArticles, getArticle } from "../modules/articles";
import { Card, Image } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";

const DisplayArticles = () => {
  const [articles, setArticles] = useState([]);
  const [specificArticle, setSpecificArticle] = useState();

  useEffect(() => {
    const getArticlesIndex = async () => {
      setArticles(await getArticles());
    };
    getArticlesIndex();
  }, []);

  const getSpecificArticle = async (articleId) => {
    setSpecificArticle(await getArticle(articleId));
  };

  let articlesList = articles.map((article) => {
    return (
      <Card
        onClick={() => getSpecificArticle(article.id)}
        data-cy={"article-" + article.id}
      >
        <Image src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.grade.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fplaceholder.png" />
        <Card.Content>
          <Card.Header>{article.title}</Card.Header>
          <Card.Description>{article.lead}</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return (
    <>
      {specificArticle ? (
        <SingleArticle article={specificArticle} />
      ) : (
        <div className="articles-container">{articlesList}</div>
      )}
    </>
  );
};

export default DisplayArticles;
