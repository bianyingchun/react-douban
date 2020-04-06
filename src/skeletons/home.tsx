import React from "react";
import { Card, Skeleton } from "antd";
import loadingSvg from "../assets/loading.svg";

export const CardListSkeleton: React.FC<ICardList> = ({ column = 6 }) => {
  let list: Array<number> = [];
  list.fill(1);
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
