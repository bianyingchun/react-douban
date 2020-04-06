import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Tag, Carousel } from "antd";
import LazyLoad from "react-lazyload";
import * as _ from "lodash";
import TopNav from "../../components/TopNav";
import {getHotShow, getNew, getGoodbox, getWeeklyMovie, getTop250 } from "../../api";
import "./style.scss";

import imgBanner001 from '../assets/banner-001.jpg';
import imgBanner002 from '../assets/banner-002.jpg';
import imgBanner003 from '../assets/banner-003.jpg';
import imgBanner004 from '../assets/banner-004.jpg';
import imgBanner005 from '../assets/banner-005.jpg';

export default function Home() {
  return (
    <div className="wraper">
      <TopNav />
    </div>
  );
}
