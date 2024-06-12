import React from 'react'
import '../style/main.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const MainPage = () => {
    
  return (
        <>
            <Header toProducts={true} toProductCreation={true} toCart={true}/>
            <div className='main-menu-box'>
                <div>
                    <Link to='/products'>
                        <button className='main-menu-btn'>products list</button>
                    </Link>
                    <Link to='/products/create'>
                        <button className='main-menu-btn'>create product</button>
                    </Link>
                    <Link to='/cart'>
                        <button className='main-menu-btn'>my cart</button>
                    </Link>
                </div>
            </div>
        </>
  )
}

export default MainPage