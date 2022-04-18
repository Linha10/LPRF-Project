import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.scss";
import { Provider } from "../context";
import * as R from "ramda"; //ts
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet';
import React, { Component } from "react";
import './traffic.scss';
import $ from 'jquery';
import trafficImg from './../../image/traffic_morning.png';
import campFire from './../../image/campFire_forReplace.png';




var position = [24.9330207,121.5410585]



class MyMap extends Component {
  state = {

  }
trfficHandleClick(){
  $('.outside').hide();
  $('.myEventMap').show();
}

  render() {
    return (

      <div className='container d-flex flex-wrap outsideCon' >
        <div className='title'>
          <img className='traffic' src={trafficImg} alt="" />
          <img className='toEvent' onClick={this.trfficHandleClick} src={campFire} alt="" />
        </div>
        <MapContainer center={position} zoom={15} className='myHeight container' id='oMap'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [20, 31], iconAnchor: [12, 41] })} >
            <Popup className='popUp' src='leaflet/dist/images/marker-icon.png'>
              <h5>活動地點</h5>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

    );
  }

}

export default MyMap;