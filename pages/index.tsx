import type {NextPage} from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import {NavBar} from "../components/navBar";
import {Introduction} from "../components/introduction";

const Home: NextPage = () => {
  return <div className={styles.page}>
    <Head>
      <title>Hai Tran</title>
      <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code"
          rel="stylesheet"
      />
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat"
          rel="stylesheet"
      />
    </Head>
    <NavBar className={styles.navBar}/>
    <Introduction className={styles.introduction}/>
  </div>
}

export default Home
