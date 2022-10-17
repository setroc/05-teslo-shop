import { Box, Typography } from "@mui/material";
import { FC } from "react"
import { ShopLayout } from '../components/layouts';

export const Custom404:FC = () => {
  return (
    <ShopLayout title="Página no encontrada" pageDescription="No hay nada que mostrar aqui">
      <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
        sx={{
          flexDirection:{
            xs:'column',
            sm: 'row'
          }
        }}
      >
        <Typography 
          variant='h1' 
          component='h1' 
          fontSize={60} 
          fontWeight={200}
          marginRight={2} 
        >
          404
        </Typography>
        <Typography 
          variant='h1' 
          component='h1'
          fontSize={60} 
          fontWeight={200} 
          sx={{
            display: {
              xs: 'none',
              sm: 'block'
            }
          }}
        >
          |
        </Typography>
        <Typography marginLeft={2}  >Página no encontrada :(</Typography>

      </Box>
    </ShopLayout>
  )
}

export default Custom404