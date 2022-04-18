import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./Logout.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import axios from "axios";

const Logout = (props) => {
    const contextValue = useContext(context);

    const { sessionId, checkIsLogined } = contextValue;
    const {closeModal} = props;

      const handleLogout = async (e) => {
        console.log('e', e)
        e.stopPropagation();//不用放
          let result;
          let qqq ="哈囉"//放一個變數放假字串
          await axios({
            method: "post",
            url: `http://localhost:3400/user_logout`,
            data: {sessionId:sessionId},
            //{物件:key}
          
            credentials: 'same-origin',
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then(function (response) {
              console.log("handleLogoutresponse", response);
              result = response;
              checkIsLogined();
              closeModal();
              localStorage.removeItem("festivalSessionId");
            })
            .catch((error) => {
              console.log('handleLogouterror', error)
              result = error
            });
            return result;
      };
    return (
        <div className={`logout_container`}>
                <div className="logout">
                    <div className="logout_btn" onClick={(e)=>handleLogout(e)}>登出</div>
                </div>
        </div>
    );
};
export default Logout;
