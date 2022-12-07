import { Close } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Paper } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Add, Remove } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';


const Cart = ({ handleRemoveItemFromCart, handleCartUpdate }) => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const navigate = useNavigate()

  return (
    <>
      {
        cart ? cart.line_items ? cart.line_items.length > 0 ? <>
          <main className='my-5'>
            <Container maxWidth="xxl">
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Box>
                    {
                      cart.line_items.map(product => <Box p={1} mb={3} key={product.id} component={Paper} className="shadow">
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={2}>
                            <img src={product.image ? product.image.url ? product.image.url : "http://dummy.tcdw.org/sqrpop" : "http://dummy.tcdw.org/sqrpop"} alt="product" className='img-fluid' />
                          </Grid>
                          <Grid item xs={12} sm={10}>
                            <Box className='d-flex justify-content-end'>
                              <IconButton onClick={() => handleRemoveItemFromCart(product.id)}><Close /></IconButton>
                            </Box>
                            <h5>{product.name}</h5>
                            <h6>{product.line_total.formatted_with_symbol}</h6>
                            <Box className='d-flex align-items-center'>
                              <IconButton className='me-2' onClick={() => handleCartUpdate(product.id, product.quantity - 1)}><Remove /></IconButton><Box><strong>{product.quantity}</strong></Box><IconButton className='ms-2' onClick={() => handleCartUpdate(product.id, product.quantity + 1)} ><Add /></IconButton>
                            </Box>
                            <button className='btn btn-danger my-3' >ADD TO CART</button>
                          </Grid>
                        </Grid>
                      </Box>)
                    }
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box p={2} className="shadow" component={Paper}>
                    <h4>Subtotal:</h4>
                    <h5>{cart.subtotal.formatted_with_symbol}</h5>
                    <hr />
                    <button className='btn btn-primary' onClick={()=>navigate('/checkout/')}>Checkout</button>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </> : "You Have No Item In Cart" : "You Have No Item In Cart" : "Loading..."
      }
    </>
  )
}

export default Cart