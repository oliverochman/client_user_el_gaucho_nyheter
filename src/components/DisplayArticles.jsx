import React, { Component } from "react";
import { getArticles } from "../modules/articles";

class DisplayArticles extends Component {
  state = {
    articlesList: [],
  };

  componentDidMount = async () => {
    let result = await getArticles();
    this.setState({ articlesList: result });
  };

  render() {
    return <></>;
  }
}

export default DisplayArticles;
