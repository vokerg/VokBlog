import {Article} from "../../model/article";
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
      default: return state;
    }
  };

export interface State {
  mainPageArticles: FilteredArticlesState,
  tagArticles: FilteredArticlesState,
}

export const reducers = {
  mainPageArticles: articleReducerMaker("All"),
  tagArticles: articleReducerMaker("Tag")
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

export const getMainPageArticles = (state:State) => state.mainPageArticles.articles;

export const getTagArticles = (state:State) => state.tagArticles.articles;


