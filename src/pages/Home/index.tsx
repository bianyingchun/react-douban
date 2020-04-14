import React, { useState, useEffect } from "react";
import * as _ from "lodash";
import TopNav from "src/components/TopNav";
import "./style.scss";
import imgBanner001 from "src/assets/banner-001.jpg";
import imgBanner002 from "src/assets/banner-002.jpg";
import imgBanner003 from "src/assets/banner-003.jpg";
import imgBanner004 from "src/assets/banner-004.jpg";
import imgBanner005 from "src/assets/banner-005.jpg";

import Banner from "src/components/Banner";
import HotShow from "./HotShow";
import NewMovie from "./NewMovie";
import Top250 from "./Top250";
import Weekly from "./Weekly";
import UsBox from "./UsBox";
export default function Home() {
  let bannerList = [
    imgBanner001,
    imgBanner002,
    imgBanner003,
    imgBanner004,
    imgBanner005,
  ];

  return (
    <div className="wraper">
      <TopNav />
      <Banner list={bannerList} />
      <div className="page page-home">
        <HotShow />
        <NewMovie />
        <UsBox />
        <Weekly />
        <Top250 />
      </div>
    </div>
  );
}
