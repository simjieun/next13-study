import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const CAR_IMAGES = [
  {
    url: "https://ci.encar.com/carpicture/carpicture05/pic3725/37257690_001.jpg?impolicy=heightRate&rh=138&cw=185&ch=138&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&wtmkg=SouthEast&wtmkw=70&wtmkh=30&t=20240417092209",
    alt: "제네시스1",
    id: 1,
  },
  {
    url: "https://ci.encar.com/carpicture/carpicture05/pic3725/37257690_001.jpg?impolicy=heightRate&rh=138&cw=185&ch=138&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&wtmkg=SouthEast&wtmkw=70&wtmkh=30&t=20240417092209",
    alt: "제네시스2",
    id: 2,
  },
  {
    url: "https://ci.encar.com/carpicture/carpicture05/pic3725/37257690_001.jpg?impolicy=heightRate&rh=138&cw=185&ch=138&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&wtmkg=SouthEast&wtmkw=70&wtmkh=30&t=20240417092209",
    alt: "제네시스3",
    id: 3,
  },
];

const CAR_DATA = [
  {
    image: CAR_IMAGES[0],
    regDate: "2024-05-07T09:26:09",
    carNo: "311저1960",
    year: "2021",
    maker: "제네시스",
    carKind: "1",
    use: "2",
    displacement: "3470",
    carName: null,
    firstDate: "2021-04-09",
    fuel: "가솔린",
    carShape: "세단 4도어",
    model: "G80 (RG3)",
    region: "서울",
    distance: "12323",
    price: 5500,
    id: uuidv4(),
  },
];

const CAR_DATAS = Array.from({ length: 10 }, (_, idx) => ({
  ...CAR_DATA[0],
  id: uuidv4(),
}));

export const GET = (request: Request) => {
  return NextResponse.json(CAR_DATAS, { status: 200 });
};

export type CAR_TYPE = typeof CAR_DATA;

export const getCarData = (carId: string) =>
  CAR_DATAS.find((item) => item.id === carId)!;
