import { ReactElement } from 'react'
import { DarkLayout } from '../../components/Layout/DarkLayout'
import { MainLayout } from '../../components/Layout/MainLayout'
import styles from '../../styles/Home.module.css'


export default function About() {
  return (
    <>
      <h1 className={styles.title}>
          Welcome to About!
      </h1>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement){
  return <MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout>
  </MainLayout>

}