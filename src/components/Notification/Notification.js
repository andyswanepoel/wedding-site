import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./Notifications.module.scss";

const Notification = ({ message, type, closeRedirect }) => {
  return !!message ? (
    <div className={`${styles.notification} ${styles[type]}`}>
      <p className={styles.message}>{message}</p>
      <Link className={styles.closeButton} to={closeRedirect}>
        <span>&times;</span>
      </Link>
    </div>
  ) : null;
};

export default Notification;
