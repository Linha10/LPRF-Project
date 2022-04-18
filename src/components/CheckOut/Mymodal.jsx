import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import './Mymodal.scss';
// import 'bootstrap/dist/css/bootstrap.css';

// Home.js  >>import MyModal from "./Mymodal";

function MyModal() {
    const [goStart, setGoStart] = useState(false)
    const start = () => {
        console.log(goStart)
        setGoStart(!goStart)

    }

    function closeMe() {
        console.log('closeMe Start ! boolen:', goStart)
        setGoStart(!goStart)
    }

    return (
        <div>
            <div className="credit-btn">
                <input type="radio" className="radioC"></input>
            <div  id="urBtnSetting" className="test"  onClick={start}>Credit Card</div>
            </div>
            <div id="myModal" className="modal urModalTest" style={{ display: goStart ? 'block' : 'none' }}>

                <div className="modal-content urModal-content">
                    <div className="modal-header">
                        <h2 className="myTitle">信用卡資訊</h2>
                        <span className="clsBtn" onClick={closeMe}>&times;</span> 
                    </div>
                    <div className="modal-body urModal-body">
                    <div className="panel panel-default credit-card-box">
                                <div className="panel-heading display-table" >
                                    <div className="row display-tr" >
                                        <div className="display-td" >
                                            {/* <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"></img> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <form role="form" id="payment-form">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlfor="cardNumber">信用卡號</label>
                                                    <div className="input-group">
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            name="cardNumber"
                                                            placeholder="Valid Card Number"
                                                            autoComplete="cc-number"
                                                            required autofocus
                                                        />
                                                        <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <label htmlfor="cardExpiry"><span className="hidden-xs">信用卡到期日</span></label>
                                                    {/* <span className="visible-xs-inline">EXP</span> DATE */}
                                                    <input type="tel" className="form-control" name="cardExpiry" placeholder="MM / YY" autocomplete="cc-exp" required />
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="form-group-CV">
                                                    <label htmlfor="cardCVC" className="cardCVC">安全碼</label>
                                                    <input type="tel" className="form-control cvCode" name="cardCVC" placeholder="CVC" autoComplete="cc-csc" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlfor="couponCode">總額：1100</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <button className="btn btn-success btn-lg btn-block submit" type="submit" onClick={closeMe}>確認</button>
                                            </div>
                                        </div>
                                        <div className="row ABC" >
                                            <div className="col-xs-12">
                                                <p className="payment-errors"></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                    {/* <div className="modal-footer urModal-footer">
                        <h3>Modal Footer</h3>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default MyModal;