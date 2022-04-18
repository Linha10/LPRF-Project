import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./Festival.scss";

const Festival = (props) => {
  // const {isDarkMode,setIsDarkMode} = props;
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div className="navbar_container">
      <div className={`navbar_inner ${isDarkMode ? "navbar_inner_dark" : ""}`}>
        <div className="main_logo_area">
          <div
            className={`main_logo ${isDarkMode ? "main_logo_dark" : ""}`}
          ></div>
        </div>
        <div className={`menu_item_area ${isDarkMode ? "menu_item_dark" : ""}`}>
          <div className="nav_item">About</div>
          <div className="nav_item">Line up</div>
          <div className="nav_item">Ticket</div>
          <div className="nav_item">Map</div>
          <div className="nav_item">Shop</div>
        </div>
        <div className="func_area">
          <div
            className="switch_toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div
              className={`switch_toggle_inner ${
                isDarkMode ? "switch_toggle_inner_dark" : ""
              }`}
            >
              <div className={`round ${isDarkMode ? "round_dark" : ""}`}></div>
            </div>
          </div>
          <div className="icon icon_cart"></div>
          <div className="icon icon_user"></div>
        </div>
      </div>
    </div>
  );
};
export default Festival;
