
//3-1 flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
var merged = [].concat.apply([], arrays);
console.log(merged)

//3.2 loop
function loop(value, test, update, body) {
    for (; test(value); value = update(value)) {
      body(value);
    }
  }
  
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    console.log
  );