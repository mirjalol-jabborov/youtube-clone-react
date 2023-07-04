import React, { useCallback, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import "./Collector.scss";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { isFixedSideMenu } from "../redux/actions/sideMenuAction";

const Collector = ({ children }) => {
  const selector = useSelector((state) => state);
  const { toggle } = selector.sideMenu;
  const { isFixed } = selector.sideMenu;

  const sideMenuWidth = toggle ? "230px" : "70px";

  // console.log(selector);

  const dispatch = useDispatch();

  return (
    <div id="main-wrapper">
      <div id="header-wrapper">
        <Header />
      </div>
      <div
        id="side-menu"
        className={`${toggle && isFixed ? "side-fixed" : ""} `}
        style={{ width: sideMenuWidth }}
      >
        <SideMenu />
      </div>
      <div
        id="main-contents"
        style={{
          width: `calc(100% - ${isFixed ? "70px" : sideMenuWidth})`,
          marginLeft: isFixed ? "70px" : sideMenuWidth,
        }}
      >
        {children}
      </div>
      {isFixed && toggle && (
        <div
          className="is-fixed-active"
          onClick={() =>
            dispatch(isFixedSideMenu({ toggle: !toggle, fixed: isFixed }))
          }
        ></div>
      )}
    </div>
  );
};

export default Collector;
