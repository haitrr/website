import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/navBar';
import { Introduction } from '../components/introduction';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.page}>
      <Head>
        <title>Hai Tran</title>
      </Head>
      <NavBar className={styles.navBar} currentPath={router.pathname} />
      <Introduction className={styles.introduction} />
    </div>
  );
};

export default Home;
