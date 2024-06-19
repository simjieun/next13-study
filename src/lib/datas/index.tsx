import { CAR_IMAGES, dummyCarDataMaker } from "@/constants/car";

export const getCarDatas = () => {
  return Array.from({ length: CAR_IMAGES.length }, (_, idx) => {
    return dummyCarDataMaker(idx);
  });
};
