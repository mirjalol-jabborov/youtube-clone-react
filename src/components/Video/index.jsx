import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFixedSideMenu } from "../../redux/actions/sideMenuAction";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import {
  setChannel,
  setVideo,
  setVideoComments,
} from "../../redux/actions/resultDataAction";
import "./Video.scss";
import numeral from "numeral";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { Button } from "@mui/material";
import moment from "moment";
import Comment from "../Comment";

const Video = () => {
  const [moreToggle, setMoreToggle] = React.useState(false);

  const videoId = useParams().videoId;

  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  const { resultData } = selector;

  useEffect(() => {
    dispatch(isFixedSideMenu({ toggle: false, fixed: true }));
    dispatch(setVideo(videoId));
    dispatch(setVideoComments(videoId));
  }, []);

  useEffect(() => {
    if (resultData?.data?.video?.snippet?.channelId) {
      dispatch(setChannel(resultData.data.video.snippet.channelId));
    }
  }, [resultData.data?.video]);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
  };

  const renderDescription = (data) => {
    if (data !== undefined) {
      const description = data.replace(/\n/g, "<br />");

      return (
        <div
          className="video-info__more__description__title"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      );
    }

    return null;
  };
  return (
    <div className="video">
      <div className="container">
        <div className="video-wrapper">
          <div className="video-media">
            <YouTube videoId={videoId} opts={videoOptions} />
          </div>
          <div className="video-info">
            <div className="video-info__title">
              <h1 className="video-info__title__content">
                {resultData?.data?.video?.snippet?.title}
              </h1>
            </div>
            <div className="video-info__medium">
              <div className="video-info__medium__left">
                <div className="video-info__medium__left__channel">
                  <div className="video-info__medium__left__channel__icon">
                    <img
                      src={
                        resultData?.data?.channel?.snippet?.thumbnails?.default
                          ?.url
                      }
                      alt=""
                    />
                  </div>
                  <div className="video-info__medium__left__channel__info">
                    <div className="video-info__medium__left__channel__info__title">
                      <p>{resultData?.data?.channel?.snippet?.title}</p>
                    </div>
                    <div className="video-info__medium__left__channel__info__sub">
                      <p>
                        {numeral(
                          resultData?.data?.channel?.statistics?.subscriberCount
                        ).format("0.a")}{" "}
                        subscribers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="video-info__medium__left__subscribe">
                  <button>Subscribe</button>
                </div>
              </div>
              <div className="video-info__medium__right">
                <div className="video-info__medium__right__likes">
                  <div className="video-info__medium__right__like">
                    <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                    <p>
                      {numeral(
                        resultData?.data?.video?.statistics?.likeCount
                      ).format("0.a")}
                    </p>
                  </div>
                  <div className="video-info__medium__right__dislike">
                    <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
                  </div>
                </div>
                <div className="video-info__medium__right__share">
                  <div className="video-info__medium__right__share__icon">
                    <CopyAllIcon></CopyAllIcon>
                  </div>
                  <div className="video-info__medium__right__share__text">
                    <p>Share</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`
            video-info__more ${!moreToggle ? "video-info__more_active" : ""}
            `}
              onClick={() => {
                !moreToggle && setMoreToggle(!moreToggle);
              }}
            >
              <div className="video-info__more__statistics">
                <div className="video-info__more__statistics__view">
                  <p>
                    {!moreToggle
                      ? numeral(
                          resultData?.data?.video?.statistics?.viewCount
                        ).format("0.a")
                      : numeral(
                          resultData?.data?.video?.statistics?.viewCount
                        ).format("0,0")}{" "}
                    views
                  </p>
                </div>
                <div className="video-info__more__statistics__date">
                  <p>
                    {/* //give me like 2 yeaar ago */}
                    {!moreToggle
                      ? moment(
                          resultData?.data?.video?.snippet?.publishedAt
                        ).fromNow()
                      : new Date(
                          resultData?.data?.video?.snippet?.publishedAt
                        ).toLocaleDateString()}

                    {/* {new Date(
                        resultData?.data?.video?.snippet?.publishedAt
                      ).toLocaleDateString()} */}
                  </p>
                </div>
                <div
                  className={`video-info__more__statistics__hashtags ${
                    moreToggle
                      ? "video-info__more__statistics__hashtags__active"
                      : " "
                  }`}
                >
                  {resultData?.data?.video?.snippet?.tags
                    ?.slice(0, 3)
                    .map((tag) => (
                      <p className="video-info__more__statistics__hashtags__content">
                        #{tag}
                      </p>
                    ))}
                </div>
              </div>
              <div className="video-info__more__description">
                {moreToggle
                  ? renderDescription(
                      resultData?.data?.video?.snippet?.description
                    )
                  : renderDescription(
                      resultData?.data?.video?.snippet?.description
                        .slice(0, 75)
                        .concat("...")
                    )}
              </div>
              <div
                className="video-info__more__toggle"
                style={{ marginTop: "15px" }}
              >
                <Button
                  sx={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    padding: "0px",
                  }}
                  variant="text"
                  onClick={() => setMoreToggle(!moreToggle)}
                >
                  {moreToggle ? "Hide" : "Show"} more
                </Button>
              </div>
            </div>
            <div className="video-info__comment">
              <div className="video-info__comment__title">
                <p>Comments</p>
              </div>
              <div className="video-info__comment__content">
                {resultData?.data?.comments?.map((comment) => (
                  <Comment comment={comment} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
