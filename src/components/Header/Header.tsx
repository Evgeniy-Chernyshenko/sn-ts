import { NavLink } from 'react-router-dom';
import { AuthStateType } from '../../redux/auth-reducer';
import styles from './Header.module.css';
import userpic from '../../assets/images/userpic.jpg';

const Header = (props: AuthStateType) => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img
          src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png"
          alt="SN logo"
        />
      </NavLink>
      <div className={styles.menu}>
        {props.isAuth && props.profile ? (
          <>
            <NavLink to={`/profile`} className={styles.meProfile}>
              {props.login}
              <img
                src={
                  props.profile.photos.large
                    ? props.profile.photos.large
                    : userpic
                }
                alt={`${props.login!} userpic`}
              />
            </NavLink>
          </>
        ) : (
          <NavLink to="/signin">Sign in</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
