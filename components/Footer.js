import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
      <nav className="">
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Productos">Productos</Link>
        </nav>
        <p className={styles.copyright}> Todos los derechos Reservados</p>

      </div>

    </footer>
  )
}

export default Footer