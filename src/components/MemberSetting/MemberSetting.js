import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./MemberSetting.scss";
import { Provider } from "../context";
import * as R from "ramda";
import Axios from 'axios';
import context from "../context";
import face from '../../image/membership_black.svg';
import icon00 from '../../image/membership_black.svg';
import icon01 from '../../image/icon01.png';
import icon02 from '../../image/icon02.png';
import icon03 from '../../image/icon03.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';
import { Link } from "react-router-dom";


const MemberSetting = () => {
    const contextValue = useContext(context);
    const { currentUser, setCurrentUser } = contextValue;
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [chkPass, setChkPass] = useState("");
    const [myPhoto,setMyPhoto] = useState();
    const [photo, setPhoto] = useState(localStorage.getItem("mPhoto") || "0" );

    const whichPhoto = () => { 
        let photo = (localStorage.getItem("mPhoto")||"0");
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


    const checkChange = async () => {
        if (oldPass != "" && newPass != "" && chkPass != "") {
            await Axios.post("http://localhost:3400/member/setting/change", {
                currentUser: currentUser.mMail,
                oldPass: oldPass,
                newPass: newPass,
                chkPass: chkPass
            }).then((res) => {
                alert(res.data.message);
                closeWindow();
            }).catch((err) => {
                alert(err.response.data.message);

            })
        } else {
            alert("???????????????????????????!");
        }
    }


    const logOut = () => {
        localStorage.removeItem("user");
        // localStorage.removeItem("mPhoto");
        window.location = "/";
    }

    //??????????????????
    const openWindow = () => {
        $('.change_window').css("display", "block");
        // console.log(currentUser);
    }
    const closeWindow = () => {
        $('.change_window').css("display", "none");
        setOldPass("");
        setNewPass("");
        setChkPass("");
    }

    //??????????????????

    //hover????????????????????????
    const addOn = () => {
        $(".wrap_img").css("display", "flex");
    }

    const getOfCamera = () => {
        $(".wrap_img").css("display", "none");
    }
    //hover????????????????????????


    //???????????????
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
        setPhoto("2");
        $("#icon02").css("border", "solid #81c268");
        $("#icon01").css("border", "transparent");
        $("#icon03").css("border", "transparent");

    }

    const changeIcon03 = () => {
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
            console.log("hi");
            localStorage.setItem("mPhoto", photo);
            if (photo == "1") {
                setMyPhoto(icon01); 
                // $(".my_img img").attr("src", icon01);
            } else if (photo == "2") {
                setMyPhoto(icon02); 
                // $(".my_img img").attr("src", icon02);
            } else if (photo == "3") {
                setMyPhoto(icon03); 
                // $(".my_img img").attr("src", icon03);
            }
            else {
                // $(".my_img img").attr("src", face);
                setMyPhoto(icon00); 
            }
            // console.log(res);
        }).catch((err) => {
            alert("??????????????????????????????");
            console.log(err);
        })

        window.location.reload();

    }
    //???????????????

    return (

        <div className={`member_setting_container`}>
            {/* {!currentUser || !photo && ""} */}
            {/* {!currentUser && ""} */}
            {/* {!photo && ""} */}
            {/* {currentUser && (photo || currentUser.mPhoto) && */}
            
            {/* {!photo && ""}
            {currentUser && (photo || currentUser.mPhoto) && */}
                        

            {!currentUser && ""}
            {currentUser &&     


                <Provider value={contextValue}>


                    <div className={"member_container"}>

                        <div className={"con_both con_left"}>
                            <div className={"member_hi"}>
                                <span>??????<br /><span>{currentUser.mName}</span></span>
                                
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


                            <div className={"member_list"}>
                                {/* <!-- ?????????????????? --> */}
                                
                                {/* <a href="/member/schedule"><div className={"member_list01"}>????????????</div></a> */}
                                <Link to="/member/ticketOrder"><div id={"member_list02"}>????????????</div></Link>
                                <Link to="/member/productOrder">
                                    <div className={"member_list03"}>????????????</div>
                                </Link>

                                {/* <a href="/member/productOrder"><div className={"member_list03"}>????????????</div></a> */}
                                <div className={"member_list04"}>????????????</div>

                            </div>
                            {/* <div className={"member_logout"}>
                                <div onClick={logOut}>??????</div>
                            </div> */}

                        </div>

                        <div className={"con_both con_right"}>
                            <div className={"now_location"}>
                                <span>??????</span>
                                <span>/</span>
                                <span>??????</span>
                                <span>/</span>
                                <span>????????????</span>
                            </div>

                            <div className={"my_settings"}>

                                <div className={"my_content"}>
                                    <div className={"my_title"}>??????</div>
                                    <div className={"my_data"}>{currentUser.mName}</div>
                                </div>
                                <div className={"my_content"}>
                                    <div className={"my_title"}>??????</div>
                                    <div className={"my_data"}>{currentUser.mMail}</div>
                                </div>
                                <div className={"my_content"}>
                                    <div className={"my_title"}>??????</div>
                                    <div className={"my_data"}>{currentUser.mPhone?currentUser.mPhone:"?????????"}</div>
                                </div>
                                <div className={"my_content"}>
                                    <div className={"my_title"}>??????</div>
                                    <div className={"my_data"}>{(currentUser.mBirthday) ? currentUser.mBirthday : "?????????"}</div>
                                </div>
                                <div className={"my_content"}>
                                    <div className={"my_title"}>??????</div>
                                    <div className={"my_data"}>{(currentUser.mAddress) ? currentUser.mAddress : "?????????"}</div>
                                </div>
                                <div className={"my_content"}>
                                    <div className={"my_title"}>??????</div>
                                    <div className={"my_data"}>********</div>
                                    <div className={"change_password"} onClick={openWindow}>????????????</div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ???????????????????????? */}
                    <div className={"change_window"}>
                        <div className={"change_content"}>
                            <div className={"leave"} >
                                <FontAwesomeIcon icon={faX} onClick={closeWindow} />
                            </div>
                            <div className={"insert_password"}>

                                <div className="pass_title">
                                    <label htmlFor="old_pass">?????????????????????</label><br />
                                    <label htmlFor="new_pass">??????????????????</label><br />
                                    <label htmlFor="chk_pass">????????????</label><br />
                                </div>

                                <div className="pass_data">
                                    <input type="password" id="old_pass"
                                        onChange={(e) => { setOldPass(e.target.value) }} value={oldPass} /><br />
                                    <input type="password" id="new_pass"
                                        onChange={(e) => { setNewPass(e.target.value) }} value={newPass} /><br />
                                    <input type="password" id="chk_pass"
                                        onChange={(e) => { setChkPass(e.target.value) }} value={chkPass} />
                                </div>


                            </div>
                            <div className={"change_chk"} onClick={checkChange}>????????????</div>
                        </div>
                    </div>
                    {/* ???????????????????????? */}


                    {/* ???????????????????????? */}
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
                                <div className={"icon_check"} onClick={iconCheck}>????????????</div>
                            </div>
                        </div>

                    </div>
                    {/* ???????????????????????? */}
                </Provider>
            }
        </div>

    );
};
export default MemberSetting;









// import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
// import "./MemberSetting.scss";
// import { Provider } from "../context";
// import * as R from "ramda";
// import Axios from 'axios';
// import context from "../context";
// import face from '../../image/membership_black.svg';
// // import { faX } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faX } from "@fortawesome/free-solid-svg-icons";
// import $ from 'jquery';


// const MemberSetting = () => {
//     const contextValue = useContext(context);
//     const { currentUser, setCurrentUser } = contextValue;
//     const [oldPass, setOldPass] = useState("");
//     const [newPass, setNewPass] = useState("");
//     const [chkPass, setChkPass] = useState("");
//     // console.log(currentUser);

//     const checkChange = async () => {
//         if (oldPass != "" && newPass != "" && chkPass != "") {
//             await Axios.post("http://localhost:3400/member/setting/change", {
//                 currentUser: currentUser.mMail,
//                 oldPass: oldPass,
//                 newPass: newPass,
//                 chkPass: chkPass
//             }).then((res) => {
//                 alert(res.data.message);
//                 closeWindow();
//             }).catch((err) => {
//                 alert(err.response.data.message);
                
//             })
//         }else{
//             alert("???????????????????????????!");
//         }
//     }

//     // const getUserInfo = async () => {
//     //     if (currentUser) {
//     //         await Axios.post("http://localhost:3400/user/data", { currentUser: currentUser })
//     //             .then(function (res) {
//     //                 // console.log(res);

//     //             })
//     //             .catch(function (err) { console.log(err) })
//     //     }
//     // };
//     // useEffect(() => {
//     //     getUserInfo();
//     // }, [currentUser]);

//     // console.log(currentUser);


//     const logOut = () => {
//         localStorage.removeItem("user");
//         window.location = "/";
//     }

//     const openWindow = () => {
//         $('.change_window').css("display", "block");
//         // console.log(currentUser);
//     }
//     const closeWindow = () => {
//         $('.change_window').css("display", "none");
//         setOldPass("");
//         setNewPass("");
//         setChkPass("");
//     }

//     return (

//         <div className={`member_setting_container`}>
//             {!currentUser && ""}
//             {currentUser &&

//                 <Provider value={contextValue}>


//                     <div className={"member_container"}>

//                         <div className={"con_both con_left"}>
//                             <div className={"member_hi"}>
//                                 <span>??????<br /><span>{currentUser.mName}</span></span>
//                                 <div className={"my_img"}><img src={face} /></div>
//                             </div>

//                             <div className={"member_list"}>
//                                 {/* <!-- ?????????????????? --> */}

//                                 <a href="/member/schedule"><div className={"member_list01"}>????????????</div></a>
//                                 <div className={"member_list02"}>????????????</div>
//                                 <a href="/member/productOrder"><div className={"member_list03"}>????????????</div></a>
//                                 <div className={"member_list04"}>????????????</div>

//                             </div>
//                             <div className={"member_logout"}>
//                                 <div onClick={logOut}>??????</div>
//                             </div>

//                         </div>

//                         <div className={"con_both con_right"}>
//                             <div className={"now_location"}>
//                                 <span>??????</span>
//                                 <span>/</span>
//                                 <span>??????</span>
//                                 <span>/</span>
//                                 <span>????????????</span>
//                             </div>

//                             <div className={"my_settings"}>

//                                 <div className={"my_content"}>
//                                     <div className={"my_title"}>??????</div>
//                                     <div className={"my_data"}>{currentUser.mName}</div>
//                                 </div>
//                                 <div className={"my_content"}>
//                                     <div className={"my_title"}>??????</div>
//                                     <div className={"my_data"}>{currentUser.mMail}</div>
//                                 </div>
//                                 <div className={"my_content"}>
//                                     <div className={"my_title"}>??????</div>
//                                     <div className={"my_data"}>{currentUser.mPhone}</div>
//                                 </div>
//                                 <div className={"my_content"}>
//                                     <div className={"my_title"}>??????</div>
//                                     <div className={"my_data"}>{(currentUser.mBirthday) ? currentUser.mBirthday : "?????????"}</div>
//                                 </div>
//                                 <div className={"my_content"}>
//                                     <div className={"my_title"}>??????</div>
//                                     <div className={"my_data"}>{(currentUser.mAddress) ? currentUser.mAddress : "?????????"}</div>
//                                 </div>
//                                 <div className={"my_content"}>
//                                     <div className={"my_title"}>??????</div>
//                                     <div className={"my_data"}>********</div>
//                                     <div className={"change_password"} onClick={openWindow}>????????????</div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>





//                     <div className={"change_window"}>
//                         <div className={"change_content"}>
//                             <div className={"leave"} onClick={closeWindow}>
//                                 <FontAwesomeIcon icon={faX} />
//                             </div>
//                             <div className={"insert_password"}>

//                                 <div className="pass_title">
//                                     <label htmlFor="old_pass">?????????????????????</label><br />
//                                     <label htmlFor="new_pass">??????????????????</label><br />
//                                     <label htmlFor="chk_pass">????????????</label><br />
//                                 </div>

//                                 <div className="pass_data">
//                                     <input type="password" id="old_pass"
//                                         onChange={(e) => { setOldPass(e.target.value) }} value={oldPass}/><br />
//                                     <input type="password" id="new_pass"
//                                         onChange={(e) => { setNewPass(e.target.value) }} value={newPass}/><br />
//                                     <input type="password" id="chk_pass"
//                                         onChange={(e) => { setChkPass(e.target.value) }} value={chkPass}/>
//                                 </div>


//                             </div>
//                             <div className={"change_chk"} onClick={checkChange}>????????????</div>
//                         </div>
//                     </div>

//                 </Provider>
//             }
//         </div>

//     );
// };
// export default MemberSetting;
