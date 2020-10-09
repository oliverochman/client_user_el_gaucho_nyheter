import React, {useState, useEffect} from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import { useParams } from 'react-router-dom'
import Articles from '../modules/articles'

const SingleArticle = ( ) => {
  const [article, setArticle] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(id)

      if (response.id) {
        setArticle(response)
      } else {
        // if u get error from backend, perhaps show error message
        console.log(response)
      }
    }

    getSingleArticle()
  }, [id])

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
          Placeholder
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={10}>
          <p data-cy="content">{article.content}</p>
        </Grid.Column>
        <Grid.Column width={5}>
          Placeholder
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SingleArticle;
