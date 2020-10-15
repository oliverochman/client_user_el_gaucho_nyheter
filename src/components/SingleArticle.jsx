import { Image, Grid, Header } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../modules/articles";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(id);

      if (response.id) {
        setArticle(response);
      } else {
        setMessage(response);
      }
    };

    getSingleArticle();
  }, [id]);

  return (
    <>
      {message ? (
        <p data-cy="error-message">{message}</p>
      ) : (
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header data-cy="title">{article.title}</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <h5>{article.lead}</h5>
              <Image
                size="medium"
                src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.grade.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fplaceholder.png"
              />
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <p data-cy="content">{article.content}</p>
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
          {article.premium && <p data-cy="premium-message">This is a premium article. Buy subscription in order to read it</p>}
        </Grid>
      )}
    </>
  );
};

export default SingleArticle;
