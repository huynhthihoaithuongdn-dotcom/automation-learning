// concat: merge cac array lai voi nhau
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let all = arr1.concat(arr2)

let combine = arr1.concat(arr2, arr3);
console.log(combine);

let combine_1 = arr1.concat(all);
console.log(combine_1);

// spread operator (new) ==> less use
let merge = [...arr1, ...arr2, ...arr3];
console.log(merge);