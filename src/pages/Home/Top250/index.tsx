import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IAction, ITop250Props } from "src/types";
import { getTop250 } from "src/store/actions";
import MovieCard from "src/components/MovieCard";
import { CardListSkeleton } from "src/components/Skeletons";
import { IMovieItem } from "src/types";
const Top250: React.FC<ITop250Props> = ({
  title,
  count,
  start,
  loading,
  subjects,
  getTop250,
}) => {
  useEffect(() => {
    getTop250(start, count);
  }, [count, getTop250, start]);
  return (
    <div className="block block-top250">
      <div className="line-raw">
        <h2 className="raw-title">{title}</h2>
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Top250);
