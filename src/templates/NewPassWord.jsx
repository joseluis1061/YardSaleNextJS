import React from 'react';
import Image from 'next/image';
import '../styles/NewPassword.scss';

export const NewPassWord = () => {
  return (
    <div className={styles.NewPassword}>
      <div className={styles.NewPassword - container}>
        <Image layout="fill" width="100%" height="100%" layout="responsive" src="./logos/logo_yard_sale.svg" alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Create a new password</h1>
        <p className={styles.subtitle}>Enter a new passwrd for yue account</p>
        <form action="/" className={styles.form}>
          <label for="password" className={styles.label}>
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className={styles['input input-password']} />
          <label for="new-password" className={styles.label}>
            Password
          </label>
          <input type="password" id="new-password" placeholder="*********" className={styles['input input-password']} />
          <input type="submit" value="Confirm" className={styles['primary-button login-button']} />
        </form>
      </div>
    </div>
  );
};
