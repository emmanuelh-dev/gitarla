import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout
      Pagina="Inicio"
      >
      <h1>Desde el inicio</h1>
      <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </div>
  )
}
