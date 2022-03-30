import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice de Next</title>
        <meta name="description" content="Generando apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>
        <p className={styles.description}>
          Go to{' '}
          <a href="/about">About!</a>
        </p>
          </main>     
    </div>
  )
}
