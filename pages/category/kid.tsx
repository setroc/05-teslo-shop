import { FC } from "react"

import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"

import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";
import { ProductList } from "../../components/products";

interface Props {

}
const KidPage:FC<Props> = ({}) => {
  const {products, isLoading} = useProducts('/products?gender=kid');
  return (
    <ShopLayout
      title='Teslo-Shop - Kids' 
      pageDescription='Encunetra los mejores productos de niño en Teslo'
    >
      <Typography variant='h1' component='h1'>Niños</Typography>
      <Typography variant='h2' sx={{marginBottom:1}}>Todos los productos para niños</Typography>
      {
        isLoading
        ? <FullScreenLoading />
        : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default KidPage