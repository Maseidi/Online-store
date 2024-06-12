import React, { createContext, useReducer, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductsPage from './views/ProductsPage'
import MainPage from './views/MainPage'
import Cart from './views/Cart'
import SingleProduct from './views/SingleProduct'
import { cart, cartReducer } from './store/cart'
import ProductCreation from './views/ProductCreation'

export const AppContext = createContext({})

const App = () => {
  const [deleted, setDeleted] = useState([])
  const [created, setCreated] = useState([])
  const [cartState, cartDispatch] = useReducer(cartReducer, cart)

  return (
    <AppContext.Provider
      value={{
        deleted,
        setDeleted,
        cartState,
        cartDispatch,
        created,
        setCreated
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products/create" element={<ProductCreation />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
