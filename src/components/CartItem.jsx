import React, { useContext } from 'react'
import { AppContext } from '../App'
import { CHANGE_CART_AMOUNT } from '../store/actions'

const CartItem = (params) => {
  const chevRight = '../src/assets/images/chev-right.png'
  const chevLeft = '../src/assets/images/chev-left.png'
  const bin = '../src/assets/images/bin.png'

  const { cartDispatch } = useContext(AppContext)

  const { id, title, image, price, amount } = params

  const changeCardValue = (change) => {
    cartDispatch({
      type: CHANGE_CART_AMOUNT,
      payload: {
        id,
        title,
        img: image,
        price,
        amount: change
      }
    })
  }

  return (
    <div className="cart-item">
      <div className="cart-item-upper">
        <img src={image} alt={title} />
        <h1>{title}</h1>
      </div>
      <div className="cart-item-amount">
        <img
          src={chevLeft}
          alt="chev-left"
          onClick={() => changeCardValue(-1)}
        />
        <p>{amount}</p>
        <img
          src={chevRight}
          alt="chev-right"
          onClick={() => changeCardValue(1)}
        />
        <p>{(price * amount).toFixed(2)} $</p>
        <img src={bin} alt="bin" onClick={() => changeCardValue(-amount)} />
      </div>
    </div>
  )
}

export default CartItem
