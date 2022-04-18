import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useRef,
  useContext,
  currentUser,
} from "react";
import "./CreditCardVerification.scss";
import context, { Provider } from "../context";
import axios from "axios";

const CreditCardVerification = (props) => {
  const contextValue = useContext(context);
  // convenientStore creditCard
  const {
    setTicketOrderStep,
    currentOrderNo,
    handleSendCode,
    handleVerifyCode,
    verifyCode,
    setVerifyCode,
    orderPrice,
    transactionTime,
    creditNumber
  } = props; //屬性由TicketOrder傳來的props，在這支要補上這行程式碼
  const { } = contextValue;
  console.log('verifyCode', verifyCode)

  const confirmRef = useRef();
  
  const verifyInputArray = [
    "firstInput",
    "secondInput",
    "thirdInput",
    "fourthInput",
    "fifthInput",
    "sixthInput",
  ];

  //抓使用者輸入驗證碼內容，傳到驗證的api，進到後端比對跟資料庫的差別
  const handleChangeVerifyCode = (inputValue, currentIndex) => {
    let tempVerifyCodeArray = verifyCode.split("");
    tempVerifyCodeArray[currentIndex] = inputValue;
    setVerifyCode(tempVerifyCodeArray.join(""));

    if(currentIndex < 5) {
      let nextTargetInputClassName = verifyInputArray[currentIndex+1]
      console.log('nextTargetInputClassName', nextTargetInputClassName)
      let nextTargetInput = document.querySelector(`.${nextTargetInputClassName}`);
      console.log('nextTargetInput', nextTargetInput)
      nextTargetInput.focus();
    } else {
      // handleVerifyCode();
      confirmRef.current.focus();
    }
  };

  console.log("currentOrderNo", currentOrderNo);

  return (
    <div className={`credit_card_verification_container`}>
      <div className={`credit_card_verification`}>
        {/* <div className={`verification_title`}></div> */}

        <div className={`verification_content_container`}>
          <div className="verification_type">網路刷卡驗證服務</div>
          <div className={`verification_content_top`}>
            <div className={`visa_logo`}></div>
            <div className={`bank_logo`}></div>
          </div>
          <div className={`verification_content_middle`}>
            <div className={`shop_name_box`}>
              <div className={`shop_name_tilte`}>店家名稱</div>
              <div className={`shop_name`}>
                Love & Peace Rock Music Festival
              </div>
            </div>
            <div className={`price_info`}>
              <div className={`price_info_title`}>
                交易金額
                <div className={`price`}>TWD {orderPrice}</div>
              </div>
            </div>
            <div className={`order_info`}>
              <div className="buy_date">交易時間</div>
              <div className={`time`}>{transactionTime}</div>
            </div>
            <div className={`input_area`}>
              <div className={`credit_card_number_title`}>交易卡號</div>
              <div className={`credit_card_number`}>{creditNumber}</div>
            </div>
            <button className={`send_code_btn`} onClick={handleSendCode}>
              取得交易驗證碼
            </button>
            <div className="verify_code_area">
              {verifyInputArray.map((item, index) => {
                return (
                  <input
                    className={`verify_code_input ${item}`}
                    size="1"
                    type="number"
                    maxLength="1"
                    key={index}
                    onChange={(e) =>
                      handleChangeVerifyCode(e.target.value.toString(), index)//第一個是輸入框實際輸入的東西，第二個參數判斷輸入框的第幾格
                    }
                  ></input>
                );
              })}

            </div>
            <button className={`confirm_verify_btn`} onClick={handleVerifyCode} ref={confirmRef}>
              確認
            </button>
          </div>
          <div className={`verification_content_last`}>
            <div className={`text_area`}>
              注意事項
              <br />
              1.請點選「取得信箱傳送交易密碼」按鍵，本行將於1-2分鐘內以E-mail傳送動態交易碼。
              <br />
              2.請檢視E-mail已取得動態交易認證密碼並輸入送出。
              <br />
              3.若你無法完成交易或是並未收到驗證碼，請與Love & Peace Rock
              Festival客服中心聯絡。
            </div>
          </div>
{/* 
          <div className={`btn_area`}>
            <button className="prev_step" onClick={() => setTicketOrderStep(2)}>
              上一步
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default CreditCardVerification;
