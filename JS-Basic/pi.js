let N = prompt("How many iterations do you want?") * 1;
let first = 0;
let second = 0;

for (let i = 1; i <= N; i = i + 4) {
  first = first + 1 / i;
}

for (let i = 3; i <= N; i = i + 4) {
  second = second + 1 / i;
}

let pi = 4 * (first - second);
console.log("Pi = " + pi + " with N = " + N);
