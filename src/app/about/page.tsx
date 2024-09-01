import { Metadata } from "next";
import Link from "next/link";
import React from "react";

// layout.tsxとpage.tsxを両方書いたときにはpage.tsxが優先される
export const metadata: Metadata = {
  title: "私たちについて",
  description: "当社についての概要です",
};

export const page = () => {
  return (
    <div>
      アバウトpage<Link href="/">トップへ戻る</Link>
    </div>
  );
};

export default page;
