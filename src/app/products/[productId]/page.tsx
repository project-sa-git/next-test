import React from "react";

// 【tips】props:分割代入
// 分割代入を使用すると、これらのプロパティを一行で取り出すことが可能です：
// let { name, email, age, location } = userProfile;

// ダイナミックルーティング
// http://localhost:3000/products/0002
// 商品名:0002
// ReactのuseSearchParams見たくparams定義しなくていい
export const page = ({ params }: { params: { productId: string } }) => {
  // 商品詳細ページ
  return <div>商品名:{params.productId}</div>;
};

export default page;
