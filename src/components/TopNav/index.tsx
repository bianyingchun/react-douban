import React, { useState, useEffect, isValidElement } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { SearchOutlined } from "@ant-design/icons";
import _ from "lodash";
import { addSearchHistory, clearSearchHistory } from "src/store/actions";
import {
  IStoreState,
  ITopNavProps,
  IMovieItem,
  ISearchParams,
} from "src/types";
import SuggestBox from "../SuggestBox";
import { getContentBySearch } from "src/api";
import { serialize } from "src/common/util";
import "./style.scss";

const TopNav: React.FC<ITopNavProps> = ({
  searchHistory = [],
  hotShow,
  addSearchHistory,
  history,
}) => {
  let [isShowSuggestBox, setIsShowSuggestBox] = useState<boolean>(false);
  let [isShowTipsPanel, setIsShowTipsPanel] = useState<boolean>(false);
  let [suggestList, setSuggestList] = useState<Array<IMovieItem>>([]);
  let [searchStr, setSearchStr] = useState<string>("");

  function navToSearch() {
    searchStr = !!searchStr ? searchStr : hotShow.title;
    let query: ISearchParams = {
      q: searchStr,
    };
    history.push({
      pathname: "/search",
      search: serialize(query),
    });
    addSearchHistory(searchStr)
  }

  const getSuggestionBySearch = getContentBySearchDebounce();

  function getContentBySearchDebounce() {
    return _.debounce((value) => {
      getContentBySearch(value, { count: 5 }).then((res) => {
        setSuggestList(res.subjects);
      });
    }, 5e2);
  }

  function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.trim();
    setSearchStr(value);
    let isValid = value.length > 0;
    setIsShowTipsPanel(isValid);
    isValid && getSuggestionBySearch(value);
  }

  function handleClickSearch(
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) {
    e.nativeEvent.stopImmediatePropagation();
    setIsShowSuggestBox(true);
  }

  function hanleKeyDownSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      setIsShowSuggestBox(false);
      navToSearch();
    }
  }

  function closeSuggest() {
    setIsShowSuggestBox(false);
  }

  // toggle show sugguest
  useEffect(() => {
    document.addEventListener("click", closeSuggest);
    return () => {
      document.removeEventListener("click", closeSuggest);
    };
  }, []);

  return (
    <div className="header-bar">
      <div className="bar-container clearfix">
        <span className="bar-top">
          <Link to="/home">
            <div className="logo"></div>
          </Link>
        </span>
        <div className="search">
          <div className="search_box">
            <div className="search-btn" onClick={navToSearch}>
              {/* <SearchOutlined/> */}
              <span>全网搜</span>
            </div>
            <input
              type="text"
              className="search_input"
              placeholder={hotShow.title}
              onChange={handleChangeSearch}
              onClick={handleClickSearch}
              onKeyDown={hanleKeyDownSearch}
            />
          </div>
          <SuggestBox
            show={isShowSuggestBox}
            hotShow={hotShow}
            searchHistory={searchHistory}
            addSearchHistory={addSearchHistory}
            showTips={isShowTipsPanel}
            suggestList={suggestList}
            clearSearchHistory={clearSearchHistory}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: IStoreState) => {
  const searchState = state.search;
  return {
    ...searchState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addSearchHistory,
      clearSearchHistory,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopNav));
