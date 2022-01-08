/*[10] - 4 = 6 , কিন্তু কিভাবে একটা এ্যারে থেকে একটা নাম্বার ভ্যালু কে বিয়োগ করা যায়?
আমরা যখন এখানে এ্যারে থেকে একটা নম্বর বিয়োগ করতেছি তখন এই এ্যারে টাতে Implicit type conversion হয় এবং এ্যারে টা string এ কনভার্ট হয়ে যায়।
"10" - 6
এখানে আবার 10 Implicit type conversion এর মাধ্যেমে Number এ পরিবর্তন হয়ে যায়।
10 - 6
যার ফলে আমাদের উত্তর আসে ৬
============================
এইবার, [10, 2] - 5 = NaN কেন?
আগের বার এর মতোই [10, 2] string a convert হয়ে যাবে।
"10,2" - 5
এইখানে "10,2" কে Number এ পরিবর্তন করা সম্ভব না যার ফলে,
[10, 2] - 5 = Nan
=============================
এখন তো [10, 2] + 5 = 10,25 কেন হলো বলার আর প্রয়োজনই নেই।
[10, 2] string a convert হয়ে গেছে
"10,2" + 5
এইখানে যেহেতু প্রথম ভ্যালু টা স্ট্রিং তাই Implicit type conversion এর ফলে পরের ভ্যালু গুলো ও স্ট্রিং এ কনভার্ট হয়ে যাবে। এবং স্ট্রিং গুলো concat হবে।
"10,2" + "5" = 10,25
*/

// Are are convert in Implicit type conversion
console.log([10] - 5);
//10 Arrry > 10 String > 10 Number

console.log([10, 2] - 5)
//10,2 Array > 10,2 String > But now it's not possible to convert 10,2 to Number. That's why it NaN

console.log([10, 2] + 5);
//10,2 Array > 10,2 String *Therefore 10,2 is string and it found + operator, that's why it convert 5 Number to String & Concat it.