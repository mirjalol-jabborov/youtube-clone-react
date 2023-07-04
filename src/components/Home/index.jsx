import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataCard from "../DataCard";
// import { SET_VIDEOS } from "../../redux/types/resultDataTypes";
import { setVideos } from "../../redux/actions/resultDataAction";
import "./Home.scss";
import { isFixedSideMenu } from "../../redux/actions/sideMenuAction";

const Home = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const { resultData } = selector;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  React.useEffect(() => {
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
    dispatch(setVideos("", 3));

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    dispatch(
      isFixedSideMenu({
        toggle: screenWidth > 1000 ? true : false,
        fixed: screenWidth > 1000 ? false : true,
      })
    );
  }, [screenWidth])

  const handleClick = () => {
    dispatch(setVideos("", 10));
  };

  return (
    <div className="home">
      {resultData.error && <p>{resultData.error}</p>}
      {resultData.loading && <h1>Loading...</h1>}
      {resultData?.data?.videos?.length > 0 && (
        <div className="data-cards">
          {resultData.data.videos.map((data, index) => {
            return <DataCard key={index} data={data}></DataCard>;
          })}
        </div>
      )}
      {/* <DataCard></DataCard> */}
      <button onClick={handleClick}>get data</button>
    </div>
  );
};

export default Home;
