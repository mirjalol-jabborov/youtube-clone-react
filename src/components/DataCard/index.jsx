import React, { useEffect } from "react";
import "./DataCard.scss";
import YT_API from "../../api/api";
import numeral from "numeral";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

const DataCard = ({ data }) => {
  const [channelInfo, setChannelInfo] = React.useState(null);
  const [videoInfo, setVideoInfo] = React.useState(null);

  const Navigate = useNavigate();

  useEffect(() => {
    YT_API.get("channels", {
      params: {
        part: "statistics,snippet",
        id: data?.snippet?.channelId,
      },
    })
      .then((response) => {
        // console.log(response);
        setChannelInfo(response.data.items[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data.id]);

  useEffect(() => {
    YT_API.get("videos", {
      params: {
        part: "statistics,snippet",
        id: data?.id?.videoId,
      },
    })
      .then((response) => {
        // console.log(response);
        setVideoInfo(response.data.items[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data.id]);

  return (
    <div className={`data-card`}>
      <Link to={"/watch/" + data?.id?.videoId}>
        <div
          className={`data-card__media`}
          style={{
            backgroundImage: `url(${data?.snippet?.thumbnails?.high?.url})`,
          }}
        ></div>
      </Link>
      <div className="data-card__body">
        <div className="data-card__body-left">
          <img
            src={channelInfo?.snippet?.thumbnails?.default?.url}
            alt={channelInfo?.snippet?.title}
          />
        </div>
        <div
          className="data-card__body-right"
          onClick={() => {
            Navigate("/watch/" + data?.id?.videoId);
          }}
        >
          <p className="data-card__body-right__title">
            {/* {data?.snippet.title}// */}
            {data?.snippet.title.length < 50
              ? data?.snippet.title
              : data?.snippet.title.substring(0, 65) + "..."}
          </p>

          <div className="data-card__body-right__footer">
            <div className="data-card__body-right__footer__top">
              <p>{data?.snippet?.channelTitle}</p>
            </div>
            <div className="data-card__body-right__footer__bottom">
              {/* <p>53K views</p>
                <p>1 years ago</p> */}
              <p>
                {numeral(videoInfo?.statistics?.viewCount).format("0.a")} views
              </p>
              <p>{moment(data?.snippet?.publishedAt).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DataCard);
