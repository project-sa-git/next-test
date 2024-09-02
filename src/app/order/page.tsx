"use client";
import { useRouter } from "next/navigation";
import React from "react";

// 本来は大文字（たまに警告出る）
const Page = () => {
  const router = useRouter();
  const hundleClick = () => {
    console.log("注文送信");
    // トップページに遷移する
    router.push("/");
  };

  return (
    <div>
      注文情報
      <button onClick={() => hundleClick()}>注文</button>
    </div>
  );
};

export default Page;
