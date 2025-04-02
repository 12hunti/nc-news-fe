import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-be-3xer.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

// export const patchArticle = (article_id, voteChange) => {
//   const voteData = {
//     inc_votes: voteChange,
//   };
//   return api.patch(`/articles/${article_id}`, voteData).then(({ data }) => {
//     return data;
//   });
// };

// export const patchComment = (comment_id, voteChange) => {
//   const voteData = {
//     inc_votes: voteChange,
//   };
//   return api.patch(`/comments/${comment_id}`, voteData).then(({ data }) => {
//     return data;
//   });
// };

export const patchItem = (itemType, item_id, voteChange) => {
  const voteData = {
    inc_votes: voteChange,
  };
  return api.patch(`/${itemType}/${item_id}`, voteData).then(({ data }) => {
    return data;

  })
}

// export const postComments = (article_id) => {
//   return api.post(``)
// }
export default api;
