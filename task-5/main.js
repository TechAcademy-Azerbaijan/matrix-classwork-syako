// Use this matrix for solution

let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];

let sum = 0
let sum2 = 0
let j = matrix.length - 1; //3



for(let i = 0 ; i < matrix.length ; i++){

    for(let k = 0 ; k < matrix[i].length ; k++){

      if(i == k){
        sum = sum + matrix[i] [k]
      }
      else if(k == j - i){
        sum2 = sum2 + matrix[i][k]
        
      }
    }
    
}console.log(`${sum} ${sum2}`);
