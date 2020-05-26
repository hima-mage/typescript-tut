// const names: Array<string>  = ['Max' , 'Manual'];

// const promise: Promise<number> = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000)
// })

function merge<T  extends object, U  extends object>(objA: T , objB: U) { 
    return Object.assign(objA, objB)
}

const mergedOb = merge({name: "Max" , age : 30} , {hobbies : ['none']})
console.log(mergedOb)


interface Lengthy { 
    length: number;
}
function countAndDescription<T extends Lengthy >(element: T) : [T, string] { 
    let descriptiontext = "Got no value"
    if (element.length === 1){ 
        descriptiontext = "got 1 element "
    } else if  (element.length > 1) { 
        descriptiontext = "got " + element.length + " elements" 
    }
    return [element , descriptiontext]
}

console.log(countAndDescription("hi there"))


function extractAndConvert<T extends object , U extends keyof T>(obj: T , key: U) { 
    return obj[key];
}

console.log(extractAndConvert({name: 'ibrahim'}, 'name'));


class DataStorage<T > { 
    private data: (string | number | boolean)[]= []
    addItem(item: string | number | boolean) { 
        this.data.push(item)
    }

    removeItem(item: string | number | boolean) { 
        this.data.splice(this.data.indexOf(item))
    }

    getItems() { 
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Mannu')
textStorage.addItem('Max') 
textStorage.removeItem('Max')

console.log(textStorage.getItems())


interface CourseGoal { 
    title : string; 
    description : string ; 
    completeUntil : Date;
}

function createCourseGoal ( 
    title: string, 
    description: string, 
    date : date 
): CourseGoal { 
    let courseGoal : Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description 
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal
}


const names: Readonly<string[]> = ["Max" , "Anna"]
names.push("Manu"); // error 