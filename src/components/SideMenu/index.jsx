import React from "react";

import "./SideMenu.scss";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../utils/navbar";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const [active, setActive] = React.useState(1);

  const selector = useSelector((state) => state.sideMenu);
  const { toggle } = selector;
  const {    } = selector;

  const handleChangeActive = (itemLink, itemId) => {
    if (itemLink === "/") {
      setActive(1);
    } else {
      setActive(itemId);
    }
  };
  return (
    <div className="side-menu">
      {
        toggle 
      }
      <div className="side-menu__items">
        {navbarLinks.main.length > 0 &&
          navbarLinks.main.map((item) => (
            <Link
              onClick={() => handleChangeActive(item.link, item.id)}
              to={item.link}
              className={`item-link ${item.id === active ? "active" : ""}`}
              key={item.id}
            >
              <div className="side-menu__items__item">
                <item.icon></item.icon>

                {toggle ? <span>{item.text}</span> : null}
              </div>
            </Link>
          ))}
      </div>

      {toggle && (
        <div className="side-menu__items">
          {navbarLinks.secondary.length > 0 &&
            navbarLinks.secondary.map((item) => (
              <Link
                onClick={() => handleChangeActive(item.link, item.id)}
                to={item.link}
                className={`item-link ${item.id === active ? "active" : ""}`}
                key={item.id}
              >
                <div className="side-menu__items__item">
                  <item.icon></item.icon>
                  <span>{item.text}</span>
                </div>
              </Link>
            ))}

          <div className="side-menu__items__item">
            <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
            <span>Show more</span>
          </div>
        </div>
      )}

      {toggle && (
        <div className="side-menu__items">
          <div className="side-menu__items__item">
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
            <span>Settings</span>
          </div>
          <div className="side-menu__items__item">
            <FlagOutlinedIcon></FlagOutlinedIcon>
            <span>Report history</span>
          </div>
          <div className="side-menu__items__item">
            <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
            <span>Help</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
