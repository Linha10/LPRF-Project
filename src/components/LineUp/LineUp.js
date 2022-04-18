import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./LineUp.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from "bootstrap";  //necessery 4 modal
import $ from 'jquery';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faRedditSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import './card.scss';
import TableDayOne from './LineUppp'
import TableDayTwo from "./LinUpDay2";
import { props } from "ramda";


const LineUp = () => {
    const contextValue = useContext(context);
    const { } = contextValue;
 
    return (
        <div className={`line_up_container`}>
            <Provider value={contextValue}>
                <div>
                    <div  className='dayOne'>
                        <TableDayOne/>
                        {/* <MyMask/> */}
                    </div>

                    <div  className='dayTwo displayNone'>
                        <TableDayTwo/>
                    </div>

                </div>
            </Provider>
        </div>
    );
};






//  class showCase extends React.Component {
//      render ( ) {
//          return <th className="col-3">
//              <a href="" id='' className='hrefColor'>Band       
//              </a></th>

//      }
//  }


class FavB extends React.Component {
    state = {
        bandId: [
            { id: 1, pair: 1 },
            { id: 2, pair: 2 },
            { id: 3, pair: 3 },
            { id: 4, pair: 4 },
            { id: 5, pair: 5 },
            { id: 6, pair: 6 },]
    }


    render() {
        return <span className="col1 pr-0">
            {this.state.bandId.map((item) =>
                <FontAwesomeIcon key={item.id} icon={farHeart} className='heart' onClick={this.addMyFav} />)}

            {this.state.bandId.map((item) =>
                <FontAwesomeIcon key={item.pair} icon={faHeart} className='loved' onClick={this.cancelMyfav} />)}
            {/* <FontAwesomeIcon icon={farHeart} className='heart' onClick={this.addMyFav} />
            <FontAwesomeIcon icon={faHeart} className='loved' onClick={this.cancelMyfav} /> */}
        </span>
    }

    addMyFav = () => {
        $('#heart').on('click', function () {
            $(this).addClass('addLoved');
            $('span').closest('.loved').css('visibility', 'visible');
        })
    }
    cancelMyfav = () => {
        $('#loved').on('click', function () {

            $(this).css('visibility', 'hidden');
            $('.heart').removeClass('addLoved');
        })
    }
}


export default LineUp;
