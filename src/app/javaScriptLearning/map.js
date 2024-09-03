// map解説
// 戻り値は配列になる
// 配列に使用できる。オブジェクトには使用できない
const data = [1, 2, 3, 4];
// オブジェクト　実行でエラー「TypeError: data.map is not a function」
// const data = { id: 1, name: 2, age: 3, num: 4 }; //

// なお、下記はコールバック関数と呼ばれ、numはコールバック関数の引数ということになり、配列の要素が一つずつ(1,2,3,4)入れられる
const result = data.map((num) => {
  return num + 1;
});

console.log(result);
// node src/app/javaScriptLearning/map.js
// [ 2, 3, 4, 5 ]

const students = [
  { id: "0001", name: "AAA", age: 20 },
  { id: "0002", name: "BBB", age: 19 },
  { id: "0003", name: "CCC", age: 18 },
];

// 配列の構成を作り変える
// [student.id]はオブジェクトのkey(プロパティ名)。計算されたプロパティ名（Computed Property Name）」と呼ばれる
// ブラケット記法 ([]) を使うのは、プロパティ名を動的に指定したい場合や、変数の値をkeyとして使用したい場合に使用
const formatted = students.map((student) => {
  return { [student.id]: student.name };
});
console.log(formatted);
// [ { '0001': 'AAA' }, { '0002': 'BBB' }, { '0003': 'CCC' } ]

//　別な書き方（分割代入（Destructuring Assignment）で）
// オブジェクト名studentを複数書かなくていい(studentと{ id, name }は同じ)
// return も書く必要がない
const reformatted = students.map(({ id, name }) => ({
  [id]: name,
}));
console.log(reformatted);
// [ { '0001': 'AAA' }, { '0002': 'BBB' }, { '0003': 'CCC' } ]  // 同じ結果

// React風
// const App = () => {
//   const todos = ["todo1", "todo2", "todo3", "todo4"];
//   return (
//     <>
//       <ul>
//         {/* iはインデックスで0から */}
//         {todos.map((todo, i) => (
//           <li key={i}>{todo}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// 普通の関数: 定義した場所で直接呼び出されて実行されます。
// コールバック関数: 他の関数に引数として渡され、その関数の中で特定のタイミングで実行されます。例えば、イベントが発生したときや、非同期処理が完了したときに実行されます。
