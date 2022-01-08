let arr = [2, 3, 4, 5, 6]
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(arr[i])
    }, 0)
}
for (let j=0; j<5;j++){
    setTimeout(()=>{
        console.log(arr[j])
    },0)
}