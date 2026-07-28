// 🏋️‍♂️ Student Exercises

// 1. 🧪 Add Types to a Function

// function fullName(first : string, last: string): string {
//   return first + " " + last;
// }
// console.log(fullName("ahmed", "salah"))

// 2. ⚙️ Optional and Default Parameters

// function registerUser(username: string, isAdmin?: boolean, language: string = "en") : string {
//      return `username: ${username} + logging : ${isAdmin}, Language: ${language}`
// }

// console.log(registerUser("Ahmed"));

// 3. 🔁 Create a Safe Rest Function

function average(...num: number[]): number {
    const sum = num.reduce((a,b) => a + b, 0)
    return sum / num.length;
}

console.log(average(3,5))