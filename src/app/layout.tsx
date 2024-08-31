// 開発者モード-要素-<head>にあるtitleとmetadata(SEOのGoogle検索時のリンクタイトルと説明にあたる)
// layout.tsxに書いた内容が全てのページに反映される
export const metadata = {
  title: "サイトのタイトル",
  description: "サイトの説明文です",
};

// 削除することができないファイル（消しても復活する）
// porps(children)でpage.tsxを受け取って表示するように作られている（/aboutなどもpage.tsx）ので、下層ページを含めた共通パーツを作れる
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log("childrenーーーーーーーーー" + JSON.stringify(children));
  return (
    <html lang="en">
      <body>
        <header>ヘッダーです</header>
        {children}
        <footer>フッターです</footer>
      </body>
    </html>
  );
}

// childrenの中身
// {
//   "key": null,
//   "ref": null,
//   "props": {
//     "parallelRouterKey": "children",
//     "segmentPath": ["children"],
//     "template": {
//       "key": null,
//       "ref": null,
//       "props": {
//         "children": {
//           "key": null,
//           "ref": null,
//           "props": {},
//           "_owner": null,
//           "_store": {}
//         }
//       },
//       "_owner": null,
//       "_store": {}
//     },
//     "notFound": {
//       "key": null,
//       "ref": null,
//       "props": {},
//       "_owner": null,
//       "_store": {}
//     },
//     "notFoundStyles": [],
//     "styles": null
//   },
//   "_owner": null,
//   "_store": {}
// }
