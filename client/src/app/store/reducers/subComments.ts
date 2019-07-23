export const reducer = (state={}, action) => {
  switch (action.type) {
    case 'LOAD_SUBCOMMENTS_COMPLETED': return {...state, [action.parentCommentId]: action.comments}
    default: return state;
  }
};

export const getSubCommentsByCommentId = (state, {commentId}) => state[commentId];
