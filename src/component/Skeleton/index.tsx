import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton = () => {
  return (
    <li className={styles["skeleton-item"]}>
      <div>
        <div className={styles["skeleton-img"]} />
      </div>
      <div className={styles["skeleton-info"]}>
        <p className={styles["skeleton-name"]} />
        <p className={styles["skeleton-price"]} />
      </div>
    </li>
  );
};

export default Skeleton;
