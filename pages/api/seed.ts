import type { NextApiRequest, NextApiResponse } from 'next'

import { db, seedDatabase } from '../../database';
import { ProductModel } from '../../models';

type Data = {
  ok: boolean;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if ( process.env.NODE_ENV === 'production' ) {
    return res.status(401).json({
      ok: false,
      message: 'No tiene acceso a este servicio'
    });
  }
  await db.connect();
  // Borra todos los registros de la DB
  await ProductModel.deleteMany();
  // Inserta los registros de seed-data.ts de la DB
  await ProductModel.insertMany(seedDatabase.initialData.products);
  await db.disconnect();
  res.status(200).json({ ok: true, message: 'Datos cargados correctamente', });
}