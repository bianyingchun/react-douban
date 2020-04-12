import { INewMovieState, IAction } from "src/types";
import * as Constant from "../constants";

const initState: INewMovieState = {
  title: "新片榜",
  subjects: [],
  loading:false
};

export default (state = initState, action: IAction): INewMovieState => {
  const { type, payload } = action;
  switch (type) {
    case Constant.SET_NEWMOVIE_LIST:
      return Object.assign(state, payload.data);
    case Constant.SET_LOADING_NEWMOVIE:
      return Object.assign(state, { loading: payload.data });
    default:
      return state;
  }
};


