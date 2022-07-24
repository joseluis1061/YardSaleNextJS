import Link from 'next/link';
import React from 'react';
//import '../styles/Menu.scss';
import styles from '../styles/Menu.module.scss';
export const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/" className={styles['title']}>
            My orders
          </Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};
