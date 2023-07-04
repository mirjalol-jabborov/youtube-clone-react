import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MiniCard.scss"

const MiniCard = ({ data }) => {
  // console.log(data);
  const navigate = useNavigate();
  console.log(data);
  return (
    <div
      className="miniCard"
      onClick={() => {
        navigate(`/watch/${data.id.videoId}`);
      }}
    >
      <div className="miniCard__thumbnail">
        <img src={data.snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className="miniCard__about">
        <div className="miniCard__about-title">
          <p>{data.snippet.title.length > 60 ? data.snippet.title.slice(0, 60) : data.snippet.title}</p>
        </div>
        <div className="miniCard__about-info">
          <span>{data.snippet.channelTitle}</span>
          <span>
            {moment(
              data.snippet.publishedAt
            ).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
