import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-be-3xer.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

export default api;
