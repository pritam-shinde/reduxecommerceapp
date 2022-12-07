import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Container, Fab, Grid, LinearProgress, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { ShoppingBag } from '@mui/icons-material'


const Home = ({handleAddToCart}) => {
  const products = useSelector((state)=> state.productReducer.products)
  return (
    <>
    <main>
                <Container maxWidth="xxl" className='py-3'>
                    {
                        products.length > 0 ? <Grid container spacing={3}>
                            {
                                products.map(product => <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                                    <Box component={Paper} className="shadow">
                                        <Box>
                                            <img src={product.image ? product.image.url ? product.image.url : "http://dummy.tcdw.org/sqrpop" : "http://dummy.tcdw.org/sqrpop"} className='img-fluid' alt="product" />
                                        </Box>
                                        <Box p={1}>
                                            <Typography variant='h5' align='center'><Link to={`product/${product.permalink}`} className="text-decoration-none text-dark">{product.name}</Link></Typography>
                                            <Typography variant="h6" align='center' className='text-danger'>{product.price.formatted_with_symbol}</Typography>
                                            <Box my={2} className="d-flex justify-content-end">
                                                <Fab color='primary' onClick={()=>handleAddToCart(product.id, 1)}>
                                                    <ShoppingBag />
                                                </Fab>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>)
                            }
                        </Grid> : <Box>
                            <LinearProgress />
                        </Box>
                    }
                </Container>
            </main>
    </>
  )
}

export default Home