import React, { Component } from "react";
import { getArticles } from "../modules/articles";
import { Card, Image } from "semantic-ui-react";

class DisplayArticles extends Component {
  state = {
    articlesArray: [],
  };

  componentDidMount = async () => {
    let result = await getArticles();
    this.setState({ articlesArray: result });
  };

  render() {
    let articlesList;
    if (this.state.articlesArray.length > 0) {
      articlesList = this.state.articlesArray.map((article) => {
        return (
          <>
            <Card id={"article-" + article.id}>
              <Image src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.grade.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fplaceholder.png" />
              <Card.Content>
                <Card.Header>{article.title}</Card.Header>
                <Card.Description>{article.lead}</Card.Description>
              </Card.Content>
            </Card>
          </>
        );
      });
    }

    return (
      <>
        <div className="articles-container">{articlesList}</div>
      </>
    );
  }
}

export default DisplayArticles;
