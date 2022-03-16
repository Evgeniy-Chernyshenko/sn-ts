import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={styles.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName={styles.active}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" activeClassName={styles.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <a href="#3">News</a>
        </li>
        <li>
          <a href="#4">Music</a>
        </li>
        <li>
          <a href="#5">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
