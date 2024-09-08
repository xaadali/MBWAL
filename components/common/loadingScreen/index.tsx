import React from "react";
import { useSelector } from "react-redux";
import styles from "./loading.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
