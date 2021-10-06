import * as React from "react";

import * as styles from "./AccommodationTile.module.scss";

const AccommodationTile = ({ name, promo, link }) => {
  return (
    <div className={styles.accommodationTile}>
      <p className={styles.accommodationName}>{name}</p>
      {promo && <p className={styles.accommodationPromo}>Promo: {promo}</p>}
      <a
        className={styles.accommodationLink}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Find out more
      </a>
    </div>
  );
};

export default AccommodationTile;
