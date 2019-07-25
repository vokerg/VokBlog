export const reducer = (state={}, action) => {
  switch (action.type) {
    case 'LOAD_ARTICLE_COMMENTS_COMPLETED': return {...state, [action.idArticle]: action.comments};
    case 'ADD_COMMENT_COMPLETED': {
      return action.comment.idParentComment !== null
        ? state
        : {...state, [action.comment.idArticle]: [...(state[action.comment.idArticle] || []), action.comment]};
    }
    default: return state;
  }
};

export const getCommentsByArticleId = (state, {articleId}) => state[articleId];
