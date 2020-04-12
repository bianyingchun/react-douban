import React from "react";
import { Link } from "react-router-dom";
import { Card, Tag } from "antd";
import { IMovieCardProps } from "src/types";
import LazyLoad from "react-lazyload";
import "./style.scss";

const MovieCard: React.FC<IMovieCardProps> = ({ height, item }) => {
  return (
    <div className="card-container">
      <Card
        className="movie-card"
        hoverable
        cover={
          <Link to={`/detail/${item.id}`}>
            <LazyLoad height={height} offset={500}>
              <img src={item.images.small} />
            </LazyLoad>
          </Link>
        }
      >
        <Tag className="img-tag tag-orange">{item.rating.average}</Tag>
        <Card.Meta title={item.title} description={item.genres.join("/")} />
      </Card>
    </div>
  );
};

export default MovieCard;
