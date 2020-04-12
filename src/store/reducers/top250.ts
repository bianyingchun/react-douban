import { ITop250State, IAction } from "src/types";
import * as Constant from "../constants";

const initState: ITop250State = {
  count: 0,
  start: 0,
  total: 0,
  title: "TOP 250",
  subjects: [],
  loading:false
};

export default (state = initState, action: IAction): ITop250State => {
  const { type, payload } = action;
  switch (type) {
    case Constant.SET_TOP250_LIST:
      return Object.assign(state, payload.data);
    case Constant.SET_LOADING_TOP250:
      return Object.assign(state, { loading: payload.data });
    default:
      return state;
  }
};
