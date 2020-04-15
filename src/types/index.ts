// 轮播图
export type IBannerProps = {
  list: Array<string>;
};

export type IMovieItem = {
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
  year: string;
  has_video: boolean;
  durations: Array<string>;
  collect_count: number;
  subType: string;
  directors: Array<any>;
  cast: Array<any>;
  alt: string;
  original_title: string;
  pubdates: Array<string>;
  [prop: string]: any;
};

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
export interface ITop250State extends IHotShowState {}

export interface IStoreState {
  hotShow: IHotShowState;
  newMovie: INewMovieState;
  usBox: IUsBoxState;
  weekly: IWeeklyState;
  top250: ITop250State;
  loading: boolean;
}

export interface IHotShowProps extends IHotShowState {
  getHotShow: (start: number, count: number) => void;
}

export interface INewMovieProps extends INewMovieState {
  getNewMovie: () => void;
}

export interface ITop250Props extends ITop250State {
  getTop250: (start: number, count: number) => void;
}

export interface IWeeklyProps extends IWeeklyState {
  getWeekly: () => void;
}

export interface IUsBoxProps extends IUsBoxState {
  getUsBox: () => void;
}

// ===============================================
// topbar search
export interface ISearchItem {
  id: string;
  title: string;
}

export interface ISearchState {
  history: Array<ISearchItem>;
}

export interface ITopNavProps extends ISearchState {
  hotShow: IHotShowState;
  addSearchHistory: (item: ISearchItem) => void;
}

export interface ISugguestProps extends ISearchState {
  show: boolean;
  showTips:boolean;//搜索提示
  hotShowList: Array<IMovieItem>;
  addSearchHistory: (item: ISearchItem) => void;
  suggestList:Array<IMovieItem>
}
