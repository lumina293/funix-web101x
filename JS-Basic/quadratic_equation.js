let a = prompt("a = ") * 1;
let b = prompt("b = ") * 1;
let c = prompt("c = ") * 1;

let delta = b * b - 4 * a * c;
if (delta < 0) {
  alert("Phuong trinh vo nghiem");
} else if (delta == 0) {
  let x = -b / (2 * a);
  alert("phuong trinh co nghiem kep x = " + x);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  alert("phuong trinh co hai nghiem x1 = " + x1 + " va x2 = " + x2);
}
