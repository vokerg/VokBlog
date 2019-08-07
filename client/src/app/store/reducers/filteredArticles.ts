import {Article} from "../../modules/model/article";
import {ActionReducer, combineReducers} from "@ngrx/store";

interface FilteredArticlesState {
  filter: string;
  articles: Article[];
}

const articleReducerMaker = filter =>
  (state:FilteredArticlesState={
    filter,
    articles: []
  }, action):FilteredArticlesState => {
    switch (action.type) {
      case 'LOAD_ARTICLES_COMPLETED':
        return (filter === action.filter) ? {...state, articles: action.articles} : state; break;
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
      case 'ADD_COMMENT_COMPLETED': {
        return {...state, articles: state.articles
            .map(article => article.id === action.comment.idArticle
              ? {...article, commentsCount: article.commentsCount + 1} : article
            )
        }
      }
      default: return state;
    }
  };

export interface State {
  mainPageArticles: FilteredArticlesState,
  tagArticles: FilteredArticlesState,
  authorArticles: FilteredArticlesState,
  feedArticles: FilteredArticlesState,
}

export const reducers = {
  mainPageArticles: articleReducerMaker("All"),
  tagArticles: articleReducerMaker("Tag"),
  authorArticles: articleReducerMaker("Author"),
  feedArticles: articleReducerMaker("Feed"),
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

export const getMainPageArticles = (state:State) => state.mainPageArticles.articles;

export const getTagArticles = (state:State) => state.tagArticles.articles;

export const getAuthorArticles = (state:State) => state.authorArticles.articles;

export const getFeedArticles = (state:State) => state.feedArticles.articles;
