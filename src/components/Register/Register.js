import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import * as R from "ramda";
import context, { Provider } from "../context";
import Axios from 'axios';
import "./Register.scss"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHourglass2 } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";



const Register = () => {
    const contextValue = useContext(context);
    const { currentUser } = contextValue;
    const navigate = useNavigate()

    const [usernameReg, setUsernameReg] = useState('');
    const [accountReg, setAccountReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birth, setBirth] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState("password");
    const [eye, setEye] = useState(true);

    const [password02, setPassword02] = useState("password");
    const [eye02, setEye02] = useState(true);

    const isSecret = () => {
        if (password == "password") {
            setEye(false);
            setPassword("text");
        } else {
            setEye(true);
            setPassword("password");
        }
    }
    const isSecret02 = () => {
        if (password02 == "password") {
            setEye02(false);
            setPassword02("text");
        } else {
            setEye02(true);
            setPassword02("password");
        }
    }

    const goRegister = () => {

        if (accountReg !== "" && passwordReg !== "" && passwordCheck !== "" && phoneNumber !== "" && usernameReg !== "") {
            Axios.post("http://localhost:3400/register", {
                usernameReg: usernameReg,
                accountReg: accountReg,
                passwordReg: passwordReg,
                passwordCheck: passwordCheck,
                phoneNumber: phoneNumber,
                birth: birth,
                address: address
            }).then((response) => {
                // console.log(response.data.massage);
                // alert(response.data.massage);
                navigate("/register/success");
            }).catch((err) => {
                alert('註冊失敗:' + err.response.data.errors[0].msg);
                // console.log(err.response);
            })

        } else {
            alert("*為必填項目!!請填完後再按送出")
        }


    }

    return (
        <div id="register_container">
            {currentUser && ""}
            {!currentUser &&
                <Provider value={contextValue}>
                    <div id={`register_info`}>
                        <div id={`now_location`}>
                            <span>首頁</span>
                            <span>/</span>
                            <span>會員</span>
                            <span>/</span>
                            <span>註冊</span>
                        </div>
                        <div className="register_text">
                            <div className="register_title"><h2>註冊</h2></div>

                            <div className="register_content">
                                <div className="register_left">
                                    <label htmlFor="username" className="red_star">姓名</label>
                                    <label htmlFor="account_reg" className="red_star">帳號</label>
                                    <label htmlFor="password_reg" className="red_star">密碼</label>
                                    <label htmlFor="password_reg_check" className="red_star">確認密碼</label>
                                    <label htmlFor="phone_number" className="red_star">手機號碼</label>
                                    <label htmlFor="birth" className="blank">生日</label>
                                    <label htmlFor="address" className="blank">寄送地址</label>
                                </div>

                                <div className="register-right">
                                    <div><input type="text"
                                        id="username"
                                        name="username"
                                        required
                                        placeholder="請輸入您的姓名"
                                        onChange={(e) => { setUsernameReg(e.target.value) }} />
                                    </div>
                                    <div></div>
                                    <div>
                                        <input type="email"
                                            name="account_reg"
                                            id="account_reg"
                                            required
                                            placeholder="請輸入您的email"
                                            onChange={(e) => { setAccountReg(e.target.value) }} />
                                    </div>
                                    <div className={"password_reg_box"}>

                                        <input type={password}
                                            name="password_reg"
                                            id="password_reg"
                                            required
                                            placeholder="密碼長度最少6位，至少包含一個英文字母"
                                            onChange={(e) => { setPasswordReg(e.target.value) }} />

                                        <div className="faEye_box">
                                            <FontAwesomeIcon icon={eye ? faEye : faEyeSlash} onClick={isSecret} />
                                        </div>
                                    </div>
                                    <div className={"password_reg_box"}>
                                        <input type={password02}
                                            name="password_reg_check"
                                            id="password_reg_check"
                                            required
                                            placeholder="請再次輸入您的密碼"
                                            onChange={(e) => { setPasswordCheck(e.target.value) }} />

                                        <div className="faEye_box">
                                            <FontAwesomeIcon icon={eye02 ? faEye : faEyeSlash} onClick={isSecret02} />
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text"
                                            id="phone_number"
                                            name="phone_number"
                                            required
                                            placeholder="請輸入手機號碼 ex:0912345678"
                                            onChange={(e) => { setPhoneNumber(e.target.value) }} />
                                    </div>

                                    <div>  <input type="date"
                                        id="birth"
                                        name="birth"
                                        onChange={(e) => { setBirth(e.target.value) }} />
                                    </div>

                                    <div>
                                        <input type="address"
                                            id="address"
                                            name="address"
                                            onChange={(e) => { setAddress(e.target.value) }} />
                                    </div>

                                </div>
                            </div>

                            <div id={"my_register_button"} onClick={goRegister}>
                                註冊
                                {/* <button onClick={goRegister}></button> */}
                            </div>

                        </div>
                    </div>
                </Provider>
            }
        </div>

    );
};
export default Register;










// import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
// import * as R from "ramda";
// import context, { Provider } from "../context";
// import Axios from 'axios';
// import "./Register.scss"
// import { useNavigate } from "react-router-dom";



// const Register = () => {
//     const contextValue = useContext(context);
//     const { } = contextValue;
//     const navigate = useNavigate()

//     const [usernameReg, setUsernameReg] = useState('');
//     const [accountReg, setAccountReg] = useState('');
//     const [passwordReg, setPasswordReg] = useState('');
//     const [passwordCheck, setPasswordCheck] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [birth, setBirth] = useState('');
//     const [address, setAddress] = useState('');

//     const goRegister = () => {

//         if (accountReg !== "" && passwordReg !== "" && passwordCheck !== "" && phoneNumber !== "" && usernameReg !== "") {
//             Axios.post("http://localhost:3400/register", {
//                 usernameReg: usernameReg,
//                 accountReg: accountReg,
//                 passwordReg: passwordReg,
//                 passwordCheck: passwordCheck,
//                 phoneNumber: phoneNumber,
//                 birth: birth,
//                 address: address
//             }).then((response) => {
//                 alert("註冊成功，即將跳轉回登入頁面登入");
//                 console.log(response.data.massage);
//                 // console.log(response);
//                 navigate("/signIn");
//             }).catch((err) => {
//                 alert('註冊失敗:' + err.response.data.errors[0].msg);
//                 // console.log(err.response);
//             })

//         } else {
//             alert("*為必填項目!!請填完後再按送出")
//         }


//     }

//     return (
//         <div className="register_container">
//                 <div id={`register_info`}>
//                     <div id={`now_location`}>
//                         <span>首頁</span>
//                         <span>/</span>
//                         <span>會員</span>
//                         <span>/</span>
//                         <span>註冊</span>
//                     </div>
//                     <div className="register_text">
//                         <div className="register_title"><h1>註冊</h1></div>

//                         <div className="register_content">
//                             <div className="register_left">
//                                 <label htmlFor="username" className="red_star">姓名</label>
//                                 <label htmlFor="account_reg" className="red_star">帳號</label>
//                                 <label htmlFor="password_reg" className="red_star">密碼</label>
//                                 <label htmlFor="password_reg_check" className="red_star">確認密碼</label>
//                                 <label htmlFor="phone_number" className="red_star">手機號碼</label>
//                                 <label htmlFor="birth" className="blank">生日</label>
//                                 <label htmlFor="address" className="blank">寄送地址</label>
//                             </div>

//                             <div className="register-right">
//                                 <input type="text"
//                                     id="username"
//                                     name="username"
//                                     required
//                                     placeholder="請輸入您的姓名"
//                                     onChange={(e) => { setUsernameReg(e.target.value) }} />
//                                 <input type="email"
//                                     name="account_reg"
//                                     id="account_reg"
//                                     required
//                                     placeholder="請輸入您的email"
//                                     onChange={(e) => { setAccountReg(e.target.value) }} />

//                                 <input type="password"
//                                     name="password_reg"
//                                     id="password_reg"
//                                     required
//                                     placeholder="請輸入您的密碼(最短長度為6，至少包含一個英文字母)"
//                                     onChange={(e) => { setPasswordReg(e.target.value) }} />

//                                 <input type="password"
//                                     name="password_reg_check"
//                                     id="password_reg_check"
//                                     required
//                                     placeholder="請再次輸入您的密碼"
//                                     onChange={(e) => { setPasswordCheck(e.target.value) }} />

//                                 <input type="text"
//                                     id="phone_number"
//                                     name="phone_number"
//                                     required
//                                     placeholder="請輸入手機號碼 ex:0912345678"
//                                     onChange={(e) => { setPhoneNumber(e.target.value) }} />

//                                 <input type="date"
//                                     id="birth"
//                                     name="birth"
//                                     onChange={(e) => { setBirth(e.target.value) }} />

//                                 <input type="address"
//                                     id="address"
//                                     name="address"
//                                     onChange={(e) => { setAddress(e.target.value) }} />

//                             </div>
//                         </div>

//                         <div className="register_btn">
//                             <button onClick={goRegister}>註冊</button>
//                         </div>

//                     </div>
//                 </div>
//         </div>

//     );
// };
// export default Register;


