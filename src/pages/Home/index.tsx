import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Tag, Carousel } from "antd";
import {
    CardListTop250Skeleton,
    CardListSkeleton,
    ListSkeleton,
} from "src/skeletons/home";
import LazyLoad from "react-lazyload";
import * as _ from "lodash";
import TopNav from "src/components/TopNav";
import {
    getHotShow,
    getNew,
    getGoodbox,
    getWeeklyMovie,
    getTop250,
} from "src/api";
import "./style.scss";

import imgBanner001 from "src/assets/banner-001.jpg";
import imgBanner002 from "src/assets/banner-002.jpg";
import imgBanner003 from "src/assets/banner-003.jpg";
import imgBanner004 from "src/assets/banner-004.jpg";
import imgBanner005 from "src/assets/banner-005.jpg";

export default function Home() {
    let [hotShowList, setHotShowList] = useState<any>([]); // 热映
    let [newMovieList, setNewMovieList] = useState<any>([]); // 新片
    let [goodBoxList, setGoodBoxList] = useState<any>([]); // 票房榜
    let [weeklyBox, setWeeklyBox] = useState<[]>([]); // 口碑榜
    let [top250List, setTop250List] = useState<any[]>([]); // top250
    let [boxLastDate, setBoxLastDate] = useState<string>("");
    let [isLoadingHotShow, setIsLoadingHotShow] = useState<boolean>(true);
    let [isLoadingNewMovie, setIsLoadingNewMovie] = useState<boolean>(true);
    let [isLoadingGoodBox, setIsLoadingGoodBox] = useState<boolean>(true);
    let [isLoadingWeeklyBox, setIsLoadingWeeklyBox] = useState<boolean>(true);
    let [isLoadingTop250, setIsLoadingTop250] = useState<boolean>(true);

    let bannerList = [
        imgBanner001,
        imgBanner002,
        imgBanner003,
        imgBanner004,
        imgBanner005,
    ];
    function rendTop250() {
        const len = top250List.length;
        const per_page_count = 9;
        const pages = Math.ceil(len / 9);
        let groupList: Array<any> = [];
        for (let i = 0; i < pages; i++) {
            let s = i * per_page_count;
            let end = s + per_page_count;
            groupList.push(top250List.slice(s, end));
        }

        return groupList.map((g: any, n: number) => {
            return (
                <div className="cards-box cards-box--top250 clearfix" key={n}>
                    {g.map((item: any, index: number) => {
                        let isFirst: boolean = index === 0;
                        return <div className=""></div>;
                    })}
                </div>
            );
        });
    }
    return (
        <div className="wraper">
            <TopNav />
        </div>
    );
}
