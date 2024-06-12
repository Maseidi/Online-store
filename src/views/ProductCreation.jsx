import React from 'react'
import Header from '../components/Header'
import CreateFields from '../components/CreateFields'

const ProductCreation = () => {
  return (
    <div>
        <Header toProducts={true} toCart={true}/>
        <CreateFields/>
    </div>
  )
}

export default ProductCreation