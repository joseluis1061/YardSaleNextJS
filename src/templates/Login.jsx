import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import logoYardSale from '@logos/logo_yard_sale.svg';
//import '../styles/Login.scss';
import styles from '@styles/Login.module.scss';
export const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className={styles['Login']}>
			<div className={styles['Login-container']}>
				<Image 
					layout="fill"
					width="100%" 
					height="100%" 
					src={logoYardSale} 
					alt="logo" 
					className={styles['logo']}
				/>
				<form action="/" className={styles['form']} ref={form}>
					<label htmlFor="email" className={styles['label']}>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={styles['input input-email']} />
					<label htmlFor="password" className={styles['label']}>Password</label>
					<input type="password" name="password" placeholder="*********" className={styles['input input-password']} />
					<button
						onClick={handleSubmit}
						className={styles['primary-button login-button']}>
						Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button
					className={styles['secondary-button signup-button']}
				>
					Sign up
				</button>
			</div>
		</div >
	);
}