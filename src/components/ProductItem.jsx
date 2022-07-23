import React from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

export const ProductItem = ({product}) => {
	const { state, addToCart } = useContext(AppContext);
	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item)
	}
  return (
		<div className={styles.ProductItem}>
			<Image 
        loader={() => product.images[0]}
        src={product?.images[0]}
        alt={product?.title}
        width={140}
        height={140}
        layout="responsive"
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product?.price}</p>
					<p>{product?.title}</p>
				</div>
				<figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} >
					{state.cart.includes(product) ? 
					<Image
						className={styles['disabled add-to-cart-btn']}
						src={addedToCartImage}
						alt="added to cart"
						layout="fill" 
					/> : 
					<Image 
						className={styles['add-to-cart-btn pointer']} 
						src={addToCartImage} alt="add to cart" 
						width="100%" 
						height="100%" 
						layout="responsive"					
					/>}
				</figure>
			</div>
		</div>
	);
}