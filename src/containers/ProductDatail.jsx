import React from 'react';
import {ProductInfo} from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

export const ProductDatail = () => {
  return (
    <aside className={styles.ProductDetail}>
			<div className={styles['ProductDetail-close']}>
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}
