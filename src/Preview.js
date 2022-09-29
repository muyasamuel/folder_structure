import React, { useState } from "react";
import styles from "./Preview.module.css";
import { encode } from "qss";

function Preview({ url, children }) {
    const [showImage, setShowImage] = useState(false);


  const width = 200;
  const height = 125;

  const param = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": true,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": width * 3,
    "viewport.height": height * 3,
  });


   const src = `https://api.microlink.io/?${param}`;

  return (
    <div className={styles.wrapper}>
      {showImage && <div className={styles.imageDiv}> hello hello am here</div>}

      <a
        href={url}
        target="__blank"
        onMouseEnter={() => setShowImage(true)}
        onMouseLeave={() => setShowImage(false)}
      >
        {" "}
        {children}
      </a>
    </div>
  );
}

export default Preview;
