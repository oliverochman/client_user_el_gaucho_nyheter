import axios from "axios";

const Articles = {
  async index() {
    let result = await axios.get("/articles");
    return result.data.articles;
  },

  async show(articleId) {
    try {
      let result = await axios.get(`/articles/${articleId}`);
      return result.data.article;  
    } catch(error) {
      // see how the backend sends error messages for the articles show action
      return error.response.data.error_message;
    }
  }
}

export default Articles;
