import React from 'react';
import {ProductInfo} from '../components/ProductInfo';
import Image from 'next/image';
import '../styles/ProductDetail.scss';

export const ProductDatail = () => {
  return (
    <aside className={styles.ProductDetail}>
			<div className={styles['ProductDetail-close']}>
				<Image layout="fill"	 src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}
