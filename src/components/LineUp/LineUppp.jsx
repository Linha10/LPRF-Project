import React, { useCallback, useState, useEffect, Fragment, useContext, setState } from "react";
import "./LineUp.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "../context";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from "bootstrap/dist/css/bootstrap.css";  //necessery 4 modal
import $ from 'jquery';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import LineUpTilte from './../../image/lineUp_morning.png'

class TableDayOne extends Component {
    state = { showTable: true, isDayOne: true };



    changeTime = () => {
        // $('.sun').toggleClass('sun-Clicked');
        // $('.moon').toggleClass('moon-Clicked');
        this.setState({ showTable: !this.state.showTable });
    }


    changeDay2 = () => {
        // this.setState({showTable:true})
        $('.dayOne').hide();
        $('.dayTwo').show();
    }

    render() {
        return (
          
            <div className={` ${this.state.showTable?'normalType':'whyTest'}`}>
                <div >
                    <img className="designLineUp" src={LineUpTilte} />
                </div>
                <div style={{ display: this.state.isDayOne ? 'block' : 'none' }} className='allTable'>


                    <div className="d-flex justify-content-start daySunBox " >
                        <img src="https://media.discordapp.net/attachments/677538517949218820/942958807909273610/sun.png"
                            className={`sun ${this.state.showTable?'':'sun-Clicked'}`} 
                        ></img>
                        {/* style={{ display: this.state.showTable ? 'block' : 'none' }} */}
                        <img src="https://media.discordapp.net/attachments/677538517949218820/942958807724732487/Mask_Group_1498.png"
                            className={`moon ${this.state.showTable?'':'moon-Clicked'}`}  
                        > 
                            {/* style={{ display: this.state.showTable==true ? 'none' : 'block' }} */}
                            {/* style={{ visibility: this.state.showTable==true ? 'hidden' : 'visible' }} */}
                        </img>
                    </div>
                    <div className='btnG'>
                        <button type="button" className="btn btn-secondary campDay1" >
                            DAY 1
                        </button>
                        <button type="button" className="btn btn-outline-secondary campDay2"
                            onClick={this.changeDay2}>
                            DAY 2
                        </button>
                    </div>

                    <div className="dayOneTable">
                        <div className='dayTable ' >
                            <div className="container lineTableSetting"
                                style={{ display: this.state.showTable ? 'block' : 'none' }}>
                                <table className="table"  >
                                    <thead className="thisBar">
                                        <tr className="tHead d-flex flex-wrap myBox">
                                            <th className="col-0 border-0 timeTitle "><b>Time</b></th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 1</div></th>
                                            <th className="col-3 border-0" ><div className="stageColorM">STAGE 2</div></th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 3</div></th>
                                        </tr>
                                    </thead>


                                    <tbody className="giveMeSpace">
                                        <tr className="d-flex flex-wrap myBox ">
                                            <th className="col-0 inTableTime">13:00 <br></br>13:50</th>
                                            <th className="col-3" >  
                                                <a id='RiseAgainst' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".RiseAgainst">Rise Against
                                                </a>
                                                <div className="modal fade RiseAgainst" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog ">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title RiseAgainst" id="" >Rise Against</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row border-0" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox " >
                                                                            <img className="Rise-img" src="https://media.discordapp.net/attachments/677538517949218820/939062948280827965/RiseAgainst.jpg"></img>
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Rise Against是一支來自芝加哥的美國龐克搖滾樂隊，成立於1999年。
                                                                                <br/> &emsp;&emsp;該樂隊目前的陣容包括主唱/節奏吉他手Tim McIlrath，主唱吉他手Zach Blair，貝斯手Joe Principe和鼓手Brandon Barnes。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia container' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className="spotify4Rise">
                                                                                <iframe src="https://open.spotify.com/embed/album/2Gq0ERke26yxdGuRvrqFTD" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                 
                                            </th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='KanaBoon' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".KanaBoon">KanaBoon
                                                </a>
                                                <div className="modal fade KanaBoon" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog ">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title RiseAgainst" id="" >KanaBoon</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='KanaBoon' src="https://truth.bahamut.com.tw/s01/202003/fcc710eb36b5fb7ceed43d3de6874c02.JPG"></img>
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;KANA-BOON 是由來自大阪酒井市所組成的三人搖滾樂隊，他們是在高中時期社團認識後便一起組團演唱至今。
                                                                                <br />&emsp;&emsp;樂團成員主要有主唱谷口鮪、吉他手古賀隼斗、以及鼓手小泉貴裕。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/45z2ntx53Y0d42S9IpN6OH" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                 
                                            </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime ">13:50 <br></br>14:40</th>
                                            <th className="col-3" > </th>
                                            <th className="col-3 " >  
                                                <a id='ManWithAMission' className='mr-1 hrefColor' type="button" data-toggle="modal"
                                                    data-target=".ManWithAMission">MWAM
                                                </a>
                                                <div className="modal fade ManWithAMission" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ManWithAMission " id="" >MWAM</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='MWAN' src="https://img.ltn.com.tw/Upload/ent/page/800/2013/08/09/phphUENSt.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;MAN WITH A MISSION是日本的五人組成的搖滾樂隊。
                                                                                <br />&emsp;&emsp;成員設定為外觀為狼頭人身的究極生命體。樂隊名意為“背負使命的男人”，簡稱為MWAM、マンウィズ等。此外還被人們稱為“狼人樂團”。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/4y9CcT0uoNVxUhjq2ku0bX" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                              
                                            </th>
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">14:40 <br></br>15:30</th>
                                            <th className="col-3" >  
                                                <a id='Ashes_Remain' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Ashes_Remain">Ashes Remain
                                                </a>
                                                <div className="modal fade Ashes_Remain" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Ashes_Remain" id="" >Ashes Remain</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='ashes_remain' src="http://2.bp.blogspot.com/-VbUDEu9tW4o/TmGaoyCyULI/AAAAAAAAAHU/tmVfiE1aolE/s320/Ashes+Remain+3+Courtesy+of+Air+1.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Ashes Remain是一支美國基督教搖滾樂隊，成立於2001年，總部設在馬里蘭州巴爾的摩市。
                                                                                樂隊由Josh Smith和Ryan Nalepa創立。
                                                                                <br />&emsp; 他們以其第三張專輯“What I've Become”於2011年發行而聞名。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/13H9LxFZVQVfRMUxKQvejv" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                                                                <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='MayShow' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".MayShow">AmazingShow
                                                </a>
                                                <div className="modal fade MayShow" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title MayShow" id="" >AmazingShow</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='MayShow' src="https://www.mirrormedia.com.tw/assets/images/20210512161304-47eb43889c970bd8e8511beed4a25dfd-tablet.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;美秀集團是嘉義的獨立樂團，曲風特色是帶有復古台味的搖滾和民謠，樂團採用自製樂器進行演出。<br />
                                                                                &emsp;&emsp;目前成員共五人，由主唱兼吉他手狗柏、吉他手修齊、鍵盤手冠佑、鼓手鍾錡及貝斯手婷文組成。

                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/2M55kmmq0xR32RKDtBIeHT" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">15:30 <br></br>16:20</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Back-On' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Back-On">Back-On
                                                </a>
                                                <div className="modal fade Back-On" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Back-On" id="" >Back-On</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='Back-On' src="https://blow.streetvoice.com/wp-content/uploads/2016/06/pic.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;BACK-ON 是一組來自東京，融合多種音樂類型的混合搖滾樂團，以主唱 KENJI03 穿透人心的旋律、MC TEEDA 英日文夾雜的 RAP 為主軸，
                                                                                不斷追求嶄新的搖滾樂。他們也曾於亞洲、歐洲、南美等地進行演出，
                                                                                感染力十足的現場演出在世界各地獲得相當高的評價。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/3TpgBK0jom391y7SdJF1iO" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">16:20 <br></br>17:10</th>
                                            <th className="col-3" >  
                                                <a id='Falling_In_Reverse' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Falling_In_Reverse">Falling In Reverse
                                                </a>
                                                <div className="modal fade Falling_In_Reverse" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Falling_In_Reverse" id="" >Falling In Reverse</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://redefined.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/04/22050956/FallingInReverse_PressPhoto.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Falling in Reverse是一支美國後硬核樂隊，來自內華達州拉斯維加斯，成立於2008年。
                                                                                <br />&emsp;該樂隊由其主唱Ronnie Radke領導，由其和主吉他手Christian Thompson、節奏吉他手Derek Jones、貝斯手Zakk Sandler和鼓手Ryan Seaman組成。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/1KwwS07TEbKS8r1rU4UUe4" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='RADWIMPS' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".RADWIMPS">RADWIMPS
                                                </a>
                                                <div className="modal fade RADWIMPS" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title RADWIMPS" id="" >RADWIMPS</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.jame-world.com/media/image/2015-09/6720.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;簡稱RAD。RADWIMPS，是日本4人搖滾樂團，現乃日本環球音樂旗下的藝人。
                                                                                <br />&emsp;&emsp;由團長兼吉他手桑原彰開始，與主唱野田洋次郎、貝斯武田祐介以及鼓手山口智史一起組團，於2001年在神奈川縣組成，2005年正式出道 ，
                                                                                所屬經紀人公司為voque ting。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/0a69ul4zJx8c6ZBy2carWF" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">17:10 <br></br>18:00</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='GreenDay' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".GreenDay">GreenDay
                                                </a>
                                                <div className="modal fade GreenDay" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title GreenDay" id="" >GreenDay</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://media.gq.com.tw/photos/5dbc889518079c0008a1e321/master/w_1600,c_limit/2016081560782437.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Green Day，美國著名搖滾樂團。1986年創立，是90年代美國龐克音樂的重要樂團之一。
                                                                                <br />&emsp;&emsp;成員包括主唱/吉他手Billie Joe Armstrong，貝斯手Mike Dirnt以及鼓手Tré Cool。他們深受70年代龐克音樂時期經典樂團如The Clash等影響，以充滿力道的流暢旋律見長。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/3id4t9IqRoB1f1smOERtrY" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">18:00 <br></br>18:50</th>
                                            <th className="col-3" >  
                                                <a id='ZZ_TOP' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".ZZ_TOP">ZZ TOP
                                                </a>
                                                <div className="modal fade ZZ_TOP" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ZZ_TOP" id="" >ZZ TOP</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://s.hdnux.com/photos/01/16/13/03/20492480/3/rawImage.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;ZZ Top是1969年成立於美國德克薩斯州休斯敦的一個搖滾樂隊。<br />&emsp;&emsp;當前的成員有貝斯手兼主唱Dusty Hill、吉他手兼主唱Billy Gibbons（也是樂隊隊長，主要填詞、作曲人）和鼓手Frank Beard。
                                                                                該樂隊陣容已經維持了超過45年。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/5LMGAYhn2ywaxGZdtmXGpw" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Trash' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Trash">Trash
                                                </a>
                                                <div className="modal fade Trash" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Trash" id="" >Trash</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://img.shoplineapp.com/media/image_clips/60e263d22849b600176dbddc/original.jpg?1625449426"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;TRASH樂團，為臺灣樂團，於2009年12月成立於臺北，目前成員四位由主唱阿夜、吉他手頤原、貝斯手博文、鼓手金魁剛所組成。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/4xI5LoEWLxoTm4DNa4fSUn" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="iAmHere">
                                    <button className="hereBtn"
                                        onClick={this.changeTime}><FontAwesomeIcon icon={faCaretDown} className='fontAwe'/></button>
                                </div>
                            </div>


                        </div>
                        <div className="dayOneNight nightTable " style={{ display: this.state.showTable == true ? 'none' : 'block' }}>
                            <div className="container lineTableSettingNight" >
                                <table className="table border-0">
                                    <thead className="">
                                        <tr className="tHead d-flex flex-wrap myBox">
                                            <th className="col-0 border-0 timeTitle" ><b>Time</b> </th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 1</div></th>
                                            <th className="col-3 border-0" ><div className="stageColorM">STAGE 2</div></th>
                                            <th className="col-3 border-0" ><div className="stageColor">STAGE 3</div></th>
                                        </tr>
                                    </thead>

                                    <tbody className="giveMeSpace">
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">18:00 <br></br>18:50</th>

                                            <th className="col-3" >  
                                                <a id='ZZ_TOP1' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".ZZ_TOP1">ZZ TOP
                                                </a>
                                                <div className="modal fade ZZ_TOP1" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ZZ_TOP" id="" >ZZ TOP</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://s.hdnux.com/photos/01/16/13/03/20492480/3/rawImage.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;ZZ Top是1969年成立於美國德克薩斯州休斯敦的一個搖滾樂隊。<br />&emsp;&emsp;當前的成員有貝斯手兼主唱Dusty Hill、吉他手兼主唱Billy Gibbons（也是樂隊隊長，主要填詞、作曲人）和鼓手Frank Beard。
                                                                                該樂隊陣容已經維持了超過45年。

                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/5LMGAYhn2ywaxGZdtmXGpw" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Trash1' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Trash1">Trash
                                                </a>
                                                <div className="modal fade Trash1" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Trash1" id="" >Trash</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://img.shoplineapp.com/media/image_clips/60e263d22849b600176dbddc/original.jpg?1625449426"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;TRASH樂團，為臺灣樂團，於2009年12月成立於臺北，目前成員四位由主唱阿夜、吉他手頤原、貝斯手博文、鼓手金魁剛所組成。

                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/4xI5LoEWLxoTm4DNa4fSUn" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">18:50 <br></br>19:40</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Maroon5' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Maroon5">Maroon5
                                                </a>
                                                <div className="modal fade Maroon5" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Maroon5" id="" >Maroon5</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://en.celebrity.tn/wp-content/uploads/2021/08/What-was-Maroon-5-original-name-758x474.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Maroon 5是一個來自美國加利福尼亞州洛杉磯的流行搖滾樂團。<br />&emsp;&emsp;樂團成員包括主唱Adam、鍵盤手和旋律吉他手Jesse、貝斯Micke、主音吉他手James 、鼓手Matt Flynn和鍵盤手PJ Morton。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/6ijGiBcBfUwkoyHn5VUHU2" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox ">
                                            <th className="col-0 inTableTime">19:40 <br></br>20:30</th>
                                            <th className="col-3" >  
                                                <a id='Bob_Seger' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Bob_Seger">Bob Seger
                                                </a>
                                                <div className="modal fade Bob_Seger" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Bob_Seger" id="" >Bob Seger</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.billboard.com/wp-content/uploads/media/bob-seger-1980-billboard-1548.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;Bob Seger 是美國歌手、詞曲作家和聲歌手樂家。
                                                                                <br />
                                                                                &emsp;&emsp;席格的事業跨越六十年、在全球銷售超過七千五百萬張唱片，讓他變成世界上最暢銷的音樂藝人之一。席格分別於2004年和2012年入選搖滾名人堂和詞曲作家名人堂。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/1vhib5WLHRVdOpRjiTHk15" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3 " >  
                                                <a id='AsiaKung-Fu' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".AsiaKung-Fu">Asian Kung-Fu<br />Generation
                                                </a>
                                                <div className="modal fade AsiaKung-Fu" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title AsiaKungFu" id="" >Asian Kung-Fu Generation</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://1.bp.blogspot.com/-Rmcle26nzTs/W1OIDfmZ4PI/AAAAAAAA1Kw/T-vfzru4jKw8CzAIOmrphj6reZQ7kzMtQCLcBGAs/s1600/ASIAN%2BKUNG-FU%2BGENERATION.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;ASIAN KUNG-FU GENERATION於橫濱關東學院大學輕音樂部組成，
                                                                                樂團成員為後藤正文（歌唱與吉他）、喜多建介（吉他與歌唱）、山田貴洋（貝斯與歌唱）、伊地知潔（鼓手）四人組成。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/56xQzwz8VKC3LOtvrI4g04" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox bgc">
                                            <th className="col-0 inTableTime">20:30 <br></br>21:20</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='OneRepublic' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".OneRepublic">OneRepublic
                                                </a>
                                                <div className="modal fade OneRepublic" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title OneRepublic" id="" >OneRepublic</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://images3.kingautos.net/2017/07/22/87TjOAhBpWzrAFf.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;&emsp;OneRepublic於2003年在美國科羅拉多州科羅拉多泉成立。2007年由提姆巴蘭混音製作的首張單曲——（Apologize），在《告示牌》排行榜Top 5停留了五周，並晉升至亞軍的位置。
                                                                                <br />
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/20lOt6G8MHv8ZO7ViOmiP7" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox ">
                                            <th className="col-0 inTableTime">21:20<br></br>22:10</th>
                                            <th className="col-3" >  
                                                <a id='ThirtySeconds_TO_Mars' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".ThirtySeconds_TO_Mars">30S To Mars
                                                </a>
                                                <div className="modal fade ThirtySeconds_TO_Mars" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title ThirtySeconds_TO_Mars" id="" >Thirty Seconds To Mars</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.youredm.com/wp-content/uploads/2021/10/image003-750x519.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Thirty Seconds to Mars是一支來自美國加利福尼亞州洛杉磯，於1998年創立。
                                                                                <br />&emsp;該樂團因其充滿活力的現場表演以及對多種音樂流派元素的運用，並以其帶來哲思和精神力量的歌詞，概念專輯以及實驗性的音樂而備受讚譽。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/6OlCoydaNFUU7v1Xo5ZJPx" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='Journey' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".Journey">Journey
                                                </a>
                                                <div className="modal fade Journey" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title Journey" id="" >Journey</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://www.morrisonhotelgallery.com/images/medium/Journey_BarrySchultz19.jpg"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Journey是1973年由山塔那合唱團和Frumious Bandersnatch的前成員在舊金山成立的美國搖滾樂團。
                                                                                <br />&emsp;樂團經歷了幾次陣容變換；而1978年至1987年，樂團獲得了商業上最大的成功。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/2OyVtIEp7O7a6o82DF4Ba5" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                        </tr>
                                        <tr className="d-flex flex-wrap myBo bgc">
                                            <th className="col-0 inTableTime">22:10 <br></br>23:00</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3" >  
                                                <a id='BonJovi' type="button" className='hrefColor' data-toggle="modal"
                                                    data-target=".BonJovi">BonJovi
                                                </a>
                                                <div className="modal fade BonJovi" tabIndex="-1" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title BonJovi" id="" >BonJovi</h5>

                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>

                                                            </div>

                                                            <div className="modal-body d-flex-row" >
                                                                <div className="container-fluid">
                                                                    <div className="row d-flex">
                                                                        <div className="col-11 imgBox" >
                                                                            <img className='adjust' src="https://i.iheart.com/v3/re/new_assets/5a90701b96f64dd64b193742"></img>
                                                                            
                                                                        </div>



                                                                        <div className="row mainArticle" >
                                                                            <div className="col-12-lg">
                                                                                &emsp;Bon Jovi是一個美國的新澤西賽瑞維爾市的硬搖滾樂團，由主唱Jon Bon Jovi建立，
                                                                                樂團在1980年代獲得了巨大的成功，在過去的二十五年裡，邦喬飛已經在全世界賣出了一億兩千萬張唱片。
                                                                            </div>
                                                                        </div>

                                                                        <div className='socialMedia' >
                                                                            <div className="d-flex mediaIcons">
                                                                                <a className='googleIcon pl-5 pt-2' href="https://google.com/home" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885299781799996/googleicon.png' /></a>
                                                                                <a className='fbIcon pl-3 pt-2' href="https://www.faceBook.com/" ><img src="https://media.discordapp.net/attachments/677538517949218820/945885300075397120/fbIcon.png" /></a>
                                                                                <a className='twitter pl-3 pt-2' href="https://www.twitter.com/" ><img src='https://media.discordapp.net/attachments/677538517949218820/945885300385792070/twitter.png' /></a>
                                                                                <a className='pl-3 pt-2 line' href="https://www.line.com/"><img src='https://media.discordapp.net/attachments/677538517949218820/945885300792627283/lineIcon.png' /></a> <br />
                                                                            </div>
                                                                            <div className=" spotify">
                                                                                <iframe src="https://open.spotify.com/embed/album/0kBfgEilUFCMIQY5IOjG4t" width="220" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="modal-footer mr-auto" >
                                                                <img className="" src="https://media.discordapp.net/attachments/677538517949218820/945871975916642324/footerFont.png"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </th>
                                            
                                            <th className="col-3"> </th>
                                        </tr>
                                        <tr className="d-flex flex-wrap myBox">
                                            <th className="col-0 inTableTime">23:10 <br></br>00:00</th>
                                            <th className="col-3"> </th>
                                            <th className="col-3"> </th>
                                            <th className="col-3"> </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="iAmHere2">
                                    <button className="hereBtn2" onClick={this.changeTime}><FontAwesomeIcon icon={faCaretUp}  className='fontAwe'/></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default TableDayOne;
