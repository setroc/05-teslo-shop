import { FC } from "react"
import NextLink from 'next/link';

import { Box, Link, Typography } from "@mui/material"

import { ShopLayout } from "../../components/layouts"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"

export const EmptyPage:FC = () => {
  return (
    <ShopLayout
      title='Carrito vacío :('
      pageDescription='No hay artículos en el carrito de compras'
    >
      <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
        flexDirection='column'
        gap='50px'
      >
        <Box display='flex' flexDirection='row' alignItems='center' gap='10px' >
          <RemoveShoppingCartOutlined sx={{ fontSize: 70 }}/>
          <Typography >Su carrito está vacío :(</Typography>
        </Box>
        <NextLink href='/' passHref>
          <Link typography='h4' color='secondary'>
            Regresar
          </Link>
        </NextLink>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage