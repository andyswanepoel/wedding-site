import * as React from "react";
import * as styles from "./Heading.module.scss";

const Heading = ({
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
      className={`${styles.heading} ${styles["headingLevel" + headingLevel]}`}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
