import {
  SET_DATA,
  SET_DATA_ERROR,
  SET_DATA_LOADING,
} from "../types/resultDataTypes";

const initialState = {
  data: {
    videos: [],
    video: {},
    channel: {},
    comments: [],
  },

  loading: false,
  error: null,
};

const resultDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    case SET_DATA_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default resultDataReducer;
