import { ITop250State, IAction } from "src/types";
import * as Constant from "../constants";
const perPageNumber = 12;
const initState: ITop250State = {
  count: 12,
  start: 0,
  total: 0,
  title: "TOP 250",
  subjects: [],
  loading: false,
  pages: [[]],
  currentPage: 0,
};

export default (state = initState, action: IAction): ITop250State => {
  const { type, payload } = action;
  switch (type) {
    case Constant.SET_TOP250_LIST: {
      let { currentPage, subjects } = payload.data;
      payload.data.pages = state.pages.concat([]);
      payload.data.pages[currentPage] = subjects;
      return Object.assign({}, state, payload.data);
    }
    case Constant.SET_LOADING_TOP250:
      return Object.assign({}, state, { loading: payload.data });
    case Constant.SET_TOP250_PAGE: {
      let currentPage = payload.data.currentPage
      let subjects = state.pages[currentPage];
      return Object.assign({}, state, {currentPage, subjects})
    }
    default:
      return state;
  }
};
