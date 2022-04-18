import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./Home.scss";
import { Provider } from "../context";
import 'bootstrap/dist/css/bootstrap.css';
import * as R from "ramda";
import context from "./../context";
import { Modal } from "bootstrap/dist/css/bootstrap.css";
import camp from './../../image/camp.svg';
import fire from './../../image/fire.svg';
import $ from 'jquery';
import MyModal from "./Mymodal";




const Home = () => {
    const contextValue = useContext(context);
    const { isDarkMode } = contextValue;



    return (
        <div className={`home_container ${isDarkMode ? "home_container_dark" : ""}`}>
            <Provider value={contextValue}>
                {/* select1 image switch*/}
                <div className={`home_background ${isDarkMode ? "home_background_dark" : ""}`}>

                    <div className={`grass grass_1 ${isDarkMode ? "grass_1_dark" : ""}`} />
                    <div className={`grass grass_2 ${isDarkMode ? "grass_2_dark" : ""}`} />
                    <div className={`grass grass_3 ${isDarkMode ? "grass_3_dark" : ""}`} />
                    <div className={`grass grass_4 ${isDarkMode ? "grass_4_dark" : ""}`} />
                    <div className={`grass grass_5 ${isDarkMode ? "grass_5_dark" : ""}`} />
                    <div className={`grass grass_6 ${isDarkMode ? "grass_6_dark" : ""}`} />
                    <div className={`logo ${isDarkMode ? "logo_dark" : ""}`} ></div>
                    <div className={`effect ${isDarkMode ? "effect_dark" : ""}`} ></div>
                    <div className={`effect2 ${isDarkMode ? "effect2_dark" : ""}`} ></div>
                    {/* <div className={`showTheme ${isDarkMode ? "showTheme_dark" : ""}`} ></div> */}
                    <div className={`showTH ${isDarkMode ? "showTH_dark" : ""}`} ></div>
                    <div className={`hand hand_1 ${isDarkMode ? "hand_1_dark" : ""}`} ></div>
                    <div className={`hand hand_2 ${isDarkMode ? "hand_2_dark" : ""}`}></div>
                </div>
                {/* select2 covid19 warning*/}
                <div className={`home_background2 ${isDarkMode ? "home_background_dark2" : ""}`}>
                    <div className="c19">
                        <div style={{ fontSize: "32px", color: "#555555", left: "4.2vh", position: "relative", margin: "5px" }}>Covid-19 warning!</div>
                        <MyModal/>
                    </div>

                </div>
                {/* select3 news*/}
                <div className={`home_background3 ${isDarkMode ? "home_background_dark3" : ""}`}>
                    <img className="fire" src={fire} alt="fire"></img>
                    <img className="camp" src={camp} alt="camp"></img>

                    <div className={`newsImage ${isDarkMode ? "newsImage_dark" : ""}`}></div>
                    <div className={`news ${isDarkMode ? "news_dark" : ""}`}></div>
                    <div className={`myHover ${isDarkMode ? "myHover_dark" : ""}`}></div>
                    <div className={`myHover2 ${isDarkMode ? "myHover2_dark" : ""}`}></div>
                    <div className={`myHover3 ${isDarkMode ? "myHover3_dark" : ""}`}></div>
                    <div className="readMore"></div>
                </div>
                {/* select4 sitemap by candy*/}
            </Provider>
        </div>

    );
};
export default Home;
