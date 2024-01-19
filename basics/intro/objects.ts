/** 
 * 
 * 
 */

let user = {
    name: "Adwaith",
    age: 19,
    hobbies: ["Reading","Coding"],
}

// we can simply create an object in ts just like this but the types of the keys will be fixed just like those variables

let obj : {
    place: string,
    length: string
} = {
    place: "Earth",
    length: "small"
} // this is also a way of declaring object in ts

// incase of creating objects from functions

function createAccount(name: string, age: number, occupation: string): {uid: string, designation: string, isPremium: boolean} {
 return {uid: name + age, designation: occupation, isPremium: false}
} // but this way of infering types of object keys is not a good practice, in case of infering multiple objects with the same type, we would have to copy the code again and again, leads to duplication of code and need to change everywhere on alterations,

let newUser = createAccount("Adwaith", 19, "software dev")

// but how we can define the schema of the object by using Interfaces and types

interface User {
    name: string,
    age: number,
    hobbies: Array<string> // infering type array of string to this key
}

let developer: User = {
    name: "Adwaith",
    age: 19,
    hobbies: ["reading", "coding"]
}  // try changing the name to a number and you will face error, by using interface we can check whether the types are correct according to interface 

// so there is an efficient way to infering types to objects

/**TYPE ALIASES
 * Type
 * 
 */

type Account = {
    uid: string
    occupation: string 
    isPremium: boolean
    age: number
}

function createNewAccount(user: User): Account { // here the User is interface and Account is type, we can use both type and interface to infer the types to an object as well as to the return type to a function
    return{ uid: user.name + user.age, age: user.age, occupation: user.hobbies[0], isPremium: false}
}

/**Suppose you are creating an object for your application that uses database for eg: Mongodb, 
 * mongodb has a unique _id for every object and that should not be changed, cuz its unique for every object and we dont want that _id to somehow change during the runtime.
 * So how can we protect our precious _id from changing? well, js dont care about your precious _id, but ts do have some super powers to protect it
 * / lets explore that =>
 */

type UserObj = {
    readonly _id: string,
    name: string,
    email: string,
    isPremium?: boolean /**by adding this question mark over here, we can make this as an optional one,
    * which means it will not be a mandatory field*/
}

const canditate : UserObj = {
    _id: '5f876e234',
    name: 'adwaith',
    email: 'adwath@gmail.com',
} // we can create an object without the isPremium cuz isPremium is not a mandatory field

// user2._id = "8s0sc08" /**try uncommenting this line and you will see the error, cuz its a read only value that cannot be changed */

// we can also use this type / interface inside another one



export {}