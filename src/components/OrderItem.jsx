import React from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import iconCloseImage from '../assets/icons/icon_close.png';
//import '../styles/OrderItem.scss';
import styles from '../styles/OrderItem.module.scss';

export const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove= (product) => {
		removeFromCart(product);
	};
  return (
    <div className={styles.OrderItem}>
			<figure>
				<Image src={product.images[0]} alt={product.title}/>
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<Image src={iconCloseImage} alt="close" 
				onClick={() => handleRemove(product)}
			/>
		</div>
	);
}
