// Error components must be Client Components
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>에러가 발생했습니다.</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.refresh()
        }
      >
        다시 시도해주세요.
      </button>
    </div>
  );
}
