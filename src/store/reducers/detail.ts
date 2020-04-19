import { IAction, IDetailState } from "src/types";
import * as Constant from "../constants";
import { CACHE } from "src/common/constant";

const initState: IDetailState = {
  loading: true,
  id: "",
  rating: {
    average: 0,
    max: 5,
    min: 0,
    stars: 0,
  },
  title: "",
  images: {
    small: "",
    medium: "",
    large: "",
  },
  genres: [],
  popular_comments: [],
  writers: [],
  tags: [],
  casts: [],
  summary: "",
  directors: [],
  comments_count: 0,
  popular_reviews: [],
  ratings_count: 0,
  trailer_urls: [],
  trailers: [],
  reviews_count: 0,
};

export default (state = initState, action: IAction): IDetailState => {
  const { type, payload } = action;
  switch (type) {
    case Constant.SET_MOVIE_DETAIL:
      return Object.assign({}, state, payload.data);
    case Constant.SET_LOADING_DETAIL:
      return Object.assign({}, state, { loading: payload.data });
    default:
      return state;
  }
};
