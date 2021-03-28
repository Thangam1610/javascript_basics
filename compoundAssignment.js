//find sum of all number

var myNumbers = [1, 2, 3, 4, 5]; //total 15

//1+2 = 3
//3+3 = 6
//6+4 = 10
//10+5 = 15

var addtotal = 0;
var multiplytotal = 1;

myNumbers.forEach((x) => {
    //1st Iteration total is 0
    addtotal += x; //total = total + x;
    multiplytotal *=x; // multiplytotal = multiplytotal*x;
    //below lines are add
    //0+1 = 1 //total
    //2+1 = 3 //total = 3
    //33 + 3=6 //total = 6
    //4+6 = 10 //total = 10
    //5+10 = 15 // total =15
});

console.log("total sum is: "+ addtotal);
console.log("total multiply is: "+ multiplytotal);
//multiply total