import axios from "axios";

const getArticles = async () => {
  let result = await axios.get("/articles");
  return result.data.articles;
};

export { getArticles };
