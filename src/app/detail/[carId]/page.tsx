"use client";

import { getCarData } from "@/app/api/cars/route";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

interface Props {
  params: { carId: string };
}
// detail 정보 불러와야 한다
// fetch 이용 (매번 갱신될 필요는 없다고 봄, 10분에 한 번?)

function DetailPage({ params }: Props) {
  const carData = getCarData(params.carId) || {};

  const { image, maker, regDate, carNo, year, region, distance, price } =
    carData;
  console.log("[carData]:", carData, params.carId);

  return (
    <div>
      디테일페이지
      <div style={{ display: "flex", flexDirection: "column" }}>
        호출시간
        <div>{dayjs().format("YYYY-MM-DD ddd HH:mm:ss")}</div>
      </div>
      <Image
        src={
          "https://ci.encar.com/carpicture/carpicture05/pic3725/37257690_001.jpg?impolicy=heightRate&rh=138&cw=185&ch=138&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&wtmkg=SouthEast&wtmkw=70&wtmkh=30&t=20240417092209"
        }
        alt="이미지"
        width={100}
        height={100}
      />
    </div>
  );
}

export default DetailPage;
