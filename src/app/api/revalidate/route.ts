import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  const tag = request.nextUrl.searchParams.get("tag");
  if (!tag) {
    throw new Error("태그는 필수입니다.");
  }
  revalidateTag(tag);
  return NextResponse.json({ message: "재검증 성공", status: 200 });
};
