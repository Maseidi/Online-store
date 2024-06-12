import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { ProductsContext } from '../views/ProductsPage'

const ProductCard = (params) => {

    const {deleted, setDeleted} = useContext(AppContext)

    const {products, setProducts} = useContext(ProductsContext)
    
    const {title, description, price, category, img, id} = params

    const deleteProduct = () => {
      const idToDelete = Number(id)
      const deletedCopy = deleted
      deletedCopy.push(idToDelete)
      setDeleted(deletedCopy)
      setProducts(products.filter(p => p.id !== idToDelete))
    }

  return (
    <div className='product-card'>
        <img className='image' src={img} alt={title}/>
        <h1 className='title'>{title}</h1>
        <p className='desc'>{description}</p>
        <p className='category'>category: {category}</p>
        <p className='price'>{price}$</p>
        <div className='options'>
          <Link to={`/products/${id}`}>
            <button className='details'>details</button>
          </Link>
          <button className='delete' onClick={deleteProduct}>delete</button>
        </div>
    </div>
  )
}

export default ProductCard