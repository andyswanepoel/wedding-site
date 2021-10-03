import * as React from "react";

import * as styles from "./ContentSection.module.scss";

const ContentSection = ({ children }) => {
  return <section className={styles.contentSection}>{children}</section>;
};

export default ContentSection;
