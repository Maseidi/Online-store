import React, { useContext, useState } from 'react'
import '../style/product.css'
import NumberField from './NumberField'
import { AppContext } from '../App'
import { CHANGE_CART_AMOUNT } from '../store/actions'

const Product = (params) => {
  const { cartDispatch } = useContext(AppContext)
  const { id, title, description, price, category, img } = params

  const [amount, setAmount] = useState(0)

  const addToCart = () => {
    cartDispatch({
      type: CHANGE_CART_AMOUNT,
      payload: { id, title, description, price, category, img, amount }
    })
  }

  return (
    <div className="product">
      <div className="upper">
        <img className="image" src={img} alt={title} />
        <h1 className="title">{title}</h1>
      </div>
      <p className="desc">{description}</p>
      <p className="category">category: {category}</p>
      <p className="price">price: {price}$</p>
      <div className="add-to-cart">
        <NumberField
          id={'amount'}
          label={'amount'}
          min={0}
          max={100}
          callBackFn={setAmount}
        />
        <div>
          <p>total: {(amount * price).toFixed(2)} $</p>
        </div>
        <div>
          <button onClick={addToCart}>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
