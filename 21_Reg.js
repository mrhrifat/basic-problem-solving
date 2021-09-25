/*
You can not use any built-in methods or regex.
Don't see others comment until you solve it by yourself.
input: hello!js25@/*bd
output: hellojs@bd
input: **#4Dh - +41aka5@().com8&
output: Dhaka@.com
*/

const createReg = str => str.replace(/[^a-z@.?]/gi, '')
console.log(createReg('**#4Dh - +41aka5@().com8&'))
console.log(createReg('hello!js25@/*bd'))