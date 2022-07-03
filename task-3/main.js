// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr2 = [];
let count = 0

for(i = 0 ; i < arr.length ; i++ ){
    for(j = 0 ; j < arr.length ; j++ ){

        if(arr[i]==arr[j]){
            count++
        }
    }
    if(count===1){
        arr2.push(arr[i])
    }
    count = 0
}
console.log(arr2);
