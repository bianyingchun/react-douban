import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IAction, INewMovieState } from "src/types";
import { getNewMovie } from "src/store/actions";
import MovieCard from "src/components/MovieCard";
import { CardListSkeleton } from "src/components/Skeletons";
import { IMovieItem } from "src/types";
const NewMovie: React.FC<INewMovieState> = ({ title, loading, subjects }) => {
  useEffect(() => {
    console.log(222);
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

// // dispatch 可以传入对象、函数，这里不能直接简单的使用 Dispatch 类型
// const mapDispatchToProps = (dispatch: any) => ({
//     changeName: (data: any) => dispatch(changeName(data)),
//     changeNameAsync: () => dispatch(changeNameAsync())
// });
// // 也可以使用 bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getNewMovie,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
