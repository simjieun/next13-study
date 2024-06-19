"use client";

import React from "react";

function UpdateCacheButton({ tag }: { tag: string }) {
  const handleUpdateCache = async () => {
    console.log("click");
    const res = await fetch(`/api/revalidate?tag=${tag}`);
    console.log("res:", res);
    const result = await res.json();
    console.log("[Refresh]:", result);
  };
  console.log("render");
  return <button onClick={handleUpdateCache}>캐시 바로 비우기</button>;
}

export default UpdateCacheButton;
