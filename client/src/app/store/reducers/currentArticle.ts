import {Article} from "../../modules/model/article";
import {Comment} from "../../modules/model/comment";

export interface State {
  article: Article;
  comments: Comment[];
}

export function reducer(state:State={
  article: null,
  comments: []
}, action): State {
  switch (action.type) {
    case "LOAD_ARTICLE_COMPLETED": {
      return {article: action.article, comments: action.comments};
    }
    case "ADD_COMMENT_COMPLETED": {
      return action.comment.idParentComment === null
        ? {...state, comments: [...state.comments, action.comment]}
        : {...state, comments: state.comments.map(
            comment => comment.id !== action.comment.idParentComment
                        ? comment
                        : {...comment, subCommentCount: ++comment.subCommentCount}
          )}
    }
    case "ADD_ARTICLE_COMPLETED": case "UPDATE_ARTICLE_COMPLETED": {
      return {...state, article: action.article}
    }
    case "LIKE_ARTICLE_COMPLETED": {
      return (state.article && state.article.id === action.articleId)
        ? {...state, article: {...state.article, liked:true, likeCount: state.article.likeCount + 1}}
        : state;
    }
    case "UNLIKE_ARTICLE_COMPLETED": {
      return (state.article && state.article.id === action.articleId)
        ? {...state, article: {...state.article, liked:false, likeCount: state.article.likeCount - 1}}
        : state;
    }
    case "LIKE_COMMENT_COMPLETED": {
      return (state.comments
        ? {...state, comments: state.comments.map(
          comment => comment.id === action.commentId
            ? {...comment, liked: true, likeCount: comment.likeCount+1}
            : comment
          )}
        : state)
    }
    case "UNLIKE_COMMENT_COMPLETED": {
      return (state.comments
        ? {...state, comments: state.comments.map(
            comment => comment.id === action.commentId
              ? {...comment, liked: false, likeCount: comment.likeCount-1}
              : comment
          )}
        : state)
    }

    default: return state;
  }
}

export const getCurrentArticle = (state:State) => state;
