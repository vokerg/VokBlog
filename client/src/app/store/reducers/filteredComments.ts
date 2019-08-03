import {Comment} from "../../modules/model/comment";
import {ActionReducer, combineReducers} from "@ngrx/store";

interface FilteredCommentsState {
  filter: string;
  comments: Comment[];
}

const commentsReducerMaker = filter =>
  (state:FilteredCommentsState={
    filter,
    comments: []
  }, action):FilteredCommentsState => {
    switch (action.type) {
      case "ADD_COMMENT_COMPLETED": {
        return {...state, comments: [action.comment, ...state.comments.map(
            comment => comment.id !== action.comment.idParentComment
              ? comment
              : {...comment, subCommentCount: ++comment.subCommentCount}
          )]}
      }
      case 'LOAD_LATEST_COMMENTS_COMPLETED':
        return (filter === action.filter) ? {...state, comments: action.comments} : state; break;
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
  };

export interface State {
  mainPageComments: FilteredCommentsState,
}

export const reducers = {
  mainPageComments: commentsReducerMaker("All"),
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

export const getMainPageComments = (state:State) => state.mainPageComments.comments;
