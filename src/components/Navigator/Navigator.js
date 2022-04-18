import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./Navigator.scss";
import UserPanel from "./../UserPanel/UserPanel";
import UserPanelContent from "./../UserPanelContent/UserPanelContent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import context, { Provider } from "./../context";
import icon00 from '../../image/membership_black.svg';
import icon01 from '../../image/icon01.png';
import icon02 from '../../image/icon02.png';
import icon03 from '../../image/icon03.png';
const Navigator = () => {
  const contextValue = useContext(context);
  const { pathName, setPathName, isDarkMode, setIsDarkMode, currentUser, setUserPanelShow } = contextValue;
  const [avatarImage, setAvatarImage] = useState();
  // const count =1;

  //   window.addEventListener('storage', () => {
  //     count +=1;
  //   })

  const whichP = () => {
    let mPhoto = localStorage.getItem("mPhoto");
    if (mPhoto == "1") {
      setAvatarImage(icon01);
    } else if (mPhoto == "2") {
      setAvatarImage(icon02);
    } else if (mPhoto == "3") {
      setAvatarImage(icon03);
    } else {
      setAvatarImage(icon00);
    }

    
  }
  useEffect(() => {
    whichP();
  }, [localStorage.getItem("mPhoto")])

  return (
    <div className="navbar_container">
      <div className={`navbar_inner ${isDarkMode ? "navbar_inner_dark" : ""}`}>
        <div className="main_logo_area">
          <Link
            className={`main_logo ${isDarkMode ? "main_logo_dark" : ""}`}
            to="/"
            onClick={() => setPathName("home")}
          ></Link>
        </div>
        <div className="container_right">
          <div
            className={`menu_item_area ${isDarkMode ? "menu_item_area_dark" : ""
              }`}
          >
            <Link
              className={`nav_item ${pathName === "about" ? "current" : ""}`}
              to="/about"
              onClick={() => setPathName("about")}
            >
              About
            </Link>
            <Link
              className={`nav_item ${pathName === "lineup" ? "current" : ""}`}
              to="/lineUp"
              onClick={() => setPathName("lineup")}
            >
              Line up
            </Link>
            <Link
              className={`nav_item ${pathName === "ticketOrder" ? "current" : ""
                }`}
              to="/ticketOrder"
              onClick={() => setPathName("ticketOrder")}
            >
              Ticket
            </Link>
            <Link
              className={`nav_item ${pathName === "map" ? "current" : ""}`}
              to="/map"
              onClick={() => setPathName("map")}
            >
              Map
            </Link>
            <Link
              className={`nav_item ${pathName === "shop" ? "current" : ""}`}
              to="/shop"
              onClick={() => setPathName("shop")}
            >
              Shop
            </Link>
            <div className={`nav_item nav_others`}>
              Others
              <div className="navbar_list">
                <Link
                  className={`nav_list_text ${pathName === "rental" ? "current" : ""
                    }`}
                  to="/rental"
                  onClick={() => setPathName("rental")}
                >
                  Market rental
                </Link>
                <Link
                  className={`nav_list_text ${pathName === "messageBoard" ? "current" : ""
                    }`}
                  to="/messageBoard"
                  onClick={() => setPathName("messageBoard")}
                >
                  Message board
                </Link>
              </div>
            </div>
          </div>
          <div className="func_area">
            <div
              className="switch_toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div
                className={`toggle_btn ${isDarkMode ? "toggle_btn_dark" : ""}`}
              >
                <div
                  className={`round ${isDarkMode ? "round_dark" : ""}`}
                ></div>
              </div>
            </div>
            <div
              className={`icon icon_cart ${isDarkMode ? "icon_cart_dark" : ""}`}
            ></div>
            {currentUser ? (
              <div
                onClick={() => setUserPanelShow(true)}
                className={`icon icon_user ${isDarkMode ? "icon_user_dark" : ""
                  }`}

                style={{ backgroundImage: `url(${avatarImage})` }}
              ></div>
            ) : (
              <div
                className={`icon icon_user ${isDarkMode ? "icon_user_dark" : ""
                  }`}
              >
                <Link
                  className={`nav_item`}
                  to="/signIn"
                  onClick={() => setPathName("signIn")}
                ></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigator;
