import React from 'react'
import '../styles/Order.scss';

export const Order = () => {
  return (
    <div className={styles.Order}>
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>
	);
}
