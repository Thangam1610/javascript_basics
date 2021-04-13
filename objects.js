//objects are similar to arrays except that instead of using index to access the data or an element 
//we will access data through properties

//objects declartion and assignments
var dog = {
    name:"huskey",
    leg:4,
    tails:1,
    enemies:["strayDogs", "Medicine"]
};

//fetching the data using dot. nonation
console.log(dog.name);

//fetch data from object using square brackets
console.log(dog["enemies"]);

//if i want to change the data ---updating object properties
dog.name= "pomorine";
//or
dog["name"] = "chitssu"
console.log(dog.name);

//adding new properties to object
dog.eyes = 2;
//or
dog["eyes"]=4;
console.log(dog);

//delete the properties in object
delete dog.eyes;
//or
delete dog["eyes"];
console.log(dog);

//built in function hasOwnProperty()
//it will chk whether the dog obj has property or not
console.log(dog.hasOwnProperty("tails"));//will get output is true



//exercise

