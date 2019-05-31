import {Article} from "../../model/article";
import {Author} from "../../model/author";
import {Comment} from "../../model/comment";

export interface State {
  articles: Article[];
  comments: Comment[];
  authors: Author[];
}

export function reducer(state:State={
  articles: [],
  comments: [],
  authors: []
}, action): State {
  switch (action.type) {
    case 'LOAD_ARTICLES_COMPLETED': return {...state, articles: action.articles}; break;
    case 'LOAD_LATEST_COMMENTS_COMPLETED': return {...state, comments: action.comments}
    case 'LOAD_TOP_AUTHORS_COMPLETED': return {...state, authors: action.authors}
    default: return state;
  }
}

export const getArticles = (state:State) => state.articles;
export const getComments = (state:State) => state.comments;
export const getAuthors = (state:State) => state.authors;
