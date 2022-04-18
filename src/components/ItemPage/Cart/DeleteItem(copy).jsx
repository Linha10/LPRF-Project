
////購物車會顯示複數物品時使用



// {cart != [] && cart.length >= 1 ? cart.map((item, index) =>

//     <div className="shopping-info" key={index}>
//         <div className="item-name">{item.pName}</div>
//         <Image className="item-image" src={item.pImage}></Image>
//         <div className="item-price">{item.pPrize}</div>


//         <div className="amountCounter">                                               {/*itemCount ==1*/}
//             <input name="preferance" value="-" type="submit" className="border-0 minus" disabled={itemCount == 1 ? 'disable' : ''}
//                 onClick={
//                     () => { setItemCount(Math.max(itemCount - 1)); }}
//             />
//             <span className="qty-no" >{cart.length}</span>
//             {item >= 1 && item != 0}
//             <input name="preferance" value="+" type="submit" className="border-0 plus" disabled={itemCount == item.pAmount ? 'disable' : ''} onClick={
//                 //    () => {setItemCount(itemCount + 1 );}
//                 tryCounterPlus
//                 // ()=>{setCart(cart.push(item)); setItemCount(cart.length)}
//             }
//             />
//         </div>
//         <Button className="shopping-cart-button" variant="danger" onClick={DeleteThis}>Delete</Button>
//     </div>)
// : ''}

