import React, { useState } from "react";
import styles from './Preview.module.css'

function Preview({ url, children }) {
  const[showImage, setShowImage] = useState(false)

  return (
    <div className={styles.wrapper}>
        {
            showImage &&   <div className={styles.imageDiv}> hello hello am here</div>
        }
     

      <a href={url} onMouseEnter={() => setShowImage(true)} onMouseLeave={() => setShowImage(false)} > {children}</a>
    </div>
  );
}

export default Preview;
