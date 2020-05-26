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