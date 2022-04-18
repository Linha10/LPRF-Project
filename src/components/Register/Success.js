import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import "./Success.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout((() => {
            alert("註冊成功，請至信箱進行驗證方可登入")
        }), 200)

    }, [])



    return (

        <div className="success">
            <div className={"success_box"}>
                <FontAwesomeIcon icon={faCircleCheck} className={"my_icon"} />
                <h2>註冊成功</h2>
            </div>

        </div>

    );

}

export default Success;