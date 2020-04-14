import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IAction, IUsBoxProps, IUsBoxItem } from "src/types";
import { getUsBox } from "src/store/actions";
import MovieCard from "src/components/MovieCard";
import { ListSkeleton } from "src/components/Skeletons";
import { IMovieItem } from "src/types";

const showSummary = (
  avarage: number = 0,
  collect_count: number,
  isNew: boolean
) => {
  if (isNew) {
    return (
      <p className="summary">
        {avarage}分{collect_count}收藏
      </p>
    );
  } else {
    return (
      <p className="summary">
        <span className="box-new">新上榜</span>
        {avarage}分 / {collect_count}收藏
      </p>
    );
  }
};

const UsBox: React.FC<IUsBoxProps> = ({
  title,
  loading,
  subjects,
  date,
  getUsBox,
}) => {
  useEffect(() => {
    getUsBox();
  }, [getUsBox]);
  return (
    <div className="rate-box">
      <div className="line-raw">
        <h2 className="raw-title">{title}</h2>
        <p>{date} 更新/美元</p>
      </div>
      <div className="cards-box clearfix">
        {loading ? (
          <ListSkeleton row={2} />
        ) : (
          subjects.map((item: IUsBoxItem, index: number) => {
            let { rank, box, subject } = item;
            let { title, id, rating, collect_count } = subject;
            let { average } = rating;
            return (
              <li className="goodbox-rate" key={index}>
                <Link to={`/detail/${id}`}>
                  <h3 className="title">{title}</h3>
                  {showSummary(average, collect_count, item.new)}
                  <span className="rank">{rank}</span>
                  <span className="box">{box / 1e4} 万</span>
                </Link>
              </li>
            );
          })
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: IStoreState) => {
  const usBoxState = state.usBox;
  return {
    ...usBoxState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getUsBox,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UsBox);
