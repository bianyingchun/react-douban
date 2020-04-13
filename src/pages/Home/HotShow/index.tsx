import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IAction, IHotShowProps } from "src/types";
import { getHotShow } from "src/store/actions";
import MovieCard from "src/components/MovieCard";
import { CardListSkeleton } from "src/components/Skeletons";
import { IMovieItem } from "src/types";
const HotShow: React.FC<IHotShowProps> = ({
  title,
  count,
  start,
  loading,
  subjects,
  getHotShow,
}) => {
  useEffect(() => {
    getHotShow(start, count);
  }, [count, getHotShow, start]);
  return (
    <div className="block block-hotshow">
      <div className="line-raw">
        <h2 className="raw-title">正在热映</h2>
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
  const hotShowState = state.hotShow;
  return {
    ...hotShowState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getHotShow,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HotShow);
