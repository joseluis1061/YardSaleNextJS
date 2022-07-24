import React from 'react';
import { useContext } from 'react';
import { OrderItem } from '../components/OrderItem';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '../context/AppContext';
import arrow from '../assets/icons/flechita.svg';
import styles from '../styles/MyOrder.module.scss';

export const MyOrder = () => {
  const { state, toggleOrder } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['MyOrder-container']}>
        <div className={styles['title-container']}>
          <Image width={20} height={20} className={styles['more-clickable-area pointer']} src={arrow} alt="arrow" onClick={() => toggleOrder()} />
          <p className={styles.title}>My order</p>
        </div>
        <div className={styles['my-order-content']}>
          <div className={styles['my-orders']}>
            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <Link width="100%" height="100%" className={styles['primary-button']} href="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  );
};
