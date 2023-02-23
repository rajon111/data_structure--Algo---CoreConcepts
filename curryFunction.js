// curry converter function

function curry(func){
    return function curried(...args){
        if(args.length>= func.length){
            return func.apply(this, args)
        }else{
            return function(...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function sum(a, b, c){
    return a * b * c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1), (2, 3));
console.log(curriedSum(1), (2), (3));

// ........................
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

// discount calculation

function discount(price, disc){
    return price - price * disc;
}

function curryDiscount(disc){
    return (price) =>{
        return price - price * disc;
    };
};

let tenPercentDis = curryDiscount(0.1) //partial function
let twentyPercentDis = curryDiscount(0.2);

let customer1 = tenPercentDis(700)
let customer2 = twentyPercentDis(1000)

console.log(customer1);
console.log(customer2);

