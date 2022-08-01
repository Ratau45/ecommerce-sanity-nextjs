import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

//jsut a container where it structures all the components to the webpage
//more like index.html structure in reactjs
// we will then render the components as children
const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>KS Online Store</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='main-container'>
        
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Layout