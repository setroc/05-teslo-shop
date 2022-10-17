import { FC } from "react";
import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";

import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from '../../components/layouts';

export const OrderPage:FC = () => {
  return (
    <ShopLayout title='Resumen de la compra 12321323' pageDescription='Resumen de la compra'>
      <Typography variant='h1' component='h1'>Orden: ABC123</Typography>

      {/* <Chip 
        sx={{my:2,px:1}}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip 
        sx={{my:2,px:1}}
        label='Orden pagada'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />

      <Grid container mt={2}>
        <Grid item xs={12} sm={7} sx={{paddingRight:{xs:'0px',sm:'5px'}}}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5} sx={{paddingLeft:{xs:'0px',sm:'5px'}}}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{marginY:1}} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline="always" color='inherit'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography >Fernando Herrera</Typography>
              <Typography >233 Algún lugar</Typography>
              <Typography >Stitsville, HYA 235</Typography>
              <Typography >Canada</Typography>
              <Typography >+1 1231231239</Typography>

              <Divider sx={{marginY:1}} />

              {/* order summary */}
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref>
                  <Link underline="always" color='inherit'>
                    Editar
                  </Link>
                </NextLink>
              </Box>
              <OrderSummary />

              <Box sx={{ marginTop:3 }} >
                <h1>Pagar</h1>
                <Chip 
                  sx={{my:2,px:1}}
                  label='Orden pagada'
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </ShopLayout>
  )
}

export default OrderPage