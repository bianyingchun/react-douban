import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { SearchOutlined } from "@ant-design/icons";
import { ITopNavProps, ISearchHistory } from "src/types";
import SuggestBox from "../SuggestBox";
const TopNav: React.FC<ITopNavProps> = ({
  slotTitle,
  noAffix = false,
  history = [],
}) => {
  let [isTopNavFixed, setIsTopNavFixed] = useState<boolean>(false); //是否固定在可视范围内
  let [isShowSuggestBox, setIsShowSuggestBox] = useState<boolean>(false);
  
  function navToSearch() { 

  }
  return (
    <div
      className={["header-bar", isTopNavFixed ? "head-bar--fixed" : ""].join(
        " "
      )}
    >
      <div className="bar-container clearfix">
        <span className="bar-top">
          <Link to="/home">
            <div className="logo"></div>
            <div className="slot-title">{slotTitle}</div>
          </Link>
        </span>
        <div className="search">
          <div className="search_box">
            <div className="search-btn" onClick={navToSearch}>
              {/* <SearchOutlined/> */}
              <span>全网搜</span>
            </div>
            <input type="text" className="search_input" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
