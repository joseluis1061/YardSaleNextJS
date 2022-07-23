import React from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import {OrderItem} from '../components/OrderItem';
import flechita from '../assets/icons/flechita.svg';
//import '../styles/MyOrder.scss';
import styles from '../styles/MyOrder.module.scss';

export const MyOrder = () => {
	const {state} = useContext(AppContext);

	const sumTotal = ()=>{
		const sum = state.cart.reduce(
			(acumulator, currentValue) =>
			acumulator + currentValue.price, 0
		);		
		return sum;
	}

  return (
    <aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={flechita} alt="arrow" />
				<p className={styles['title']}>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map((product)=>
					<OrderItem
						key = {`order-item-${product.id}`}
						product={product}
					/>
				)}
				<div className={styles['order']}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className={styles['primary-button']}>
					Checkout
				</button>
			</div>
		</aside>
	);
}
