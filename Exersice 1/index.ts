// 1. 🟢 Declare Variables with Explicit Types

// let productName : string;

// let price : number = 300;

// let discountAvailable : boolean = true;

// productName = "122";

// price = 333

// discountAvailable = false

// console.log(productName, price, discountAvailable);

// 2. 🔧 Fix this Broken JavaScript

// function getDiscount(price:number, discount:number) {
//     return price - price * discount;
//   }
// console.log(`The Discounted Price is ${getDiscount(100, 0.1)}`);

// 3. ⚠️ Dangerous any Type

function printLength(x: unknown) {
    if(typeof x == "string"){
        console.log(x.length);
    }
}

printLength("heloo")




