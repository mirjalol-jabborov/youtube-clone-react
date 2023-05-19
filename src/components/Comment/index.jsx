import moment from "moment";
import React, { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./Comment.scss";
import numeral from "numeral";

const Comment = ({ comment }) => {
  const [showFullText, setShowFullText] = useState(false);

  const displayText = comment?.snippet?.topLevelComment?.snippet?.textDisplay;
  const truncatedText = displayText?.substring(0, 100);
  const shouldShowButton = displayText && displayText.length > 100;

  return (
    <div className="comment">
      <div className="comment__avatar">
        <img
          src={
            comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
          }
          alt={comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        />
      </div>
      <div className="comment__content">
        <div className="comment__content__top">
          <div className="comment__content__author">
            <p>
              {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
            </p>
          </div>
          <div className="comment__content__time">
            <p>
              {moment(
                comment?.snippet?.topLevelComment?.snippet?.publishedAt
              ).fromNow()}
            </p>
          </div>
        </div>
        <div className="comment__content__medium">
          <div className="comment__content__text">
            <div className="comment__content__text__content"
              dangerouslySetInnerHTML={{
                __html: showFullText ? displayText : truncatedText,
              }}
            ></div>
            {shouldShowButton && (
              <button
                className="comment__content__text__button"
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
        <div className="comment__content__bottom">
          <div className="comment__content__bottom__like">
            <div className="comment__content__bottom__like__icon">
              <ThumbUpOffAltIcon />
            </div>
            <div className="comment__content__bottom__like__count">
              <p>{
                  numeral(
                    comment?.snippet?.topLevelComment?.snippet?.likeCount
                  ).format("0.a")
                }</p>
            </div>
          </div>
          <div className="comment__content__bottom__dislike">
            <div className="comment__content__bottom__dislike__icon">
              <ThumbDownOffAltIcon />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
