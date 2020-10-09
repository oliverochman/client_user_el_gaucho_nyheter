import axios from "axios";

const getArticles = async () => {
  let result = await axios.get("/articles");
  return result.data.articles;
};

const getArticle = async (articleId) => {
  let result = await axios.get(`/articles/${articleId}`);
  return result.data.article;
};

export { getArticles, getArticle };
