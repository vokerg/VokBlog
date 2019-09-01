import {Article} from "../../model/article";

export interface State {
  articlesMap: Map<String, Article[]>
}

export function reducer(
  state: State = {articlesMap: new Map([])},
  action
): State {
  switch(action.type) {
    case 'LOAD_ARTICLES_BY_ID_AUTHOR_COMPLETED': {
      const newMap = new Map(state.articlesMap);
      newMap.set(action.idAuthor, action.articles);
      return {articlesMap: newMap};
    }
    default: return state;
  }
}

export const getArticlesByIdAuthor = (state, {idAuthor}) => state.articlesMap.get(idAuthor) || [];

