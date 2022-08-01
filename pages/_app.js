import { Layout } from './components'
import '../styles/globals.css'
import {StateContext} from '../context/StateContext';
import {Toaster} from 'react-hot-toast'; 
//more like index.js in reactjs where components are being rendered and 
//delivered as root
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
      <Toaster/>
  <Component {...pageProps} />
    </Layout>
    </StateContext>
)}

export default MyApp
