import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./MemberOrder.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";
import face from '../../image/membership_black.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

// import authService from '../../service/auth';//需要的引入
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import icon00 from '../../image/membership_black.svg';
import icon01 from '../../image/icon01.png';
import icon02 from '../../image/icon02.png';
import icon03 from '../../image/icon03.png';
import Axios from 'axios';
import { Link } from "react-router-dom";





const MemberOrder = () => {
    const contextValue = useContext(context);
    const { currentUser, setCurrentUser } = contextValue;
    const [myPhoto,setMyPhoto] = useState();
    const [photo, setPhoto] = useState((localStorage.getItem("mPhoto")) ||"0");

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

    //hover顯示相機更改圖片
    const addOn = () => {
        $(".wrap_img").css("display", "flex");
        console.log(currentUser.mPhoto);
        // console.log(photo);
    }

    const getOfCamera = () => {
        $(".wrap_img").css("display", "none");
    }
    //hover顯示相機更改圖片



    //更改大頭照
    const openImg = () => {

        $(".change_img").css("display", "block");
        if (photo == "1") {
            $("#icon01").css("border", "solid #81c268");
        }
        if (photo == "2") {
            $("#icon02").css("border", "solid #81c268");
        }
    }

    const closeImgWindow = () => {
        $(".change_img").css("display", "none");
    }

    const changeIcon01 = () => {
        setPhoto("1");
        $("#icon01").css("border", "solid #81c268");
        $("#icon02").css("border", "transparent ");
        $("#icon03").css("border", "transparent ");

    }

    const changeIcon02 = () => {
        // photo = 2;
        setPhoto("2");
        $("#icon02").css("border", "solid #81c268");
        $("#icon01").css("border", "transparent");
        $("#icon03").css("border", "transparent");

    }

    const changeIcon03 = () => {
        // photo = 2;
        setPhoto("3");
        $("#icon03").css("border", "solid #81c268");
        $("#icon01").css("border", "transparent");
        $("#icon02").css("border", "transparent");

    }


    const iconCheck = () => {
        Axios.put("http://localhost:3400/member/setting/photo", {
            mPhoto: photo,
            mMail: currentUser.mMail
        }).then((res) => {
            $(".change_img").css("display", "none");
            localStorage.setItem("mPhoto", photo);
            if (photo == "1") {
                setMyPhoto(icon01);
            } else if (photo == "2") {
                setMyPhoto(icon02);
            } else if (photo == "3") {
                setMyPhoto(icon03);
            }
            else {
                setMyPhoto(icon00); 
            }
            // console.log(res);
        }).catch((err) => {
            alert("更新失敗，請稍後再試");
            console.log(err);
        })
        window.location.reload();
    }
    //更改大頭照


    const openDetails = (e) => {
        let a = e.target.className;
        console.log(a);
        if (e.target.innerText === "+") {
            e.target.innerText = "−";
            $(`.detail_${a}`).slideDown(500);
        } else {
            e.target.innerText = "+";
            $(`.detail_${a}`).slideUp(500);
        }

    }

    const order = [{
        orderNo: "000064", orderTime: "2022/03/18", paymentMethod: "信用卡", amount: "$1200", paymentStatus: "已付款",
        orderDetails: [
            { id: 1, orderProduct: "T-shirt", pColor: "Red", pSize: "M", orderQuantity: 1, orderPrice: "$550" },
            { id: 2, orderProduct: "Cap", pColor: "Black", pSize: "F", orderQuantity: 1, orderPrice: "$650" },
        ]
    }]
    // const order = [{
    //     orderNo: "1234567", orderTime: "2022/02/22", paymentMethod: "信用卡", amount: "$2000", paymentStatus: "已付款",
    //     orderDetails: [
    //         { id: 1, orderProduct: "T-shirt", pColor: "黑色", pSize: "M", orderQuantity: 2, orderPrice: "$100" },
    //         { id: 2, orderProduct: "帽子", pColor: "黑色", pSize: "F", orderQuantity: 1, orderPrice: "$200" },
    //     ]
    // }, {
    //     orderNo: "2234567", orderTime: "2022/01/22", paymentMethod: "信用卡", amount: "$1000", paymentStatus: "已付款",
    //     orderDetails: [
    //         { id: 1, orderProduct: "T-shirt", pColor: "黑色", pSize: "M", orderQuantity: 2, orderPrice: "$250" },
    //         { id: 2, orderProduct: "帽子", pColor: "黑色", pSize: "F", orderQuantity: 1, orderPrice: "$300" },
    //         { id: 3, orderProduct: "帽子", pColor: "黑色", pSize: "F", orderQuantity: 1, orderPrice: "$300" },
    //     ]
    // }, {
    //     orderNo: "3234567", orderTime: "2022/01/22", paymentMethod: "信用卡", amount: "$1000", paymentStatus: "已付款",
    //     orderDetails: [
    //         { id: 1, orderProduct: "T-shirt", pColor: "黑色", pSize: "M", orderQuantity: 2, orderPrice: "$250" },
    //         { id: 2, orderProduct: "帽子", pColor: "黑色", pSize: "F", orderQuantity: 1, orderPrice: "$300" },
    //     ]
    // }]


    return (
        <div className={`member_order_container`}>
            {!currentUser && ""}
            {!photo && ""}
            {/* {currentUser && */}
            {currentUser && (photo || currentUser.mPhoto) &&
                <Provider value={contextValue}>
                    <div id={"member_container"}>

                        <div className={"con_both con_left"}>
                            <div className={"member_hi"}>
                                <span>歡迎<br /><span>{currentUser.mName}</span></span>
                                {/* <img src={face} /> */}
                                <div className={"my_img"}
                                    onMouseOver={addOn}
                                    onMouseLeave={getOfCamera}
                                    onClick={openImg}
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
                                <Link to="/member/ticketOrder"><div id={"member_list02"}>我的票券</div></Link>
                                <div id={"member_list03"}>我的訂單</div>
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
                                <span>我的訂單</span>
                            </div>



                            <div className={"member_order_data"}>
                                <div className={"member_order_title"}>
                                    <div>訂單日期</div>
                                    <div>訂單編號</div>
                                    <div>付款方式</div>
                                    <div>付款金額</div>
                                    <div>付款狀態</div>
                                    <div>訂單明細</div>
                                </div>

                                <div className={"member_order_content"}>

                                    {
                                        order.map((order) => (

                                            <div key={order.orderNo} >

                                                <div className={'order_detail_titleA'}>
                                                    <div>{order.orderTime}</div>
                                                    <div>{order.orderNo}</div>
                                                    <div>{order.paymentMethod}</div>
                                                    <div>{order.amount}</div>
                                                    <div>{order.paymentStatus}</div>
                                                    <div onClick={openDetails} >
                                                        <div id={"open_open"} className={`open${order.orderNo}`}>
                                                            +
                                                        </div>
                                                    </div>


                                                </div>

                                                <div className={`order_detail_bgcolor detail_open${order.orderNo}`}>
                                                    <div className={"order_detail_titleB"}>
                                                        <div>商品名稱</div>
                                                        <div>顏色</div>
                                                        <div>尺寸</div>
                                                        <div>數量</div>
                                                        <div>單價</div>
                                                        <div>小計</div>

                                                    </div>

                                                    {order.orderDetails.map((detail) => (
                                                        <div key={order.orderDetails.id} className={"order_detail_content"}>
                                                            <div>{detail.orderProduct}</div>
                                                            <div>{detail.pColor}</div>
                                                            <div>{detail.pSize}</div>
                                                            <div>{detail.orderQuantity}</div>
                                                            <div>{detail.orderPrice}</div>
                                                            <div>{detail.orderPrice}</div>

                                                        </div>
                                                    ))}

                                                </div>

                                            </div>
                                        )

                                        )
                                    }
                                </div>
                            </div>

                        </div>


                    </div>
                    {/* 更改圖片視窗開始 */}
                    <div className={"change_img"}>
                        <div className={"change_img_content"}>
                            <div className={"close_change_img"}>
                                <FontAwesomeIcon icon={faX} onClick={closeImgWindow} />
                            </div>
                            <div className={"icon_imgs"}>
                                <img id="icon01" src={icon01} onClick={changeIcon01} />
                                <img id="icon02" src={icon02} onClick={changeIcon02} />
                                <img id="icon03" src={icon03} onClick={changeIcon03} />

                            </div>
                            <div>
                                <div className={"icon_check"} onClick={iconCheck}>確定變更</div>
                            </div>
                        </div>

                    </div>
                    {/* 更改圖片視窗結束 */}
                </Provider>
            }


        </div>



    );
};
export default MemberOrder;















// import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
// import "./MemberOrder.scss";
// import { Provider } from "../context";
// import context from "./../context";
// import face from '../../image/membership_black.svg';
// import authService from '../../service/auth';//需要的引入
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";
// import { faX } from "@fortawesome/free-solid-svg-icons";
// import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.css';
// import icon01 from '../../image/icon01.png';
// import icon02 from '../../image/icon02.png';
// import icon03 from '../../image/icon03.png';
// import Axios from 'axios';

// const MemberOrder = () => {
//     const contextValue = useContext(context);
//     const { } = contextValue;
//     const [currentUser, setCurrentUser] = useState("");
//     // useEffect(() => {
//     //     setCurrentUser(authService.getCurrentUser())
//     // }, []);//需要的引入


//     const logOut = () => {
//         localStorage.removeItem("user");
//         window.location = "/";
//     }

//     return (
//         <div className={`member_order_container`}>
//             {!currentUser && ""}
//             {currentUser &&
//                 <Provider value={contextValue}>
//                     <div id={"member_container"}>

//                         <div className={"con_both con_left"}>
//                             <div id={"member_hi"}>
//                                 <span>歡迎<br /><span>Guest</span></span>
//                                 <img src={face} />
//                             </div>

//                             <div id={"member_list"}>
//                                 {/* <!-- 這裡看怎麼改 --> */}

//                                 <div id={"member_list01"}>我的行程</div>
//                                 <div id={"member_list02"}>我的票券</div>
//                                 <div id={"member_list03"}>我的訂單</div>
//                                 <div id={"member_list04"}>帳號設定</div>

//                             </div>

//                             <div id={"member_logout"}>
//                                 <div onClick={logOut}>登出</div>
//                             </div>
                            
//                         </div>

//                         <div className={"con_both con_right"}>
//                             <div id={"now_location"}>
//                                 <span>首頁</span>
//                                 <span>/</span>
//                                 <span>會員</span>
//                                 <span>/</span>
//                                 <span>登入</span>
//                             </div>

//                             <table id={"order_list"}>
//                                 <thead>
//                                     <tr>
//                                         <th>訂單日期</th>
//                                         <th>訂單編號</th>
//                                         <th>訂單狀態</th>
//                                         <th>訂單金額</th>
//                                         <th>訂單明細</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>20201231</td>
//                                         <td>2012310001323</td>
//                                         <td>已付款</td>
//                                         <td>$2000</td>
//                                         <td>放大鏡圖片</td>
//                                     </tr>
//                                     <tr>
//                                         <td>20201231</td>
//                                         <td>2012310001323</td>
//                                         <td>已付款</td>
//                                         <td>$2000</td>
//                                         <td>放大鏡圖片</td>
//                                     </tr>
//                                     <tr>
//                                         <td>20201231</td>
//                                         <td>2012310001323</td>
//                                         <td>已付款</td>
//                                         <td>$2000</td>
//                                         <td>放大鏡圖片</td>
//                                     </tr>
//                                     <tr>
//                                         <td>20201231</td>
//                                         <td>2012310001323</td>
//                                         <td>已付款</td>
//                                         <td>$2000</td>
//                                         <td>放大鏡圖片</td>
//                                     </tr>
//                                     <tr>
//                                         <td>20201231</td>
//                                         <td>2012310001323</td>
//                                         <td>已付款</td>
//                                         <td>$2000</td>
//                                         <td>放大鏡圖片</td>
//                                     </tr>
//                                     <tr>
//                                         <td>20201231</td>
//                                         <td>2012310001323</td>
//                                         <td>已付款</td>
//                                         <td>$2000</td>
//                                         <td>放大鏡圖片</td>
//                                     </tr>
//                                     <tr>
//                                         <td>20201231</td>
//                                         <td>2012310001323</td>
//                                         <td>已付款</td>
//                                         <td>$2000</td>
//                                         <td>放大鏡圖片</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </Provider>
//             }
//         </div>

//     );
// };
// export default MemberOrder;
