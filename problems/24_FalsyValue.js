/*
ধরুন আপনার নিকট একটি Array আছে
var arr = [2, 0, true, undefined, "apple", "", null, 122, false]
এখন এই Array থেকে সব Falsy value remove করতে বললে কিভাবে করবেন?
আমি সবচেয়ে সহজ একটা সমাধান দেখাচ্ছিঃ
var res = arr.filter(Boolean);
console.log(res) // [2, true, "apple" 122]
Falsy values:

    false
    0
    "" //empty string
    undefined
    null
    NaN
*/