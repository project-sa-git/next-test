import React from "react";

// フォルダ名[...slug]はスプレッド構文
// http://localhost:3000/news/2024/02
// 2024年02月のお知らせ一覧です。

export const page = ({ params }: { params: { slug: string[] } }) => {
  console.log(params); // { slug: [ '2024', '02' ] }
  // string[productId, reviewId]のlength2こ入ってるのを見る
  // 配列をオプショナルチェーン(?)にするのは、最初ゼロ(undefinedやnull)でエラー防止
  if (params.slug?.length === 2) {
    return (
      <h1>
        {params.slug[0]}年{params.slug[1]}月のお知らせ一覧です。
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>{params.slug[0]}年のお知らせ一覧です。</h1>;
    // http://localhost:3000/news
    // お知らせ一覧です。
  } else {
    return <h1>お知らせ一覧です。</h1>;
  }
};
export default page;
