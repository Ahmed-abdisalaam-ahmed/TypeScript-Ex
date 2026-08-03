"use strict";
// 1. 🔁 Echo Function with Generics
// function echo<T>(data:T): T{
//     return data;
// }
// const myName = echo<string>("shehab")
// console.log(myName)
// const myAge = echo<number>(20)
// console.log(myAge)
// const myStatus = echo<string[]>(["active", "inactive"])
// console.log(myStatus)
// const myUser = echo<{name: string, age: number}>({name: "shehab", age: 20})
// console.log(myUser)
// 2. 📦 Generic Interface
// interface ApiResult<T> {
//     success: boolean;
//     data: T;
// }
// const ApiResultString: ApiResult<string> = {
//     success: true,
//     data: "Eng Omartood"
// }
// const ApiResultUser: ApiResult<{name: string, age: number}> = {
//     success: true,
//     data: {
//         name: "shehab",
//         age: 20
//     }
// }
// console.log(ApiResultString.data)
// console.log(ApiResultUser.data)
// 3. 🎯 First Element Function
function firstElement(Element) {
    return Element[0];
}
const firstElementString = firstElement(["shehab", "ahmed", "ali"]);
console.log(firstElementString.toUpperCase());
const firstElementNumber = firstElement([1, 2, 22, 33, 34]);
console.log(firstElementNumber.toFixed(2));
const firstElementUser = firstElement([{ name: "shehab", age: 20 }, { name: "ahmed", age: 21 }, { name: "ali", age: 22 }]);
console.log(firstElementUser);
