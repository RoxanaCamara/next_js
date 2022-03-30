import Head from 'next/head'
import { NavBar } from '../components/NavBar/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice de Next</title>
        <meta name="description" content="Generando apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to home page!
        </h1>       
      </main>     
    </div>
  )
}
