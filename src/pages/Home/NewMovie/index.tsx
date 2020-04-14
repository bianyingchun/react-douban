import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IAction, INewMovieProps } from "src/types";
import { getNewMovie } from "src/store/actions";
import MovieCard from "src/components/MovieCard";
import { CardListSkeleton } from "src/components/Skeletons";
import { IMovieItem } from "src/types";
const NewMovie: React.FC<INewMovieProps> = ({
  title,
  loading,
  subjects,
  getNewMovie,
}) => {
  useEffect(() => {
    getNewMovie();
  }, [getNewMovie]);
  return (
    <div className="block block-newmovie">
      <div className="line-raw">
        <h2 className="raw-title">{title}</h2>
      </div>
      <div className="cards-box clearfix">
        {loading ? (
          <CardListSkeleton column={4} />
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
  const newMovieState = state.newMovie;
  return {
    ...newMovieState,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getNewMovie,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
