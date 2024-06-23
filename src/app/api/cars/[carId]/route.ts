import { NextRequest, NextResponse } from "next/server";
import {CAR_INTRO_DATA} from "@/constants/car";

const GET = async (
    _: NextRequest,
    { params }: { params: { carId: string } }
) => {
    const carId = parseInt(params.carId, 10);
    const data = CAR_INTRO_DATA.find((v) => v.id === carId);

    return NextResponse.json(data, { status: 200 });
};

export { GET };
