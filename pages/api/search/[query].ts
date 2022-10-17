import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { ProductModel } from '../../../models';
import { IProduct } from '../../../interfaces/products';

type Data = 
  | {message: string, ok: boolean}
  | {ok:boolean, products:IProduct[]} 

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return searchProducts(req, res);
    default:
      return res.status(400).json({ok:false, message:'Bad request'});
  }
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    let {query=""} = req.query;
    console.log(req.query)
    if ( query.length === 0 ) {
      return res.status(400).json({
        ok: false,
        message: 'Debe especificar el query de busqueda'
      })
    }
    query=query.toString().toLowerCase();
    await db.connect();
    const products = await ProductModel.find({
      $text: {$search:query}
    })
      .select('title images price inStock slug -_id')
      .lean();
    await db.disconnect();
    if (products.length===0) {
      return res.status(400).json({
        ok: false,
        message: 'No existe un producto con ese query'
      })
    }
    return res.status(200).json({
      ok: true,
      products
    })
  } catch (error) {

    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Error en el servidor. Contactar al administrador'
    })
  }
}
