/*
Input: https://www.fb.com/javascript/course/node
Output: node

Input: https://www.fb.com/javascript
Output: javascript

01) You can't use any built in method
02) You can't use str.length
*/
const createReg = str => {
    return str.replace(/[a-z]+$/g, ' ')
}
console.log(createReg('https://www.fb.com/javascript'))
console.log(createReg('https://www.fb.com/javascript/course/node'))