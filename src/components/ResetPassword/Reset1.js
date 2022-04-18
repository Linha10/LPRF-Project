import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import * as R from "ramda";
import context, { Provider } from "../context";
import "./Reset1.scss";
import  Axios  from 'axios';
import { useNavigate } from "react-router-dom";

const Reset1 = () => {
    const contextValue = useContext(context);
    const { } = contextValue;
    const navigate = useNavigate();

    const [account, setAccount] = useState('');
    // console.log(account);

    const sendEmail = () => {
        if (account != "") {
            Axios.post("http://localhost:3400/register/reset1", { account: account })
            .then((res)=>{
                // console.log(res);
                alert(res.data.message);
                if(res.data.token){
                    localStorage.setItem("reset",JSON.stringify(res.data));//把驗證碼存在token裡面
                }
                navigate("/register/reset2");
            }).catch((err)=>{
                alert(err.response.data.message);
            })
        }else{
            alert("請輸入帳號");
        }
    }


    return (
        <div className="reset1_container">
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
                            <div>Email</div>
                            <input id="insert_email" type="text" onChange={(e) => { setAccount(e.target.value) }} />
                            {/* <input type="button" value="Send Verification Code" /> */}
                            <button onClick={sendEmail}>寄送驗證碼</button>
                        </div>

                    </div>
                </div>
            </Provider>
        </div>

    );
};
export default Reset1;

