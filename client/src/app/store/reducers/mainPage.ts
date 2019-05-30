import {Article} from "../../model/article";

export interface State {
  articles: Article[];
}

export function reducer(state:State={
  articles: []
}, action): State {
  switch (action.type) {
    case 'LOAD_ARTICLES_COMPLETED': return action.articles; break;
    default: return state;
  }
}
