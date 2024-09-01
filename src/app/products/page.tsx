import Link from "next/link";
import React from "react";

export const page = () => {
  return (
    <div>
      商品一覧
      <div>
        {/* ダイナミックナビゲーション(通常、1111に{num}などがはいる) */}
        <Link href="products/1111">商品A</Link>
      </div>
      <div>
        {/* 固定ナビゲーション */}
        {/* replace: ブラウザバック（ブラウザ戻る）でtopに戻る */}
        <Link href="products/itemB" replace>
          商品B
        </Link>
      </div>
    </div>
  );
};

export default page;
