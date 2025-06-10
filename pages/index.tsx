import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Introduction } from '../components/introduction';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.page}>
      <Head>
        <title>Hai Tran - Software Engineer</title>
        <meta
          name="description"
          content="Hai Tran - Software Engineer based in Vietnam"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
      <main className={styles.main}>
        <Introduction className={styles.introduction} />
      </main>
    </div>
  );
};

export default Home;
