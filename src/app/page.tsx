import Image from "next/image";
import Link from "next/link";
import Filter from "@/component/Filter";
import styles from "./page.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { getCarDatas } from "@/lib/datas";

dayjs.locale("ko");

export const dynamic = "force-dynamic";

export default async function Home() {
  const carDatas = await getCarDatas();
  const { timestamp } = carDatas[0];
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/intro" className={styles.more_btn}>
          자세히 보기
        </Link>
      </header>
      <div className={styles.cacheContainer}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          호출시간
          <div>{dayjs().format("YYYY-MM-DD ddd HH:mm:ss")}</div>
          <div>
            <strong>서버의 타임스탬프 : {timestamp}</strong>
          </div>
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
              id,
              price,
            }) => (
              <li className={styles.car_list} key={id}>
                <Link href={`/detail/${id}`} className={styles.link}>
                  <Image
                    src={image.url}
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
