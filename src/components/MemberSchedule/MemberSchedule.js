import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./MemberSchedule.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "../context";
import face from '../../image/membership_black.svg';


const MemberSchedule = () => {
    const contextValue = useContext(context);
    const { } = contextValue;

    const logOut = () => {
        localStorage.removeItem("user");
        window.location = "/";
    }

    return (
        <div className={`member_schedule_container`}>

            <Provider value={contextValue}>
                <div id={"member_container"}>

                    <div className={"con_both con_left"}>
                        <div id={"member_hi"}>
                            <span>歡迎<br /><span>Guest</span></span>
                            <div className={"my_img"}><img src={face} /></div>
                        </div>

                        <div id={"member_list"}>
                            {/* <!-- 這裡看怎麼改 --> */}

                            <div id={"member_list01"}>我的行程</div>
                            <div id={"member_list02"}>我的票券</div>
                            <div id={"member_list03"}>我的訂單</div>
                            <div id={"member_list04"}>帳號設定</div>

                        </div>
                        <div id={"member_logout"}>
                            <div onClick={logOut}>登出</div>
                        </div>

                    </div>

                    <div className={"con_both con_right"}>
                        <div id={"now_location"}>
                            <span>首頁</span>
                            <span>/</span>
                            <span>會員</span>
                            <span>/</span>
                            <span>我的行程</span>
                        </div>
                        <div className={"top_title"}>
                            <div className={"days"}>
                                <div className={"day1"}>DAY1</div>
                                <div className={"day2"}>DAY2</div>
                            </div>

                            <div className={"my_pdf"}>.PDF</div>
                        </div>
                        <div className={"my_title"}>
                            <div>時間</div>
                            <div>舞台1</div>
                            <div>舞台2</div>
                            <div>舞台3</div>
                        </div>
                        <div className={"schedule_chart chart01"}>
                            <div></div>
                            <div>
                                <div>1300<br />1350</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1350<br />1440</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1440<br />1530</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1530<br />1620</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1620<br />1710</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1710<br />1800</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1800<br />1850</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1850<br />1940</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1940<br />2030</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>2030<br />2120</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>2120<br />2210</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>2210<br />2300</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>


                        </div>
                        <div className={"schedule_chart chart02"}>
                            <div></div>
                            <div>
                                <div>1300<br />1350</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1350<br />1440</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1440<br />1530</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1530<br />1620</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1620<br />1710</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1710<br />1800</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1800<br />1850</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1850<br />1940</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>1940<br />2030</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>2030<br />2120</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>2120<br />2210</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div>2210<br />2300</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>


                        </div>
                    </div>
                </div>
             
            </Provider>

        </div>

    );
};
export default MemberSchedule;
