const user = {
    username: "Venu Gopal",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "Megha"
// user.welcomeMessage();
// console.log(this)

function hello(){
    let username = "Venu"
    // console.log(this.username)
}

// hello()

const hello1 = function(){
        let username = "Venu"
        // console.log(this.username)
}

// hello1()


const hello2 = () => {
        let username = "Venu"
        // console.log(this)
}

// hello2()

const addTwo1 = (num1,num2) => {
    return num1 + num2               //Arrow Function
}
// console.log(addTwo1(3,6));

const addTwo2 = (num1,num2) => num1 + num2    //Implecite Arrow Function
// console.log(addTwo2(3,6));
const addTwo3 = (num1,num2) => (num1 + num2)
// console.log(addTwo3(3,6));



