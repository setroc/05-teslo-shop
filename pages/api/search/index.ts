import type { NextApiRequest, NextApiResponse } from 'next'

import { db, SHOP_CONSTANTS } from '../../../database';
import { ProductModel } from '../../../models';

import { IProduct } from '../../../interfaces/products';

type Data = 
  | {message: string,ok: boolean}
  | {ok:boolean,products: IProduct[]}

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    default:
      return res.status(400).json({ok:false, message:'Bad request'});
  }
}
