"use client";

import CheckBoxProvider from "@/context/CheckBoxContext";
import CheckBox from "@/component/CheckBox";
import React, { useState } from "react";
import styles from "./Filter.module.css";

function Filter() {
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <section className={styles.container}>
      <CheckBoxProvider
        label="제조사 목록"
        values={filters}
        onChange={setFilters}
      >
        <CheckBox value="HYUNDAI">현대</CheckBox>
        <CheckBox value="KIA">기아</CheckBox>
        <CheckBox value="GENESIS">제네시스</CheckBox>
      </CheckBoxProvider>
    </section>
  );
}

export default Filter;
