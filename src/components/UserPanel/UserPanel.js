import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./UserPanel.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";

const UserPanel = (props) => {

    const contextValue = useContext(context);
    const {  } = contextValue;
    const {
        modalShow,
        modalCloseFunction,
        modalWidth,
        modalHeight,
        backgroundOpacity,
        modalInnerBackground
    } = props;
    
    return (
            <div className={`user_panel_container ${modalShow ? "component_show" : "component_hide"}`}>
                <div className={`user_panel_inner ${modalShow ? "panel_show" : "panel_hide"}`} 
                    style={{width:modalWidth, height:modalHeight, background:modalInnerBackground}}
                >
                    {props.children}
                </div>
                <div
                    className={`background`} 
                    style={{opacity:backgroundOpacity}}
                    onClick={modalCloseFunction}
                ></div>
            </div>

    );
};
export default UserPanel;

//width: 177px;
// height: 180px;
