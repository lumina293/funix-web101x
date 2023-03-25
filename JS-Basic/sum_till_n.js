// for from 1 to n
let n = prompt("n = ") * 1;
let stmt = "S = 1";
let sum = 1;
for (let i = 2; i <= n; i++) {
  sum = sum + i;
  stmt = stmt + " + " + i;
}
console.log(stmt + " = " + sum);
