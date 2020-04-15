import { ISearchState, IAction } from "src/types";
import * as Constant from "../constants";
import {CACHE} from 'src/common/constant'

const history = JSON.parse(localStorage.getItem(CACHE.SEARCH_HISTORY) || "[]")

const initState: ISearchState = {
  history:history
};

export default (state = initState, action: IAction): ISearchState => {
  const { type, payload } = action;
  // console.log(type, payload);
  switch (type) {
    case Constant.SET_HOTSHOW_LIST:
      return Object.assign({}, state, payload.data);
    case Constant.SET_LOADING_HOTSHOW:
      return Object.assign({}, state, { loading: payload.data });
    default:
      return state;
  }
};
