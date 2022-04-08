// time complexity == n*2
// space complexity == n
const uniqueNames  = arr =>{
    let uniqeName = []
    for(let i=0; i<arr.length; i++){// time -- n
        let ele = arr[i]
        if(!uniqeName.includes(ele)){ // time -- n
            uniqeName.push(ele)
        }
    }
    return uniqeName
}

let names = ['ryan', 'shuvo', 'rafi', 'ryan']
console.log(uniqueNames(names));