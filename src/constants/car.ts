export const CAR_IMAGES = [
  {
    thumbnail:
      "https://ci.encar.com/carpicture/carpicture01/pic3751/37518603_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240529164318",
    detailImages: [
      "https://ci.encar.com/carpicture/carpicture01/pic3741/37411511_001.jpg?impolicy=heightRate&rh=653&cw=1160&ch=653&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&t=20240514093607",
    ],
    alt: "제네시스",
    id: 1,
  },
  {
    thumbnail:
      "https://ci.encar.com/carpicture/carpicture02/pic3722/37225753_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240412161019",
    detailImages: [
      "https://ci.encar.com/carpicture/carpicture03/pic3753/37535608_001.jpg?impolicy=heightRate&rh=653&cw=1160&ch=653&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&t=20240618143717",
    ],
    alt: "벤츠",
    id: 2,
  },
  {
    thumbnail:
      "https://ci.encar.com/carpicture/carpicture05/pic3725/37255841_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240417095243",
    detailImages: [
      "https://ci.encar.com/carpicture/carpicture04/pic3724/37249091_001.jpg?impolicy=heightRate&rh=653&cw=1160&ch=653&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&t=20240415163828",
    ],
    alt: "그랜져",
    id: 3,
  },
  {
    thumbnail:
      "https://ci.encar.com/carpicture/carpicture01/pic3751/37518603_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240529164318",
    detailImages: [
      "https://ci.encar.com/carpicture/carpicture01/pic3741/37411511_001.jpg?impolicy=heightRate&rh=653&cw=1160&ch=653&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&t=20240514093607",
    ],
    alt: "제네시스",
    id: 4,
  },
  {
    thumbnail:
      "https://ci.encar.com/carpicture/carpicture02/pic3722/37225753_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240412161019",
    detailImages: [
      "https://ci.encar.com/carpicture/carpicture03/pic3753/37535608_001.jpg?impolicy=heightRate&rh=653&cw=1160&ch=653&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&t=20240618143717",
    ],
    alt: "벤츠",
    id: 5,
  },
  {
    thumbnail:
      "https://ci.encar.com/carpicture/carpicture05/pic3725/37255841_001.jpg?impolicy=heightRate&rh=384&cw=640&ch=384&cg=Center&wtmk=https://ci.encar.com/wt_mark/w_mark_04.png&t=20240417095243",
    detailImages: [
      "https://ci.encar.com/carpicture/carpicture04/pic3724/37249091_001.jpg?impolicy=heightRate&rh=653&cw=1160&ch=653&cg=Center&wtmk=http://ci.encar.com/wt_mark/w_mark_04.png&t=20240415163828",
    ],
    alt: "그랜져",
    id: 6,
  },
];

export const dummyCarDataMaker = (imageIdx: number) => ({
  image: CAR_IMAGES[imageIdx],
  regDate: "2024-05-07T09:26:09",
  carNo: "311저1960",
  year: "2021",
  maker: CAR_IMAGES[imageIdx].alt,
  displacement: "3470",
  carName: null,
  firstDate: "2021-04-09",
  fuel: "가솔린",
  carShape: "세단 4도어",
  model: "G80 (RG3)",
  region: "서울",
  distance: "12323",
  price: 5500,
  carId: imageIdx + 1,
  carCode: imageIdx * 50,
  timestamp: new Date().getTime(),
});

export type CAR_TYPE = ReturnType<typeof dummyCarDataMaker>;
