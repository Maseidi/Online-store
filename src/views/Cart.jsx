import React from 'react'
import Header from '../components/Header'
import CartItems from '../components/CartItems'

const Cart = () => {
  return (
    <div>
      <Header toProductCreation={true} toProducts={true} />
      <CartItems />
    </div>
  )
}

export default Cart
