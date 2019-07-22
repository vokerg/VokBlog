export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_SUBCOMMENTS_COMPLETED': return {...state, [action.comment.id]: action.comments}
    default: return state;
  }
}
