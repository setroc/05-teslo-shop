import { Box, CircularProgress, Typography } from "@mui/material"
import { FC } from "react"

export const FullScreenLoading:FC = () => {
  return (
    <Box 
        display='flex' 
        justifyContent='center' 
        alignItems='center' 
        height='calc(100vh - 200px)'
        flexDirection='column'
      >
        <Typography sx={{ marginBottom:3 }} variant="h2" >Cargando..</Typography>
        <CircularProgress thickness={2} />
      </Box>
  )
}