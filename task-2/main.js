// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr2 = [];

for(let i = 0 ; i < arr.length ; i++){

    if(!arr2.includes(arr[i])){
        arr2.push(arr[i])
    }

}console.log(arr2.length);
