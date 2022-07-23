import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import '../styles/Login.scss';
import logoYardSale from '@logos/logo_yard_sale.svg';
export const Login = () => {
	const formulario = useRef(null);

	const handleSubmit= (e) => {
		e.preventDefault();
		const formData = new FormData(formulario.current);
		const data = {
			username : formData.get('email'),
			password : formData.get('password'),
		}
		console.log(data);
	};
  return (
    <div className={styles.Login}>
			<div className={styles.Login-container}>
				<Image src={logoYardSale} alt="logo" className={styles.logo} />
				<form action="/" className={styles.form} ref={formulario}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={styles.input input-email} />
					<label htmlFor="password" className={styles.label">Password</label>
					<input type="password" name="password" placeholder="*********" className={styles.input input-password} />
					<button 
						className={styles.primary-button login-button} 
						onClick={handleSubmit}
					>
						Log in
					</button>

					<a href="/">Forgot my password</a>
				</form>
				<button className={styles.secondary-button signup-button}>Sign up</button>
			</div>
		</div>
	);
}
