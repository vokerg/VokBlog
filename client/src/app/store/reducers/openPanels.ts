import {ActionReducer, combineReducers} from "@ngrx/store";

interface StateOpenedPanel {
  openedPanel: string[]
}

export interface State {
  shareArticle: StateOpenedPanel,
  expandComments: StateOpenedPanel,
  addComment: StateOpenedPanel,
}

const openPanelsReducer = (openPanelAction:string, closePanelAction:string) =>
  (state:StateOpenedPanel={openedPanel:[]}, action) => {
    switch(action.type) {
      case openPanelAction:
        return state.openedPanel.includes(action.id)
          ? state : {...state, openedPanel: [...state.openedPanel, action.id]};
      case closePanelAction:
        return {...state, openedPanel: state.openedPanel
            .filter(element => element !== action.id)};
      default: return state;
    }
  };

const reducers = {
  shareArticle: openPanelsReducer('PUSH_SHARE_BUTTON_ACTION', 'CLOSE_SHARE_ACTION'),
  expandComments: openPanelsReducer('PUSH_EXPAND_COMMENTS_ACTION', 'CLOSE_EXPAND_COMMENTS_ACTION'),
  addComment: openPanelsReducer('PUSH_ADD_COMMENT', 'CLOSE_ADD_COMMENT'),
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

export const isShareArticlePushed = (state:State, {id}):boolean =>
  state.shareArticle.openedPanel.includes(id);
export const isExpandCommentsPushed = (state:State, {id}):boolean =>
  state.expandComments.openedPanel.includes(id);
export const isAddCommentOpened = (state:State, {id}):boolean =>
  state.addComment.openedPanel.includes(id);
