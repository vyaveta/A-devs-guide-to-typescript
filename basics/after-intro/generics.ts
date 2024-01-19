// suppose we have a function here

const getFirstElement: (array: number[]) => number = (array) => {
    return array[0]
} // if you are getting confused looking at this function, I want you to go the intro folder and check the functions file and you will get to know that functions in typescript can be coded in diff ways!

const firstNum = getFirstElement([1,3,4,55,78])// this is a function that returns a number 

// but whatif we need to reuse this funtion to get the first element from the string Array,
// we cannot do that since the function only accept number array, therefore the below code is throws an error
const firstString = getFirstElement(["hello", "world", "good", "morning"])

const getFirstElement_2 = (array: any[]) => { // if we set the array type to any, then the return type will also be type of any, which is not that efficient and is not typesafe
    return array[0]
} 

const firstString_2 = getFirstElement_2(["hello", "world", "nice", "to", "meet", "you"]) // see if we hover on the firstString_2, we can see the type of any, which is not good and thats not typesafe

//*       SOLUTION */
/**----------------------- */


const getFirstElement_3 =


<ParameterType>(array: ParameterType[]) => {
    return array[0]
}

const firstNum_3 = getFirstElement_3([3,4,5,564,65,90])
const firstString_3 = getFirstElement_3(["hello","world"])

// now the above function can be reused for multiple types and it will maintain the type safety!

// you can also manually infer the generic value'

const firstNum_4 = getFirstElement_3<number>([12,13,43,43,24])
const firstString_4 = getFirstElement_3<string>(["hello","world"])


// another examples


const input = document.querySelector(".input")

input?.value // here this line will show an error cuz it doesnt know the input will have a key named value, so we can infer the HTMLElement generic to this function since this is already an inbuild generic function and I accepts the its parameter type


const input_2 = document.querySelector<HTMLInputElement>(".input")

input_2?.value // now the type of input_2 is HTMLInputElement | null, so it no longer throws error in this case

/**----------------------------------- */

const a = [2,4,2,4,2,3,2]

a.map(() => "some string") // hover on the map to see its generics

const map = new Map<string, number>([['some string', 8]])
map.set("string", 8)

/**----------------------------------- */


type TResponse = {
    data: any, 
    status: number,
    message: string,
}

const response : TResponse = {
    data: {},
    status: 200,
    message: "Login success!"
}

/**in this case the data is set to any, even if we set the types of the data in TResponse, it cant be reused, 
 so lets see how can we make it reusable and typesafe using generic Types
*/

type TResponse_2<DATA> = {
    data: DATA,
    status: number,
    message: string,
}

type TLoginData = {
    username: string,
    age: number,
    phonenumber: number,
    // some other datas
}

const response_login: TResponse_2<TLoginData> = {
    data: {
        username: "adwaith", age: 19, phonenumber: 9999999999
    }, 
    status: 200,
    message: "Login success!"
}

// using this same TResponse_2 Type for a purchase 

type TPurchaseData = {
    userId: string,
    productIds: string[],
    totalAmount: number,
    discount: number,
    // some other datas
}

const response_purchase : TResponse_2<TPurchaseData> = {
    data: {
        userId: "random mongodb or progress db obj id",
        productIds: ["an array of ", "those obj ids"],
        totalAmount: 8788,
        discount: 111,
    },
    status: 200,
    message: "purchase succesful"
}

// now lets structure these and see how to use it in such a way that the code will be clean...

type _Response<Data> = {
    data: Data,
    status: number,
    message: string
}

type PostData = {
    _id: string
    userId: string,
    text: string,
    img_url: string,
}

type PostResponse = _Response<PostData>

const getPostById = (id: string = "random id as the default id"): PostResponse => {
    return {
        data: {
            _id: "post_id",
            img_url: "http://post.thumbnail.com",
            text: "the post text here",
            userId: "user id here"
        },
        status: 200,
        message: "Post fetch successful"
    }
}

const response_post: PostResponse = getPostById("post_id here")

// and thats how we can use this generics to write clean and type safe code...

// Setting Default values

// this is how we set default values to the generics, if no generics is passed, then this values will be taken
type T_Response<Data = { username: string, age: number, occupation: string }> = { 
    data: Data,
    status: number,
    message: string
}

// incase we dont know what will be the response data, all we know is that the response.data will be an object, then we can go for this
type Type_Response <Data extends object> = {
    data: Data,
    status: number, 
    message: string,
}

// you can also go even far and asign a default value to it
type Response_T <Data extends object = { username: string, age: number, occupation: string }> = {
    data: Data, 
    status: number,
    message: string,
}