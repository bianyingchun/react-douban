import { IUsBoxState, IAction } from "src/types";
import * as Constant from "../constants";

const initState: IUsBoxState = {
  title: "北美票房榜",
  date: "",
  subjects: [],
  loading:false
};

export default (state = initState, action: IAction): IUsBoxState => {
  const { type, payload } = action;
  switch (type) {
    case Constant.SET_USBOX:
      return Object.assign({}, state, payload.data);
    case Constant.SET_LOADING_USBOX:
      return Object.assign({}, state, { loading: payload.data });
    default:
      return state;
  }
};
