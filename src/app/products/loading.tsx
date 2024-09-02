import React from "react";

const loading = () => {
  console.log("商品一覧loading");
  // そもそもNext.js自体がページの切り替えが早いのでloading画面が要らなかったりするが、自作したい場合
  return <div>商品一覧loading</div>;
};

export default loading;
