import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import Header from '../components/Header'
import Fields from '../components/SearchFields'
import Products from '../components/Products'
import '../style/products.css'
import { searchCommand, searchReducer } from '../store/search'
import { AppContext } from '../App'
import Empty from '../components/Empty'

export const ProductsContext = createContext({})

const ProductsPage = () => {

    const [products, setProducts] = useState([])
    const [searchState, searchDispatch] = useReducer(searchReducer, searchCommand)
    const {deleted, created} = useContext(AppContext)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                setProducts([...data, ...created].filter(elem => !deleted.includes(elem.id)))
            } catch ( err ) {
                console.log(err);
            }
        }
        getProducts()
    }, [])

  return (
    <ProductsContext.Provider value={{products, setProducts, searchState, searchDispatch}}>
        <div>
            <Header toProductCreation={true} toCart={true}/>
            <Fields/>
            {products.length === 0 ? <Empty message={'no prodcuts to show!'}/> : <Products/>}
        </div>
    </ProductsContext.Provider>
  )
}

export default ProductsPage