import { Card, Image } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import Articles from "../modules/articles";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";

const DisplayArticles = () => {
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState()
  const { category } = useParams();
  let location = useLocation();


  useEffect(() => {
    const getArticlesIndex = async () => {
      setArticles(await Articles.index(category));
    };

    getArticlesIndex();
  }, [category]);

  useEffect(() => {
    if (location.state) {
      setMessage(location.state.message)
    }
  }, [location])

  return (
    <>
      {message && <p data-cy="message">{message}</p>}
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

    </>
  );
};

export default DisplayArticles;
