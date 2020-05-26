"use strict";
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
