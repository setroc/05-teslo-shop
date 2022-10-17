import { FC } from "react"

import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"

import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";
import { ProductList } from "../../components/products";

interface Props {

}
const WomenPage:FC<Props> = ({}) => {
  const {products, isLoading} = useProducts('/products?gender=women');
  return (
    <ShopLayout
      title='Teslo-Shop - Women' 
      pageDescription='Encunetra los mejores productos de mujer en Teslo'
    >
      <Typography variant='h1' component='h1'>Mujeres</Typography>
      <Typography variant='h2' sx={{marginBottom:1}}>Todos los productos para mujeres</Typography>
      {
        isLoading
        ? <FullScreenLoading />
        : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default WomenPage