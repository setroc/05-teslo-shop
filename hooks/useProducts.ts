import useSWR, { SWRConfiguration } from 'swr';
import { IProduct } from '../interfaces/products';

// const fetcher = (...args:[key:string]) => fetch(...args).then(res => res.json());

export const useProducts = (url:string, config:SWRConfiguration={}) => {
  // const { data, error } = useSWR<{ok:boolean,products:IProduct[]}>(`/api${url}`, fetcher, config);
  const { data, error } = useSWR<{ok:boolean,products:IProduct[]}>(`/api${url}`, config);
  return {
    products: data?.products || [],
    isLoading: !error && !data,
    isError: error
  }
}