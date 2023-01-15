import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Styles from './Layout.module.scss'

import Logo from '../../assets/logo/logo-2.png'
import favicon from '../../assets/favicon.png'
import SearchBar from 'components/SearchBar/SearchBar'



type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={favicon.src} />
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"  /> 
      <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@500&family=Lato&family=Source+Sans+Pro&display=swap" rel="stylesheet" /> 
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
   
    <header className={Styles.header}>

        <div className={Styles.imgHolder} >
          <Image src={Logo} alt='Logo' width={250} height={62} style={{border:'1px solid #b54756'}} />
        </div>

        <SearchBar />

        <div className={Styles.navators}>
          <p>Compare</p>
          <p>Discuss</p>
          <p>Suggestion</p>
        </div>

    </header>


    {children}
    <footer>
      {/* <hr /> */}
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout


// <Link href="/">Home</Link>