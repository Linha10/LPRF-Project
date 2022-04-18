import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import * as R from "ramda";
import context, { Provider } from "../context";
import "./Reset3.scss";
import { Navigate, useNavigate } from "react-router-dom";
import Axios from 'axios';


//記得重置完畢要remove token
const Reset3 = () => {
    const contextValue = useContext(context);
    const { } = contextValue;
    const navigate = useNavigate();
    const reset = localStorage.getItem("reset");

    const [passwordReset, setPasswordReset] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const sendNewPassword = async () => {

        const token = JSON.parse(localStorage.reset).token;
        if (passwordReset !== "" && passwordCheck !== "") {
            await Axios.post("http://localhost:3400/register/reset3", {
                passwordReset: passwordReset,
                passwordCheck: passwordCheck,
                token: token,
            }).then((res) => {
                alert("密碼修改成功，請重新登入");
                localStorage.removeItem("reset");
                navigate("/signIn");
            }).catch((err) => {
                console.log(err);
                alert(err.response.data.errors[0].msg);
            })


        } else if (passwordReset == "") {
            alert("請輸入密碼");
        } else {
            alert("請輸入確認密碼");
        }

    }

    return (
        <div className="reset3_container">
            {!reset && ""}
            {reset &&
                <Provider value={contextValue}>
                    <div className="now_location">
                        <span>首頁</span>
                        <span>/</span>
                        <span>會員</span>
                        <span>/</span>
                        <span>重置密碼</span>
                    </div>
                    <div className="reset_all">

                        <div className={"reset_password"}>
                            <h2>重置密碼</h2>
                            <div className="reset_step">
                                <div className="reset_circle">1</div>
                                <div className="reset_line"></div>
                                <div className="reset_circle">2</div>
                                <div className="reset_line"></div>
                                <div className="reset_circle">3</div>
                            </div>

                            <div className="reset_insert">
                                <label htmlFor="password" ><div>請輸入新密碼</div></label>
                                <input type="password" id="password" placeholder="長度至少6位，至少包含一個英文字母"
                                    onChange={(e) => { setPasswordReset(e.target.value) }} />
                                <label htmlFor="password_confirm"><div>確認密碼</div></label>
                                <input type="password" id="password_confirm"
                                    onChange={(e) => { setPasswordCheck(e.target.value) }} />

                                <button onClick={sendNewPassword}>確認</button>
                            </div>

                        </div>
                    </div>
                </Provider>
            }
        </div>

    );
};
export default Reset3;

