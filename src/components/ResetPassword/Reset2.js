import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import * as R from "ramda";
import context, { Provider } from "../context";
import "./Reset2.scss";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

//把使用者輸入的密碼轉成字串，送到後端驗證
const Reset2 = () => {
    const contextValue = useContext(context);
    const { } = contextValue;
    const navigate = useNavigate();
    const [code01, setCode01] = useState('');
    const [code02, setCode02] = useState('');
    const [code03, setCode03] = useState('');
    const [code04, setCode04] = useState('');
    const [code05, setCode05] = useState('');
    const [code06, setCode06] = useState('');

    const codeCheck = () => {
        var code = [code01, code02, code03, code04, code05, code06];
        code = code.join("");
        const token = JSON.parse(localStorage.reset).token;
        Axios.post("http://localhost:3400/register/reset2", { code: code, token: token })
            .then((res) => {
                alert(res.data.message);
                navigate("/register/reset3");
                // console.log();
            }).catch((err) => {
                alert("驗證失敗");
                // console.log(err.response.data);
            })


    }

    const nextOne = (e) => {
        const regex = /^[0-9]/;
        var isNum = regex.test(e.target.value);
        var index = parseInt(e.target.id.slice(-1));
        index += 1;
        if (isNum && e.target.value.length == 1) {
            document.getElementById(`inputItem${index}`).focus();
        }
    }



    return (
        <div className="reset2_container">
            <Provider value={contextValue}>
                <div className="now_location">
                    <span>首頁</span>
                    <span>/</span>
                    <span>會員</span>
                    <span>/</span>
                    <span>重置密碼</span>
                </div>
                <div className="reset_all">

                    <div className="reset_password">
                        <h2>重置密碼</h2>
                        <div className="reset_step">
                            <div className="reset_circle">1</div>
                            <div className="reset_line"></div>
                            <div className="reset_circle">2</div>
                            <div className="reset_line"></div>
                            <div className="reset_circle">3</div>
                        </div>
                        <div className="reset_insert">
                            <div className="resert_text">請輸入驗證碼</div>
                            <div className="reset_code">
                                <input type="text" id={"inputItem0"} maxLength="1" autoFocus onChange={(e) => { setCode01(e.target.value) }} onKeyUp={nextOne} />
                                <input type="text" id={"inputItem1"} maxLength="1" onChange={(e) => { setCode02(e.target.value) }} onKeyUp={nextOne} />
                                <input type="text" id={"inputItem2"} maxLength="1" onChange={(e) => { setCode03(e.target.value) }} onKeyUp={nextOne} />
                                <input type="text" id={"inputItem3"} maxLength="1" onChange={(e) => { setCode04(e.target.value) }} onKeyUp={nextOne} />
                                <input type="text" id={"inputItem4"} maxLength="1" onChange={(e) => { setCode05(e.target.value) }} onKeyUp={nextOne} />
                                <input type="text" id={"inputItem5"} maxLength="1" onChange={(e) => { setCode06(e.target.value) }} />
                            </div>
                            <div className="okButton" onClick={codeCheck}>確認</div>
                        </div>


                    </div>
                </div>
            </Provider>
        </div>

    );
};
export default Reset2;

