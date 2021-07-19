
let addition = function(a,b) {
    return a+b;
};

let subtraction = function (a,b) {
    return a-b;
};

let multiplication = function(a,b) {
    return a*b;
};

let division = function(a,b) {
    return a/b;
};


let mathOperation = function(arg1, arg2, operation) {
    let answer;
    switch(operation) {
        case "addition": answer = addition(arg1, arg2);
        break;
        case "subtraction": answer = subtraction(arg1, arg2);
        break;
        case "multiplication": answer = multiplication(arg1, arg2);
        break;
        case "division": answer = division(arg1, arg2);
        break;
    }
    return answer;
};

console.log(mathOperation(10,5,"addition"));
console.log(mathOperation(10,5,"subtraction"));
console.log(mathOperation(10,5,"multiplication"));
console.log(mathOperation(10,5,"division"));