

const arr1 = [];

const arr2 = [1, 2, 3, 4, 5, 6].filter( item => {
    if (item > 5) {
        arr1.push(item)
    }
} )

console.log(arr2);
console.log(arr1);
