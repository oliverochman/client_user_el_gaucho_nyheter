import React, { Component } from "react";
import { getArticles } from "../modules/articles";

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
            <div id={"article-" + article.id}>
              <h1>{article.title}</h1>
              <h3>{article.lead}</h3>
            </div>
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
