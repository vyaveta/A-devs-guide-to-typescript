function loginUser({name}: any, age: number){
    return console.log(name,'is the name') // this function returns void
}

loginUser({name: "Adwaith"}, 19)

// we can also set a function to return only a certain type only, given below is an example
function example1(): null{
    // return "this will show error" /* uncomment this line and you will face an error cuz this function **/
    return null
}

// what if you need a function which is oke to return multiple selected type, this is how you write using "|"
function condition(statement: string | boolean = false) : boolean | string {
    if(statement) return statement
    return false
}
 

// Two diff ways to write an arrow function in Typescript

const arrowFunction1: (parameter: string) => string = (parameter) => {
    return parameter
}

const arrowFunction2 = (parameter: string): string => {
    return parameter
}

arrowFunction1("hello")

condition()

export {}