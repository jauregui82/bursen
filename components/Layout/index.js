// import styles, { globalStyles } from "./styles"
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from './Footer';
import CustomNavbar from "./Navbar"
import styles from '../../styles/Home.module.css'
import Head from 'next/head';
import { CustonBanner } from '../template';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustonBanner/>
      <CustomNavbar />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      {/* <style jsx>{styles}</style> */}
      {/* <style jsx global>
        {globalStyles}
      </style> */}
      <CustomFooter styles={styles}/>
      <style jsx>
      {`
        header {
          height:180vh;
          min-height:400px;
          background-size:cover;
          background-image:url('https://images.unsplash.com/photo-1470434151738-dc5f4474c239?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb');
        }
      `}
      </style> 
    </div>
  )
}