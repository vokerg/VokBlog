export const reducer = (state={}, action) => {
  switch (action.type) {
    case 'LOAD_SUBCOMMENTS_COMPLETED': return {...state, [action.idParentComment]: action.comments};
    case 'ADD_COMMENT_COMPLETED': {
      return action.comment.idParentComment === null
        ? state
        : {...state, [action.comment.idParentComment]: [...(state[action.comment.idParentComment] || []), action.comment]};
    }
    default: return state;
  }
};

export const getSubCommentsByCommentId = (state, {commentId}) => state[commentId];
