import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./Map.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MyMap from "./Mymap";
import MyMapEvent from './MyMapEvent';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet';
import $ from 'jquery';




const Map = () => {
  const contextValue = useContext(context);
  const { isDarkMode } = contextValue;



  return (
    <div className={`map_container`}>
      <Provider value={contextValue}>
        <div className={`map_background ${isDarkMode ? "map_background_dark" : ""}container`}>
          <div className="outside" id='oMap'>                            
            <MyMap />
          </div>

          <div className="myEventMap hide">                      
            <MyMapEvent />
          </div>
        </div>
      </Provider>
    </div>
  );
  // const [isHide , setIsHide] = useState(false);
  // const toggle = () => { setIsHide(hide => !hide) };
};


export default Map;
