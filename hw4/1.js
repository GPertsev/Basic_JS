function numToObj(num){
    let numbObj = {};
    if(num>999) {
        console.log('Число больше 999');
        return numbObj;
    }
    else if (num>=100) {
        let hundreds = Math.trunc(num/100);
        let withoutHundreds = num%100;
        let tens = Math.trunc(withoutHundreds/10);
        let withoutTens = withoutHundreds%10;

        numbObj['единицы'] = withoutTens;
        numbObj['десятки'] = tens;
        numbObj['сотни'] = hundreds;
        
    }
    else if(num<100 && num>=10) {
        let tens = Math.trunc(num/10);
        let withoutTens = num%10;

        numbObj['единицы'] = withoutTens;
        numbObj['десятки'] = tens;
        numbObj['сотни'] = 0;
    }
    else if(num<10) {
        numbObj['единицы'] = num;
        numbObj['десятки'] = 0; 
        numbObj['сотни'] = 0;  
    }
    return numbObj;
}

console.log(numToObj(345));
console.log(numToObj(99));
console.log(numToObj(7));
console.log(numToObj(1111));
console.log(numToObj(0));




function numToObj(num){
    let numbObj = {};
    if(num>999) {
        console.log('Число больше 999');
        return numbObj;
    }
    let stringNum = String(num);
    let nArr = stringNum.split("");
    if(nArr.length==3){
        numbObj['единицы'] = Number(nArr[2]);
        numbObj['десятки'] = Number(nArr[1]); 
        numbObj['сотни'] = Number(nArr[0]); 
    }
    else if (nArr.length==2) {
        numbObj['единицы'] = Number(nArr[1]);
        numbObj['десятки'] = Number(nArr[0]); 
        numbObj['сотни'] = 0; 
    }
    else if (nArr.length==1) {
        numbObj['единицы'] = Number(nArr[0]);
        numbObj['десятки'] = 0; 
        numbObj['сотни'] = 0; 
    }

    return numbObj;
}

console.log(numToObj(345));
console.log(numToObj(99));
console.log(numToObj(7));
console.log(numToObj(1111));
console.log(numToObj(0));