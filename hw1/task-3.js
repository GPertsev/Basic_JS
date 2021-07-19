let numToString = 1000 + "108";

alert(numToString); //Выводит 1000108, приводя число 1000 к строке "1000", т.к. есть оператор "+" отвечающий за конкатенацию, а один из аргументов имеет тип "строка".

let num = 1000; // Тип "число"
let string = "108"; // Тип "строка"
let test = num + string; // Тип "строка"

alert(num + " - " + typeof(num));
alert(string + " - " + typeof(string));
alert(test + " - " + typeof(test));