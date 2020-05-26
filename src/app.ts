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