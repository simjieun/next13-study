import { getCarDatas } from "@/lib/datas";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  _: NextRequest,
  { params }: { params: { carId: string } }
) => {
  const carId = parseInt(params.carId, 10);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = getCarDatas().find((v) => v.carId === carId);
  return NextResponse.json(data, { status: 200 });
};

export { GET };
