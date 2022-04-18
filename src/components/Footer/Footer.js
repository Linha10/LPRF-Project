import React, {
    useCallback,
    useState,
    useEffect,
    Fragment,
    useContext,
  } from "react";
  import "./Footer.scss";
  import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";
  
  const Footer = () => {
    const contextValue = useContext(context);
    const [footerStyle,setFooterStyle]= useState("");
    const { isDarkMode,pathName} = contextValue;

  useEffect(() => {
    if(pathName==="home"||pathName==="about"){
      setFooterStyle('footerAnother')
    }else{
      setFooterStyle('')
    }
  }, [pathName]);
  
  
    return (
    <div className={`footer_container ${footerStyle==='footerAnother'? "footer_container_two":""}`}>
      <div className={`footer_area ${isDarkMode ? "footer_area_dark":""}`}>
        <div className={`copy_right_area `}>
            <div className="copy_right_text_a">Copyright&nbsp;&nbsp;2022&nbsp;&nbsp;Love&Peace&nbsp;&nbsp;Rock&nbsp;&nbsp;Festival.&nbsp;&nbsp;All&nbsp;&nbsp;rights&nbsp;&nbsp;reserved.
            </div>
            <div className="copy_right_text_b">The website is developed & designed by Group 8, powered by react.js
          </div>
        </div>
        <div className="icon_area">
            <div className="icon ig_icon"></div>
            <div className="icon fb_icon"></div>
        </div>
      </div>
    </div>
    );
  };
  export default Footer;