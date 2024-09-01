import Link from "next/link";
import React from "react";

// トップページはこれpage.tsx
// 下層ページのクエリはapp直下にフォルダ名として配置する
// 各フォルダにはpage.tsxを用意してコーディングしていく
export const page = () => {
  return (
    <div>
      page
      <div>
        <Link href="/about">会社概要</Link>
      </div>
      <div>
        <Link href="/products">商品一覧</Link>
      </div>
    </div>
  );

  // 必要知識： HTML, CSS, JS, React, NodeJS, TailWind, TypeScript
};

export default page;
