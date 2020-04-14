import axios from "axios";
import { API_CONFIG } from "../common/constant";

function http() {
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
const service = axios.create({ timeout: 1000 * 4 });
service.defaults.baseURL = API_CONFIG.BASE_URL;
service.defaults.headers["content-type"] = "json";
const request = (
  url: string,
  method: AxiosMethod,
  params?: iRequestGetData
) => {
  let args = params || {};
  args = {
    apiKey: API_CONFIG.KEY,
    ...args,
  };
  // if (method === "get") {
  //   return service.get(url, { params: args });
  // }

  let requestData = {
    url,
    method,
    data: {},
    params: {},
  };
  if (method === "get") {
    requestData.params = args;
  } else {
    requestData.data = args;
  }

  return new Promise((resolve, reject) => {
    service(requestData)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export function getHotShow(params?: iRequestGetData) {
  return request("/in_theaters", "get", params);
}

// top250
export function getTop250(params?: iRequestGetData) {
  return request("/top250", "get", params);
}

//  新片
export function getNew() {
  return request("/new_movies", "get");
}

// 口碑榜
export function getWeeklyMovie() {
  return request("/weekly", "get");
}

// 电影详情
export function getDetail(id: string) {
  return request(`/subject/${id}`, "get");
}

// 北美票房榜
export function getUsbox() {
  return request("/us_box", "get");
}

// 搜索条目
export function getContentBySearch(str: string, params?: iRequestGetData) {
  return request(`/search?q=${str}`, "get", params);
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
