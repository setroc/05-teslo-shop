import type { NextApiRequest, NextApiResponse } from 'next'

import { db, SHOP_CONSTANTS } from '../../../database';
import { ProductModel } from '../../../models';

import { IProduct } from '../../../interfaces/products';

type Data = 
  | {message: string,ok: boolean}
  | {ok:boolean,products: IProduct[]}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);
    default:
      return res.status(400).json({ok:false, message:'Bad request'});
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const {gender='all'} = req.query;
    let condition = {};
    if ( gender!=='all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
      condition = {gender};
    }
    await db.connect();
    const products = await ProductModel
                            .find(condition)
                            .select('title images price inStock slug -_id')
                            .lean();
    await db.disconnect();
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
