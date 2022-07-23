import React from 'react';
import Image from 'next/image';
import '../styles/SendEmail.scss';

export const SendEmail = () => {
  return (
    <div className={styles.SendEmail}>
			<div className={styles['form-container']}>
				<Image layout="fill"	 src="./logos/logo_yard_sale.svg" alt="logo" className={styles.logo} />
				<h1 className={styles['title']}>Email has been sent!</h1>
				<p className={styles['subtitle']}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles['email-image']}>
					<Image layout="fill"	 src="./icons/email.svg" alt="email" />
				</div>
				<button className={styles['primary-button login-button']}>Login</button>
				<p className={styles.resend}>
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}
