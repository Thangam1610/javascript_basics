function add(num1,num2){
    var sum = num1+num2;

    this.addwiththree = function addwiththree(num3){
        return (result = num3 + 3);
    };
    //return addwiththree(3);
}
//console.log(add(2,3));
var a = new add();
console.log(a.addwiththree(3));