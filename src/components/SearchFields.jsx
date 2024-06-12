import React, { useContext } from 'react'
import TextField from './TextField'
import NumberField from './NumberField'
import Combo from './Combo'
import { CHANGE_CATEGORY, CHANGE_MAX_PRICE, CHANGE_MIN_PRICE, CHANGE_TITLE } from '../store/actions'
import { AppContext } from '../App'
import { ProductsContext } from '../views/ProductsPage'

const valueMap = [
    {value: '', option: 'none'},
    {value: "men's clothing", option: "men's clothing"},
    {value: "women's clothing", option: "women's clothing"},
    {value: "electronics", option: "electronics"},
    {value: "jewelery", option: "jewelery"},
]

const SearchFields = () => {

    const {searchState, setProducts, searchDispatch} = useContext(ProductsContext)

    const {deleted, created} = useContext(AppContext)

    const search = () => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                let data = await res.json()
                setProducts(filterProducts(data))
            } catch ( err ) {
                console.log(err);
            }
        }
        getProducts()
    }

    const filterProducts = (data) => {
        const {title, minPrice, maxPrice, category} = searchState
        return Array.from([...data, ...created])
            .filter(elem => !deleted.includes(elem.id))
            .filter(elem => title === '' || elem.title.toLowerCase().includes(title.toLowerCase()))
            .filter(elem => minPrice === '' || elem.price >= Number(minPrice))
            .filter(elem => maxPrice === '' || elem.price <= Number(maxPrice))
            .filter(elem => category === '' || elem.category === category)
    }

  return (
    <div className='fields'>
        <TextField id={'title'} label={'title'} type={CHANGE_TITLE} dispatch={searchDispatch}/>
        <NumberField id={'min-price'} label={'minimum price'} min={0} max={1000000} type={CHANGE_MIN_PRICE} dispatch={searchDispatch}/>
        <NumberField id={'max-price'} label={'maximum price'} min={0} max={1000000} type={CHANGE_MAX_PRICE} dispatch={searchDispatch}/>
        <Combo id={'category'} label={'category'} valueMap={valueMap} type={CHANGE_CATEGORY} dispatch={searchDispatch}/>
        <div><button onClick={search}>search</button></div>
    </div>
  )
}

export default SearchFields