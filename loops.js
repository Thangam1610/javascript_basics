//if loop

//entering a bus

//conditional loops

var ticket = true;
var seniorcitizen = true;

//if loop
if (ticket){
    console.log("Enter into the bus");
}

//if else loop
if(ticket){
    console.log("Enter into the bus");
}
else{
    console.log("Don't enter into the bus");
}

//if else if loop
if(ticket){
    console.log("Enter into the bus");
}
else if (seniorcitizen){
    console.log("Enter into the bus");
}
else{
    console.log("Don't enter into the bus");
}

//women kis handicapped

//switch case

var ticket= "womensassds";

switch(ticket){
    case "normalTicket":
    case "seniorCitizen":
    case "women":
    case "kid":
    case "handicap":
    console.log("enter into the bus");
    break;
    default:
    console.log("Don't enter please you have to take a ticket");
}

//while loop

//bus bay or a terminal ---> capacity to maintain only 5 buses

//straight way

var terminalCapacity = 0;
var bus = 0;

while(terminalCapacity <5){
    terminalCapacity++;
    console.log(`Park the bus: bus ${terminalCapacity}`);
}
if(terminalCapacity ===5){
    console.log("Terminal capacity is filled, please check for next terminal");
}

//reverse order

var terminalCapacity  = 5;
var bus = 0;
while(terminalCapacity <5){
    console.log(`park th ebus: bus ${terminalCapacity}`);
    terminalCapacity++;
}
if(terminalCapacity === 0){
    console.log("Terminal capacity is filled, please check for next terminal");
}

//for loop

//assigning and declaring
//condition check
//increment and decrement login

var tc;
for(tc=0; tc<=5; tc++){
    console.log(`Park the bus: ${tc}`);
    //1st iteration
    // tc=1
    //tc<5===> enter into the loop
    //print out "park the bus: 1"
    //tc=2
    //tc<5 ===> enter the loop
    //print out "park the bus: 2"
}

var tc;
var busnumber = 0;
for (tc=5; tc>=1; tc--){
    busnumber++;
    console.log(`park the bus: ${busnumber}`);
}

for(i=0; i<5; i++){
    console.log(`park the bus :bus ${terminalCapacity}`);
}

