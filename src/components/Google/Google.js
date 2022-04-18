import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

import "./Google.scss";


const Google = () => {
    const navigate = useNavigate();
    const { token } = useParams();

    useEffect(() => {
        setLocal();
    }, [])

    const setLocal = () => {
        setTimeout((
            () => {
                localStorage.setItem("user", token);
                window.location = "/";
            }
        ), 1000)

    }


    return (
        <div className="google">
            <h2>登入成功，即將導向回首頁......</h2>
        </div>



    );

}

export default Google;