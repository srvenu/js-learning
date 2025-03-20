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
    
})