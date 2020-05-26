"use strict";
var _a;
const e1 = {
    name: "Max",
    privilage: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name', emp.name);
    if ('privilage' in emp) {
        console.log('Privilage', emp.privilage);
    }
    if ('startDate' in emp) {
        console.log('startDate', emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('drive car');
    }
}
class Truck {
    drive() {
        console.log('drive Truck');
    }
    loadCargo() {
        console.log('loadCargo');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("moving with Speed", speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const userInputElement = document.getElementById('user-input');
userInputElement.value = "hi There";
const fetchedUserData = {
    id: 'u1',
    name: "Max",
    job: { title: "CEO", description: "MY Company" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
console.log(storeData);
