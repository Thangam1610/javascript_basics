//people need to enter into an hospital

//if they have PatientID -->enter into the hospital --->if loop

//if they have PatientId -->enter if they have id or else type dont enter into hospital

//if they have PetientID
//elseif you have employee ID
//elseif you are a doctor
//else if your are surgeon
//else don't enter


var id = "patient";

//loops
if(id == "patient"){
    console.log("Enter into the hospital");
}
else if(id == "doctor" || id=="surgeon" || id=="employee"){
    console.log("Enter into the hospital");
}
else{
    console.log("Don't enter into the hospital");
}

//switch cases

switch(id){
    case "patient":
    case "doctor":
    case "suregon":
    case "employee":
        console.log("Enter into the hospital");
        break;
    default:
        console.log("don't enter into hospital");
}

//find the sum of first 10 digits using loops 1+2+3+....+10=
//while loop and for loop

//1+2+3+4+5+6+7+8+9+10
numbers=[1,2,3,4,5,6,7,8,9,10];
j=0;
sum = 0;
while(j >= numbers.length){
    sum += numbers[j];   
}
console.log(`The toal sum : ${sum}`);
