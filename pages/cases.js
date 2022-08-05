import React from 'react'
import {client} from './components/Lib/client';
import { Product } from './components/index';

const cases = ({products}) => {
  return (
    <>
    <div className='products-container'>
    {products?.map(
      (product, i)=> <Product key={product.id} product={product}/>)}
  </div>
  </>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "cases"]';
    const products = await client.fetch(query);
    
    return{
      props: {products}
    }
  
  }
export default cases