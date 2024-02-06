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

//3.3 3.4
export function everyLoop(array, test) 
{
  let curResult = true;
  for(let item of array){
    curResult = curResult && test(item)
  } return curResult
}

export function everySome(array, test) 
{
return !array.some((value)=>!test(value))
} 

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true