// Null 合体演算子 (??)
// Nullish coalescing operator
// Null 合体演算子 (??) は論理演算子の一種です。この演算子は左辺が null または undefined の場合に右の値を返し、それ以外の場合に左の値を返します。

function hundleLogger(log) {
  // 左がnullかundefinedなら右を返し、それ以外なら左を返す
  result = log ?? "エラーです";
  console.log(result);
}

hundleLogger("OK"); // OK
hundleLogger(undefined); // エラーです
hundleLogger(null); // エラーです
