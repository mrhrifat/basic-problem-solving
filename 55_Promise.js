console.log('first')
setTimeout(() => {
    console.log('second')
}, 0)
Promise.resolve(console.log('third'))
console.log('last')