// Find the area of a triangle with 3 sides a, b, c using heron's formula
// prompt a,b,c
var a = prompt("a = ") * 1;
var b = prompt("b = ") * 1;
var c = prompt("c = ") * 1;
// calculate the half perimeter of the triangle
var p = (a + b + c) / 2;
console.log("p = " + p);
// calculate the height of the triangle
var trongCan = p * (p - a) * (p - b) * (p - c);
var tuSo = 2 * Math.sqrt(trongCan);
var ha = tuSo / a;
console.log("ha = " + ha);
// find the area of the triangle
var area = (a * ha) / 2;
// display the results
alert("The area of the triangle is " + area);
