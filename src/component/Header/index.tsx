import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/intro" className={styles.more_btn}>
        자세히 보기
      </Link>
    </header>
  );
}

export default Header;
