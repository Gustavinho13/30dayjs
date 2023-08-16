arr1 = ["foo", "bar", "baz"]

// arrays in js are teatred as objects, where index corresponds to a
// certain value, meaning the index is actually a string when we 
// iterate through the array, that's why we need to add Number func
for (const i in arr1)
    console.log("i + 3, without Number() -> " + (i + 3));

for (const i in arr1)
    console.log("i + 3, with Number() -> " + (Number(i) + 3));

const fn = (x, i) => x * i;

arr2 = [1, 2, 3];

console.log("arr.map using x * i -> " + arr2.map(fn));
