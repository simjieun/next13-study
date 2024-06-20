import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import localizedFormat from "dayjs/plugin/localizedFormat";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { CAR_TYPE } from "@/constants/car";
dayjs.locale("ko");
dayjs.extend(localizedFormat);

interface Props {
  params: { carId: string };
}

const fetchData = async (carId: string) => {
  // force-cache : Data Cache를 계속 사용 - 새로고침해도 API 호출 다시 하지 않음
  // no-store :  새로 고침시마다 API 호출한다.
  const response = await fetch(`http://localhost:3000/api/detail/${carId}`, {
    cache: "no-store",
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = (await response.json()) as CAR_TYPE;
  return data;
};

async function DetailPage({ params }: Props) {
  const carInfo = await fetchData(params.carId);

  if (!carInfo) {
    redirect("/");
  }

  const {
    timestamp,
    image: { detailImages },
  } = carInfo;

  return (
    <>
      <div className={styles.testZone}>
        <strong>
          서버에 페이지 생성 호출한 시간 : <br />
          <span>
            {dayjs(timestamp).format("LLLL")}분 {dayjs(timestamp).format("ss")}
            초
          </span>
        </strong>
      </div>
      <div className={styles.carImage}>
        <button className={styles.buyBtn}>장바구니에 담기</button>
        <Image src={detailImages[0]} alt="이미지" fill />
      </div>
    </>
  );
}

export default DetailPage;
