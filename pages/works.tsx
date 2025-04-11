import { useRouter } from 'next/router';
import React, { CSSProperties } from 'react';
import styles from '../styles/Home.module.css';

const style: CSSProperties = {
  display: 'flex',
  flexGrow: '1',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '3rem',
  color: 'white',
};

const Works: React.FC = () => {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <div style={style}>WIP...</div>
    </div>
  );
};

export default Works;
