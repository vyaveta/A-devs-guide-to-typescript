/* We can declare variables in Typescript just like how we declare variable in Javascript, but 
Typescript adds types to every variables

Some of those types are => number, string, boolean, null, undefined, void,unknown, error, never,
object, array, tuples*/

// lets see how we can declare variables in TS

let name: string = "adwaith" // here the variable "name" has the type string attached to it and it cannot the changed later in the code
// name = 8 
/* try to uncomment the above line and you will see an error saying Type number is not assignable to type string
while in javascript you can do that, actually js dont care about the variable types which may cause bugs and error in 
your application */

// and you dont really need to declare and initialize you variables like I did in the line 9,
let name2 = "adwaith" // Typescript is smart and it automatically attach/allocates the type to the variable based on its value
// because typescript is a superset of javascript so it will automatically infer that type from the value assigned to them.
// name2 = 8

// try to uncomment the above comment and you will face the same error as the prev example, so 
// MORAL OF THE STORY => you dont always need to infer the type to your variables, typescript will do on its own
// it means that typescript is checking our code before running it.
let name3:string; //but this is a way to tell typescript what kind of data type should be stored inside the variable "name"

// same goes for every type we cannot change the variable which is a boolean type to string, || we cant change the type of the variables in ts

let value: any = "23"
let num = value as number // as is keyword used for type casting in TS. I will write more about as in functions sections

console.log(typeof(num))

// the above example is the perfect example to show and prove you that typescript is just a developement tool and cause no mutation, it just add new features to the javascript
/* what really happens here is the value variable is any (I dont recommend you to use any in your ts app) but the value is a string
and the type of num on compiling is number, but on executing we get the result string, because that how js treats variable, js dont care about your variable types
we assigned var named value to the var num but we used the as keyword which tells the ts to treat num as a number
but the effect of ts will only stays till compilation, it wont have effect in execution, just like I wrote above,
the ts app runs in js, ts is for development purpose */

// try assinging the num a sting value and you will face error on compiling 

// here are some examples of infering types to variables
let v1: number
let v2: string
let v3: null
let v4: undefined
let v5: Error // Here error is mainly used in catch, I will write more about it in functions section
let v6: unknown

function randomNum() {
    return Math.floor(Math.random() *100) // this function return a random number
}

// v2 = randomNum() this will throw error cuz v2 expects string while randomNum return a number
v1 = randomNum() // and this line will work fine cuz v1 expects a number and it get one

export {}

// Now lets cover objects, go to objects.ts folder in the intro folder
