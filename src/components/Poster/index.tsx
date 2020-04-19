import React from "react";
import "./style.scss";
import { Statistic, Tag, Typography } from "antd";

const Poster: React.FC<any> = ({
  title,
  ratings_count,
  rating,
  images,
  tags,
  directors,
  casts,
  summary,
}) => {
  let [$units, $decimal] = ("" + rating.average).split(".");
  return (
    <>
      <div className="preview">
        <div className="block profile-img">
          <img src={images.small} alt="" />
        </div>
        <h2 className="title">{title}</h2>
        <div className="profile-rate">
          <div className="rate">
            <span className="units">{$units}</span>
            {Number($units) > 0 && <span className="decimal">.{$decimal}</span>}
          </div>
          <Statistic title="评价人数" value={ratings_count} className="box" />
        </div>
      </div>
      <div className="block profile-info">
        <div className="raw-title">{title}</div>
        <div className="tags">
          {tags.map((tag: string, index: number) => (
            <Tag className="tag-text" key={index}>
              {tag}
            </Tag>
          ))}
        </div>
        <div className="directors">
          <label>导演：</label>
          {directors.map((item: any, index: number) => {
            return (
              <a key={index} href="#" className="person">
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="actors">
          <label>演员：</label>
          {casts.map((item: any, index: number) => {
            let split = "";
            if (index !== 0) {
              split = "/";
            }
            return (
              <span key={index}>
                {split}
                <a className="person">{item.name}</a>
              </span>
            );
          })}
        </div>
        <div className="video_summary">
          <Typography.Paragraph
            className="summary"
            ellipsis={{
              rows: 3,
              expandable: true,
            }}
          >
            {summary}
          </Typography.Paragraph>
        </div>
      </div>
    </>
  );
};

export default Poster;
