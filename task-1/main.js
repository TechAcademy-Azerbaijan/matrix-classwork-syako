// Use this arrays for solution
let array_1 = [3, 1, 3, 4, 2, 4, 12]
let array_2 = [4, 15, 43, 1, 15, 1]

let arr3 = [];

for(i = 0 ; i < arr1.length ; i++){

    if(!arr2.includes(arr1[i])){
        arr3.push(arr1[i])
    }

}
console.log(arr3.length);
console.log(arr3.join(" "));
