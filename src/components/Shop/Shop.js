import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useImperativeHandle,
  useContext,
} from "react";
import "./Shop.scss";
import * as R from "ramda";
import context, { Provider } from "./../context";
import product_card from "./productdata";
import { Button } from "react-bootstrap";
import AddCart from "./Cart/AddCart";
import DeleteItem from "./Cart/DeleteItem";
import ItemPage from "../ItemPage/ItemPage";
import axios from "axios";
// import '../ItemPage/ItemPage.css';

const Shop = () => {
  const [shopItemList, setShopItemList] = useState({});
  const [shopSingleItemList, setShopSingleItemList] = useState([]);
  const [currentHoverButtonType, setCurrentHoverButtonType] = useState("");
  const contextValue = useContext(context);
  const {} = contextValue;
  const [cart, setCart] = useState([]);
  const handleGetItem = () => {
    let results;
    axios
      .get("http://localhost:3400/shop/product_display")
      .then(function (response) {
        results = response.data;
        // setShopSingleItemList(results);
        // console.log("shopSingleItemList", shopSingleItemList);
        
        var newResults = results.filter((item) => {
          return (
            (item.pColor == "Black" && item.pSize == "S") || item.pSize == null
          );
        });
        const test = newResults.reduce((target, item , index) => {
          target[item.pName] = item ; // 目標[項目數(尋訪)] = 要抓的資料  key=現在的目標
          console.log('item', item);
          console.log('target',target);
          return target;
        },{}
        
        )
        setShopItemList(test);
        console.log('shopItemList',shopItemList)
       
        // setShopItemList(newResults); // success

        // const objType = newResults.reduce((now , next , currIndex) => {
        //   console.log('now',now)
        //   console.log('next',next.pName)
        //   now[next.pName]  = currIndex
        //   return now ; 
        // },{})
      })
      .catch((error) => {
        console.log("shop_display_error", error);
      });
  };
  // console.log('shopItemList out ',shopItemList)

  useEffect(() => {
    handleGetItem();
  }, []);
  console.log('shopItemList out',shopItemList)

  return (
    <Provider
      value={{
        cart: cart,
        setCart: setCart,
      }}
    >
      <div className={`shop_container shopScss`}>
        <button className="nav_cart">{cart.length}</button>
        {/* <div
          className="shopping-cart"
          style={{ display: cart.length === 0 ? "none" : "block" }}
        >
          {cart.map((item) => (
            <DeleteItem setCart={setCart} item={item} cart={cart} />
          ))}
        </div> */}
        <div className="shopping-cart-footer">
          <div className="shopping-cart-total">Total:</div>
          <div className="check-out">
            <Button className="check-out-button" variant="success">
              Check out
            </Button>
          </div>
        </div>
        <div className="product-all">
          <div className="product-container">
            {/* <Fragment>
              {shopItemList.map((item) => (
                <AddCart
                  item={item}
                  cart={cart}
                  setCart={setCart}
                  itemImage={item.pImage}
                />
              ))}
            </Fragment> */}
          </div>
        </div>
        {/* </Provider> */}
      </div>
    </Provider>
  );
};

export default Shop;
