import Articles from "../modules/articles";
import { Card, Image } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const DisplayArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticlesIndex = async () => {
      setArticles(await Articles.index());
    };

    getArticlesIndex();
  }, []);

  return (
    <div className="articles-container">
      {articles.map((article) => {
        return (
          <Card
            as={Link}
            to={`/articles/${article.id}`}
            data-cy={"article-" + article.id}
          >
            <Image src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.grade.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fplaceholder.png" />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.lead}</Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};

export default DisplayArticles;
