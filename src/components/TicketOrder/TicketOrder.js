import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./TicketOrder.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import Payment from "./../Payment/Payment";
import TicketPicker from "./../TicketPicker/TicketPicker";
import TicketOrderDetail from "./../TicketOrderDetail/TicketOrderDetail";
import CreditCardVerification from "../CreditCardVerification/CreditCardVerification";
import CampSitePicker from "./../CampSitePicker/CampSitePicker";
import ModalTool from "./../ModalTool/ModalTool";
import axios from "axios";
import moment from "moment";

const TicketOrder = () => {
  const [ticketOrderStep, setTicketOrderStep] = useState(0);
  const [wsState, setWsState] = useState();
  const [campSelectedList, setCampSelectedList] = useState([]);
  const [selectedTicketType, setSelectedTicketType] = useState("");
  const [orderStatus, setOrderStatus] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [currentOrderNo, setCurrentOrderNo] = useState("");
  const [orderTimeFromResponse, setOrderTimeFromResponse] = useState();
  const [transactionTime, setTransactionTime] = useState();
  const [paymentStatus, setPaymentStatus] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [campSitePickerShow, setCampSitePickerShow] = useState(false);
  const [pickedTicket, setPickedTicket] = useState([]);
  const [toDoSelectCamp, setToDoSelectCamp] = useState([]);
  const [verifyCode, setVerifyCode] = useState("");
  const [creditNumber, setCreditNumber] = useState("");
  const [campListFromDB, setCampListFromDB] = useState([]);
  const [wsData, setWsData] = useState();

  const contextValue = useContext(context);
  const { isDarkMode, currentUser } = contextValue;

  // const isWsAlive = async () => {
  //   let wsResult;
  //     await axios.get("http://localhost:3400/check/websocket", {
  //       headers: {
  //       },
  //     })
  //       .then(function (res) {
  //         console.log(res);
  //         if (res.data.statusCode === 200) {
  //           console.log('isWsAlive_res.data', res.data)
  //           wsResult = res.data.websocketInstance;
  //         } else {
  //           wsResult = new WebSocket("ws://localhost:3400");
  //         }
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //       setWsState(wsResult);
  //       return wsResult;
  // };

  useEffect(async() => {

    let ws = new WebSocket("ws://localhost:3400");
    // let ws = await isWsAlive();
    // console.log("___________ws", ws);
    setWsState(ws);
    ws.onopen = (event) => {
      console.log("open connection");
      // console.log("onopen_event", event);
    };

    ws.onclose = () => {
      console.log("close connection");
    };

    ws.onmessage = (event) => { //event = index.js ws.send???????????????
      console.log("event", event);
      console.log("event.data", JSON.parse(event.data));
      // setCampSelectedList(JSON.parse(event.data));
      // setCampListFromDB(JSON.parse(event.data));

      let campResult = JSON.parse(event.data).origin; //ws????????????????????????????????????JSON?????????????????????????????????????????????????????????
      console.log('campResult', campResult)
      const byGrade = R.groupBy(function (campResult) {
        const campArea = campResult.campArea;
        return campArea === "A"
          ? "A"
          : campArea === "B"
          ? "B"
          : campArea === "C"
          ? "C"
          : null;
      });
      let tempCampObject = byGrade(campResult);
      console.log("tempCampObject", tempCampObject);
      let tempCampList = Object.entries(tempCampObject);
      setCampListFromDB(tempCampList);
      setWsData(JSON.parse(event.data));
    };
  }, []);

  //????????????
  const handleResetTicketOrder = () => {
    setTicketOrderStep(0);
    setPickedTicket([]);
  };

  useEffect(() => {
    let toDoSelectCampTicket = pickedTicket.filter((item) => {
      return item.ticketType === "camp";
    });//????????????????????????????????????????????????????????????????????????
    console.log("toDoSelectCampTicket", toDoSelectCampTicket);

    setToDoSelectCamp(toDoSelectCampTicket);
  }, [pickedTicket]);
  //pickedTicket????????????filter??????camp???????????????

  // let orderTimeTest = moment(new Date().getTime()).locale("zh-tw").format(
  //   "YYYY-MM-DD HH:mm:ss"
  //   )
  //   console.log('orderTimeTest', orderTimeTest)

  //????
  const handleOrderTicket = async () => {
    // let orderTime = new Date().toLocaleString("zh-Tw", { hour12: false });
    let orderTime = moment(new Date().getTime())
      .locale("zh-tw")
      .format("YYYY-MM-DD HH:mm:ss");//?????????????????????????????????moment??????datetime??????
    console.log("orderTime", orderTime);
    // let totalTickets = [
    //   {
    //     ticketType: "one",
    //     ticketName: "?????????",
    //     campId: null,
    //     singleTicketDay: 1,
    //     ticketPrice: 1500,
    //     isActive: 0,
    //     enterTime: null,
    //   },
    //   {
    //     ticketType: "camp",
    //     ticketName: "?????????",
    //     campId: "B03",
    //     singleTicketDay: null,
    //     ticketPrice: 2500,
    //     isActive: 0,
    //     enterTime: null,
    //   },
    // ];
    let result;
    let cardVerification = null;
    console.log("cardVerification", cardVerification);

    await axios({
      method: "post",
      url: `http://localhost:3400/ticket_order/add`,
      data: {
        userInfo: currentUser,
        totalTickets: pickedTicket,
        orderTime,
        orderStatus,
        orderPrice,
        paymentStatus,
        paymentMethod,
        cardVerification,
      },//?????????????????????????????????????????????key???value
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("create_ticket_order_response", response);
        result = response.data;//?????????index.js???res.send?????????
        setCurrentOrderNo(result.insertTicketOrderResults.insertId);//??????insert into???????????????
        setOrderTimeFromResponse(result.insertTicketOrderResults.orderTime);
      })
      .catch((error) => {
        console.log("create_ticket_order_error", error);
        result = error;
      });
    return result;
  };
 
  //???????????? ???????????? ???????????????
  const handleSendCode = async () => {
    let result;
    await axios({
      method: "post",
      url: `http://localhost:3400/ticketOrder/credit_card/send_code`,
      // data: {orderNo:currentOrderNo, currentUser:currentUser},
      data: { orderNo: currentOrderNo, currentUser: currentUser },
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("send_visa_code_response", response);
        result = response.data;
      })
      .catch((error) => {
        console.log("send_visa_code__error", error);
        result = error;
      });
    return result;
  };

  //???????????????
  const handleVerifyCode = async () => {
    let result;
    await axios({
      method: "post",
      url: `http://localhost:3400/ticketOrder/credit_card/check_code`,
      // data: {orderNo:currentOrderNo},
      data: { orderNo: currentOrderNo, creditVerifyCode: verifyCode },
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("verify_visa_code_response", response);
        result = response.data;
        console.log("result", result);
        if (result.statusCode === 200) {
          //?????????????????????????????????????????????response.statusCode === 200???
          // ???????????????????????????????????????????????????statusCode
          alert("?????????????????????????????????????????????");
          setTimeout(() => {
            window.location.href = "/member/ticketOrder";
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("verify_visa_code__error", error);
        result = error;
      });
  };

  const handleRenderTicketOderStep = () => {
    if (ticketOrderStep === 0 || ticketOrderStep === 1) {
      return (
        <TicketPicker
          ticketOrderStep={ticketOrderStep}
          setTicketOrderStep={setTicketOrderStep}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          setCampSitePickerShow={setCampSitePickerShow}
          pickedTicket={pickedTicket}
          setPickedTicket={setPickedTicket}
          handleResetTicketOrder={handleResetTicketOrder}
          campSelectedList={campSelectedList}
          toDoSelectCamp={toDoSelectCamp}
          setCampSelectedList={setCampSelectedList}
        />
      );
    } else if (ticketOrderStep === 2) {
      return (
        <Payment
          paymentMethod={paymentMethod}
          setTicketOrderStep={setTicketOrderStep}
          handleOrderTicket={handleOrderTicket}
          pickedTicket={pickedTicket}
          orderPrice={orderPrice}
          setOrderPrice={setOrderPrice}
          handleResetTicketOrder={handleResetTicketOrder}
          currentOrderNo={currentOrderNo}
          orderTimeFromResponse={orderTimeFromResponse}
          creditNumber={creditNumber}
          setCreditNumber={setCreditNumber}
          setTransactionTime={setTransactionTime}
        />
      );
    } else if (ticketOrderStep === 3) {
      return (
        <CreditCardVerification
          selectedTicketType={selectedTicketType}
          setTicketOrderStep={setTicketOrderStep}
          currentOrderNo={currentOrderNo}
          handleSendCode={handleSendCode}
          verifyCode={verifyCode}
          setVerifyCode={setVerifyCode}
          handleVerifyCode={handleVerifyCode}
          orderPrice={orderPrice}
          transactionTime={transactionTime}
          creditNumber={creditNumber}
        />
        // <TicketOrderDetail
        //   selectedTicketType={selectedTicketType}
        //   setTicketOrderStep={setTicketOrderStep}
        // />
      );
    } else {
    }
  };

  const handleRenderCampSitePicker = () => {
    return (
      <ModalTool
        modalShow={campSitePickerShow}
        modalCloseFunction={() => setCampSitePickerShow(false)}
        modalWidth={1200}
        modalHeight={700}
        backgroundOpacity={0.6}
        modalInnerBackground={`#fff`}
      >
        <CampSitePicker
          closeModal={() => setCampSitePickerShow(false)}
          pickedTicket={pickedTicket}
          campSelectedList={campSelectedList}
          setCampSelectedList={setCampSelectedList}
          wsState={wsState}
          toDoSelectCamp={toDoSelectCamp}
          campListFromDB={campListFromDB} setCampListFromDB={setCampListFromDB}
          wsData={wsData} setWsData={setWsData}
        />
      </ModalTool>
    );
  };

  return (
    <div
      className={`ticket_order_container ${ticketOrderStep ===1? 'ticket_order_container_step_one':''}`}
    >
      <div
        className={`ticket_order_title  ${
          isDarkMode ? "ticket_order_title_dark" : ""
        }`}
      ></div>
      {/* <button onClick={handleOrderTicket}>???????????????</button> */}
      {/* <button onClick={handleSendCode}>???????????????</button> */}
      {/* <button onClick={handleVerifyCode}>?????????????????????</button> */}
      {/* <input type="number" onChange={(e)=>setVerifyCode(e.target.value.toString())}></input> */}
      {/* <div className="test_area">
      ?????????orderNo???????????????
      <input
        type="number"
        onChange={(e) => setCurrentOrderNo(e.target.value.toString())}
      ></input>

      </div> */}
      {handleRenderTicketOderStep()}
      {campSitePickerShow ? handleRenderCampSitePicker() : null}
    </div>
  );
};
export default TicketOrder;
