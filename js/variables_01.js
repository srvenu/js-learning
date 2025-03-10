const accountId =1445
let accountEmail = "venu@gmail.com"
var accountPassword = "1234Banglore"
accountCity = "Banglore"
let accountState;
// accountId = 1234  It is not allowed 

accountEmail = "srvenu@gmail.com"
accountPassword = "22334455"
accountCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

