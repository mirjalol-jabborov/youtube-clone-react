import YT_API from "../../api/api";
import {
  SET_DATA,
  SET_DATA_LOADING,
} from "../types/resultDataTypes";

export const setVideos = (videos = false) => {
  return async (dispatch) => {
    dispatch(setVideosLoading(true));
    dispatch(setVideosError(null));
    try {
    const response = await YT_API.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          q: videos ? videos : "",
          type: "video",
        },
      });
      dispatch(setVideosSuccess({ videos: response.data.items}));
    } catch (error) {
      dispatch(setVideosError(error));
    } finally {
      dispatch(setVideosLoading(false));
    }
  };
};

export const setVideo = (videoId) => {
  return async (dispatch) => {
    dispatch(setVideosLoading(true));
    dispatch(setVideosError(null));
    try {
      const response = await YT_API.get("videos", {
        params: {
          part: "statistics,snippet",
          id: videoId,
        },
      });
      dispatch(setVideosSuccess({ video: response.data.items[0]}));
    } catch (error) {
      dispatch(setVideosError(error));
    } finally {
      dispatch(setVideosLoading(false));
    }
  };
}

export const setChannel = (channelId) => {
  return async (dispatch) => {
    dispatch(setVideosLoading(true));
    dispatch(setVideosError(null));
    try {
      const response = await YT_API.get("channels", {
        params: {
          part: "snippet,statistics",
          id: channelId,
        },
      });
      dispatch(setVideosSuccess({ channel: response.data.items[0] }));
    } catch (error) {
      dispatch(setVideosError(error));
    } finally {
      dispatch(setVideosLoading(false));
    }
  };
}

export const setVideosLoading = (loading) => ({
  type: SET_DATA_LOADING,
  payload: loading,
});

export const setVideosSuccess = (videos) => ({    
  type: SET_DATA,
  payload: videos,
});

export const setVideosError = (error) => ({
  type: SET_DATA_LOADING,
  payload: error,
});
