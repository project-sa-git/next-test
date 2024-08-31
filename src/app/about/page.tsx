import React from "react";

// layout.tsxとpage.tsxを両方書いたときにはpage.tsxが優先される
export const metadata = {
  title: "私たちについて",
  description: "当社についての概要です",
};

export const page = () => {
  return <div>アバウトpage</div>;
};

export default page;
