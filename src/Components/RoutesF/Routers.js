import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CartItems from '../FEnd/Cart/CartItems'
import Product from '../Products/Product'

const Routers = ({Produtitems,cartItems,Addproducthandler,handleRemoveproduct,Clearcart}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Product Produtitems={Produtitems} cartItems={cartItems} Addproducthandler={Addproducthandler}/>}></Route>
            <Route path='/cart' element={<CartItems cartItems={cartItems}
             Addproducthandler={Addproducthandler}
             handleRemoveproduct={handleRemoveproduct}
             Clearcart={Clearcart}/>}></Route>
        </Routes>
    </div>
  )
}

export default Routers