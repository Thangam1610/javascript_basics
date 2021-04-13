
ids=["patient", "doctor","surgeon", "", "employee", "patinet"];

for(let index=0; index < ids.length; index++){
    checkID(ids[index]);
}

//10 members in a queue
function checkID(id){
    switch (id){
        case "patient":
        case "doctor":
        case "surgeon":
            console.log("permitted");
            break;
        default:
        console.log("not permitted");
    }
}

//fuctions
var a = 1;
var b = 2;


var c = 3;
var d = 4;

arithmeticOperations(a,b);
arithmeticOperations(c,d);

function arithmeticOperations(num1, num2){
    resultsum = num1 + num2;
    resultsub= num1 - num2;
    resultmul = num1 *num2;
    resultdiv = num1/ num2;
    console.log(`result of these numbers:${[resultsum, resultsub, resultmul, resultdiv ]}`);   
}

//built in functions
//grocery shop, shop keeper he will define a code for every item in his shop
//for that he will only be knowing
    

var i = "3,52,24"; // 42 is the ID, 22 is the rupees , 3 is the stock

//I should get result 42, 25, 3



var result = i.split("").reverse().join("").split(",");


var ID = result[0];
var price = result[1];
var stock = result[2];

console.log(`id:${ID}, price:${price}, stock:${stock}`);


const readline = require("readLine");
var rl = readline.createInter