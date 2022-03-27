//returning a single value of sum
//Big O(1)
function sum(arr){
    let total = 0;
    for(let i =0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log(sum([12,4,5]));

//Big 0(n)
function double(arr){
    let newArr =[]
    for(let i =0; i<arr.length; i++){
        newArr.push(arr[i] * 2)
    }
    return newArr // this function depend on newArr
}
console.log(double([2,9,12,4]));