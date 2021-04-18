for (var i = 0; i < 4; i++) {
    const fun = () => {
        console.log(i);
    }
    setTimeout(fun, 1000)
}