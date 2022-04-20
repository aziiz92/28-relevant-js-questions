const array = [1, 2, 3, 4, 5];
let result  = 0;

/**
 * Version 1 
 * with for loop
 */
function Sum() {
    for (var index in array) {
        result += array[index];
    }
    
    console.log(result);
}

Sum();

/**
 * Version 2
 * with reduce
 */
result = array.reduce((a, b) => a + b, 0);
console.log(result);