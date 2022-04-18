 import Image from 'react-bootstrap/Image';
import "./Cart.scss";
import { Button } from "react-bootstrap";
import { useState , useContext } from 'react';
import Add_Cart from './AddCart';
import Shop from '../Shop';
import context,{Provider} from '../../context';
import { AiOutlineDelete } from 'react-icons/ai';


const DeleteItem = ({ item}) => {
    const cart = useContext(context).cart;
    const setCart = useContext(context).setCart;
    const [itemCount, setItemCount] = useState(1);


    const DeleteThis = () => {
        console.log(item); 
        console.log(cart)
        setCart(cart.filter(cartItem => item.pId !== cartItem.pId))
        console.log(cart);

    }
    
 
   
    // c
    
    
    // const contextValue = useContext(context);
    // const {productImg ,setproductImg}=contextValue;

    return (
        
        <>
            {/* <Provider value={contextValue}> */}
            <div className="shopping_info" >
                <div className="all_cart">
                    <div className ={`item-image`}>
                        <Image className="item-image" src={item.pImage}></Image>
                    </div>
                    <div className='shopping_info_small'>
                        <div className={`item_name`}>{item.pName}</div>
                        <div className='item-price'>{item.pPrize}</div>
                        <div className='count_trash_can'>
                            <div className="amount_counter">
                                <input name="preferance" value="-" type="submit" className="border-0 minus" disabled={itemCount ==1 ? 'disable':''} onClick={() => {
                                    setItemCount(Math.max(itemCount - 1, 1));
                                    }} />
                                <span className="qty-no" >{itemCount}</span>
                                {item >= 1 && item !=0  }
                                <input name="preferance" value="+" type="submit" className="border-0 plus" disabled={itemCount==item.pAmount?'disable':''} onClick={() => {
                                    setItemCount(itemCount + 1 , 25);
                                }} />
                                {/* <div className='qty-no'>{cart.length}</div> */}
                            </div>
                            <div className='trash_can'>
                                <button className="shopping-cart-button" variant="danger" onClick={DeleteThis}><AiOutlineDelete className='trash_svg'/></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="item-name">{item.pName}</div>
                <Image className="item-image" src={item.pImage}></Image>
                <div className="item-price">{item.pPrize}</div>
                <div className="amountCounter">
                <input name="preferance" value="-" type="submit" className="border-0 minus" disabled={itemCount ==1 ? 'disable':''} onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 1));
                    }} />
                    <span className="qty-no" >{itemCount}</span>
                    {item >= 1 && item !=0  }
                    <input name="preferance" value="+" type="submit" className="border-0 plus" disabled={itemCount==item.pAmount?'disable':''} onClick={() => {
                        setItemCount(itemCount + 1 , 25);
                    }} />
                </div>
                <div className='delete-area'>
                <button className="shopping-cart-button" variant="danger" onClick={DeleteThis}><AiOutlineDelete/></button>
                </div> */}
            </div>
            {/* </Provider> */}
            

        </>   
      

    )
}


export default DeleteItem;