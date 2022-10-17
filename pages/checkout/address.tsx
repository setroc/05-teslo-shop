import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { FC } from "react"
import { ShopLayout } from "../../components/layouts"

export const AddressPage:FC = () => {
  return (
    <ShopLayout title='Dirección' pageDescription='Confirmar dirección del destion'>
      <Typography variant='h1' component='h1'>Dirección</Typography>
      <Grid container spacing={2} sx={{mt:2}}>

        <Grid item xs={12} sm={6}>
          <TextField label='Nombre' variant='standard' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Apellidos' variant='standard' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Dirección' variant='standard' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Dirección 2 (opcional)' variant='standard' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label='Código Postal' variant='standard' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Ciudad' variant='standard' fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>País</InputLabel>
            <Select
              variant='standard'
              label='País'
              value={1}
              sx={{height:'100%'}}
            >
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>México</MenuItem>
              <MenuItem value={3}>Colombia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Teléfono' variant='standard' fullWidth />
        </Grid>
      </Grid>

      <Box sx={{mt:5}} display='flex' justifyContent='center' >
        <Button color='secondary' className='circular-btn' size='large' sx={{width:{xs:'100%', sm:'auto'}}}>
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage