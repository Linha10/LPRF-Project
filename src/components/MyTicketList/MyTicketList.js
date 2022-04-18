import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./MyTicketList.scss";
import * as R from "ramda";
import context, { Provider } from "../context";
import axios from "axios";
import face from "../../image/membership_black.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TicketQrcode from "../TicketQrcode/TicketQrcode";
import TicketQrcodeContent from "../TicketQrcodeContent/TicketQrcodeContent";
import QRCode from "react-qr-code";
import moment from "moment";
import icon00 from '../../image/membership_black.svg';
import icon01 from '../../image/icon01.png';
import icon02 from '../../image/icon02.png';
import icon03 from '../../image/icon03.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from "@fortawesome/free-solid-svg-icons";


const MyTicketList = () => {
  const contextValue = useContext(context);
  const {
    handleGetTicketDetails,
    ticketOrderListDetails,
    currentUser,
    setTicketOrderListDetails,
  } = contextValue;
  console.log('currentUser', currentUser)
  const [myTicketOrderList, setMyTicketOrderList] = useState([]);
  const [myTicketListDetailsShow, setMyTicketListDetailsShow] = useState(false);
  const [ticketQrCodeShow, setTicketQrCodeShow] = useState(false); //預設不顯示
  const [ticketQrCodeIndex, setTicketQrCodeIndex] = useState(0);
  const [ticketOrderIndex, setTicketOrderIndex] = useState(0);
  const [currentTicketItem, setCurrentTicketItem] = useState();
  const [currentTicketOrderItem, setCurrentTicketOrderItem] = useState();
  const [ticketsOfCurrentOrder, setTicketsOfCurrentOrder] = useState([]);
  const [currentTicketOrder, setCurrentTicketOrder] = useState([]);
  const [userPathName, setUserPathName] = useState("memberOrder");
  const [showDetailList, setShowDetailList] = useState([]);
  const [myPhoto,setMyPhoto] = useState();
  const [photo, setPhoto] = useState((localStorage.getItem("mPhoto")) || (currentUser.mPhoto) ||"0");

  const whichPhoto = () => { 
      let photo = localStorage.getItem("mPhoto")||"0";
      if (photo == "1") {   
          setMyPhoto(icon01);     
      } else if (photo == "2") {  
          setMyPhoto(icon02);
      } else if (photo == "3") {
          setMyPhoto(icon03);
      } else {
          setMyPhoto(icon00);
      }

  }
  useEffect(() => {
      whichPhoto();
  }, [localStorage.getItem("mPhoto"),myPhoto])


  const handleCloseTicketQrCode = (e) => {
    setTicketQrCodeShow(false);
    e.stopPropagation();
    setCurrentTicketItem();
    setTicketsOfCurrentOrder([]);
  };
  const handleGetTicketOrderList = async (e) => {
    console.log("post 取得票券訂單");
    let results;
    await axios({
      method: "post",
      url: `http://localhost:3400/ticket_order/get_list`,
      data: { mNo: currentUser.mNo }, //  data: {mNo:currentUser.mNo},

      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("responsewhat", response.data);
        console.log("ticket_order_response", response.data.data); //?
        results = response.data.data;
        setMyTicketOrderList(results);
      })
      .catch((error) => {
        console.log("ticket_order_error", error);
      });
  };

  const handleGetTicketQrcode = async (e) => {
    console.log("get 取得票券QRcode");
    let results;
    console.log("currentTicketItem", currentTicketItem);
    console.log("currentTicketItem.ticketNo", currentTicketItem.ticketNo);

    await axios({
      method: "get",
      url: `http://192.168.96.108:3400/ticket_order/get_qrcode?ticketNo=${currentTicketItem.ticketNo}`,
      // data: { mNo:"000008" }, get方法沒有這個東西
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        console.log("ticket_qrcode_response", response);
      })
      .catch((error) => {
        console.log("ticket_qrcode_error", error);
      });
  };

  const handleOpenQrcode = (indexResult, ticketsItem, allTickets) => {
    setTicketQrCodeShow(true);
    setTicketQrCodeIndex(indexResult);
    console.log(indexResult);
    setCurrentTicketItem(ticketsItem);
    setTicketsOfCurrentOrder(allTickets);
  };
  //   const handOpenTicketList=(e)=>{
  //       setMyTicketListDetailsShow(!myTicketListDetailsShow);

  //  }

  useEffect(() => {
    if(currentUser) {
      handleGetTicketOrderList();
    }
  }, [currentUser]);

  const handleUserPathName = (props) => {
    setUserPathName(props);
    // return <props/>
  };

  const handleShowDetail = (orderNo) => {
    console.log("orderNo", orderNo);
    let tempList = [...showDetailList];
    console.log("0_tempList", tempList);
    // let targetDetail = document.getElementById(orderNo);
    // console.log('targetDetail', targetDetail);
    // targetDetail.style.height = "160px";
    if (R.includes(orderNo, showDetailList)) {
      tempList = R.without([orderNo], showDetailList);
      console.log("1_tempList", tempList);
      setShowDetailList(tempList);
    } else {
      tempList = [...showDetailList];
      tempList.push(orderNo);
      console.log("2_tempList", tempList);
      setShowDetailList(tempList);
    }
  };

  return (
    <div className={`my_ticket_list_container`}>
      {/* {!currentUser && ""} */}
      {/* {currentUser && */}

      <div id={"member_container"}>
      <div className={"con_both con_left"}>
                            <div className={"member_hi"}>
                                <span>歡迎<br /><span>{currentUser ? currentUser.mName:null}</span></span>
                                {/* <img src={face} /> */}
                                <div className={"my_img"}
                                    // onMouseOver={addOn}
                                    // onMouseLeave={getOfCamera}
                                    // onClick={openImg}
                                    style={{ backgroundImage: `url(${myPhoto})` }}

                                    >
                                    {/* <img src={face} /> */}
                                    {/* <img src={`icon0${currentUser.mPhoto}`} /> */}
                                    <div className={"wrap_img"}>
                                        <FontAwesomeIcon icon={faCamera} />
                                    </div>

                                </div>
                            </div>

                            <div id={"member_list"}>
                                {/* <!-- 這裡看怎麼改 --> */}

                                {/* <a href="http://localhost:3000/member/schedule"><div id={"member_list01"}>我的行程</div></a> */}
                                <div id={"member_list02"}>我的票券</div>
                                <Link to="/member/productOrder"><div id={"member_list03"}>我的訂單</div></Link>
                                <Link to="/member/setting">
                                    <div id={"member_list04"}>帳號設定</div>
                                </Link>
                                {/* <a href="http://localhost:3000/member/setting"><div id={"member_list04"}>帳號設定</div></a> */}

                            </div>

                            {/* <div id={"member_logout"}>
                                <div onClick={logOut}>登出</div>
                            </div> */}

                        </div>


        <div className={"con_both con_right"}>
          <div id={"now_location"}>
            <span>首頁</span>
            <span>/</span>
            <span>會員</span>
            <span>/</span>
            <span>我的票券</span>
          </div>
          <div className={`order_list`}>
            <div className={`thead_area`}>
              <div className={`tr_area`}>
                <div className="th_area order_time">訂單時間</div>
                <div className="th_area">訂單編號</div>
                {/* <div className="th_area">訂單狀態</div> */}
                <div className="th_area">訂單金額</div>
                <div className="th_area">付款方式</div>
                <div className="th_area">付款狀態</div>
                <div className="th_area">訂單明細</div>
              </div>
            </div>
            {myTicketOrderList.map((item, itemOrderIndex) => {
              {/* console.log("item", item); */}
              return (
                <Fragment key={itemOrderIndex}>
                  <div className={`each_order`}>
                    <div
                      className={`tr_second_area ${
                        itemOrderIndex % 2 === 0 ? "odd_row" : "even_row"
                      }`}
                    >
                      <div className={`tb_area order_time`}>
                        {moment(item.orderTime)
                          .locale("zh-tw")
                          .format("YYYY-MM-DD HH:mm:ss")}
                      </div>
                      <div className={`tb_area`}>{item.orderNo}</div>
                      {/* <div className="tb_area">{item.orderStatus === 1 ? "訂單成立":"尚未成立"}</div> */}
                      <div className={`tb_area `}>{item.orderPrice}</div>
                      <div className={`tb_area`}>{item.paymentMethod==="creditCard"?"信用卡":"超商"}</div>
                      <div className={`tb_area `}>
                        {item.paymentStatus === 1 ? "付款完成" : "未付款"}
                      </div>
                      <div className="tb_area">
                        <div className="btn_position">
                          <div
                            // onClick={()=>setMyTicketListDetailsShow(!myTicketListDetailsShow)}
                            onClick={() => handleShowDetail(item.orderNo)}
                            className="order_details_btn "
                          >
                            {R.includes(item.orderNo, showDetailList)
                              ? "-"
                              : "+"}
                          </div>
                        </div>
                      </div>
                    </div>
                  <div
                    className={`order_detail ${
                      R.includes(item.orderNo, showDetailList)
                        ? "order_detail_show"
                        : ""
                    }`}
                  >
                    <div className="order_detail_content">
                      <div className="ticket_title_area">
                        <div className="ticket_title">{`票券號碼`}</div>
                        <div className="ticket_title">{`活動日期`}</div>
                        <div className="ticket_title">{`票券種類`}</div>
                        <div className="ticket_title">{`票券金額`}</div>
                        <div className="ticket_title e_vocher">{`電子票券憑證`}</div>
                      </div>
                      {item.tickets.map((ticketsItem, key) => {
                        return (
                          <div className="each_ticket" key={key}>
                            <div className="order_detail_area">
                              <div className="type_color">
                                <div
                                  className={`blank ${
                                    ticketsItem.ticketType == "two"
                                      ? "two_days_color"
                                      : ticketsItem.ticketType == "one"
                                      ? "single_color"
                                      : "camp_color"
                                  }`}
                                ></div>
                                <div className={`gray_square_details_one`}>
                                  {ticketsItem.ticketNo}
                                </div>
                              </div>
                              <div className={`gray_square_details`}>
                                {ticketsItem.ticketType === "one"
                                  ? ticketsItem.singleTicketDay === 1
                                    ? "20220813"
                                    : "20220814"
                                  : "20220813\n20220814"}
                              </div>
                              <div className={`gray_square_details`}>
                                {ticketsItem.ticketName}
                                {ticketsItem.ticketName === "露營票" ? (
                                  <div className={`camp_site`}>
                                    <div className={`camp_site_name`}>
                                      {ticketsItem.campId}
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}

                                {/* <div className={`active_day`}>8/13</div> */}
                              </div>
                              <div className={`gray_square_details`}>
                                {ticketsItem.ticketPrice}
                              </div>
                              <div className={`gray_square_details e_vocher`}>
                                <div
                                  onClick={() =>
                                    handleOpenQrcode(
                                      key,
                                      ticketsItem,
                                      item.tickets
                                    )
                                  }
                                  className="view_area"
                                >
                                  查看
                                </div>
                              </div>
                            </div>
                            <div className="detail_line"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  </div>
                </Fragment>
              );
            })}
            {currentTicketItem ? (
              <TicketQrcode
                modalShow={ticketQrCodeShow}
                modalCloseFunction={handleCloseTicketQrCode}
                modalWidth={406}
                modalHeight={880}
                backgroundOpacity={0.9}
                modalInnerBackground={`#fff`}
              >
                <TicketQrcodeContent
                  closeModal={handleCloseTicketQrCode}
                  ticketQrCodeIndex={ticketQrCodeIndex}
                  currentTicketItem={currentTicketItem}
                  ticketsOfCurrentOrder={ticketsOfCurrentOrder}
                  setCurrentTicketItem={setCurrentTicketItem}
                  setTicketQrCodeIndex={setTicketQrCodeIndex}
                  handleGetTicketQrcode={handleGetTicketQrcode}
                />
              </TicketQrcode>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyTicketList;
