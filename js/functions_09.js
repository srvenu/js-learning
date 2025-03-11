// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(3,4)

function addTwoNumbers(num1,num2){
    return (num1+num2);
}

// const result = addTwoNumbers(3,4);
// console.log(result);

function loginUserMessage(username){
    if(!username ){
        console.log("Please enter user name ");
        return
    }
    return `${username} Just logged in`;
}

let msg = loginUserMessage("Venu");

// console.log(msg);

function calculateCardPrice(...num){
    return num
}

let result = calculateCardPrice(200,250,50,450,150);
// console.log(result);


const user = {
    username:"Venu",
    price:150
}

function handleObject(anyobject){
    console.log(`Name: "${anyobject.username}" and Price is ${anyobject.price}`);
    
}

// handleObject(user);


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));


// ================= Global local Scope ==================

let a = 300

if(true){
    let a = 10
    const b = 30  // Block Scope
    // c = 30
    console.log("a : "+a); //block scope of a
}

console.log("a : "+a); //Global scope of a
// console.log(b);
// console.log(c);

