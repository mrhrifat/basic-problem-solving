function f() {
    let a = b = 0;
    a++;
    return a;
}
f();
console.log(typeof a);