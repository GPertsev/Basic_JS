
var a = 2;
var x = 1 + (a *= 2);
console.log(x); //Выводит 5.

//Сначала выполняются операции в скобках, т.е. а = а * 2, где а присвоено значение 2, т.е. 2 * 2, затем идёт сложение 1 + 4.