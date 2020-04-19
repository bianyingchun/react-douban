import React from "react";
import { Card, Skeleton, Statistic } from "antd";
import loadingSvg from "src/assets/loading.svg";
import "./style.scss";
// 预加载卡片样式
export const CardListSkeleton: React.FC<ICardList> = ({ column = 6 }) => {
  let list = new Array(column).fill(1);

  return (
    <div>
      {list.map((item: number, index: number) => {
        return (
          <div className="card-container" key={index}>
            <Card
              key={index}
              loading={true}
              className="movie-card"
              cover={
                <div className="loading-img-box">
                  <img src={loadingSvg} alt="loading" />
                </div>
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export const CardListTop250Skeleton = () => {
  let list = new Array(9).fill(1);
  return (
    <div className="cards-box cards-box--top250 clearfix">
      {list.map((item, index) => {
        return (
          <div
            className={["card-container", index === 0 ? "card-big" : ""].join(
              " "
            )}
            key={index}
          >
            <Card
              key={index}
              loading={true}
              className="movie-card"
              cover={
                <div className="loading-img-box">
                  <img src={loadingSvg} alt="loading" />
                </div>
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export const ListSkeleton: React.FC<IList> = ({ row = 4 }) => {
  let list = new Array(row).fill(1);
  return (
    <div>
      {list.map((item, index) => {
        return (
          <li className="goodbox-rate" key={index}>
            <Skeleton className="title" paragraph={false} />
            <Skeleton
              className="summary"
              title={false}
              paragraph={{ rows: 1 }}
            />
            <span className="rank">0</span>
            <span className="box">0 万</span>
          </li>
        );
      })}
    </div>
  );
};

export const DetailSkeleton: React.FC = () => {
  return (
    <div className="page page-detail">
      <div className="poster-box">
        <div className="profile">
          <div className="preview block">
            <div className="profile-img-loading"></div>
            <div className="profile-rate">
              <div className="rate">
                <span className="units">0</span>
              </div>
              <Statistic title="评价人数" value="0" className="box" />
            </div>
          </div>
          <div className="block profile-info">
            <Skeleton />
          </div>
          <div className="block profile-reviews">
            <Skeleton avatar paragraph={{ rows: 4 }} />
          </div>
        </div>
      </div>
    </div>
  );
};
