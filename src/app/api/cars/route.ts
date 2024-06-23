import { getCarDatas } from "@/lib/datas";
import { NextRequest, NextResponse } from "next/server";

const GET = async (_: NextRequest) => {
  const data = getCarDatas();
  return NextResponse.json(data, { status: 200 });
};

export { GET };