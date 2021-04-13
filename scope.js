//considered as global scope
// var studentName = "Soby";

// //overriding same property
// var studentName = "vignesh"; //Wrong and bad practice

//Es6 feature
//Ecma script 6  feature
//let and const
//let can be changes later stage
//const is used whever data is not mutable-->not changing

const schoolName = "SFS";

let studentName = "Soby";
studentName = "vignesh";

function getStudentName(){
    //considered as local scope
   // const schoolName = "DPS";
   let studentName="Thangam";
   console.log(studentName);
   //console.log(schoolName);
}

getStudentName();
console.log(studentName);
console.log(schoolName);


//add function
// function add (num1,num2){
//     return num1+num2;
// }

//arrow function
add = (num1,num2) => num1+num2;
multiply = (num1,num2) => num1*num2;
console.log(add(1,2));
console.log(multiply(1,2));

const arr =[1,2,56];
const greaterThanFifty = (num1) => (num1>50 ? true:false);
for(let i=0; i < arr.length;i++){
   if(greaterThanFifty(arr[i])){
       console.log(arr[i]);   }
}

//map(), reduce(), filter()

var numbers = [1,2,3];
numbers.map(num => {
    console.log(num*10);
})



//output = 44 51 64

// number = [44, 51,64];
// number.map(num => {
//     if(num % 2 == 0){
//         console.log(num +2);
//     }    
//     else{
//         console.log(num);
//     }
// })

numbers = [52,62,75];
const result = numbers.map(num =>(num%2===0) ? num+2:num)
console.log(result);

// /*numbers=[52,61,74];
// numbers.map(num=>{
//   if(num%2==0){
//     console.log(num+2);
//   }
//   else{
//     console.log(num);
//   }
// })*/

// numbers=[52,61,74];
// const result=numbers.map(num=>(num%2===0) ? num+2: num
// // );
// console.log(result);