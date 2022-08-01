import React,{useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { client, urlFor } from '../components/Lib/client';
import Product from '../components/Product';
import { useStateContext } from '../../context/StateContext';


//what you did here [] is a dynamic route that next.js provides.
//it allows you to pass named params to this component..the in the bracket becomes the param name (slug) poi
//so ai unlike reactjs, nextjs dznt use react-router...it calls components straight from pages lol

const ProductDetails = ({product,products}) => {
  const [index,setIndex] =useState(0);
  const {name, image, details, price}=product;
  const {incQty, decQty,qty, onAdd, setShowCart} = useStateContext();
  
  const buyNowcheckout =() =>{
    onAdd(product,qty);
    setShowCart(true);
  }
  return (
    <div>
    <div className='product-detail-container'>
        <div>
            <div className='image-container'>
                <img src={urlFor(image && image[index])} className="product-detail-image"/>
            </div>
         <div className="small-images-container">
            {image?.map((item,i)=>(
              <img
              key={i}
                src={urlFor(item)}
                className={i ===index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() =>setIndex(i)}/>
            ))}
          </div>  
        </div>

      <div className='product-detail-desc'>
        <h1>{name}</h1>
        <div className='reviews'>
          <div>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
          </div>
          <p>
            (20)
          </p>
        </div>
        <h4>Details:</h4>
        <p>{details}</p>
        <p className='price'>R{price}</p>
        <div className='quantity'>
          <h3>Quantity:</h3>
          <p className='quantity-desc'>
          <span className='minus' onClick={decQty}><AiOutlineMinus/></span>
          <span className='num' >{qty}</span>
          <span className='plus' onClick={incQty}><AiOutlinePlus/></span>
          </p>
        </div>

        <div className='buttons'>
          <button type='button' className='add-to-cart' onClick={()=> onAdd(product,qty)}>  Add to Cart</button>
          
          <button type='button' className='buy-now' onClick={buyNowcheckout}>
            Buy Now</button>



        </div>
      </div>
    </div>
    <div
      className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item)=> (
              <Product key={item._id}
              product={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

//before you fetch data you need to do a getStaticPaths...check nextjs docs about it..lol ai nor Khothatso you tired
export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug{current}
      
}`;

const products = await client.fetch(query);
const paths = products.map((product)=>({
    params: {
    slug: product.slug.current 
    }
}));
return {paths, fallback:'blocking'}
}

//this time we used getStaticProps function..this one is used to pre-render data/page at build time so as data that is needed
//is already availabel ahead of user request. 
//poi use this only if the data you fetching is already available at build time. keyword "static"
export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);//fetching a specific data
    const products = await client.fetch(productsQuery); //fetching all data
    
    console.log(product);
    return { 
      props: {products, product}
    }
  
  }

export default ProductDetails  