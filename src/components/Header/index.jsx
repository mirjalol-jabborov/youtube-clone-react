import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import createIcon from "../../assets/icons/createIcon.png";
import notificationIcon from "../../assets/icons/notificationIcon.png";
import { StyledIcon, StyledIconButton } from "../../styles/styled";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/YT-white.png";
import miniLogo from "../../assets/images/YT_mini.png";
import { toggleSideMenu } from "../../redux/actions/sideMenuAction";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const { userInfo } = selector;
  const Navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const handleChangeToggle = () => {
    dispatch(toggleSideMenu());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    let searchTxt = e.target.elements[0].value.trim().replaceAll(/\s+/g, "+");

    Navigate("/search/" + searchTxt);
  }


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header id="header" className="header">
      <nav className="header-nav">
        <div className="header-nav-wrapper">
          <div className="header__left">
            <IconButton
              aria-label="Youtube Logo"
              size="medium"
              onClick={handleChangeToggle}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
            <Link to={"/"}>
              <img
                src={`${screenWidth > 650 ? logo : miniLogo}`}
                className={`${screenWidth < 650 ? "header-miniLogo" : ""}`}
                alt=""
              />
            </Link>
          </div>

          <div className="header__center">
            <form
              className="header__search-form"
              onSubmit={(e) => handleSearchSubmit(e)}
            >
              <input
                className="header__search-form__input"
                type="text"
                placeholder="Search"
              />
              <button className="header__search-form__button" type="submit">
                <SearchRoundedIcon></SearchRoundedIcon>
              </button>
            </form>
          </div>

          <div className="header__right">
            <IconButton aria-label="upload new video" size="large">
              <StyledIconButton width="23px" height="23px">
                <StyledIcon
                  className="header__icon__content"
                  src={createIcon}
                  alt="Create"
                  height="16px"
                  width="22px"
                ></StyledIcon>
              </StyledIconButton>
            </IconButton>
            <IconButton aria-label="Notification Button" size="large">
              <StyledIconButton width="23px" height="23px">
                <StyledIcon
                  className="header__icon__content"
                  src={notificationIcon}
                  alt="Create"
                  width="19px"
                  height="23px"
                ></StyledIcon>
              </StyledIconButton>
            </IconButton>
            <IconButton aria-label="user settings button" size="medium">
              {userInfo.photoURL && (
                <img
                  className="header__user-img"
                  src={userInfo.photoURL}
                  alt=""
                />
              )}
            </IconButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
