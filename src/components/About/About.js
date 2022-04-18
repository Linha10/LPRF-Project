import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./About.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";

const About = () => {
    const contextValue = useContext(context);
    const {isDarkMode} = contextValue;

    return (
        <div className={`about_container`}>
            <Provider value={contextValue}>
                    <div className={`home_background ${isDarkMode ? "home_background_dark" : ""}`}>
                    <div className={`about_title  ${isDarkMode ? "about_title_dark":""}`}></div>
                    <div className={`about ${isDarkMode ? "about_dark" : ""}`} />
                </div>
            </Provider>
        </div>
    );
};
export default About;
