import React from 'react'
import './Product.css'
const Product = ({Produtitems , cartitems,Addproducthandler}) => {
  return (
    <div className='products'>

       {
       Produtitems.map((productItem)=>(
           <div className='card'>
<div>
    <img  className='product-img' src={productItem.image} alt={productItem.name}/>
</div>
<div>
    <h3 className='product-name'>Name : {productItem.name}</h3>
</div>
<div>
    <h3 className='product-name'>Price : ${productItem.price}</h3>
</div>
<div>
<button className='product-button' 
onClick={()=>Addproducthandler(productItem)}>
  Add Item</button>
           </div>
           </div>
           
       ))
       }
    </div>
  )
}

export default Product