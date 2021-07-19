
let power = function(val, pow) {
    if (pow===0) {
        return 1;
      } else if (pow===1) {
          return val;
      } else {
          let answ = val*power(val, pow-1);
        return answ;
      }
};

console.log(power(2,4));
