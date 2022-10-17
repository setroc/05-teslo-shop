import { FC } from "react"

import { Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"

import { useProducts } from "../../hooks";
import { FullScreenLoading } from "../../components/ui";
import { ProductList } from "../../components/products";

interface Props {

}
const MenPage:FC<Props> = ({}) => {
  const {products, isLoading} = useProducts('/products?gender=men');
  return (
    <ShopLayout
      title='Teslo-Shop - Home' 
      pageDescription='Encunetra los mejores productos de hombre en Teslo'
    >
      <Typography variant='h1' component='h1'>Hombre</Typography>
      <Typography variant='h2' sx={{marginBottom:1}}>Todos los productos para hombres</Typography>
      {
        isLoading
        ? <FullScreenLoading />
        : <ProductList products={products} />
      }
    </ShopLayout>
  )
}

export default MenPage