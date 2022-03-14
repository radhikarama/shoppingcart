import React, { useState } from 'react'
import { BrowserRouter} from 'react-router-dom'
import Header from './Components/FEnd/Header'
import Routers from './Components/RoutesF/Routers'
import Data from './Components/BEnd/Data'
const App = () => {
  const {Produtitems}=Data;
  const[cartItems,setCartItems]=useState([]);

  const Addproducthandler=(productItem)=>{
    const productExist=cartItems.find((item)=>item.id===productItem.id)
    console.log('first',productItem.id)
  if(productExist){
    setCartItems(cartItems.map((item)=>item.id===productItem.id ?
    {...productExist,quantity:productExist.quantity+1}
    :item)
     )
  }else{
    console.log(productItem.id)
    setCartItems([...cartItems ,{...productItem,quantity:1}])
  }
  }
  const handleRemoveproduct=(product)=>{
    const productExist=cartItems.find((item)=>item.id===product.id)
    if(productExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id!==product.id))
    }else{
      setCartItems(cartItems.map((item)=>item.id===product.id ?
      {...productExist,quantity:productExist.quantity-1}
      :item))
    }
  }
  const Clearcart=(cartItems)=>{
    setCartItems([])
  }
  return (
    <div>
      <BrowserRouter>
     <Header cartitems={cartItems}/>
    <Routers Produtitems={Produtitems} cartItems={cartItems}
     Addproducthandler={Addproducthandler}
     handleRemoveproduct={handleRemoveproduct}
     Clearcart={Clearcart}/>
      </BrowserRouter>
    </div>
  )
}

export default App