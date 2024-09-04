// JSで頻出の配列メソッド7選【filter, find, some, every, includes, map, forEach, reduce】

const articles = [
  { title: "aaa", cat: "html" },
  { title: "bbb", cat: "css" },
  { title: "ccc", cat: "html" },
  { title: "ddd", cat: "js" },
];

// filter: 条件に一致する(true)のものを配列にして返す
const htmlArticles = articles.filter((articles) => {
  return articles.cat === "html";
});
console.log(htmlArticles); // [ { title: 'aaa', cat: 'html' }, { title: 'ccc', cat: 'html' } ]

// find: 条件に一致する(true)のもので、最初のものを返す(複数あっても最初の１つだけ取ってくる)
const htmlArticle = articles.find((article) => {
  return article.cat === "html";
});
console.log(htmlArticle); // { title: 'aaa', cat: 'html' }

// some: 条件に一致するかどうかを返す
const htmlFlg = articles.some((article) => {
  return article.cat === "html";
});
console.log(htmlFlg); // true

// every: 配列の要素の中で全ての要素が条件に一致するかどうかを返す
const htmlFlgs = articles.every((article) => {
  return article.cat === "html";
});
console.log(htmlFlgs); // false

// includes: オブジェクトが要素になっている配列には使えない
const result = articles.includes((article) => {
  return article.cat === "html";
});
console.log(result); // false
const arr = ["html", "css", "js"];
const result2 = arr.includes("css");
console.log(result2); // true

// map: 処理結果を配列で返す。map.js参照
const titleList = articles.map((articles) => {
  return articles.title;
});
console.log(titleList); // [ 'aaa', 'bbb', 'ccc', 'ddd' ]

// forEachは処理を繰り返し実行する(何も返さない)
const titles = articles.forEach((article) => {
  console.log(article.title);
  // aaa
  // bbb
  // ccc
  // ddd
  return article.title;
});
console.log(titles); // undefined

// reduce: 要素同士を累積(合体)させる(任意で第二引数にaccの初期値を与えることもできる)
// reduce の第二引数は acc の初期値
// つまり、accを作るためのメソッド
const counts = articles.reduce((acc, article) => {
  const cat = article.cat; // 現在のarticleのカテゴリ（html, css, jsなど）
  console.log("現在のカテゴリー:", article.cat);
  console.log("acc[cat]", acc[cat]);
  if (acc[cat] === undefined) {
    acc[cat] = 1; // 初めて出てくるカテゴリの場合、1を設定
  } else {
    acc[cat]++; // すでに出てきたカテゴリの場合、カウントを1増やす
  }
  console.log("現在のacc", acc);
  return acc; // 現在の累積結果を次のループに渡す
}, {}); // 初期値は空のオブジェクト {}。基本空の配列[]とか0とか空文字
console.log(counts); // { html: 2, css: 1, js: 1 }
// 現在のカテゴリー: html
// acc[cat] undefined
// 現在のacc { html: 1 }
// 現在のカテゴリー: css
// acc[cat] undefined
// 現在のacc { html: 1, css: 1 }
// 現在のカテゴリー: html
// acc[cat] 1
// 現在のacc { html: 2, css: 1 }
// 現在のカテゴリー: js
// acc[cat] undefined
// 現在のacc { html: 2, css: 1, js: 1 }
// { html: 2, css: 1, js: 1 }

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0); // 初期値を0にする
console.log(sum); // 15
