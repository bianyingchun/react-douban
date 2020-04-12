import React from "react";
import { IBannerProps } from "src/types";
import { Carousel } from "antd";
import "./style.scss";
const Banner: React.FC<IBannerProps> = ({ list = [] }) => {
  return (
    <div className="banner-wraper">
      <Carousel autoplay>
        {list.map((item: string, index: number) => {
          return (
            <div className="banner-item" key={index}>
              <img src={item} alt="banner" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
