import type { NextPage } from 'next'
import Head from 'next/head'
import Gankitt2 from '../components/gankitt2'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generate snippet for your product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gankitt2 />
     
    </div>
  )
}

export default Home