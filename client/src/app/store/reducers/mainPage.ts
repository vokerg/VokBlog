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
    case 'LOAD_LATEST_COMMENTS_COMPLETED': return {...state, comments: action.comments}; break;
    case 'LOAD_TOP_AUTHORS_COMPLETED': return {...state, authors: action.authors}; break;
    case 'LIKE_ARTICLE_COMPLETED': {
      return {...state, articles: state.articles.map(article =>
          (article.id === action.articleId)
            ? {...article, liked: true, likeCount: article.likeCount + 1}
            : article
        )}
    }; break;
    case 'UNLIKE_ARTICLE_COMPLETED': {
      return {...state, articles: state.articles.map(article =>
           (article.id === action.articleId)
            ? {...article, liked: false, likeCount: article.likeCount - 1}
            : article
        )}
    }; break;
    case 'LIKE_COMMENT_COMPLETED': {
      return {...state, comments: state.comments.map(comment =>
          (comment.id === action.commentId)
            ? {...comment, liked: true, likeCount: comment.likeCount + 1}
            : comment
        )}
    }; break;
    case 'UNLIKE_COMMENT_COMPLETED': {
      return {...state, comments: state.comments.map(comment =>
          (comment.id === action.commentId)
            ? {...comment, liked: false, likeCount: comment.likeCount - 1}
            : comment
        )}
    }; break;
    default: return state;
  }
}

export const getArticles = (state:State) => state.articles;
export const getComments = (state:State) => state.comments;
export const getAuthors = (state:State) => state.authors;
