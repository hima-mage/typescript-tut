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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item));
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Mannu');
textStorage.addItem('Max');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Max", "Anna"];
names.push("Manu");
