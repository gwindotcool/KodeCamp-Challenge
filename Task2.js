function flattenArray(arr) {
    let result = [];

    for (let i of arr) {
        result.push(...i);
    }

    return result;
}

console.log(flattenArray([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));




function sharedElements(arr1, arr2, arr3) {
    let result = [];

    for (let i of arr1) {
        if (arr2.includes(i) && arr3.includes(i)) {
            result.push(i);
        }
    }

    return result;
}

console.log(sharedElements(
    [1, 2, 3, 4],
    [3, 4, 5],
    [3, 4, 5, 6]
));



function uniqueElements(arr) {
    let result = [];

    for (let i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }

    return result.sort((a, b) => a - b);
}

console.log(uniqueElements([1, 3, 2, 3, 4, 5, 4, 2, 5, 6]));



function kebabToCamel(str) {
    let words = str.split("-");
    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return result;
}

console.log(kebabToCamel("hello-there"));