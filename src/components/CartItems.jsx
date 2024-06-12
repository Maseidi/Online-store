import React, { useContext } from 'react'
import { AppContext } from '../App'
import '../style/cartItems.css'
import CartItem from './CartItem'
import Empty from './Empty'

const CartItems = () => {
  const { cartState, deleted } = useContext(AppContext)

  const total = cartState
    .filter((elem) => !deleted.includes(elem.id))
    .reduce((a, b) => a + b.amount * b.price, 0)

  const cartItems = cartState.filter((elem) => !deleted.includes(elem.id))

  return (
    <>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <Empty message={'your cart is empty!'} />
        ) : (
          cartItems.map((elem, index) => {
            return (
              <CartItem
                key={index}
                id={elem.id}
                title={elem.title}
                price={elem.price}
                image={elem.img}
                amount={elem.amount}
              />
            )
          })
        )}
      </div>
      {total !== 0 && <div className="total">total: {total.toFixed(2)}$</div>}
    </>
  )
}

export default CartItems
