import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./signIn.scss";
import * as R from "ramda";
import context, { Provider } from "../context";
import google from "../../image/google.svg";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; //跳轉頁面
import authService from "../../service/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignIn = () => {
  const contextValue = useContext(context);
  const { currentUser } = contextValue;
  const navigate = useNavigate();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const [passwordLogin, setPasswordLogin] = useState("password");
  const [eye, setEye] = useState(true);
  // const [currentUserw, setCurrentUserw] = useState("");

  // useEffect(() => {
  //     setCurrentUserw(authService.getCurrentUserw())
  // }, []);//需要的引入

  const isSecret = () => {
    if (passwordLogin == "password") {
      setEye(false);
      setPasswordLogin("text");
    } else {
      setEye(true);
      setPasswordLogin("password");
    }
  }

  const goGoogle = async () => {
    await window.open("http://localhost:3400/auth/google", "_self");
    Axios.get("/auth/success").then(function (res) {
      console.log(res);
    });
  };

  const goSignIn = (e) => {
    e.preventDefault();
    if (account != "" && password != "") {
      Axios.post("http://localhost:3400/signIn", {
        account: account,
        password: password,
      })
        .then(function (res) {
          console.log(res);

          // alert(res.data.message);
          alert("登入成功");
          if (res.data.token) {
            // localStorage.setItem("user", JSON.stringify(res.data.token));
            localStorage.setItem("user", res.data.token);
          }
          // console.log(res.data.message);//顯示登入成功
          // navigate("/home");
          window.location = "http://localhost:3000/";
        })
        .catch(function (err) {
          // alert("登入失敗");
          alert(err.response.data.message);
          // alert(err.response.data.message);
          console.log(err.response);
        });
    } else if (account == "") {
      alert("請輸入帳號");
    } else {
      alert("請輸入密碼");
    }
  };

  return (
    <div className={`User_container`}>
      {currentUser ? null : (
        <Provider value={contextValue}>
          <div id={`now_location`}>
            <span>首頁</span>
            <span>/</span>
            <span>會員</span>
            <span>/</span>
            <span>登入</span>
          </div>
          <div id={`sign_info`}>
            <div>
              <h2>會員登入</h2>
            </div>

            <div>
              <div>
                <label htmlFor="member_account" className={'signin_label'}>帳號</label>
                <input
                  type="text"
                  name="member_account"
                  id="member_account"
                  required
                  placeholder="請輸入電子郵件"
                  onChange={(e) => {
                    setAccount(e.target.value);
                  }}
                />

                <label htmlFor="member_password" className={'signin_label'}>密碼</label>
                <div className={"password_box"}>
                  <input
                    // type="password"
                    type={passwordLogin}
                    name="member_password"
                    id="member_password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <div className="faEye_box">
                    <FontAwesomeIcon icon={eye ? faEye : faEyeSlash} onClick={isSecret} />
                  </div>
                </div>


                <input
                  type="submit"
                  name="submit_info"
                  id="submit_info"
                  value="登入"
                  onClick={goSignIn}
                />
              </div>
            </div>
            <div id={`join_member`}>
              <p>
                <a href="/register">加入會員</a>
              </p>
              <p>|</p>
              <p>
                <a href="/register/reset1">忘記密碼</a>
              </p>
            </div>

            <div id="another_login" onClick={goGoogle} >
              {/* <div><img src={fb} /></div> */}
              <div className={"my_google"}><img src={google} /></div>
              <div className={"my_sign"}>+ Google  登入</div>
              {/* <div><img src={line} /></div> */}
            </div>
          </div>
        </Provider>
      )}
      {/* } */}
    </div>
  );
};
export default SignIn;
