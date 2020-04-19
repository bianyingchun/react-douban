import React from "react";
import { ISugguestProps } from "src/types";
import { Link } from "react-router-dom";
import "./style.scss";
const SuggestBox: React.FC<ISugguestProps> = ({
  searchHistory,
  show = false,
  showTips = true,
  hotShow,
  addSearchHistory,
  clearSearchHistory,
  suggestList,
}) => {
  return (
    <div
      className="search-list"
      style={{ display: show ? "block" : "none" }}
      onClick={(ev) => {
        ev.nativeEvent.stopImmediatePropagation();
      }}
    >
      {showTips ? (
        <div>
          <div className="list-history">
            <div className="panel-title">
              <h4>历史记录</h4>
              <span onClick={clearSearchHistory}>清空</span>
            </div>
            <ul>
              {searchHistory.map((item, index) => {
                return (
                  <li className="list-item" key={index}>
                    <Link
                      to={`/search?q=${item}`}
                      onClick={() => {
                        addSearchHistory(item);
                      }}
                    >
                      <h5 className="title">{item}</h5>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="list-hot">
            <div className="panel-title">
              <h4>热映</h4>
            </div>
            <ul>
              {hotShow.subjects.slice(0, 8).map((item, index) => {
                return (
                  <li className="list-item" key={index}>
                    <Link
                      to={`/search?q=${item.title}`}
                      onClick={() => {
                        addSearchHistory(item.title);
                      }}
                    >
                      <span className="index">{+index + 1}</span>
                      <span className="title">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="list-suggest">
          <ul>
            {suggestList.map((item: any, index: number) => {
              return (
                <li className="list-item" key={index}>
                  <Link
                    to={`/search?q=${item.title}`}
                    onClick={() => {
                      addSearchHistory(item.title);
                    }}
                  >
                    <h5 className="title">{item.title}</h5>
                    <p className="origin_title">{item.original_title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default SuggestBox;
