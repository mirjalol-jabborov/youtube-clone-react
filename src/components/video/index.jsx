import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFixedSideMenu } from "../../redux/actions/sideMenuAction";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { setChannel, setVideo } from "../../redux/actions/resultDataAction";
import "./Video.scss";
import numeral from "numeral";

const Video = () => {
  const videoId = useParams().videoId;

  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  const { resultData } = selector;

  useEffect(() => {
    dispatch(isFixedSideMenu({ toggle: false, fixed: true }));
    dispatch(setVideo(videoId));
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
