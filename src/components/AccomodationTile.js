import * as React from "react";

import * as styles from "./AccomodationTile.module.scss";

const AccomodationTile = ({ name, promo, link }) => {
  return (
    <div className={styles.accomodationTile}>
      <p className={styles.accomodationName}>{name}</p>
      {promo && <p className={styles.accomodationPromo}>Promo: {promo}</p>}
      <a
        className={styles.accomodationLink}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Find out more
      </a>
    </div>
  );
};

export default AccomodationTile;
