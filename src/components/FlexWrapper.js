import * as React from "react";

import * as styles from "./FlexWrapper.module.scss";

const FlexWrapper = ({
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  children
}) => {
  return (
    <div
      style={{ flexDirection, justifyContent, alignItems, flexWrap }}
      className={styles.flexWrapper}
    >
      {children}
    </div>
  );
};

export default FlexWrapper;
