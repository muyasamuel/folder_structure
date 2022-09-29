import React from "react";
import styles from './Preview.module.css'

function Preview({ url, children }) {
  return (
    <div className={styles.wrapper}>
      {/* <div className="imageDiv"></div> */}
      <a href={url}> {children}</a>
    </div>
  );
}

export default Preview;
