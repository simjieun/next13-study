export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json("success", { status: 200 });
};
