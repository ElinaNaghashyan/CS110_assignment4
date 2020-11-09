
const matUtil = require('./utils');

let mat1 = [
    [4,7],
    [5,8]
]
let mat2 = [
    [1,3],
    [7,6]
]

console.table(matUtil.matrixProduct(mat1,mat2));
//console.table(matUtil.sumOfMatrices(mat1,mat2));
//onsole.log(matUtil.sumOfEachRow(mat1));