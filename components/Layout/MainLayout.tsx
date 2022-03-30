import React, { FC } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar/NavBar'

export const MainLayout:FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice de Next</title>
        <meta name="description" content="Generando apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
        {children}       
      </main>     
    </div>
  )
}
