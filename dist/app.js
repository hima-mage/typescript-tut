"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedOb = merge({ name: "Max", age: 30 }, { hobbies: ['none'] });
console.log(mergedOb);
