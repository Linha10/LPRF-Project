// import React, { useCallback, useState, useEffect, Fragment, useImperativeHandle, useContext } from "react";
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, } from "react-router-dom";
import { createContext, useReducer,useState } from 'react';
// import try01 from '../shopImage/LoOpener.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";


 



const Add_Cart = ({ item, cart, setCart ,itemImage}) => {
    // const contextValue = useContext(context);
    // const { } = contextValue;

    const addToCart = (evt) => {
        console.log('what is in cart -1 :',cart)
        setCart([...cart , item])
        console.log('what is in cart -2 :',cart)
        console.log(item)
    }
// console.log(item)
    
   
   

    return (
        <div className='cart-list'>
            <div className="product-box" key={item.pIndex}>
                <div className="product-img">
                <Link to={`/shop/${item.pName}`}>
                <img src={itemImage}></img>
                </Link>
            </div>
                <div className="">
                    <Button  variant={'outline-secondary'} className="cartbutton go_Buy_cart_btn_oneProduct" 
                    onClick={()=>addToCart(item)} >
                        <FaShoppingCart/>Add to Cart</Button>
                    {/* <button className="listbutton"><FaRegHeart/></button> */}
                </div>


                <div className="product-details">
                    <h6>{item.pName}</h6>
                    <h6><strong>${item.pPrize}</strong></h6>
                </div>
            </div>
        </div>

    )
}

export default Add_Cart;