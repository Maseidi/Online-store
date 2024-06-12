import React from 'react'
import { Link } from 'react-router-dom'
import '../style/header.css'

const Header = (params) => {
  const {
    toProducts = false,
    toProductCreation = false,
    toCart = false
  } = params

  const cart = '../src/assets/images/shopping-cart.png'

  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1>asghar online store</h1>
        </Link>
        {toProducts && (
          <Link to="/products">
            <h2>products list</h2>
          </Link>
        )}
        {toProductCreation && (
          <Link to="/products/create">
            <h2>create product</h2>
          </Link>
        )}
      </div>
      {toCart && (
        <Link to="/cart">
          <img className="cart-img" src={cart} alt="cart" />
        </Link>
      )}
    </div>
  )
}

export default Header
