"use strict";
function login(user) {
    console.log(`${user.username} + ${user.password} + ${user.email} logged in`);
}
login({ username: "ShehabEldib", password: 123456 });
login({ username: "ShehabEldib", password: 123456, email: "shehab@gmail.com" });
