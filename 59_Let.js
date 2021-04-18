let a = (() => {
    let x = this
    return x
})()
console.log(typeof a);