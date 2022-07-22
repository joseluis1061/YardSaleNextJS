import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import iconCloseImage from '../assets/icons/icon_close.png';
//import '../styles/OrderItem.scss';
import styles from '../styles/OrderItem.module.scss';

export const OrderItem = ({product}) => {
	const { removeToCart } = useContext(AppContext);
	const handleRemove= (product) => {
		removeToCart(product);
	};
  return (
    <div className={styles.OrderItem}>
			<figure>
				<img src={product.images[0]} alt={product.title}/>
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconCloseImage} alt="close" 
				onClick={() => handleRemove(product)}
			/>
		</div>
	);
}
