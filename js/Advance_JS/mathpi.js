const descripter = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(descripter);

const user = {
    username : 'Venu S R',
    mailId : 'venusr02@gmail.com',
    password : '123@abc',
    location : 'Banglore',
    logged : true
}

// console.log(Object.getOwnPropertyDescriptor(user,'username'));
Object.defineProperty(user, 'username',{
    writable: false,
  enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(user,'username'));

for(let [key,value] of Object.entries(user)){
    console.log(`${key} : ${value}`);
}




