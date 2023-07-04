import React, { useEffect, useState } from "react";
import "./Search.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../../redux/actions/resultDataAction";
import DataCard from "../DataCard";
import { isFixedSideMenu } from "../../redux/actions/sideMenuAction";

const Search = () => {
  const searchTxt = useParams().searchId.replaceAll("+", " ");
  const selector = useSelector((state) => state);
  const resultData = selector.resultData?.data;
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(setVideos(searchTxt, 10));

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    dispatch(
      isFixedSideMenu({
        toggle: screenWidth > 1000 ? true : false,
        fixed: screenWidth > 1000 ? false : true,
      })
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [, searchTxt]);

  useEffect(() => {
    dispatch(
      isFixedSideMenu({
        toggle: screenWidth > 1000 ? true : false,
        fixed: screenWidth > 1000 ? false : true,
      })
    );
  }, [screenWidth]);

  return (
    <main className="search">
      <div className="data-cards">
        {resultData.videos.length > 0 &&
          resultData.videos.map((el, i) => (
            <DataCard key={i} data={el}></DataCard>
          ))}
      </div>
    </main>
  );
};

export default Search;
