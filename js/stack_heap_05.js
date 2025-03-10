// +++++++++++++++++++++ Stack +++++++++++++++++

let str = "Hello World !" //goes to stack

let anotherStr = str

// console.log(typeof anotherStr);

let user = {
    email: "user@gmail.com",
    upi: "uaerupi@sbl"
}
// console.log(typeof user);  This will goes to heap

// Heap stores the references
// Stsck stores the copy

// ================= String ========================

let name = "Venu"
let age = 21


// console.log(`Hello my name is  ${name} I am ${age} years old and I will be ${++age} next year`);

const gameName = new String(`Venu`)

// console.log(gameName[0]);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));

console.log(gameName.indexOf('n'));


