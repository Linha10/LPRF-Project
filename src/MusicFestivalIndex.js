import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./MusicFestivalIndex.scss";
import { Provider } from "./components/context.js";
import Navigator from "./components/Navigator/Navigator";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import TicketOrder from "./components/TicketOrder/TicketOrder";
import Shop from "./components/Shop/Shop";
import LineUp from "./components/LineUp/LineUp";
import Map from "./components/Map/Map";
import Rental from './components/Rental/Rental';
// import MessageBoard from './components/MessageBoard/MessageBoard'
import Footer from "./components/Footer/Footer";
import MemberOrder from "./components/MemberOrder/MemberOrder";
import SignIn from "./components/signIn/signIn";
import Register from "./components/Register/Register";
import Success from "./components/Register/Success";
import Reset1 from "./components/ResetPassword/Reset1";
import Reset2 from "./components/ResetPassword/Reset2";
import Reset3 from "./components/ResetPassword/Reset3";
import Jump from "./components/Jump/Jump";
import MemberSchedule from "./components/MemberSchedule/MemberSchedule";
import MemberSetting from "./components/MemberSetting/MemberSetting";
import MyTicketList from "./components/MyTicketList/MyTicketList";
import TicketQrcode from "./components/TicketQrcode/TicketQrcode";
import TicketQrcodeContent from "./components/TicketQrcodeContent/TicketQrcodeContent";
import TicketPicker from "./components/TicketPicker/TicketPicker";
import Others from "./components/Others/Others";
import UserPanel from "./components/UserPanel/UserPanel";
import UserPanelContent from "./components/UserPanelContent/UserPanelContent";
import ItemPage from "./components/ItemPage/ItemPage";
import ShopPayment from "./components/ShopPayment/ShopPayment";
import CheckOut from "./components/CheckOut/CheckOut";
import axios from "axios";
import Google from "./components/Google/Google";


const MusicFestivalIndex = () => {
  const [currentUser, setCurrentUser] = useState();
  const [userToken, setUserToken] = useState("");
  const [pathName, setPathName] = useState("home"); //依據不同pathName頁面，去判斷導覽列current在哪裡
  const [isDarkMode, setIsDarkMode] = useState(false); //預設值是白天
  const [userPanelShow, setUserPanelShow] = useState(false);

  
  const isLogin = async () => {
    var userToken = localStorage.getItem("user")
      ? localStorage.getItem("user")
      : "";
    if (userToken) {
      await Axios.get("http://localhost:3400/check/signin", {
        headers: {
          Authorization: userToken,
        },
      })
        .then(function (res) {
          console.log(res);
          if (res.data.statusCode === 200) {
            setCurrentUser(res.data.currentUser);
            setUserToken(userToken);
          } else {
            setCurrentUser();
            setUserToken("");
            console.log("token失效 請重新登入");
          }

          // console.log(currentUser);
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      setCurrentUser();
      console.log("token失效 請重新登入");
      setUserToken("");
    }
  };




  useEffect(() => {
    isLogin();
  }, []);

  const handleRenderUserPanel = () => {
    return (
      <UserPanel
        modalShow={userPanelShow}
        modalCloseFunction={handleCloseUserPanel}
        modalWidth={177}
        modalHeight={180}
        backgroundOpacity={0.6}
        modalInnerBackground={`#fff`}
      >
        <UserPanelContent closeModal={handleCloseUserPanel} />
      </UserPanel>
    );
  };


  const handleCloseUserPanel = (e) => {
    if (e && e.target.className === "background") {
      e.stopPropagation();
    }
    setUserPanelShow(false);
  };


  const contextValue = {
    pathName,
    setPathName,
    isDarkMode,
    setIsDarkMode,
    currentUser,
    setCurrentUser,
    userToken,
    setUserToken,
    userPanelShow, setUserPanelShow,
    }; //把會用到的值 裝在contextValue，傳給下面的組件使用
  console.log('currentUser', currentUser)

  
  // const changeFooterStyle=()=>{
  //   if(pathName==="home"||pathName==="about"){
  //     setFooterStyle('footerAnother') 
  //   }
  // }

  return (
    <Router>
      <div
        className={`music_festival_container ${
          isDarkMode ? "music_festival_container_dark" : ""
        }`}
      >
        <Provider value={contextValue}>
          <Fragment>
            <Navigator />
            <Routes>
              <Route className="aaa" exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/lineUp" element={<LineUp />} />
              <Route exact path="/map" element={<Map />} />
              <Route exact path="/shop" element={<Shop />} />
              {/* <Route exact path="/shop/itemPage" element={<ItemPage/>}/> */}
              <Route exact path="/shop/LogoT-shirt" element={<ItemPage/>}/>
              <Route exact path="/rental" element={<Rental />} />
              {/* <Route exact path="/messageBoard" element={<MessageBoard />} /> */}
              <Route exact path="/ticketOrder" element={<TicketOrder />} />
              <Route exact path="/shopPayment" element={<ShopPayment />} />
              <Route exact path="/shop/ItemPage/CheckOut" element={<CheckOut/>} />
              <Route
                exact
                path="/member/ticketOrder"
                element={<MyTicketList />}
              />
              <Route
                exact
                path="/member/productOrder"
                element={<MemberOrder />}
              />
              <Route exact path="/member/setting" element={<MemberSetting />} />
              <Route exact path="/signIn" element={<SignIn />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/register/reset1" element={<Reset1 />} />
              <Route exact path="/register/reset2" element={<Reset2 />} />
              <Route exact path="/register/reset3" element={<Reset3 />} />
              <Route path="/register/active/:mMail" element={<Jump />} />
              <Route exact path="/register/success" element={<Success />} />
              <Route path="/google/token/:token" element={<Google />} />
              <Route path="/shop/:pName" element={<ItemPage/>}/>
              
              {/* <Route exact path="/user" element={<User />} /> */}
              {/* <Route path="/signIn/:token" element={<Home />} /> */}
            </Routes>
            <Footer
            />
            {currentUser ? handleRenderUserPanel() : null}
          </Fragment>
        </Provider>
      </div>
    </Router>
  );
};
export default MusicFestivalIndex;
