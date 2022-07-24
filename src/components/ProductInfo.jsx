import React from 'react';
import Image from 'next/image';
import '../styles/ProductInfo.scss';
export const ProductInfo = () => {
  return (
    <>
      <Image layout="fill" width="100%" height="100%" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      <div className={styles.ProductInfo}>
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className={styles['primary-button add-to-cart-button']}>
          <Image layout="fill" width="100%" height="100%" src="./icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};
