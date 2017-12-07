// WHY THE FOLLOWING FUNCTIONS PRINT DIFFERENT RESULT!

let x = 9;
function f1(val) {
    val = val + 1;
    return val;                         
}                                                                                                       
f1(x);                                   
console.log(x);                                                

let y = {
    x: 9
};
function f2(val) {

    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);


/* 
It's always pass by value, but for objects the value of the variable is a reference. 
Because of this, when you pass an object and change its members, those changes persist
outside of the function. This makes it look like pass by reference. But if you actually 
change the value of the object variable you will see that the change does not persist, 
proving it's really pass by value. 
*/