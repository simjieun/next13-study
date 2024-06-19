import Image from "next/image";
import Link from "next/link";
import Filter from "@/component/Filter";
import styles from "./page.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { CAR_TYPE } from "@/constants/car";
import Header from "@/component/Header";
// import UpdateCacheButton from "@/component/UpdateCacheButton";

dayjs.locale("ko");
dayjs.extend(localizedFormat);

const MAIN_TAG = "MAIN";

const fetchCars = async () => {
  const response = await fetch(`http://localhost:3000/api/cars`, {
    next: { revalidate: 30 },
    // cache: "force-cache",
    // next: { tags: [MAIN_TAG] },
  });
  // api route에 딜레이 주면 loading.tsx 적용 안 됨
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = (await response.json()) as CAR_TYPE[];
  return data;
};

export default async function Home() {
  const carDatas = await fetchCars();
  const { timestamp } = carDatas[0];

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.cacheContainer}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          호출시간
          <div>{dayjs().format("YYYY-MM-DD ddd HH:mm:ss")}</div>
          <div>
            <strong>
              서버의 타임스탬프 :{dayjs(timestamp).format("LLLL")}분<br />
              {dayjs(timestamp).format("ss")}초
            </strong>
          </div>
          {/* <UpdateCacheButton tag={MAIN_TAG} /> */}
        </div>
      </div>
      <section className={styles.contents}>
        <Filter />

        <ul className={styles.list_container}>
          <li className={styles.title}>차량 목록</li>
          {carDatas.map(
            ({
              image,
              carNo,
              maker,
              model,
              firstDate,
              region,
              distance,
              carId,
              price,
            }) => (
              <li className={styles.car_list} key={`car-${carId}`}>
                <Link href={`/detail/${carId}`} className={styles.link}>
                  <Image
                    src={image.thumbnail}
                    alt={image.alt}
                    width={185}
                    height={150}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.car_image}
                  />
                  <section className={styles.info}>
                    <span className={styles.date}>
                      <Image
                        src="/smile.svg"
                        alt="차량소개리스트"
                        width={20}
                        height={20}
                      />
                      출고일자: {firstDate}
                    </span>
                    <p className={styles.model}>
                      <span>{maker}</span>
                      <span>{model}</span>
                    </p>
                    <span>주행거리: {distance}KM</span>
                    <div className={styles.carInfo}>
                      <span className={styles.carNo}>{carNo}</span>
                      <span className={styles.region}>지역: {region}</span>
                    </div>
                  </section>
                  <em className={styles.price}>{price}만원</em>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </main>
  );
}

// fill: position :absoulte, top/right/bottom/right : 0값을 가짐
// 부모에게 position : relative값을 줘야 fill 준 이미지의 크기를 제대로 조정 가능
// <Image />에 class값을 줘서 스타일 적용은 가능, 그렇지만 <Image>의 부모 크기를 조정하고 fill: true 주는 게 더 나을듯
