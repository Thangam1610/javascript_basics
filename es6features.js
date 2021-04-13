//default parameter
var link = function(height, color, url){
    var height = height || 50;
    var color = color || "red";
    var url = url || "www.google.com";
    console.log(url);
}
link();

//or we can write link this also
var link = function(height = 50, color, url){
    var height = height;
    var color = color || "red";
    var url = url || "www.google.com";
    console.log(height);
}
link();
//if any value is undefined and u don't want to send it undefined you will use default parameter to replace undefined

//destructing feature
array = [5,4,3,2,1];
var [, a, b , ,] = array;
console.log(a);

//swapping numbers

var num1 = 2;
var num2 = 3;
var [num1, num2] = [num2,num1];
console.log(num1);

//rest and spread property
//...this pruperty is a rest property
function sum (x,...y){
    total = x;
    for (let index = 0; index < y.length; index++) {
        total += y[index];        
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum (1,2,3,4));

//spread operator

var a = [1,2,3];
function sumspread(x, y, z){
    return x+y+z;
}

//normal way we should write like this
//sumspread(a[0],a[1],a[2]);

//but in spread operator
console.log(sumspread(...a));

