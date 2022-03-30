import { MainLayout } from '../components/Layout/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
          Welcome to home page!
      </h1>
    </MainLayout>
  )
}
