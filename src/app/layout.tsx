import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "엔카 차량목록",
  description: "엔카 국산 차량 검색 리스트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
