const names: Array<string>  = ['Max' , 'Manual'];

const promise: Promise<number> = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000)
})