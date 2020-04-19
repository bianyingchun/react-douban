import React from "react";
import MovieCommentItem from "src/components/MovieCommentItem";
import { IMovieComment } from "src/types";

const Comment: React.FC<IMovieComment> = ({
  reviews_count,
  comments_count,
  popular_comments,
  popular_reviews,
}) => {
  return (
    <>
      <div className="block profile-reviews">
        <h2 className="raw-title">影评（{reviews_count}）</h2>
        {popular_reviews.map((item, index) => (
          <MovieCommentItem {...item} key={index} />
        ))}
      </div>
      <div className="block profile-comments">
        <h2 className="raw-title">热评（{comments_count}）</h2>
        {popular_comments.map((item, index) => (
          <MovieCommentItem {...item} key={index} />
        ))}
      </div>
    </>
  );
};
export default Comment;
