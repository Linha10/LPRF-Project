import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./TicketQrcode.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";

const TicketQrcode = (props) => {

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
            <div className={`modal_container ${modalShow ? "component_show" : "component_hide"}`}>
                <div className={`modal_inner ${modalShow ? "modal_show" : "modal_hide"}`} 
                    style={{width:modalWidth, height:modalHeight, background:modalInnerBackground}}
                >
                    {props.children}
                </div>
                <div
                    className={`background`} 
                    style={{opacity:backgroundOpacity}}
                    // onClick={modalCloseFunction}
                ></div>
            </div>
    );
};
export default TicketQrcode;
