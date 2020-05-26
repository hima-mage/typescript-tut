type Admin = { 
    name : string;
    privilage : string[];
};

type Employee = { 
    name : string;
    startDate : Date;
};


// interface ElevatedEmployee extends Admin , Employee ;
//  intersection , both type 
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = { 
    name : "Max", 
    privilage: ['create-server'], 
    startDate: new Date()
}

type Combinable = string | number; 
type Numeric = number | boolean;

type Universal = Combinable & Numeric

function add(a: Combinable , b : Combinable) { 
    if (typeof a === 'string' || typeof b === 'string') { 
        return a.toString() + b.toString();
    }
    return a + b ;
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp : UnknownEmployee) {
    console.log('Name' , emp.name); 
    if ('privilage' in emp){
        console.log('Privilage' , emp.privilage);
    } 
    if ('startDate' in emp){
        console.log('startDate' , emp.startDate);
    } 
}

printEmployeeInformation(e1)

class Car { 
    drive() { 
        console.log('drive car')
    }
}
class Truck { 
    drive() { 
        console.log('drive Truck')
    }
    loadCargo() { 
        console.log('loadCargo')
    }
}

type Vehicle = Car | Truck;
const v1 = new Car( );
const v2 = new Truck();

function useVehicle(vehicle : Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck){
         vehicle.loadCargo() 
    } 
    
}

useVehicle(v2)


interface Bird { 
    type: 'bird';
    flyingSpeed : number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number
}

type Animal = Bird | Horse 

function moveAnimal(animal : Animal) { 
    console.log("moving with Speed" , animal.flyingSpeed)
}