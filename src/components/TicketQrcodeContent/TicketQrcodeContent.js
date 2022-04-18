import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
  Suspense,
} from "react";
import "./TicketQrcodeContent.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import TicketQrcode from "../TicketQrcode/TicketQrcode";
import QRCode from "react-qr-code";
import axios from "axios";
import MyTicketList from "../MyTicketList/MyTicketList";

const TicketQrcodeContent = (props) => {
  const contextValue = useContext(context);
  const { isDarkMode, currentUser, myTicketOrderList } = contextValue;
  const {
    closeModal,
    ticketQrCodeIndex,
    setTicketQrCodeIndex,
    currentTicketItem,
    setCurrentTicketItem,
    ticketsOfCurrentOrder,
    handleGetTicketQrcode
  } = props;
  console.log('ticketQrCodeIndex', ticketQrCodeIndex)
  console.log('currentTicketItem', currentTicketItem)

  const handleNextTicket = () => {
    setCurrentTicketItem(ticketsOfCurrentOrder[ticketQrCodeIndex + 1]);
    setTicketQrCodeIndex(ticketQrCodeIndex+1);
  };

  const handlePrevTicket = () => {
    setCurrentTicketItem(ticketsOfCurrentOrder[ticketQrCodeIndex - 1]);
    setTicketQrCodeIndex(ticketQrCodeIndex-1);
  };

  const handleRenderOthersTicketsBtn = () => {
    switch (ticketQrCodeIndex) {
      case 0:
        return <div className="right_arrow" onClick={handleNextTicket}></div>
        break;
      case 3:
        return <div className="left_arrow"onClick={handlePrevTicket}></div>
        break;

      default:
        return (
          <Fragment>
            <div className="left_arrow" onClick={handleNextTicket}></div>
            <div className="right_arrow" onClick={handleNextTicket}></div>
          </Fragment>
        );
        break;
    }
  };

  return (
    <Provider value={contextValue}>
      <div className={`user_panel_content_container`}>
        <div
          className={`user_panel_content ${
            isDarkMode ? "user_panel_content_dark" : ""
          }`}
        >
          {/* {myTicketOrderList.map((item,key)=>{ */}
          {/* <div > */}
          <div className="qr_cord_area">
            <div className="qr_cord">
            {/* currentTicketItem.ticketNo */}
              <QRCode
                id="qr_Code"
                // value="https://www.jianshu.com/u/992656e8a8a6"
                value={`http://192.168.96.108:3400/ticket_order/get_qrcode?ticketNo=${currentTicketItem.ticketNo}`}
                size={150} // 二维码的大小
                fgColor="#000000" // 二维码的颜色
                style={{ margin: "auto" }}
              />
            </div>
            {/* <button onClick={handleGetTicketQrcode}>測試API打通</button> */}
          </div>
          <div className="ticket_background">
            <div className="ticket_container">
              <div className="lightbox_change">
              <div
                  className={`ticket ${
                    currentTicketItem.ticketType == "one"
                      ? "ticket_one"
                      : currentTicketItem.ticketType == "two"
                      ? "ticket_two"
                      : "ticket_camp"
                  }`}
                >
                  <div className={`ticket_number_normal ${currentTicketItem.ticketType !=="camp"? "ticket_days_number_normal":""}`}>{currentTicketItem.ticketNo}</div>
                  <div className={`ticket_number_reverse ${currentTicketItem.ticketType !=="camp"? "ticket_days_number_normal":""}`}>{currentTicketItem.ticketNo}</div> 
                  <div className={`ticket_number_stalic ${currentTicketItem.ticketType !=="camp"? "ticket_days_number_stalic":""}`}>{currentTicketItem.ticketNo}</div>

                   {handleRenderOthersTicketsBtn()}
                </div>

              </div>
              <div className="text_area">
                <div className="text_A">
                  Copyright 2022 Love&Peace Rock Festival.
                </div>
                <div className="text_B">All rights reserved.</div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* })} */}
          <div className="close_btn" onClick={closeModal}></div>
        </div>
      </div>
    </Provider>
  );
};
export default TicketQrcodeContent;