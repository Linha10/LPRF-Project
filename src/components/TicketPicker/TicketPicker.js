import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./TicketPicker.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";

const TicketPicker = (props) => {
  const contextValue = useContext(context);
  const {myOrderNo} = contextValue;
  const {
    ticketOrderStep,
    setTicketOrderStep,
    paymentMethod,
    setPaymentMethod,
    setCampSitePickerShow,
    pickedTicket,
    setPickedTicket,
    handleResetTicketOrder,
    campSelectedList,
    toDoSelectCamp,
    setCampSelectedList,
  } = props;
  console.log('ticketOrderStep', ticketOrderStep)

  const [responseFit, setResponseFit] = useState(false);
  const [validatorNoticeShow, setValidatorNoticeShow] = useState(false);
  console.log("pickedTicket", pickedTicket);

  const reportWindowSize = () => {
    var containerEle = document.querySelector(".ticket_picker_container");
    var ticketOrderEle = document.querySelector(".ticket_picker");
    let heightInner = ticketOrderEle.getBoundingClientRect().height;
    let heightOuter = containerEle.getBoundingClientRect().height;
    let ratio = heightInner / heightOuter;
    if (heightInner > heightOuter) {
      let relativeRatio = heightOuter / heightInner;
      console.log("relativeRatio", relativeRatio);
      containerEle.style.setProperty("--ratio", relativeRatio);
      setResponseFit(true);
    } else {
      setResponseFit(false);
    }
    console.log("ratio", ratio);
  };
  useEffect(() => {
    reportWindowSize();
  }, []);

  // const reportWindowSize = () => {
  //   let containerEle = document.querySelector(".ticket_picker_container");
  //   let ticketPickerEle = document.querySelector(".ticket_picker");
  //   let ticketShelfEle = document.querySelector(".ticket_shelf_area");
  //   let heightOuter = containerEle.getBoundingClientRect().height;
  //   console.log("heightOuter", heightOuter);
  //   let heightInner = ticketShelfEle.getBoundingClientRect().height;
  //   console.log("heightInner", heightInner);
  //   let ratio = heightInner / heightOuter;
  //   if (heightInner > heightOuter) {
  //     let relativeRatio = heightOuter / heightInner;
  //     console.log("relativeRatio", relativeRatio);
  //     containerEle.style.setProperty("--ratio", relativeRatio);
  //   } else {
  //     containerEle.style.setProperty("--ratio", 0.9);
  //   }
  //   console.log("ratio", ratio);
  // };
  // useEffect(() => {
  //   reportWindowSize();
  // }, []);



  //??
  useEffect(() => {
    // if (campSelectedList.length === toDoSelectCamp.length) {
    // if (campSelectedList.length) {
      const mergeArrayObjects = (arr1, arr2) => {
        let arr3 = arr1.filter((item) => item.ticketType === "camp");
        // console.log("arr1", arr1);
        // console.log("arr3", arr3);
        // console.log("arr2", arr2);
        let index = 0;
        while (index < arr3.length) {
          if (arr2[index]) {
            arr3[index]["campId"] = arr2[index]["campId"];
          } else {
            arr3[index]["campId"] = null;
          }
          index = index + 1;
        }
      };
      mergeArrayObjects(pickedTicket, campSelectedList);
      // console.log('95campSelectedList', campSelectedList)
      // console.log('95pickedTicket', pickedTicket)
    // }
  }, [campSelectedList]);

  const handlePickTicket = (ticketType) => {
    console.log("ticketType", ticketType);
    let ticketObject = {};
    switch (ticketType) {
      case "one":
        ticketObject = {
          ticketType: ticketType,
          ticketName: "單日票",
          campId: null,
          singleTicketDay: null,
          ticketPrice:1500,
          isActive:0, 
          enterTime:null
        };
        break;
      case "two":
        ticketObject = {
          ticketType: ticketType,
          ticketName: "雙日票",
          campId: null,
          singleTicketDay: null,
          ticketPrice:2500,
          isActive:0, 
          enterTime:null
        };
        break;
      case "camp":
        ticketObject = {
          ticketType: ticketType,
          ticketName: "露營票",
          campId: null,
          singleTicketDay: null,
          ticketPrice:4500,
          isActive:0, 
          enterTime:null
        };
        break;
      default:
        ticketObject = {
          ticketType: ticketType,
          ticketName: "",
          campId: null,
          singleTicketDay: null,
          ticketPrice:0,
          isActive:0, 
          enterTime:null
        };
        break;
    }
    let tempList = [...pickedTicket];
    if (pickedTicket.length < 4) {
      tempList.push(ticketObject);
    }
    setPickedTicket(tempList);
  };
  const handleCancelTicket = (ticketItem) => {
    console.log("____ticketItem", ticketItem);
    let tempTicketList = pickedTicket.filter((item) => {
      return item !== ticketItem;
    });
    let tempCampSelectedList = campSelectedList.filter((item) => {
      return item.campId !== ticketItem.campId;
    });
    //???

    console.log("tempCampSelectedList____", tempCampSelectedList);

    setCampSelectedList(tempCampSelectedList);

    console.log("tempTicketList", tempTicketList);
    setPickedTicket(tempTicketList);
  };

  const handlePickSingleDay = (index, day) => {//?
    let tempList = [...pickedTicket];
    tempList[index].singleTicketDay = day; //?
    setPickedTicket(tempList);
    setValidatorNoticeShow(false);
  };

  const handleRenderPaymentButton = () => {
    return (
      <div className="payment_select_area">
        <div className="payment_title">選擇付款方式</div>
        <div className="payment_method">
          <div
            className={`payment_btn credit_card ${
              paymentMethod === "creditCard" ? "selected" : ""
            }`}
            onClick={() => setPaymentMethod("creditCard")}
          >
            信用卡
          </div>
          <div
            className={`payment_btn convenient_store ${
              paymentMethod === "convenientStore" ? "selected" : ""
            }`}
            onClick={() => setPaymentMethod("convenientStore")}
          >
            超商繳費
          </div>
        </div>
      </div>
    );
  };

  const handleRequiredFieldValidate = () => {
    let oneDayTicketPickNotYet = pickedTicket.filter((item) => {
      return item.ticketType === "one" && !item.singleTicketDay;
    });
    console.log("oneDayTicketPickNotYet", oneDayTicketPickNotYet);
    if (oneDayTicketPickNotYet.length) {
      setValidatorNoticeShow(true);
    }

    let campTicketPickNotYet = pickedTicket.filter((item) => {
      return item.ticketType === "camp" && !item.campId;
    });
    console.log("campTicketPickNotYet", campTicketPickNotYet);
    if (campTicketPickNotYet.length) {
      setValidatorNoticeShow(true);
    }
  };

  const handleBuyTicket = () => {
    setTicketOrderStep(1);
  };

  return (
    <div
      className={`ticket_picker_container ${
        responseFit ? "response_show" : ""
      }`}
    >
      <div
        className={`ticket_picker ${pickedTicket.length ? "scale_down" : ""}`}
      >
        <div className="ticket_shelf">
          {ticketOrderStep === 1 ? (
            <div className="title">請點選票種加入清單</div>
          ) : null}
          <div className={`ticket_type_area`}>
            <div className={`ticket_box`}>
              <div
                className={`ticket_image ticket_one_day ${
                  pickedTicket.length === 4 ? "disable" : ""
                }`}
                onClick={() => ticketOrderStep === 1 ? handlePickTicket("one"):null}
              ></div>
              <div className="ticket_desc">
                <div>單日票</div>
                <div>音樂祭任 1 日活動</div>
              </div>
            </div>
            <div className={`ticket_box`}>
              <div
                className={`ticket_image ticket_two_day ${
                  pickedTicket.length === 4 ? "disable" : ""
                }`}
                onClick={() => ticketOrderStep === 1 ? handlePickTicket("two") : null}
              ></div>
              <div className="ticket_desc">
                <div>雙日票</div>
                <div>音樂祭 2 日活動</div>
              </div>
            </div>
            <div className="ticket_box">
              <div
                className={`ticket_image ticket_camp ${
                  pickedTicket.length === 4 ? "disable" : ""
                }`}
                onClick={() => ticketOrderStep === 1 ? handlePickTicket("camp"): null}
              ></div>
              <div className="ticket_desc">
                <div>露營票</div>
                <div>音樂祭 2 日活動</div>
                  {/* <br/>(含露營)</div> */}
                <div>(含露營)</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`ticket_picked_list ${
            pickedTicket.length ? "show_list" : ""
          }
          ${
            pickedTicket.length <= 2 ? "half_width" : ""
          }
          ${
            pickedTicket.length === 3 ? "show_list_three" : ""
          }
          ${
            pickedTicket.length === 4 ? "show_list_four" : ""
          }
          ${
            pickedTicket.length === 3 ? "three_tickets" : ""
          }
          `}
        >
          <div className="list_title">票券訂購清單</div>
          <div
            className={`list_wrapper ${
              pickedTicket.length <= 2 ? "half_width" : ""
            }
            ${
            pickedTicket.length === 3 ? "three_tickets" : ""
          }
            `}
          >
            {pickedTicket.map((item, index) => {
              return (
                <div
                  className={`each_ticket ${
                    item.ticketType === "one" && !item.singleTicketDay
                      ? "must_bounce"
                      : ""
                  }
                  ${
                    item.ticketType === "camp" && !item.campId
                      ? "must_bounce"
                      : ""
                  }
                  `}
                  key={index}
                >
                  <div className={`ticket ticket_${item.ticketType}`}></div>
                  <div className="ticket_info">
                    <div className="ticket_name">{item.ticketName}</div>
                    {item.ticketType === "one" && !item.singleTicketDay ? (
                      <div className="validator_notice">未選擇日期</div>
                    ) : item.ticketType === "camp" && !item.campId ? (
                      <div className="validator_notice">未選擇營位</div>
                    ) : null}
                    {item.ticketType === "one" ? (
                      <div className="single_ticket_day">
                        <div
                          className={`day_btn day_one_btn ${
                            item.singleTicketDay === 1 ? "selected" : ""
                          }`}
                          onClick={() => handlePickSingleDay(index, 1)}
                        >
                          1
                        </div>
                        <div
                          className={`day_btn day_two_btn ${
                            item.singleTicketDay === 2 ? "selected" : ""
                          }`}
                          onClick={() => handlePickSingleDay(index, 2)}
                        >
                          2
                        </div>
                      </div>
                    ) : item.ticketType === "camp" ? (
                      item.campId === null ? (
                        <div className="pick_camp">
                          <div
                            className="pick_camp_btn"
                            onClick={() => setCampSitePickerShow(true)}
                          >
                            選位
                          </div>
                        </div>
                      ) : (
                        <div className="camp_site">
                          <div className="camp_site_name">{item.campId}</div>
                        </div>
                      )
                    ) : null}

                    <div
                      className="remove_icon"
                      onClick={() => handleCancelTicket(item)}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {ticketOrderStep === 0 ? (
          <div className={`order_button`} onClick={() => handleBuyTicket()}>
            開始訂票
          </div>
        ) : null}
      <div className={`step_btn_area`}>
        {/* {validatorNoticeShow ? (
          <div className="validator_notice">單日票尚未選擇日期</div>
        ) : null} */}

        {pickedTicket.length ? handleRenderPaymentButton() : null}
        {ticketOrderStep === 1 ? (
          <div className={`next_btn_area `}>
            <div className={`btn cancel_btn`}onClick={handleResetTicketOrder}>
              取消訂票
            </div>
            {/* <div className="btn next_btn" onClick={handleRequiredFieldValidate}> */}
            {pickedTicket.length ? (
              <div
                className="btn next_btn"
                onClick={() => setTicketOrderStep(2)}
              >
                進入付款流程
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      </div>
    </div>
  );
};
export default TicketPicker;