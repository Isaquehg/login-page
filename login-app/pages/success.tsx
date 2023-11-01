// pages/success.tsx
import React from 'react';
import Link from 'next/link';
import styles from './success.module.css';

const SuccessPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login Successful</h1>
      <Link href="/login">
        <a className={styles.a}>Return to Login</a>
      </Link>
    </div>
  );
};

export default SuccessPage;
