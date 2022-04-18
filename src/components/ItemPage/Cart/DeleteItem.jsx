import Image from 'react-bootstrap/Image';
import { Button } from "react-bootstrap";
import { useState, useContext, useEffect } from 'react';
import Add_Cart from './AddCart';
// import Shop from '../Shop';
import context, { Provider } from '../../context'; //sugar
import './Cart4ItemPage.scss'


const DeleteItem = ({ item }) => {
    const cart = useContext(context).cart;
    const setCart = useContext(context).setCart;
    const [itemCount, setItemCount] = useState(1);
    const [price , setPrice] = useState('');

    const DeleteThis = () => {
        // console.log('DeleteItem >> item: ' ,item); 
        console.log('DeleteItem >> cart.length: ', cart.length)
        setCart(cart.filter(cartItem => item.pId !== cartItem.pId))//會全部刪除
        //map cart array 挑index=1的刪除 ? 
    }
    //cart.length 放入itemCount , 點+後 複製一個新的item(這個單品)進入cart array ,此時cart.length會變為2=>成功+1
    // plus button Onclick 進行
    const tryCounterPlus = () => {
        console.log('starting plus')
        setCart([...cart, item]) //新增一筆item進入cart
        setItemCount(cart.length)
        console.log('End of plus')
    } //刷新counter數字變為現在的cartArr長度
    console.log('cart', cart)
    console.log('DeleteItem的item ', item)
    console.log('out cart.length', cart.length)

    const tryCouneterMinus = () => {
        console.log('starting Minus')
        setCart(cart.splice(1)) //刪除cartArr內的第一項(單品每項內容都相同)
        setItemCount(cart.length) //刷新counter數字
        console.log('End of Minus')
    }
    // const itemTotalPrice = item.pPrize * cart.length //單品金額乘上陣列長度 畫面更新 >> useState
    const howMuch = (price) => {
        console.log('price',price)
    }


    // const refreshCounter = () => {
    //     setItemCount(cart.length)
    // }
    // useEffect(() => {
    //     
    // }, [cart])
    return (

        <>
            {cart && cart.length >= 1 ?
                <div className='shopping-info2'>
                    <div className='paiban'>
                    <Image className="item-image" src={item.pImage}></Image>
                    <Button className="shopping-cart-button" variant="danger" onClick={DeleteThis}>delete</Button>
                    </div>
                    <div className='item-name'>{item.pName}</div>
                   
                    <div className="amountCounter">                                               {/*itemCount ==1*/}
                        <input name="preferance" value="-" type="submit" className="border-0 minus" disabled={cart.length == 1 ? 'disable' : ''}
                            onClick={tryCouneterMinus}
                        />
                        <span className="qty-no" >{cart.length}</span>                                                                                            
                        {item >= 1 && item != 0}
                        <input name="preferance" value="+" type="submit" className="border-0 plus" disabled={  cart.length == 5 || cart.length == item.pAmount ? 'disable' : ''} onClick={
                            //    () => {setItemCount(itemCount + 1 );} 限購五份
                            tryCounterPlus
                            // ()=>{setCart(cart.push(item)); setItemCount(cart.length)}
                        }
                        />
                         <div className="item-price" onChange={()=>howMuch(item.pPrize)}>{item.pPrize}</div>
                    </div>
                   
                    
                    
                </div>

                : ''}



        </>


    )
}




export default DeleteItem;