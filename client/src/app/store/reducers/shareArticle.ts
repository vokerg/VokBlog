export interface State {
  openSharePanels: string[]
}

export function reducer(state:State={openSharePanels:[]}, action) {
  switch(action.type) {
    case 'PUSH_SHARE_BUTTON_ACTION':
      return state.openSharePanels.includes(action.id)
        ? state : {...state, openSharePanels: [...state.openSharePanels, action.id]};
    case 'CLOSE_SHARE_ACTION':
      return {...state, openSharePanels: state.openSharePanels
          .filter(element => element !== action.id)}
    default: return state;
  }
}

export const isShareArticlePushed = (state:State, {id}):boolean =>
  state.openSharePanels.includes(id);
