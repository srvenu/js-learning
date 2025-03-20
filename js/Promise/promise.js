const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB Calls, Cryptography, network

    setTimeout(function(){
        console.log(`Async task1 is complete`);
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task 2 is complete`);
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"srvenu",email:"srvenugopal2002@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true;
    if(error){
        resolve({username:'srvenu',password:'1234'});
    } else{
        reject('Error: Something went wrong');
    }
    },1000)
})

const userName = promiseFour.then((user)=>{
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'JavaScript',password:'1234'});
        } else{
            reject('Error: JS went wrong');
        }
    },1000)
})

// async awaite

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);  
})
.catch((err)=>{console.log("E: ",err);
})