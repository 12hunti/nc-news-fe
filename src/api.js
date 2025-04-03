import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-be-3xer.onrender.com/api",
});

export const getArticles = (topicSlug) => {
  return api
    .get("/articles", {
      params: {
        topic: topicSlug,
      },
    })
    .then(({ data }) => {
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

export const patchItem = (itemType, item_id, voteChange) => {
  const voteData = {
    inc_votes: voteChange,
  };
  return api.patch(`/${itemType}/${item_id}`, voteData).then(({ data }) => {
    return data;
  });
};

export const postComment = (article_id, commentAuthor, commentBody) => {
  const commentData = {
    author: commentAuthor,
    body: commentBody,
  };
  return api
    .post(`/articles/${article_id}/comments`, commentData)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
};

export const getTopics = () => {
  return api.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

export default api;
