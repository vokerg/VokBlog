import {Author} from "../../model/author";
import {Comment} from "../../model/comment";

export interface State {
  comments: Comment[];
  authors: Author[];
}

export function reducer(state:State={
  comments: [],
  authors: []
}, action): State {
  switch (action.type) {
    case 'LOAD_LATEST_COMMENTS_COMPLETED': return {...state, comments: action.comments}; break;
    case 'LOAD_TOP_AUTHORS_COMPLETED': return {...state, authors: action.authors}; break;
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

export const getComments = (state:State) => state.comments;
export const getAuthors = (state:State) => state.authors;
