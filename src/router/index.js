import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SingleProduct, Home, Cart, Checkout } from '../pages/pages'

const Router = ({handleAddToCart, handleRemoveItemFromCart, handleCartUpdate}) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home handleAddToCart={handleAddToCart} />} />
                <Route path='/product/:permalink' element={<SingleProduct handleAddToCart={handleAddToCart} />} />
                <Route path='/cart/' element={<Cart handleRemoveItemFromCart={handleRemoveItemFromCart} handleCartUpdate={handleCartUpdate} />} />
                <Route path="/checkout/" element={<Checkout />} />
            </Routes>
        </>
    )
}

export default Router