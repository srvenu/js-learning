// JavaScript and classes

// OOP

// Object
// Object is the collection of properties and methods
// ex : toLowerCase

// Constructor function
// Prototypes
// Classs
// Instances (new, this)


// 4 pillers
/*
Abstraction
Encapsulation
Inheritance
Polymorphism
*/

const user = {
    username : 'Venu',
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        console.log("Got User Details from DB.");
        // console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor :
// const promiseOne = new Promise()
// const date = new Date()


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this
}

const userOne =new User('Venu',10,true);
const userTwo =new User('VenuSR',11,false);
console.log(userOne);
console.log(userTwo);
// When we use new keyword we will create new instances
//  Constructure function is called
// every object will injucted into that function
// Then we will get the output
