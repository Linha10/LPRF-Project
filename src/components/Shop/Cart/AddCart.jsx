// import React, { useCallback, useState, useEffect, Fragment, useImperativeHandle, useContext } from "react";
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, } from "react-router-dom";
import Product_card from '../productdata';
import { createContext, useReducer,useState } from 'react';
import { Button } from "react-bootstrap";
import './Cart.scss'
// import try01 from '../shopImage/LoOpener.png'
 



const Add_Cart = ({ item, cart, setCart ,itemImage}) => {
    // const contextValue = useContext(context);
    // const { } = contextValue;

    const addToCart = (evt) => {
        console.log(evt);
        setCart([...cart , item])
        console.log([...cart,item])
    }

   
   

    return (
        <div className='cart-list'>
        <div className="product-box" key={item.pIndex}>
            <div className="product-img">
            <Link to={`/shop/${item.pName}`}>
            <img src={itemImage}></img>
            </Link>
        </div>
            <div className="cart_button">
                <Button  variant={'outline-secondary'} className="cartbutton go_Buy_cart_btn_oneProduct" 
                onClick={()=>addToCart(item)} >
                    <FaShoppingCart/></Button>
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