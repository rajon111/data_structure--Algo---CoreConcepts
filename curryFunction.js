function multiply (a, b, c ){
    return a * b * c ; 
}

// curry 
function curryMultiply(a){
    return function(b){
        return function(c){
            return a * b * c;
        };
    };
};

let step1 = curryMultiply(5);
let step2 = step1(4);
let step3 = step2(7);

console.log(step3);