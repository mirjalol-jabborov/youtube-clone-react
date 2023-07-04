import axios from 'axios';

const YT_API = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC64RyHiNsSKM-fog3fxKCItc39GgeN0MU",
  },
}); 

export default YT_API;