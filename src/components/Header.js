import * as React from "react";
import * as styles from "./Header.module.scss";

const Header = ({
  headingLevel,
  color = "inherit",
  weight = "700",
  children,
  style
}) => {
  const HeadingTag = `h${headingLevel}`;

  return (
    <HeadingTag
      style={{ ...style, color, fontWeight: weight }}
      className={`${styles.header} ${styles["headerLevel" + headingLevel]}`}
    >
      {children}
    </HeadingTag>
  );
};

export default Header;
