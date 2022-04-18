import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./ItemPage copy.scss";
import context, { Provider } from "../context";
import * as R from "ramda";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import product_card from "../Shop/productdata";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import Image from "react-bootstrap/Image";
// import CheckOut from "./../CheckOut/CheckOut";
// import DeleteItem from "../Shop/Cart/DeleteItem";
import axios from "axios";
import Add_Cart from './Cart/AddCart';
import DeleteItem from './Cart/DeleteItem';

// import "./SingleProduct.css"

const ItemPage = () => {
  const contextValue = useContext(context);
  const { shopSingleItemList } = contextValue;
  const [show, setShow] = useState(false);
  const [showCart, setshowCart] = useState(0);
  const [currentHover, setCurrentHover] = useState("");
  const [cart, setCart] = useState([]);
  const [clickMe, setClickMe] = useState("");
  const [myColor, setmyColor] = useState("");
  const [singleItem, setSingleItem] = useState([]);
  const [myName, setMyName] = useState("");
  const [hasColor, setHasColor] = useState(true);
  // const buttons = ['']
  // console.log(cart)

  const WantThis1 = (event) => {
    setClickMe((clickMe) => event.target.id);
  };
  const handleShow = () => setShow(!show);
  // const handleClose = () => {
  //   setShow(false);
  // };

  const thisIsColor = (e) => {
    setmyColor(e.target.id);
    // alert(`選擇${e.target.id}`)
  };

  const addToCart = (item) => {
    console.log(item);
    setCart([...cart, item])
  }

  console.log('out of addToCart cart.length', cart.length)

  const CartClicked = () => {
    console.log("ok");
    setshowCart(!showCart);
  };

  const { pName } = useParams();

  const getSingleItem = async () => {
    await axios

      .post(`http://localhost:3400/shop/${pName}`, { pName: pName })
      .then((res) => {
        // console.log("get it");
        // console.log("res.data.result", res.data.result);
        let results = res.data.result;
        let singleItem = results.filter((item) => {
          // console.log("item.pColor", item.pColor);
          return item.pSize === "S" || item.pColor === null;
        });
        setSingleItem(singleItem);
        // console.log("singleItem", singleItem);
        setMyName(singleItem[0].pName);

        // console.log(singleItem);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleItem();
  }, []);


  // console.log("passing singleItem:", singleItem); //接收到的資料 
  // console.log('what Null Is :',null == undefined); true
  // console.log('singleItem[0]',singleItem[0]) //get an obj in an arr


  return (
    <Provider value={{
      cart: cart,
      setCart: setCart,
      // nowCart:nowCart
    }}>
      <div className={`likeThis`}>
        <div className={`shop_container`}>
          {/* <Provider value={contextValue}> */}
          <div className="item_page">
            <div className="product_info">
              <Fragment>
                <div className="product_name_oneProduct">
                  <div className="product_name_title">{myName}</div>
                </div>
                {singleItem.length && singleItem.length == 1 ? (
                  <div className="IMG_and_Btn">

                    {singleItem.map(onlyItem =>
                      <div className="image_size" key={onlyItem.pId}>
                        <div className="photo_area">
                          <Image src={onlyItem.pImage} className='soloProductIMG'></Image>
                        </div>
                        <div className="cart_btn_color">
                          {cart && cart.length >= 1 ? <Button
                            className="go_Buy_cart_btn_oneProduct"
                            variant={`secondary`}
                            onClick={() => addToCart(onlyItem)}
                            disabled={cart && cart.length >= 1 ? 'disable' : ''}
                          >

                            {/* <Add_Cart
                          item={singleItem}
                          cart={cart}
                          setCart={setCart}
                        /> */}
                            {/*單品*/}
                            <FaShoppingCart className="fookinCart" />
                            已加入購物車!
                          </Button> :
                            <Button
                              className="go_Buy_cart_btn_oneProduct"
                              variant={`secondary`}
                              onClick={() => addToCart(onlyItem)}
                              
                            >

                              {/* <Add_Cart
                        item={singleItem}
                        cart={cart}
                        setCart={setCart}
                      /> */}
                              {/*單品*/}
                              <FaShoppingCart className="fookinCart" />
                              加入購物車
                            </Button>}

                        </div>
                      </div>)}

                  </div>
                ) : (
                  <div className="second_div">
                    <div className="product_carousel">
                      <Carousel>
                        {singleItem.map((item) => {
                          console.log('item', item)
                          return (
                            <Carousel.Item interval={155500}>
                              <Image
                                key={item.pId}
                                className="carousel_img"
                                // src={require(`../shopImage/${itemImage}.png`)}
                                src={item.pImage}
                              ></Image>
                            </Carousel.Item>
                          );
                        })}
                      </Carousel>
                    </div>
                    <div className="whatType_U_Want">
                      <div className="product_select_oneProduct">
                        <div className="size_area">
                          <div className="product_size_oneProduct">Size</div>
                          <div className="prodoct_size_container">
                            <Button
                              variant={`${clickMe == "1"
                                ? "secondary"
                                : "outline-secondary"
                                }`}
                              id="1"
                              className="settingSize "
                              onClick={(id) => WantThis1(id)}
                              size="sm"
                            >
                              S
                            </Button>
                            {""}
                            <Button
                              variant={`${clickMe == "2"
                                ? "secondary"
                                : "outline-secondary"
                                }`}
                              id="2"
                              className="settingSize"
                              onClick={(id) => WantThis1(id)}
                              size="sm"
                            >
                              M
                            </Button>
                            {""}
                            <Button
                              variant={`${clickMe == "3"
                                ? "secondary"
                                : "outline-secondary"
                                }`}
                              id="3"
                              className="settingSize"
                              onClick={(id) => WantThis1(id)}
                              size="sm"
                            >
                              L
                            </Button>
                            {""}
                          </div>
                        </div>
                      </div>

                      <div className="product_color">
                        <h6 className="ColorText">Color</h6>
                        <div className="color_type">
                          <button
                            className={`btn btn-danger btn-lg ${myColor === "Red" ? "chooseMe" : ""
                              }`}
                            onClick={thisIsColor}
                            id="Red"
                          ></button>
                          {""}
                          <button
                            className={`btn btn-light btn-lg addBorder ${myColor === "White" ? "chooseMe" : ""
                              }`}
                            onClick={thisIsColor}
                            id="White"
                          ></button>
                          {""}
                          <button
                            className={`btn btn-dark btn-lg ${myColor === "Black" ? "chooseBalck" : ""
                              }`}
                            onClick={thisIsColor}
                            id="Black"
                          ></button>
                          {""}
                        </div>
                      </div>
                      <div className="cart_btn_color">
                        <Button
                          className="go_Buy_cart_btn"
                          variant={`secondary`}
                          onClick={CartClicked}
                        >
                          <FaShoppingCart className="fookinCart" />
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                {/* --測試共用購物車 */}

                {/* <div className="cart_btn_color"> */}
                {/* <Add_Cart/> */}
                {/* <Button
                        className="go_Buy_cart_btn_oneProduct"
                        variant={`secondary`}
                        onClick={CartClicked}
                      > */}

                {/* <FaShoppingCart className="fookinCart" />
                        Add to cart
                      </Button>
                    </div> */}
                {/* --測試共用購物車 */}
              </Fragment>
            </div>
          </div>
          <div
            className="showCaseDetail"
          // style={{visibility:show? 'visible':'hidden'}}
          > {/* Add to Cart自動觸發setShow展示 (未完成)*/}
            <div className="shopping-cart">

              <div className="sheet">
                {/* {singleItem.map(item => <DeleteItem
                  key={item.pId}
                  item={item}
                  cart={cart}
                  setCart={setCart} />)} */}
                {/* 多品項有問題 */}
                <DeleteItem
                  item={singleItem[0]}
                  cart={cart}
                  setCart={setCart}
                />
              </div>
              <button className="btn goToChecKThis">
                <Link to={`/shop/ItemPage/CheckOut`} className="linkName">
                  結帳
                </Link>
              </button>
              {/*Link 內網址修正*/}
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default ItemPage;
