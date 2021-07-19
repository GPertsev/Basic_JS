let arr=[];
let i = 1;

label: while (i<100) {
    i++;
    let j=2;
    while (j<i) {
        if (i % j == 0) {
            continue label;
            }
        j++
    }

    arr.push(i);
}
console.log(arr);