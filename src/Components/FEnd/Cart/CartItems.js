import React from 'react'
import './CartItems.css'
const CartItems = ({cartItems,Addproducthandler,handleRemoveproduct,Clearcart}) =>
 {

    const Total_Price=cartItems.reduce((price,items)=>price+items.quantity * items.price,0)
  return (
    <div className='cart-items'>
        <div className='cartitems-header'>Cart items</div>
        <div >
            {cartItems.length >1 && (
            <button className='clear-cart' onClick={()=>Clearcart(cartItems)}>ClearCart</button>
            )}  
            </div>
       {
           cartItems.length===0 &&(
               <div className='empty-cart'>No Items are added</div>
           )}
          <div>
           {cartItems.map((item)=>(
               
            <div key={item.id} className='cartitem-list'>
      
                <img className='cartitems-image' src={item.image} alt={item.name}/>
                <div className='cartitem-name'>{item.name}</div>
                <div className='cartitem-functionality'>
                <button className='cart-items-add ' onClick={()=>Addproducthandler(item)}>+</button>
                <button className='cart-items-remove ' onClick={()=>handleRemoveproduct(item)}>-</button>
                </div>
                <div>
                    <h5 className='cartitem-price'>{item.quantity}*{item.price}</h5>
                </div>
                </div>  
           ))}
                
        
        </div>
      
        <div className='total-product-price'> Total_Price ::: ${Total_Price}</div>
    </div>
  )
}

export default CartItems