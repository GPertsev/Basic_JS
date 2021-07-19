
let randomNumber = function(range, varName) {
    let firstRandomNumber = Math.floor(Math.random() * range);
    let secondRandomNumber = Math.floor(Math.random() * range);
    let finalRandomNumber = firstRandomNumber - secondRandomNumber;
    console.log("Произвольное число " + varName + ": " + finalRandomNumber);
    return finalRandomNumber;
};

let a = randomNumber(100, "a");
console.log(a);
let b = randomNumber(100, "b");
console.log(b);
// let a = +prompt("Первое число");
// let b = +prompt("Второе число");
// let a = 22;
// let b = -6;
let c;

if (a>=0 && b>=0) {
    if(a>b) {
        c = a - b;
        console.log("Разность чисел: " + c);
    } else {
        c = b - a;
        console.log("Разность чисел: " + c);
    }
} else if (a<0 && b<0){
    c = a * b;
    console.log("Произведение чисел: " + c);
} else {
    c = a + b
    console.log("Сумма чисел: " + c);
}

console.log(c);

