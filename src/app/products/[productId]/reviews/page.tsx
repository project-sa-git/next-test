import React from "react";

// 入れ子のダイナミックルーティング
// http://localhost:3000/products/0002/reviews/002
// 商品名:0002のレビュー002
export const page = ({ params }: { params: { productId: string } }) => {
  return <div>商品名:{params.productId}の新着のレビュー一覧</div>;
};

export default page;
