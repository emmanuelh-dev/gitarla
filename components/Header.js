import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
        <div>
          <Link href="/">
            <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
          </Link>
        </div>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Productos">Productos</Link>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Header