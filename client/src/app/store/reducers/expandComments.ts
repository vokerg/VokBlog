export interface State {
  expandedCommentPanels: string[]
}

export function reducer(state:State={expandedCommentPanels:[]}, action) {
  switch(action.type) {
    case 'PUSH_EXPAND_COMMENTS_ACTION':
      return state.expandedCommentPanels.includes(action.id)
        ? state : {...state, expandedCommentPanels: [...state.expandedCommentPanels, action.id]};
    case 'CLOSE_EXPAND_COMMENTS_ACTION':
      return {...state, expandedCommentPanels: state.expandedCommentPanels
          .filter(element => element !== action.id)}
    default: return state;
  }
}

export const isExpandedPanelPushed = (state:State, {id}):boolean =>
  state.expandedCommentPanels.includes(id);

