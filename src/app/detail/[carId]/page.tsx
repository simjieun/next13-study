import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { getCarDatas } from "@/lib/datas";
import { redirect } from "next/navigation";
dayjs.locale("ko");

interface Props {
  params: { carId: string };
}

async function DetailPage({ params }: Props) {
  const carId = params.carId;
  const detailInfo = getCarDatas().find((v) => v.id === carId);

  if (!detailInfo) {
    redirect("/");
  }

  const { timestamp } = detailInfo;

  return (
    <div>
      디테일페이지
      <div style={{ display: "flex", flexDirection: "column" }}>
        호출시간
        <div>{dayjs().format("YYYY-MM-DD ddd HH:mm:ss")}</div>
        <strong>서버의 타임스탬프 : {timestamp}</strong>
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
