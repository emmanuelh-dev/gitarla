import React from 'react'
import Head from 'next/head'


const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Gitar LA {pagina}</title>
      </Head>
      <h1>Layout</h1>
      {children}
    </div>
  )
}

export default Layout