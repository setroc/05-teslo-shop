import { Grid, Typography } from "@mui/material"
import { FC } from "react"

export const OrderSummary:FC = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. productos: </Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3 productos</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>$ 156.35</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuetos (15%):</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>$ 26.35</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle1">Total: </Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography variant="subtitle1">$ 226.35</Typography>
      </Grid>
    </Grid>
  )
}