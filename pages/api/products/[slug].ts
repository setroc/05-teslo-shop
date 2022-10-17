import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '../../../database';
import { IProduct } from '../../../interfaces';
import { ProductModel } from '../../../models';

type Data = 
  | {message: string, ok: boolean}
  | {ok:boolean, product: IProduct}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req,res)
    default:
      return res.status(400).json({ok:false, message:'Bad request'});
  }
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { slug } = req.query;
  try {
    await db.connect();
    const product = await ProductModel.findOne({slug}).lean();
    if (!product) {
      await db.disconnect();
      return res.status(404).json({
        ok: false,
        message: `El producto ${slug} no existe`
      })
    }
    await db.disconnect();
    return res.status(200).json({
      ok: true,
      product
    })
    
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: 'Error en el servidor. Contactar al administrador'
    })
  }
}
