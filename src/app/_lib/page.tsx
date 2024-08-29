import React from "react";

const page = () => {
  // 「_」付き：プライベートフォルダ
  // http://localhost:3000/_libでもアクセスされない（404）
  // 用途としては、開発途中の非公開の画面
  return <div>途中のページ</div>;
};

export default page;
