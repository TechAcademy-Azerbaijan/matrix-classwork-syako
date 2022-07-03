// Use this matrices for solution

let matrix_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 

let matrix_2 = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
]; 

sum = 0

for( i = 0 ; i < matrix2.length ; i++ ){

    for( k = 0 ; k < matrix2[i].length ; k++ ){

        if(matrix2[i][k] == 1){
            sum = sum + matrix1[i][k]
        }
    }
}console.log(sum);
