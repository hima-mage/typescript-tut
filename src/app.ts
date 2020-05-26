class Department { 
    // private readonly id: number ;
    private employees : string[] = [];

    constructor(public name: string) {
         
    }
    describe(this:Department ) { 
        console.log("department" , this.name)
    }
    addEmployee(employee: string){
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting =  new Department('Accounting');
accounting.addEmployee("Max")
accounting.addEmployee("Manu")
accounting.employees[2] = "Anna";

accounting.describe()
accounting.printEmployeeInformation()
 