import { IUsBoxState, IAction } from "src/types";
import * as Constant from "../constants";

const initState: IUsBoxState = {
  title: "",
  date: "",
  subjects: [],
  loading:false
};

export default (state = initState, action: IAction): IUsBoxState => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
