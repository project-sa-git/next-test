import React from "react";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
export const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  // 0か1を返すだけの関数を実行
  const random = getRandomInt(2);
  console.log(random);
  if (random === 1) {
    throw new Error("エラー");
  }

  return (
    <div>
      商品名:{params.productId}のレビュー{params.reviewId}
    </div>
  );
};

export default page;
