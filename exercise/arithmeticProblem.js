//check two given numbers

//you have to check if any number is equal to 50

//50,15 --->check whether these numbers are equal to 50 then print ("i found a magical number")

//25,25 --->check whether these numbers are eqal to 50 then print ("i found a magical number")==>

//check whether theit sum is equal to 50



// if(numberone ===50 || numbertwo===50){
//     console.log("This a magical number");
// }
// else if(numberone+numbertwo===50){
//     console.log("A magical number");
// }
// else
// {
//     console.log("not a magical number");
// }

//Another option for same exercise
//logarithmic expression

// var result = numberone == 50 || numbertwo == 50?true
//             :numberone + numbertwo ==50
//             ?true
//             :false;
// if(result){
//     console.log("magical number");
// }
// else{
//     console.log("not a magical number");
// }

var numberone = 45;
var numbertwo = 51;

//exercise - functions 
magicalNumber(numberone,numbertwo);

function magicalNumber(num1, num2){
    resultsum = num1 + num2;
//    console.log(`result of numbers:${[resultsum]}`);   
    if(num1 === 50 || num2 === 50 || resultsum == 50){
        console.log("Magical number");
    }
    else{
        console.log("Not a magical number");
    }
}
