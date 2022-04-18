import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./Login.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import axios from "axios";

const Login = (props) => {
  const contextValue = useContext(context);
  const [userAccount, setUserAccount] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { checkIsLogined } = contextValue;
  const { closeModal } = props;

  const handleChangeAccount = (e) => {
    setUserAccount(e.target.value);
  };
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLogin = async () => {
    let result;
    await axios({
      method: "post",
      url: `http://localhost:3400/user_login`,
      data: { account: userAccount, password: userPassword },
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("login_response", response);
        result = response.data;
        console.log('login_response.sessionId', result.sessionId);
        localStorage.setItem("festivalSessionId", result.sessionId);
        checkIsLogined();
        closeModal();
      })
      .catch((error) => {
        console.log("error", error);
        result = error;
      });
    return result;
  };
  return (
    <div className={`login_container`}>
        <div className="login">
          <div className="close_btn" onClick={closeModal}></div>
          <div className="text">Login</div>
          <div className="login_wrapper">
            <div className="input_area" id="inputArea">
                <div className="input_name">Account</div>
              <input
                type="text"
                className="login_input"
                spellCheck="false"
                autoComplete="off"
                onChange={(e) => handleChangeAccount(e)}
              />
            </div>
            <div className="input_area" id="inputArea">
            <div className="input_name">Password</div>
              <input
                type="password"
                className="login_input"
                spellCheck="false"
                autoComplete="off"
                onChange={(e) => handleChangePassword(e)}
              />
            </div>
          </div>
          <div className="btn" onClick={handleLogin}>
            登入
          </div>
        </div>
    </div>
  );
};
export default Login;
