import React from 'react';
import Image from 'next/image';
import '../styles/PasswordRecovery.scss';

export const PasswordRecovery = () => {
  return (
    <div className={styles.PasswordRecovery}>
      <div className={styles.PasswordRecovery - container}>
        <Image layout="fill" width="100%" height="100%" src="./logos/logo_yard_sale.svg" alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Password recovery</h1>
        <p className={styles.subtitle}>Inform the email address used to create your account</p>
        <form action="/" className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" id="email" className={styles['input input-email']} />
          <input type="submit" value="Confirm" className={styles['primary-button login-button']} />
        </form>
      </div>
    </div>
  );
};
