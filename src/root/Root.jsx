import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoot from "../utils/PrivateRoot";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Collector from "../pages/Collector";
import VideoPage from "../pages/VideoPage";
import SearchPage from "../pages/SearchPage";

const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoot />}>
          <Route
            path="/"
            element={
              <Collector>
                <HomePage />
              </Collector>
            }
          ></Route>
          <Route
            path="/search/:searchId"
            element={
              <Collector>
                <SearchPage/>
              </Collector>
            }
          ></Route>
           <Route
            path="/watch/:videoId"
            element={
              <Collector>
              <VideoPage/>
              </Collector>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};

export default Root;
