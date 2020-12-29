// import styles, { globalStyles } from "./styles"
// import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from './Footer';
import CustomNavbar from "./Navbar"
import styles from '../../styles/Home.module.css'
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomNavbar />
      <div className="container">
        <main >{children}</main>
      </div>
      {/* <style jsx>{styles}</style> */}
      {/* <style jsx global>
        {globalStyles}
      </style> */}
      <CustomFooter styles={styles}/>
      <style jsx>{`
        main{
          width: 100%;
        }
        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        
      `}
      </style> 
    </div>
  )
}