import { IAction } from "src/types/index";
import { Dispatch } from "redux";
import * as Constant from "./constants";
import * as Api from "src/api";

const setLoading = (type: string, isLoading: boolean): IAction => {
  return {
    type,
    payload: {
      data: isLoading,
    },
  };
};

const setErrorAction = (errMsg: string): IAction => {
  return {
    type: Constant.SET_ERROR,
    payload: {
      data: errMsg,
    },
  };
};

export const getHotShow = (start: number = 0, count: number = 12) => async (
  dispatch: Dispatch
) => {
  // const fetchData = async () => {
  dispatch(setLoading(Constant.SET_LOADING_HOTSHOW, true));
  try {
    const res = await Api.getHotShow({ start, count });
    dispatch({
      type: Constant.SET_HOTSHOW_LIST,
      payload: {
        data: res,
      },
    });
  } catch (err) {
    dispatch(setErrorAction("获取数据失败"));
  }
  dispatch(setLoading(Constant.SET_LOADING_HOTSHOW, false));
};

export const getNewMovie = () => async (
  dispatch: Dispatch
  ) => {
  // const fetchData = async () => {
  dispatch(setLoading(Constant.SET_LOADING_NEWMOVIE, true));
  try {
    const res = await Api.getNew();
    dispatch({
      type: Constant.SET_NEWMOVIE_LIST,
      payload: {
        data: res,
      },
    });
  } catch (err) {
    dispatch(setErrorAction("获取数据失败"));
  }
  dispatch(setLoading(Constant.SET_LOADING_NEWMOVIE, false));
};

export const getTop250 = (start: number = 0, count: number = 12) => async (
  dispatch: Dispatch
) => {
  // const fetchData = async () => {
  dispatch(setLoading(Constant.SET_LOADING_TOP250, true));
  try {
    const res = await Api.getTop250({ start, count });
    dispatch({
      type: Constant.SET_TOP250_LIST,
      payload: {
        data: res,
      },
    });
  } catch (err) {
    dispatch(setErrorAction("获取数据失败"));
  }
  dispatch(setLoading(Constant.SET_LOADING_TOP250, false));
};

export const getWeekly = (start: number = 0, count: number = 12) => async (
  dispatch: Dispatch
) => {
  // const fetchData = async () => {
  dispatch(setLoading(Constant.SET_LOADING_WEEKLY, true));
  try {
    const res = await Api.getWeeklyMovie();
    dispatch({
      type: Constant.SET_WEEKLY,
      payload: {
        data: res,
      },
    });
  } catch (err) {
    dispatch(setErrorAction("获取数据失败"));
  }
  dispatch(setLoading(Constant.SET_LOADING_WEEKLY, false));
};