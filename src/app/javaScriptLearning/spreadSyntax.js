// 配列のコピー
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log("arr1", arr1); // arr1 [ 1, 2, 3 ]
console.log("arr2", arr2); // arr2 [ 1, 2, 3 ]

// 配列の合体
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
// くっつけたいものをちょんちょんちょん(...)で書く
const arr5 = [...arr3, ...arr4];
const arr5v2 = [...arr4, ...arr3];
console.log("str5: ", arr5); // str5:  [ 1, 2, 3, 4, 5, 6 ]
console.log("arr5v2: ", arr5v2); // arr5v2 [ 4, 5, 6, 1, 2, 3 ]

// 文字列を分解
const str1 = "tanaka";
const arr6 = [...str1];
console.log("arr6: ", arr6); // arr6:  [ 't', 'a', 'n', 'a', 'k', 'a' ]

// オブジェクトのコピー
const obj1 = {
  id: "0001",
  name: "AAA",
  age: 20,
};
const obj2 = {
  ...obj1,
};
console.log("obj1: ", obj1); // obj1: { id: '0001', name: 'AAA', age: 20 }
console.log("obj2: ", obj2); // obj2: { id: '0001', name: 'AAA', age: 20 }

// スプレッド構文によるオブジェクトの合体
// ダブったidは上書きされる(0003->0004)
const obj3 = {
  id: "0003",
  name: "CCC",
};
const obj4 = {
  id: "0004",
  age: 18,
};
const obj5 = {
  ...obj3,
  ...obj4,
};
console.log("obj5: ", obj5); // obj5:  { id: '0004', name: 'CCC', age: 18 }

// 分割代入
const obj6 = {
  id: "0001",
  name: "AAA",
  age: 20,
};
// obj6.とか書かなくていい
const { name, age } = obj6;
console.log(name); // AAA
console.log(obj6.name); // AAA
const { id, ...other } = obj6;
// const { id, id以外の全てのプロパティをまとめる } = obj6;
console.log(id); // AAA
console.log(other); // { name: 'AAA', age: 20 }

// 関数の引数で何個あるか分からない（仮の実装で分からないときとか）
function test(...num) {
  console.log(num);
}
test(1, 2, 3);
// [ 1, 2, 3 ]
