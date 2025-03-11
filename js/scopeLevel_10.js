// ================= Scope Level and mini hosting in js ====================

function one(){
    const username = "Venu";

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
    two();
}

// one();

if(true){
    const username = "Venu Gopal SR"
    if(username === "Venu Gopal SR"){
        const website ="youtube"
        // console.log(username +" "+website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}

// console.log(addone(5));


const addTwo = function(num){
    return num+2
}
console.log(addTwo(3));

