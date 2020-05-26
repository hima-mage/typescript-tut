class Department { 
    name: string ;
    employees : string[] = [];

    constructor(n: string) {
        this.name = n;
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


accounting.describe()
accounting.printEmployeeInformation()
 