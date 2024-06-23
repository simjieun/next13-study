import {NextPage} from "next";
import Image from "next/image";

interface CarInfo {
    id: number;
    image: string;
    title: string;
    model: string;
    rating: number;
    description: string;
}
const fetchData = async (carId: string) => {
    const response = await fetch(`http://localhost:3000/api/cars/${carId}`, {
        cache: "force-cache",
    });
    // console.log(response)
    // // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await response.json() as CarInfo;
    return data;
};

const Page:NextPage<{params: {carId: string}}> = async ({params : {carId}}) => {
    const carInfo = await fetchData(carId);

    console.log(carInfo)
    return (
        <div>
            <Image src={carInfo.image} alt={carInfo.title} width={500} height={500} />
            <h1>{carInfo.title}</h1>
            <p>{carInfo.model}</p>
            <div>{carInfo.description}</div>
        </div>
    );
};

export default Page;