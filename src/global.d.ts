import {
  AxiosInstance as AxiosInstance2,
  CancelTokenSource as CancelTokenSource2,
  AxiosResponse as AxiosResponse2,
  AxiosPromise as AxiosPromise2,
} from "axios";

export {}; // 这个必须有，将文件转化为模块
// 扩展全局变量

declare global {
  interface Window {
    cancalXHRList: CancelTokenSource[];
  }
  // RouterView
  interface IRouterViewProps {
    location?: any;
    // 进入路由之前的钩子
    beforeEnter?: (path: string) => void;
  }
  interface AxiosInstance extends AxiosInstance2 {}

  interface AxiosResponse extends AxiosResponse2 {}

  interface CancelTokenSource extends CancelTokenSource2 {}

  interface AxiosPromise extends AxiosPromise2 { }
  type AxiosMethod =  "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "link" | "LINK" | "unlink" | "UNLINK" | undefined
  // api 请求体
  interface iRequestGetData {
    start?: number;
    count: number;
  }
  // 历史记录
  interface iSearchHistory {
    id: string;
    title: string;
  }
  // 页面参数
  interface iSearchParams {
    q: string;
  }
  // TopNav
  interface iTopNavProps {
    // react-router-dom
    history: any;
    // 标题插槽
    slotTitle?: JSX.Element;
    // 是否固定到头部
    noAffix?: boolean;
  }
  // Detail
  interface iDetailProps {
    match: any;
  }
  // Search
  interface iSearchProps {
    location: any;
  }
  // 骨架屏
  interface ICardList {
    column: number;
  }
  interface IList {
    row: number;
  }
}
