import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo.svg";

import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="Swandry wedding logo" />
            </Link>
          </li>
          <li className={styles.rsvp}>
            <Link className={styles.rsvpLink} to="/rsvp">
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
