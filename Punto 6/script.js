let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
let n3 = prompt("Escribe otro número");
if (n1 > n2 && n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}