import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img
          src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png"
          alt="SN logo"
        />
      </a>
    </header>
  );
};

export default Header;
