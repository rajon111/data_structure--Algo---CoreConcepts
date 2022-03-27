//Big O(n)

function sumOfAll(n){
    let total =0;
    for(let i =0; i<= n; i++){ //n
        total +=i
    }
    return total
}
console.log(sumOfAll(5));

//Big O(n2)
function multi(n){
    for(let i =0; i<=n; i++ ){ //n
        for(let j =0; j<=n; j++ ){ //n
        //for(let j =0; j<=3; j++ ){ 0(n)
            console.log(i,j);
        }
    }
}
multi(4)

//Big O(1)
function sumOfAll(n){
    return n*(n+1)/2
}
console.log(sumOfAll(5));

//Constant And Smaller Terms Don't Matter In Big O
//BIG O(n)
function min5log(n){
    for(let i=0; i<=Math.max(5,n); i++){ // dependent on n
        console.log(i);
    }
}
min5log(6)

//BIG O(1)
function max5log(n){
    for(let i=0; i<= Math.min(5,n);i++){// not depend on n
        console.log(i);
    }
}
max5log(6)