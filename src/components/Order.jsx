import React from 'react';
import Image from 'next/image';
import flechita from '@icons/flechita.svg';
import styles from '@styles/Order.module.scss';

export const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image width="100%" height="100%" src={flechita} alt="arrow" />
    </div>
  );
};
