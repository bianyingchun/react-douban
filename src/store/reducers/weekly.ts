import { IWeeklyState, IAction } from "src/types";
import * as Constant from "../constants";

const initState: IWeeklyState = {
  title: "",
  subjects: [],
  loading:false
};

export default (state = initState, action: IAction): IWeeklyState => {
  const { type, payload } = action;
  switch (type) {
    case Constant.SET_WEEKLY:
      return Object.assign({}, state, payload.data)
    case Constant.SET_LOADING_WEEKLY:
        return Object.assign({}, state, { loading: payload.data });
    default:
      return state;
  }
};
