import React from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import iconCloseImage from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

export const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove= (product) => {
		removeFromCart(product);
	};
  return (
    <div className={styles.OrderItem}>
			<figure>
				<Image layout="fill"	 
					layout="fill"	
					src={product?.images[0]} 
					alt={product?.title}				
				/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image layout="fill"	 
				layout="fill"
				src={iconCloseImage}
				alt="close" 
				onClick={() => handleRemove(product)}
			/>
		</div>
	);
}
