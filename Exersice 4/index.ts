interface User {
    readonly id : number
    username: string;
    password: number;
    email?: string;
}

// function login(user:User){
//     console.log(`${user.username} + ${user.password} + ${user.email} logged in`);
// }

// login({username: "ShehabEldib", password: 123456});
// login({username: "ShehabEldib", password: 123456 , email: "shehab@gmail.com"});

const user:User = {
    id: 1,
    username: "ShehabEldib",
    password: 123456,
    email: "shehab@gmail.com"
}

// user.id = 11



