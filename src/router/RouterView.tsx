import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routerMap from "./config";

function CustomRoute(props: IRouterViewProps) {
  let path: string = props.location.pathname;
  props.beforeEnter && props.beforeEnter(path);
  if (path === "/") {
    return <Redirect to="/home" />;
  }
  let matchRoute = routerMap.find(item => {
    let url = item.path;
    url = url.replace(/(\:.+)/g, "[^/]+").replace(/\//g, "\\/");
    return new RegExp(`${url}(\\/|\\/)?$`, "gi").test(path);
  });
  if (matchRoute) {
    return (
      <Route
        exact={true}
        path={matchRoute.path}
        component={matchRoute.component}
      />
    );
  }
  return <Redirect to="/404" />;
}

export default function(props: IRouterViewProps) {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute {...props} />
      </Switch>
    </BrowserRouter>
  );
}
