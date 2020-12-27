import Head from 'next/head'
import Layout from '../components/Layout'
import { CustomButton } from '../components/template'

export default function Home() {
  return (
    <>
      <Layout >
          <Head>
            <title>Bursen - home</title>
          </Head>
          <CustomButton >Iniciar sesión</CustomButton>
          <br/>
          <CustomButton type="btnWhite">Ver concursos</CustomButton>
          <br/>
      </Layout>
    </>
  )
}
