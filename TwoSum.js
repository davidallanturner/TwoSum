//2 Sum Project
// Given an Array, find 2 numbers in the array that equal the given request eg: [1,2,3,4,5] 4; Answer is 3 and 1

let arr = [1, 2, 3, 4, 5];
let look = 8

dance:
for(let i =0; i<arr.length; i++){
    let lookup = look
    lookup -= arr[i];

    console.log('i:' + arr[i])
        for(let x=i+1;x<arr.length;x++){
            let lookup2 = lookup
            lookup2 -= arr[x]
            console.log('x:' + arr[x])
            
            console.log('lookup: ' + lookup)/2
            if(lookup2 == 0) {
                console.log(`The first hit for 8 is: ${arr[i]} and ${arr[x]}`)
                break dance;
            }
        }
}
