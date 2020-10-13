import axios from "axios";

const Articles = {
  async index(category) {
    try {
      let result;
      if (category) {
        result = await axios.get(`/articles/?category=${category}`);
      } else {
        result = await axios.get("/articles");
      }
       return result.data.articles;
    } catch (error) {
      return error.response.data.error;
    }
  },

  async show(articleId) {
    try {
      let result = await axios.get(`/articles/${articleId}`);
      return result.data.article;
    } catch (error) {
      return error.response.data.error;
    }
  },
};
export default Articles;
