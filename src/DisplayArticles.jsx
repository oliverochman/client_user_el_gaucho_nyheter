import React, { Component } from "react";

class DisplayArticles extends Component {
  state = {
    articlesList: [],
  };

  render() {
    componentDidMount = async () => {
      let result = await getArticles();
      this.setState({ articlesList: result });
    };

    return <></>;
  }
}

export default DisplayArticles;
