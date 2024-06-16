import {
  CAR_IMAGES,
  dummyCarDataMaker,
  INITIAL_DATA_COUNT,
} from "@/constants/car";

export const getCarDatas = () => {
  const imageIdx =
    Math.floor(Math.random() * CAR_IMAGES.length) % CAR_IMAGES.length;

  const data = dummyCarDataMaker(imageIdx);
  return Array.from({ length: INITIAL_DATA_COUNT }, () => data);
};
