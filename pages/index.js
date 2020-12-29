import Head from 'next/head'
import Layout from '../components/Layout'
import { CustonBanner, Section2, Section3, Section4, Section5 } from '../components/template'

export default function Home() {
  return (
    <>
      <Layout >
          <Head>
            <meta name="viewport" content="viewport-fit=cover" />
            <title>Bursen - home</title>
            <script async defer src={"AIzaSyAGVBbUsPq0SZ0skOwpeDR-_LlWeWj9kyg"} />
          </Head>
          <CustonBanner/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
      </Layout>
    </>
  )
}
