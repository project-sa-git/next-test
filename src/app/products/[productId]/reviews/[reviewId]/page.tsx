import React from "react";

export const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      商品名:{params.productId}のレビュー{params.reviewId}
    </div>
  );
};

export default page;
