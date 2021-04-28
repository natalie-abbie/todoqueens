/*
 variable => holds data or reference to data 
 can be declared using the 
 - var
 - let
 - const
 */

var myName = "Armstrong";
let age = 20;
const profession = 'Software Developer';

console.log(myName, age, profession);

myName = 'Hazel';
age = 18;
// profession = 'Web developer';
console.log(myName, age, profession);

(function showInfo(){
    let myName  = 'Mariam';
    // var myName = 'Mariam 2';
    console.log(myName, age, profession)
})();