/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// strategy pattern, aka passing in a function as an argument
var map = function(arr, fn) {
    const res = [];

    for (const i in arr) {
        res.push(fn(arr[i], Number(i)));
    }

    return res;
};
