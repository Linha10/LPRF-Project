import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Rental.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";
import MyMain from './MyMain'


const Rental = () => {
    const contextValue = useContext(context);
    const { } = contextValue;

    return (
        <div className={`Rental_container`}>
            <Provider value={contextValue}>
                <div className="____">
                    <MyMain/>
                </div>
            </Provider>
        </div>
    );
};
export default Rental;