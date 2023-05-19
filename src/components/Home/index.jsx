import React from "react";
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

  React.useEffect(() => {
    dispatch(isFixedSideMenu({ toggle: true, fixed: false }));
    console.log("home" + selector.sideMenu.isFixed);
  }, []);

  const handleClick = () => {
    dispatch(setVideos("Lil peep"));
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
