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
  const hotShowState = state.hotShow;
  return {
    ...hotShowState,
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
      getHotShow,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HotShow);
