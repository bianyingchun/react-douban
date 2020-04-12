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
    default:
      return state;
  }
};
