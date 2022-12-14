import React from 'react'
import Link from 'next/link'
import { urlFor } from './Lib/client'


const Product = ({product: {name, image, price, slug}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
           src={urlFor(image && image[0])}
           width={250}
           height={250} 
           className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>R{price}</p>

        </div>
      </Link>
    </div>
  )
}

export default Product