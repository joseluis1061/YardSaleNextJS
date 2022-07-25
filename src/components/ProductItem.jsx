import React from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

export const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };
  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} src={product?.images[0]} alt={product?.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} aria-hidden="true">
          {state.cart.includes(product) ? (
            <Image width="40%" height="40%" className={styles['disabled add-to-cart-btn']} src={addedToCartImage} alt="added to cart" />
          ) : (
            <Image width="40%" height="40%" className={styles['add-to-cart-btn pointer']} src={addToCartImage} alt="add to cart" />
          )}
        </figure>
      </div>
    </div>
  );
};
