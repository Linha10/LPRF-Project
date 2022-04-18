import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./Template.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";

const Template = () => {
    const contextValue = useContext(context);
    const { } = contextValue;

    return (
        <div className={`_container`}>
                <div className="____">

                </div>
        </div>
    );
};
export default Template;
