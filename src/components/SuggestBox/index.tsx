import React from "react";
import { ISugguestProps } from "src/types";
import { Link } from "react-router-dom";

const SuggestBox: React.FC<ISugguestProps> = ({
  history,
  show = false,
  showTips = false,
  hotShowList,
  addSearchHistory,
  suggestList,
}) => {
  return (
    <div className="search-list" style={{ display: show ? "block" : "none" }} onClick={(ev) => {ev.nativeEvent.stopImmediatePropagation()}}>
      {showTips ? (
        <div>
          <div className="list-history">
            <h4 className="panel-title">历史记录</h4>
            <ul>
              {history.map((item, index) => {
                return (
                  <li className="list-item" key={index}>
                    <Link to={`/detail/${item.id}`}>
                      <h5 className="title">{item.title}</h5>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="list-hot">
            <h4 className="panel-title">热映</h4>
            <ul>
              {hotShowList.slice(0, 8).map((item, index) => {
                return (
                  <li className="list-item" key={index}>
                    <Link
                      to={`/detail/${item.id}`}
                      onClick={() => {
                        addSearchHistory(item);
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
                    to={`/detail/${item.id}`}
                    onClick={(ev: any) => {
                      addSearchHistory({
                        id: item.id,
                        title: item.title,
                      });
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
