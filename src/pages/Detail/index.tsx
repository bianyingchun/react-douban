import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IStoreState, IDetailProps } from "src/types";
import { getMovieDetail } from "src/store/actions";
import { DetailSkeleton } from "src/components/Skeletons";
import Poster from "src/components/Poster";
import Comment from "./Commet";
import "./style.scss";
const Detail: React.FC<IDetailProps> = (props) => {
  let { getMovieDetail, match } = props;
  useEffect(() => {
    getMovieDetail(match.params.id);
  }, [getMovieDetail, match.params.id]);
  if (props.loading) return <DetailSkeleton />;
  return (
    <div className="page page-detail">
      <div className="poster-box">
        <div className="profile">
          <Poster {...props}></Poster>
          <Comment
            reviews_count={props.reviews_count}
            comments_count={props.comments_count}
            popular_comments={props.popular_comments}
            popular_reviews={props.popular_reviews}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: IStoreState) => {
  const detail = state.detail;
  return {
    ...detail,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getMovieDetail,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
