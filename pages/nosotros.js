import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const nosotros = () => {
  return (
    <div>
    <Layout
    pagina="Nosotros"
    >
      
    </Layout>
    <h1>Desde Nosotros</h1>
    <Link href="/">Home</Link>
    </div>
  )
}

export default nosotros