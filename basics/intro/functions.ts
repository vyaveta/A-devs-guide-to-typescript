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
 

// there are diff ways to write an arrow function in Typescript

const arrowFunction1: (parameter: string) => string = (parameter) => {
    return parameter
}

const arrowFunction2 = (parameter: string): string => {
    return parameter
}

// now lets explore the map function

const tech = ["Mongodb", "phyton", "javascript", "typescript"]

tech.map((item)  => {
    return 2
    return item
    return { name: "sanity"}
})

// by default the map function can return any type but we do can stop that and make it return only a certail type

tech.map((item) : string => {
    // return 2
    return item
    // return { name: "sanity"}
})

/** we may write function which does not return any, by default its return value will be void, but thats not a 
 * good practice, so we can use never for those cases */ 


function createError(message: string): never {
    throw new Error(message)
    // return temp /** you will face error if you uncomment this line cuz this function is not allowed to return since its return type is never */
}

function isString(value: any): value is string {
    return typeof(value) === "string"
  }

  // given above is the example of typeguard, what it does is that, if the function returns false, it treats the value as string

function isBoolean(value: any): value is boolean {
    return typeof(value) === "boolean"
}
// now this function treats the value as boolean if the function returns true



export {}