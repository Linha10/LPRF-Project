import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./Others.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";

const Others = () => {
    const contextValue = useContext(context);
    const { } = contextValue;

    return (
        <div className={`_container`}>
            <Provider value={contextValue}>
                <div className="____">

                </div>
            </Provider>
        </div>
    );
};
export default Others;
