import { ISearchState, IAction, ISearchItem } from "src/types";
import * as Constant from "../constants";
import { CACHE } from "src/common/constant";

const history = JSON.parse(localStorage.getItem(CACHE.SEARCH_HISTORY) || "[]");

const initState: ISearchState = {
  searchHistory: history,
};

const saveHistory = (history: Array<ISearchItem>) => {
  localStorage.setItem(CACHE.SEARCH_HISTORY, JSON.stringify(history));
};

export default (state = initState, action: IAction): ISearchState => {
  const { type, payload } = action;
  switch (type) {
    case Constant.ADD_SEARCH_HISTORY:
      {
        let newState = Object.assign({}, state);
        let title = payload.data;
        let index = state.searchHistory.indexOf(title);
        if (index !== -1) {
          newState.searchHistory.splice(index, 1);
        }
        newState.searchHistory.unshift(title);
        saveHistory(newState.searchHistory);
        return newState;
      }

    case Constant.CLEAR_SEARCH_HISTORY:
      {
        let newState = Object.assign({}, state, { searchHistory: [] });
        saveHistory([])
        return newState;
      }
    default:
      return state;
  }
};
