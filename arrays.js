//to store multiple data in a single variable
//to store a collection of data 
//we call them as arrays

//declaring an array
var shoppingList = ["rice", "maggi", "shampoo", "sugar", "salt", "Toordal"];

//Nested mnultiple arrays inside one array
shoppingList = [
    ["rice", 56], //0th index
    ["maggie", 30], //1st index
    ["shampoo", 12], //2nd index
    ["sugar", 30],
    ["Salt", 12],
    ["Toordal", 40],
    ["Grountnutoil", "coconutoil", ["parachute hair oil"]]
];

//if we want to access inside array values we need to use indexes
//indexes ==?numbers assigned to each element/data in the array
var shampoo = shoppingList[2];
var shampooPrice = shoppingList[2][1];
console.log(shampooPrice);
console.log(shoppingList[6][1]);

//to remove an last element from an array we will use pop built in function only for an array
var numbers = [1,2,3];
var removedElement = numbers.pop();
console.log(removedElement);
console.log(numbers);

//example
var fruits = ["apple", "mango", "grapes", "pomo"];
fruits.pop();
console.log(fruits);

//shoppingList[6].pop();
// console.log(`removed element: ${shoppingList[6].pop()}`);
// console.log(shoppingList);

//to add an element to the last index of an array
var numbers = [1,2,3];
numbers.push(4);
console.log(numbers);

var fruits = ["apple", "mango", "grapes", "pomo"];
fruits.push("orange");
console.log(fruits);

// shoppingList[6].push("oliveoil");
// console.log(shoppingList);

shoppingList[6][2].push("Amla");
console.log(shoppingList);


//to add first index of an array -->unshift()
var numbers = [1,2,3];
numbers.unshift(0);
console.log(numbers);

//to remove first element for an array -->shift()
var numbers = [0,1,2,3];
var removedElement = numbers.shift();
console.log(numbers);

shoppingList.shift();
console.log(`removing first element for an array after shift function: ${shoppingList}`);

shoppingList.unshift(["rice", 50]);
console.log(`adding first element for an array after shift function: ${shoppingList}`);





