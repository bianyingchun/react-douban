import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IAction, ITop250Props } from "src/types";
import { getTop250, turnTop250Page } from "src/store/actions";
import MovieCard from "src/components/MovieCard";
import { CardListSkeleton } from "src/components/Skeletons";
import { IMovieItem } from "src/types";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import "./style.scss";
const perPageNumber = 12;
const Top250: React.FC<ITop250Props> = ({
  title,
  count,
  start,
  total,
  loading,
  subjects,
  pages,
  getTop250,
  currentPage,
  turnTop250Page,
}) => {
  let totalPage = Math.ceil(total / count);
  useEffect(() => {
    getTop250(0);
  }, [getTop250]);
  function turnPage(page: number) {
    if (page < 0 || page >= totalPage) return;
    if (pages[page]) {
      turnTop250Page(page);
    } else {
      getTop250(page);
    }
  }
  return (
    <div className="block block-top250">
      <div className="line-raw">
        <h2 className="raw-title">{title}</h2>
        <div className="page-controller">
          <LeftOutlined
            className={currentPage === 0 ? "disabled" : ""}
            onClick={() => {
              turnPage(currentPage - 1);
            }}
          />
          <span className="indicator">
            {currentPage + 1}/{totalPage}
          </span>
          <RightOutlined
            className={currentPage === totalPage - 1 ? "disabled" : ""}
            onClick={() => {
              turnPage(currentPage + 1);
            }}
          />
        </div>
      </div>
      <div className="cards-box clearfix">
        {loading ? (
          <CardListSkeleton column={6} />
        ) : (
          subjects.map((item: IMovieItem, index: number) => {
            return <MovieCard height={300} item={item} key={index} />;
          })
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: IStoreState) => {
  const top250State = state.top250;
  return {
    ...top250State,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTop250,
      turnTop250Page,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Top250);
