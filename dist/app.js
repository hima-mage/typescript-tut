"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedOb = merge({ name: "Max", age: 30 }, { hobbies: ['none'] });
console.log(mergedOb);
function countAndDescription(element) {
    let descriptiontext = "Got no value";
    if (element.length === 1) {
        descriptiontext = "got 1 element ";
    }
    else if (element.length > 1) {
        descriptiontext = "got " + element.length + " elements";
    }
    return [element, descriptiontext];
}
console.log(countAndDescription("hi there"));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'ibrahim' }, 'name'));
