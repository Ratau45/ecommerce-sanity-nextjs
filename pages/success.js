import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from './components/Lib/utils';

const success = () => {
 const {setCartItems, settotalPrice, settotalQuantities} = useStateContext();

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    settotalPrice(0)
    settotalQuantities(0)
    runFireworks();
   },[])
  
    return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill/>
        </p>
          <h2>Thank You For Shopping With Us!</h2>
          <p className='email-msg'>Check your email inbox for the receipt.</p>
          <p className='description'>
            To contact us, Please email
            <a className='email' href='mailto:orders@ks.com'>
              orders@ks.com
            </a>
          </p>
          <Link href="/">
            <button type='button' width="300px" className='btn'>
              Continue Shopping 
            </button>
          </Link>
      </div>

    </div>
  )
}

export default success