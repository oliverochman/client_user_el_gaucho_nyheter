import React from "react";
import { Image, Grid, Header } from "semantic-ui-react";

const SingleArticle = ({ article }) => {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={13}>
          <Header>{article.title}</Header>
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
        <Grid.Column width={5}>
          <>Placeholder</>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={10}>
          <p data-cy="content">{article.content}</p>
        </Grid.Column>
        <Grid.Column width={5}>
          <>Placeholder</>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SingleArticle;
