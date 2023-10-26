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

// but how we can define the schema of the object by using Interfaces and types

interface User {
    name: string,
    age: number,
}

let developer: User = {
    name: "Adwaith",
    age: 19
}  // try changing the name to a number and you will face error, by using interface we can check the types are correct according to interface at the time of initializing for the first time

let obj : {
    place: string,
    length: string
} = {
    place: "Earth",
    length: "small"
} // this is also a way of declaring object in ts

export {}