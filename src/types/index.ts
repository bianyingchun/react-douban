import { RouteComponentProps } from "react-router-dom";
// 轮播图
export type IBannerProps = {
  list: Array<string>;
};

export interface IMovieItem {
  id: string;
  rating: {
    average: number;
    max: number;
    min: number;
    stars: number;
    [prop: string]: any;
  };
  title: string;
  images: {
    small: string;
    medium: string;
    large: string;
  };
  genres: Array<string>;
  // year: string;
  // has_video: boolean;
  // durations: Array<string>;
  // collect_count: number;
  // subType: string;
  // cast: Array<any>;
  // alt: string;
  // original_title: string;
  // pubdates: Array<string>;
  [prop: string]: any;
}

// 首页电影item
export type IMovieCardProps = {
  height: number;
  item: IMovieItem;
};

// 骨架屏
export type ICardListProps = {
  column: number;
};

export type IListProps = {
  row: number;
};

// ==============================================
// redux action
export interface IAction<T = any> {
  type: string;
  payload: {
    data: T;
  };
}
// redux state
export interface IReduxPageStoreState {
  a: string;
  b: string;
}

export interface IReduxGlobalStoreState {
  c: string;
  d: string;
}

// 正在热映
export interface IHotShowState {
  count: number;
  start: number;
  total: number;
  title: string;
  subjects: Array<IMovieItem>;
  loading: boolean;
}
// 新片
export interface INewMovieState {
  title: string;
  subjects: Array<IMovieItem>;
  loading: boolean;
}

// 北美榜单
export interface IUsBoxItem {
  box: number;
  new: boolean;
  rank: number;
  subject: IMovieItem;
}
export interface IUsBoxState {
  title: string;
  date: string;
  subjects: Array<IUsBoxItem>;
  loading: boolean;
}
// 一周口碑榜
export interface IWeeklyItem {
  subject: IMovieItem;
  rank: number;
  delta: 1;
}
export interface IWeeklyState {
  title: string;
  subjects: Array<IWeeklyItem>;
  loading: boolean;
}
// top250
export interface ITop250State extends IHotShowState {
  pages: Array<Array<IMovieItem>>;
  currentPage: number;
}

export interface IStoreState {
  hotShow: IHotShowState;
  newMovie: INewMovieState;
  usBox: IUsBoxState;
  weekly: IWeeklyState;
  top250: ITop250State;
  loading: boolean;
  search: ISearchState;
  detail: IDetailState;
}

export interface IHotShowProps extends IHotShowState {
  getHotShow: (start: number, count: number) => void;
}

export interface INewMovieProps extends INewMovieState {
  getNewMovie: () => void;
}

export interface ITop250Props extends ITop250State {
  getTop250: (page: number) => void;
  turnTop250Page:(currentPage:number)=>void
}

export interface IWeeklyProps extends IWeeklyState {
  getWeekly: () => void;
}

export interface IUsBoxProps extends IUsBoxState {
  getUsBox: () => void;
}

// ===============================================
// topbar search
// export interface ISearchItem {
//   id?: string; //不应该通过id跳转到详情页，只能靠title跳转到/search?q={title}
//   title: string;
// }
export type ISearchItem = string;
export interface ISearchState {
  searchHistory: Array<ISearchItem>;
}

//为了解决withRouter所带来的prop下的属性没有进行类型判断，需要继承RouteComponentProps
export interface ITopNavProps extends ISearchState, RouteComponentProps {
  addSearchHistory: (item: ISearchItem) => void;
  clearSearchHistory: () => void;
  hotShow: IHotShowState;
  getHotShow: (start: number, count: number) => void;
}

export interface ISugguestProps extends ISearchState {
  show: boolean;
  showTips: boolean; //搜索提示
  hotShow: IHotShowState;
  suggestList: Array<IMovieItem>;
  addSearchHistory: (item: ISearchItem) => void;
  clearSearchHistory: () => void;
}

export interface ISearchParams {
  q: string;
}

// ================detail=============
export interface IDoubanAuthor {
  uid: string;
  avatar: string;
  signature: string;
  alt: string;
  id: string;
  name: string;
}
export interface IUserMovieRating {
  max: number;
  value: number;
  min: number;
}
export type IMovieReviewItem = {
  title?: string;
  subject_id: string;
  author: IDoubanAuthor;
  summary?: string;
  alt?: string;
  id: string;
  rating: IUserMovieRating;
};
export type IMovieCommentItem = {
  rating: IUserMovieRating;
  useful_count?: number;
  author: IDoubanAuthor;
  subject_id: string;
  content?: string;
  created_at?: string;
  id: string;
};
export type IMovieCommentItemProps = IMovieCommentItem & IMovieReviewItem;
export interface IPeople {
  avatars: any;
  name_en: string;
  name: string;
  alt: string;
  id: string;
}
export interface IMoviePhoto {
  thumb: string;
  image: string;
  cover: string;
  alt: string;
  id: string;
  icon: string;
}
export interface ITrailerItem {
  medium: string;
  title: string;
  subject_id: string;
  alt: string;
  small: string;
  resource_url: string;
  id: string;
}
export interface ITrailer {
  trailer_urls: string[];
  trailers: ITrailerItem[];
}
export interface IMovieComment {
  popular_comments: Array<IMovieCommentItem>;
  popular_reviews: Array<IMovieReviewItem>;
  reviews_count: number;
  comments_count: number;
}
export interface IDetailState extends IMovieItem, ITrailer, IMovieComment {
  writers: Array<IPeople>;
  tags: Array<string>;
  casts: Array<IPeople>;
  summary: string;
  directors: Array<IPeople>;
  ratings_count: number;
  loading: boolean;
}

interface IDetailRouteParams {
  id: string;
}
export interface IDetailProps
  extends IDetailState,
    RouteComponentProps<IDetailRouteParams> {
  getMovieDetail: (id: string) => void;
}
