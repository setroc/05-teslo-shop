import { FC } from "react"
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";

import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from '../../components/layouts';

export const CartPage:FC = () => {
  return (
    <ShopLayout title='Carrito - 2' pageDescription='Carrito de compras de la tienda'>
      <Typography variant='h1' component='h1'>Carrito</Typography>
      <Grid container>
        <Grid item xs={12} sm={7} sx={{paddingRight:{xs:'0px',sm:'5px'}}}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5} sx={{paddingLeft:{xs:'0px',sm:'5px'}}}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Orden</Typography>
              <Divider sx={{marginY:1}} />
              {/* order summary */}
              <OrderSummary />

              <Box sx={{ marginTop:3 }} >
                <Button color='secondary' className='circular-btn' fullWidth >
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default CartPage