import Link from "next/link";
import React from "react";
import styles from "./notFound.module.css";

function NotFound() {
  return (
    <section className={styles.container}>
      <span className={styles.txt}>올바른 경로가 아닙니다.</span>
      <Link className={styles.home_link} href="/">
        홈으로 가기
      </Link>
    </section>
  );
}

export default NotFound;
