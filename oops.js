// that oops concept is different from javascript
//object, classes, encapsulation and inheritance
//encapsulation:hiding the properties from the object which is created
//inheritance:parent and child class relationship

//object
//in JAVASCRIPT everything is an object

var a = 2; //this also object
function add (a,b){
return a+b;
} //this also object

//object is an unique entity which contains property and methods

//DEFINing AN OBJECT  --- using object literal
let person ={
    first_name: "soby",
    last_name : "Baby",

    getFuntion: function(){
        return (`${this.first_name} ${this.last_name}`);
    },
    phoneNumber:{
        mobile:"1234567891",
        landLing:"044-3949458945",
    },
};

console.log(person.getFuntion());
console.log(person.phoneNumber.mobile);

//using an object contructor
function personusingcons(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    console.log(`${this.first_name}.... ${this.last_name}`);
}

//constructor is a first executable function when object is instantiated


//create 2 persons using the same person object
let person1 = new personusingcons('sobylal', 'baby');//creating an new instance from object person
let person2 = new personusingcons('chupui', 'kasur');


//object.create() method

const coder = {
    isStudying:false,
    introduction: function (){
        console.log(`My name is ${this.Name} ${this.isStudying}`);
    },
};//object

const coder1 = Object.create(coder);
coder1.Name = "Thangam";
coder1.isStudying = true;
coder1.introduction();

//classes
//classess are the exact blueprint of object 
//class can have many object because class is just a template while object are instances 
//gold smith example
//there are no classess in javascript even if we define a class it will be an object internally
//javascript is a prototype based object oriented programming language
//It is defining behaviours using constructor functions and then reuse that prototype

//ES2015 until that there was no keyword called class 
//but in ES6 they introduced traditional way of defining objects
//class keyword

class vehicle {
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return(`${this.name},${this.maker},${this.engine}`);
    }
}
let bike1 = new vehicle('Hayabusa', 'suzuki', '1340cc');
let bike2 = new vehicle('KArishma', 'Honda', '999cc');
console.log(bike1.name);
console.log(bike2.name);


//es2015 method
 function oldvehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
 }
 oldvehicle.prototype.getDetails= function(){
    return(`${this.name},${this.maker},${this.engine}`);
}
let bike3 = new oldvehicle('Hayabusa', 'suzuki', '1340cc');
let bike4 = new oldvehicle('KArishma', 'Honda', '999cc');
console.log(bike3.name);
console.log(bike4.name);
console.log(bike3.getDetails());

//encapsulation
//it a process of wrapping or hiding the property or function with in a single class
class persont{
    constructor (name,id){
        this.name = name;
        this.id = id;
    }
    add_address(add){
        this.address = add;
    }
    getDetails(){
        console.log(`${this.name} + ${this.id} `);
    }
}
let personv = new persont ("vignesh", 21);
personv.address = "Delhi";
personv.add_address("Delhi");
console.log(personv.address);

//Inheritance

//driving()., usingbreak() ---common class ---parent class 
//i written car class --> driving()., usingbreak()
//maruthi suzuki -->driving(), usingbreak()
//benz -->driving(), usingbreak()
//both are using same functionality

class cars {
    constructor(steering, carbreak, gear){
        this.steering = steering;
        this.carbreak = carbreak;
        this.gear = gear;
    }
    //fcuntion
    driving(){
        return(`we are using ${this.steering}, ${this.carbreak},${this.gear}`);
    }
}

class maruthi extends cars {
    constructor(steering, carbreak, gear, music){
        super(steering, carbreak, gear);
        this.music = music;
    }
    driving(){
        return(`${super.driving()} , ${this.music}`);
    }
}

//this is called inheretence
let car = new cars("normalsteering", "normalcarbreak", "normalgear");
console.log(car.driving());


let maruthi1car = new maruthi("boschsteering", "mitshubi", "havels", "harman");
console.log(maruthi1car.driving());


// class personn{ //parent class
//     constructor(name){
//         this.name= name;
//     }
//     toString(){
//         return(`The name of the person is ${name}`);
//     }
// }

// class student extends personn{
//     constructor(name,id){

//     }
// }



