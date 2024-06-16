import { v4 as uuidv4 } from "uuid";

export const CAR_IMAGES = [
  {
    url: "https://ci.encar.com/carpicture/carpicture01/pic3751/37518603_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240529164318",
    alt: "제네시스",
    id: 1,
  },
  {
    url: "https://ci.encar.com/carpicture/carpicture02/pic3722/37225753_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240412161019",
    alt: "벤츠",
    id: 2,
  },
  {
    url: "https://ci.encar.com/carpicture/carpicture05/pic3725/37255841_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240417095243",
    alt: "그랜져",
    id: 3,
  },
];

export const dummyCarDataMaker = (imageIdx: number) => ({
  image: CAR_IMAGES[imageIdx],
  regDate: "2024-05-07T09:26:09",
  carNo: "311저1960",
  year: "2021",
  maker: CAR_IMAGES[imageIdx].alt,
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
  timestamp: new Date().getTime(),
});

export const INITIAL_DATA_COUNT = 10;

export type CAR_TYPE = ReturnType<typeof dummyCarDataMaker>;
