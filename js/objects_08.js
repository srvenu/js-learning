// singleton

// object literals

// Object.create(jsUser);

const mySym = Symbol("key1");

const user = { 
    name : "VenuGopal",
    [mySym] : "myKey1",
    age:21,
    location:"Banglore",
    email:"venu@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(user.name);
// console.log(user["age"]);
// console.log(user[mySym]);

// Object.freeze(user);

// console.log(user);
user.greeting = function(){
    console.log(`Hello Users, ${this.name} `);
}

// user.greeting();


// const tinderUser = new Object()

// console.log(tinderUser);

const regularUser = {
    email : "venu@gmail.com",
    fullname:{
        fName:"Venu",
        lName:"Gopal"
    },
    age:21,
    location:"Banglore"
}

// console.log(regularUser);
// console.log(tinderUser);



