import axios from "axios";
import { API_CONFIG } from "../common/constant";

function http2() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  window.cancalXHRList.push(source);

  let instance: AxiosInstance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    params: {
      apiKey: API_CONFIG.KEY,
    },
    cancelToken: source.token,
  });
  return instance;
}
const instance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  params: {
    apiKey: API_CONFIG.KEY,
  },
});
function http() {
  return instance;
}

export function getHotShow(params?: iRequestGetData): AxiosPromise {
  return new Promise((resolve, reject) => {
    return http()
      .get("/in_theaters", {
        params
      })
  });
}

// top250
export function getTop250(params?: iRequestGetData): AxiosPromise {
  return http().get("/top250", {
    params,
  });
}

//  新片
export function getNew(): AxiosPromise {
  return http().get("/new_movies");
}

// 电影详情
export function getDetail(id: string): AxiosPromise {
  return http().get(`/subject/${id}`);
}

// 北美票房榜
export function getGoodbox(): AxiosPromise {
  return http().get("/us_box");
}

// 搜索条目
export function getContentBySearch(
  str: string,
  params?: iRequestGetData
): AxiosPromise {
  return http().get(`/search?q=${str}`, {
    params,
  });
}

// 口碑榜
export function getWeeklyMovie(): AxiosPromise {
  return http().get("/weekly");
}

// 获取每日壁纸
export function getWallPaper(): AxiosPromise {
  return axios.get("/bing/HPImageArchive.aspx", {
    params: {
      format: "js",
      idx: 0,
      n: 1,
      mkt: "zh-CN",
    },
  });
}
