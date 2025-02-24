const accountId = 144553
let accountEmail = "naman@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "hg@hg.com"
accountPassword = "232323"
accountCity = "Bengaluru"

console.log(accountId);
// we can store multiple variables using console.table and if we dont assign a value to a variable then in output it will show undefined
/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table({accountId, accountEmail, accountPassword, accountCity, accountState})

