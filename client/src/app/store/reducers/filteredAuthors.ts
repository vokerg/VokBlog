import {Author} from "../../model/author";
import {ActionReducer, combineReducers} from "@ngrx/store";

interface FilteredAuthorsState {
  filter: string;
  authors: Author[];
}

const authorsReducerMaker = filter =>
  (state:FilteredAuthorsState={
    filter,
    authors: []
  }, action): FilteredAuthorsState => {
    switch (action.type) {
      case 'LOAD_TOP_AUTHORS_COMPLETED': return (filter === action.filter) ? {...state, authors: action.authors}: state; break;
      default: return state;
    }
  };

export interface State {
  mainPageAuthors: FilteredAuthorsState,
}

export const reducers = {
  mainPageAuthors: authorsReducerMaker("All"),
};

export const reducer: ActionReducer<State> = combineReducers(reducers);

export const getMainPageAuthors = (state:State) => state.mainPageAuthors.authors;
