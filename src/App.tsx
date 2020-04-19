import React from "react";
import "./App.css";
import moment from "moment";
import "moment/locale/zh-cn";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import "./test.scss";
import RouterView from "./router/RouterView";
moment.locale("zh-cn");

function routerBeforeEnterHook(path: string) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <RouterView beforeEnter={routerBeforeEnterHook} />
      </div>
    </ConfigProvider>
  );
}

export default App;

// antd 目前的默认文案是英文，如果需要使用其他语言，
// antd 提供了一个 React 组件 ConfigProvider 用于全局配置国际化文案。
// https://ant.design/docs/react/i18n-cn
