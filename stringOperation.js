//single quote and double quote are applicable in javascript
var myName = "Thangam";

myName = 'Thangam';

console.log(myName);


//Thangam said "Class was good" 

var seconddialoge = "Thangam said 'class wass good'"; // we can use like this instead of using double quote inside the string

// if we don;t want to use both quotes we can use esc neglets \"fdgdgdgdg\"

var dialoge = "Thangam said \'class wass good\'"; 

console.log(dialoge);
console.log(seconddialoge);

// \'single quote
// \"double quotes
// \n new line
// \r carriage return

var dialoge = `dfgdfgdf
dfgdfg
dfgdfgdfgfdg
dfgdfgdfgdfgdfg`

console.log(dialoge);

//myName[0] = T
//myName[1] = h
console.log(`The third letter is : ${myName[2]}`);

//string immutability

myName= "thangam"
console.log(`The third letter is : ${myName[2]}`);

console.log(myName.length);