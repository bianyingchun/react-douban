import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IWeeklyProps, IWeeklyItem } from "src/types";
import { getWeekly } from "src/store/actions";
import MovieCard from "src/components/MovieCard";
import { CardListSkeleton } from "src/components/Skeletons";
import './style.scss'
const Weekly: React.FC<IWeeklyProps> = ({
  title,
  loading,
  subjects,
  getWeekly,
}) => {
  useEffect(() => {
    getWeekly();
  }, [getWeekly]);
  return (
    <div className="block block-weekly">
      <div className="line-raw">
        <h2 className="raw-title">{title}</h2>
        <div className="spotbox">
          <div className="spot"></div>
          <div className="spot"></div>
          <div className="spot"></div>
        </div>
      </div>
      <div className="cards-box weekly-box clearfix">
        {subjects.slice(0, 6).map((item: IWeeklyItem, index: number) => {
          let { subject } = item;
          let { rating, title } = subject;
          return (
            <div className="card-container" key={index}>
              <div className="rate">{rating.average} 分</div>
              <div className="title">{title}</div>
              <div className="dot"></div>
            </div>
          );
        })}
      </div>
      <div className="cards-box clearfix">
        {loading ? (
          <CardListSkeleton column={6} />
        ) : (
          subjects.slice(0, 6).map((item: IWeeklyItem, index: number) => {
            return <MovieCard height={300} item={item.subject} key={index} />;
          })
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: IStoreState) => {
  const weeklyState = state.weekly;
  return {
    ...weeklyState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getWeekly,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
