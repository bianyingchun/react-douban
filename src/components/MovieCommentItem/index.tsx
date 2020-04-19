import React from "react";
import { Comment, Rate, Avatar, Tooltip } from "antd";
import { LikeFilled, DislikeOutlined } from "@ant-design/icons";
import moment from "moment";
import "./style.scss";
import { IMovieCommentItemProps } from "src/types";
const MovieCommentItem: React.FC<IMovieCommentItemProps> = ({
  title = "",
  summary = "",
  author,
  rating,
  useful_count = "",
  content = "",
  created_at = "",
}) => {
  const actions = [
    <span>
      <Tooltip title="Like">
        <LikeFilled />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>
        {useful_count || 0}
      </span>
    </span>,
  ];
  return (
    <Comment
      className="cutsom-ant-comment"
      actions={actions}
      author={
        <>
          <span>{author.name}</span>
          <Rate
            className="custom-ant-rate"
            disabled
            defaultValue={rating.value}
            count={rating.max}
          />
        </>
      }
      avatar={<Avatar src={author.avatar} alt={author.alt} />}
      content={
        content ? (
          <p>{content}</p>
        ) : (
          <>
            <a>{title}</a>
            <p>{summary}</p>
          </>
        )
      }
      datetime={
        created_at ? (
          <Tooltip title={moment(created_at).format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(created_at).fromNow()}</span>
          </Tooltip>
        ) : (
          ""
        )
      }
    />
  );
};

export default MovieCommentItem;
