import { IHotShowState, IAction } from "src/types";
import * as Constant from "../constants";

const initState: IHotShowState = {
  count: 12,
  start: 0,
  total: 0,
  title: "正在热映",
  subjects: [],
  loading: false,
};

export default (state = initState, action: IAction): IHotShowState => {
  const { type, payload } = action;
  switch (type) {
    case Constant.SET_HOTSHOW_LIST:
      return Object.assign(state, payload.data);
    case Constant.SET_LOADING_HOTSHOW:
      return Object.assign(state, { loading: payload.data });
    default:
      return state;
  }
};
