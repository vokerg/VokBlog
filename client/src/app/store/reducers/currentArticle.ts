import {Article} from "../../model/article";
import {Comment} from "../../model/comment";

export interface State {
  article: Article;
  comments: Comment[];
}

export function reducer(state:State={
  article: null,
  comments: []
}, action): State {
  switch (action.type) {
    case "FETCH_ARTICLE": {
      return {article: action.article, comments: action.comments};
    }
    case "ADD_COMMENT_COMPLETED": {
      return {...state, comments: [...state.comments, action.comment]}
    }
    case "ADD_ARTICLE_COMPLETED": case "UPDATE_ARTICLE_COMPLETED": {
      return {...state, article: action.article}
    }
    default: return state;
  }
}

export const getCurrentArticle = (state:State) => {
  console.log("selector hit", state);
  return state;
}
