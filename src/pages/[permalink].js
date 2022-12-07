import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSingleProduct, removeSelectedProduct } from '../redux/action/productAction'
import commerce from '../lib/commerce'
import { Container, Grid, Box, Typography, IconButton, Button } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

const SingleProduct = ({ handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1)
  const { permalink } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.singleProductReducer.product)

  const fetchProduct = async () => {
    const response = await commerce.products.retrieve(permalink, { type: 'permalink' });
    dispatch(setSingleProduct(response))
  }

  useEffect(() => {
    if (permalink) {
      fetchProduct()
    }
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [])

  return (
    <>
      {
        product ? <>
          <main>
            <Container maxWidth="xxl" className="my-5">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  {
                    product ? product.image ? product.image.url ? <Box>
                      <img src={product.image.url} className='img-fluid' alt='product' />
                    </Box> : <Box>
                      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ1WTybaZOrpdFETEjp60oPBx0BVXTn3Q4uqsTnKSww8LB_F4IR2RV1im03isOdUo5Lg&usqp=CAU'} className='img-fluid' alt='dummy' />
                    </Box> : <Box>
                      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ1WTybaZOrpdFETEjp60oPBx0BVXTn3Q4uqsTnKSww8LB_F4IR2RV1im03isOdUo5Lg&usqp=CAU'} className='img-fluid' alt='dummy' />
                    </Box> : <Box>
                      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQ1WTybaZOrpdFETEjp60oPBx0BVXTn3Q4uqsTnKSww8LB_F4IR2RV1im03isOdUo5Lg&usqp=CAU'} className='img-fluid' alt='dummy' />
                    </Box>
                  }
                </Grid>
                <Grid item xs={12} md={6}>
                  <h1>{product ? product.name ? product.name : null : null}</h1>
                  <Box className='d-flex align-items-center'>
                    <IconButton onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)} className='me-2'><Remove /></IconButton><Box><strong>{quantity}</strong></Box><IconButton className='ms-2' onClick={() => setQuantity(quantity + 1)}><Add /></IconButton>
                  </Box>
                  <button className='btn btn-danger my-3' onClick={() => handleAddToCart(product.id, quantity)}>ADD TO CART</button>
                  <div dangerouslySetInnerHTML={{ __html: product.description }} />
                </Grid>
              </Grid>
            </Container>
          </main>
        </> : "Loading..."
      }
    </>
  )
}

export default SingleProduct