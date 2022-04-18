import './CheckOut.scss';
import React, { useCallback, useState, useEffect, Fragment, useContext, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "../context";
import * as R from "ramda";
import context from "../context";
// import CrditCard from "./CreditCard";
import MyModal from "./Mymodal";
import { Modal } from "react-bootstrap";


const CheckThis = () => {
    const contextValue = useContext(context);
    const { } = contextValue;
    const [payment, setPayment] = useState('cash');
    const handleChange = (event) => {
        setPayment(event.target.value)
    }
    const [lgShow, setLgShow] = useState(false);

    const handleShow = () => setLgShow(true);
    const [itemCount, setItemCount] = useState(1);





    return (

        <div className={`CheckThis_container`}>
            <Provider value={contextValue}>
                <div className="____">

                    <div className="header"></div>
                    <div className='container'>
                        <div className="main">
                            <div className="rows accou">
                                <div className="col-6 formContainer d-flex flex-wrap">

                                    <div className="contact-tag" onsubmit="JavaScript:alertZero()">
                                        <div className="contact heads" >
                                            <span>Contact infomation</span>
                                        </div>

                                        <div className="contact-type"></div>
                                        <div className="email-label">
                                            <label for="email" className="label-heads">E-mail</label>
                                            <br></br>
                                            <input type="email" id="email" name="Email: " placeholder="Enter your email..." class="contain" required></input>
                                        </div>
                                        <div id="call-label">
                                            <label for="tel" className="label-heads">Phone</label>
                                            <br></br>
                                            <input type="tel" id="tel" name="Phone: " pattern="[+][0-9]{2}[0-9]{10}" placeholder="Enter your phone..." class="contain" required></input>
                                        </div>

                                        <div id="address" className="heads">
                                            <span>Shipping address</span>
                                        </div>

                                        <div id="name-label">
                                            <div for="name" className="label-heads">Full name</div>
                                            <br></br>
                                            <input type="name" id="name" placeholder="Your name..." className="contain" name="Name: " required></input>
                                        </div>

                                        <div className="add-label">
                                            <label for="add" className="label-heads">Address</label>
                                            <br></br>
                                            <input type="text" id="add" placeholder="Your address.." className="contain" name="Address: " required></input>
                                        </div>

                                        <div id="city-label">
                                            <label for="city" className="label-heads">City</label>
                                            <br></br>
                                            <input type="text" id="city" placeholder="Your city.." className="contain" name="City: " required></input>
                                        </div>

                                        <div className="country-label">
                                            <label for="country" className="label-heads">Country</label>
                                            <br></br>
                                            <select id="dropdown" className="contain" placeholder="Your country.." required name="Country: ">
                                                <option disabled selected value>Your country..</option>
                                                <option value="Taipei">台北</option>
                                                <option value="Taichung">台中</option>
                                                <option value="Kaohsiung">高雄</option>
                                            </select>
                                        </div>

                                        <div id="zip-label">
                                            <label for="zip-input" className="label-heads">Postal code</label>
                                            <br></br>
                                            <input type="text" pattern="[0-9]*" maxlength="6" required name="PIN Code: " placeholder="Your postal code.." id="zip-input" class="contain"></input>
                                        </div>

                                        <div id="payment-shipping" >
                                            <div><input type="radio" value="cash" />現金
                                            </div>
                                            {/* <div><input type="radio" value="credit-card" checked={payment === 'credit-card'} onChange={handleChange}/> Credit card</div> */}
                                            <input type='radio'/>信用卡
                                        </div>
                                    </div>


                                    <div id="submit-label">
                                    {/* onClick={() => setLgShow(true)} */}
                                        
                                        <Link to={`/shopPayment`} className='linkName'><input name="preferance" value="Order" type="submit" id="subbtn"  /></Link>
                                        {/* <Modal
                                            size="lg"
                                            show={lgShow}
                                            onHide={() => setLgShow(false)}
                                            aria-labelledby="example-modal-sizes-title-lg">
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-lg">
                                                    Love & Peace
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>您的訂單已成立！感謝您的購買</Modal.Body>
                                        </Modal> */}
                                    </div>
                                    
                                </div>


                                <div className="left-cart">

                                    <div className="item-row" id="itm-row1">
                                        {/* <img className="pic" alt="img-1" src={[require("../Shop/shopImage/LoTshirt-red.png")]}></img> */}
                                        <h4 className="item1 item-label">Logo T-shirt</h4>
                                        <h4 className="item1 item-label">Red</h4>
                                        <h4 className="item1 item-label">S</h4>
                                        <p className="item1">
                                            <span className="spl">$550</span>
                                        </p>
                                        <p className="qty">
                                            <input name="preferance" value="-" type="submit" className="btn-no minus" onClick={() => {
                                                setItemCount(Math.max(itemCount - 1, 0));
                                            }} />
                                            <span className="qty-no" >{itemCount}</span>
                                            <input name="preferance" value="+" type="submit" className="btn-no plus" onClick={() => {
                                                setItemCount(itemCount + 1);
                                            }} />
                                        </p>
                                    </div>

                                    {/* <div className="details horizontal" id="hr1">

                                        <div className="details">
                                            <div className="detail-title">
                                                Total:
                                                <span className="total-price" id="tp"></span>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        </div>
    );
};
export default CheckThis;
