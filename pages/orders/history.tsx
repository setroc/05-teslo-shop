import { FC } from "react"
import NavLink from "next/link"

import { Chip, Grid, Link, Typography } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import { ShopLayout } from "../../components/layouts"

const columns: GridColDef[] = [
  { field:'id', headerName: 'ID', width:100 },
  { field:'fullName', headerName: 'Nombre Completo', width:300 },
  {
    field: 'paid',
    headerName:'Pagada',
    description:'Muestra información sobre si esta pagada o no la orden',
    width:200,
    renderCell: (params)=>{
      return (
        params.row.paid
        ? <Chip color="success" label="Pagado" variant="outlined"/>
        : <Chip color="error" label="No pagado" variant="outlined"/>
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    width:200,
    sortable:false,
    renderCell(params) {
      return (
        <NavLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always" sx={{color:'black'}}>
            Ver orden
          </Link>
        </NavLink>
      )
    },
  }

]

const rows = [
  { id:1, paid:false, fullName: 'Fernando Herrera', },
  { id:2, paid:true, fullName: 'Melisa Flores', },
  { id:3, paid:false, fullName: 'Eduardo Rios', },
  { id:4, paid:false, fullName: 'Natalia Herrera', },
  { id:5, paid:false, fullName: 'Fernando Herrera', },
  { id:6, paid:false, fullName: 'Fernando Herrera', },
]

export const HistoryPage:FC = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription="Historial de ordenes del cliente">
      <Typography variant="h1" component="h1">Historial de ordenes</Typography>
      <Grid container>
        <Grid item xs={12} sx={{height:650, width:'100%'}}>
          <DataGrid 
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage