import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
  Suspense,
} from "react";
import "./UserPanelContent.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import Logout from "./../Logout/Logout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const UserPanelContent = (props) => {
  const contextValue = useContext(context);
  const { isDarkMode, currentUser } = contextValue;
  const { closeModal } = props;

  const logOut=()=>{
    localStorage.removeItem("user");
    window.location="/signIn";
  }
  return (
    <div className={`user_panel_content_container`}>
        <div
          className={`user_panel_content ${
            isDarkMode ? "user_panel_content_dark" : ""
          }`}
        >
          {/* <div className="close_btn" onClick={closeModal}></div> */}
          <div className={`panel_item ${isDarkMode ? "panel_item_dark" : ""}`}>
            <Link to='/member/setting'>
              <div className="text">帳號設定</div>
            </Link>
          </div>
            <div className={`panel_item ${isDarkMode ? "panel_item_dark" : ""}`}>
              <Link to="/member/ticketOrder">            
                <div className="text">我的票券</div>
              </Link>
            </div>
          
          <div className={`panel_item ${isDarkMode ? "panel_item_dark" : ""}`}>
            <Link to="/member/productOrder">
            <div className="text">我的訂單</div>
            </Link>
          </div>
          <div
              className={`panel_item panel_item_padding ${
                isDarkMode ? "panel_item_dark" : ""
              }`}
            >
              <div className="item_logout"  onClick={logOut}>登出</div>
          </div>
          {/* 之後要拿來判斷登入登出的狀態 */}
          {/* {currentUser ? (
            <div
              className={`panel_item item_logout ${
                isDarkMode ? "panel_item_dark" : ""
              }`}
            >
              
              
              <Logout closeModal={closeModal} />
            </div>
          ) : null} */}
        </div>
    </div>
  );
};
export default UserPanelContent;
