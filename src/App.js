import React, { useEffect } from 'react'
import commerce from './lib/commerce'
import { Box, Typography, IconButton, Badge } from '@mui/material'
import { ShoppingBag } from '@mui/icons-material'
import Router from './router'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from './redux/action/productAction'
import { generateCheckoutToken } from './redux/action/checkoutAction'
import { setCart } from './redux/action/cartAction'

const App = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer.cart)

  const fetchProducts = async () => {
    const { data: products } = await commerce.products.list();
    dispatch(setProducts(products))
  }

  const fetchCart = async () => {
    dispatch(setCart(await commerce.cart.retrieve()))
  }

  const handleAddToCart = async (productId, quantity) => {
    dispatch(setCart(await commerce.cart.add(productId, quantity)))
  }

  const handleRemoveItemFromCart = async (productId) => {
    dispatch(setCart(await commerce.cart.remove(productId)))
  }

  const handleCartUpdate = async (productId, quantity) => {
    dispatch(setCart(await commerce.cart.update(productId, { quantity })))
  }

  const handlegenerateCheckoutToken = async () => {
    const checkoutToken = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    dispatch(generateCheckoutToken(checkoutToken))
  }

  useEffect(() => {
    fetchCart()
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (cart.id !== undefined) { handlegenerateCheckoutToken() }
  },[cart])

  return (
    <>
      <header className='shadow d-flex p-2'>
        <Box>
          <Typography variant='h1' style={{ fontSize: "2rem" }}><Link to="/" className='text-decoration-none text-dark'>Shop</Link></Typography>
        </Box>
        {
          location.pathname !== "/cart/" ? <><Box className='flex-grow-1' />
            <Box>
              <IconButton onClick={() => navigate('/cart/')}>
                <Badge color='secondary' badgeContent={cart.total_items}>
                  <ShoppingBag />
                </Badge>
              </IconButton>
            </Box></> : null
        }
      </header>
      <Router handleAddToCart={handleAddToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} handleCartUpdate={handleCartUpdate} />
    </>
  )
}

export default App