import { getArticles } from "../modules/articles";
import { Card, Image } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

const DisplayArticles = () => {
  const [articlesArray, setArticlesArray] = useState([]);
  useEffect(() => {
    const getArticlesIndex = async () => {
      const result = await getArticles;
      setArticlesArray(result);
    };
    getArticlesIndex();
  }, []);

  let articlesList = articlesArray.map((article) => {
    return (
      <Card id={"article-" + article.id}>
        <Image src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.grade.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fplaceholder.png" />
        <Card.Content>
          <Card.Header>{article.title}</Card.Header>
          <Card.Description>{article.lead}</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return <div className="articles-container">{articlesList}</div>;
};

export default DisplayArticles;
