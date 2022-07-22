import React from 'react'
//import '../styles/Menu.scss';
import styles from '../styles/Menu.module.scss';
export const Menu = () => {
  return (
    <div className={styles.Menu}>
			<ul>
				<li>
					<a href="/" className={styles['title']}>My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}
