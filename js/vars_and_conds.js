// var, const, let  => variable declarations
var myName = 'Armstrong Muhwezi'; // used to declare variables with changing data
myName = 'Suzan'



var lastName = "Michelle"; // this also declares changing data variables bound to a scope
// let lastName = 'Joan';
var lastName = 'Susan'; //overrides the above declaration

const showName = (() => {
    // inner scope
    var myName = 'New name';
    let lastName = 'Henry';
    console.log('My name: ', lastName, ' ', myName); //scopes to the end of the function
})()

console.log('My name: ', lastName, ' ', myName); // global scope

const ADDRESS = 'Plot 425, Ntinda Complex'; // cannot re-assigned

// operators
let age =1;
console.log(age += 9); // get the current value of age, add 9 to it 
console.log(age-=2);   // get the value of age and assign what remains after subtracting 2
 age = age % 2;  // modulous operator
 console.log(age)
  // ternary operator

// let gender = (myName == 'Armstrong') ? 'male': 'female';
// console.log(gender)

let gender;
myName = '';

// conditions
if(myName == 'Armstrong') {
    gender = 'male';
}  else if (myName == 'Suzan') {
gender = 'female';
}
else {
    console.log('last name', lastName);
    if(lastName === 'Michelle') {
        console.log('I am a female'); // never gets executed because it does not meet the condition
    }
    gender = 'unknown'
}

console.log(gender);

// let age = 18; // asigned age to the value of 18
age == 18 // is age equal to 18? conditional check
age === 18; // works but not ideal as it will coerce to to type string

// data types 
// Object
let Person = {
    name: 'Monica',
    age: 23,
    profession: 'Software Developer'
}

console.log(Person['profession']);

Person['name'] = 'Angella';
console.log(Person.name);

Person['0'] = 'Nothing'; // we're adding new data to the object
console.log(Person);
console.log(Person['0']);


Person = Object.assign(Person, {name: 'Henry'}); // change only the name
console.log(Person);

Person =  {...Person, name: 'Sheilla', age: 26, '0': 'something', profession: 'Interior Designer', maritalStatus: 'single'}; // using the spread operator
console.log(Person);

// another way os creating an object
let Address  = Object();
Address.name = 'Kampala, Uganda';
console.log(Address);

// function 
function greetMe() {
    console.log('Hello')
}
greetMe(); // invoke / call the function

function isOfAge(person) {
    return person.age > 18;
}

console.log('Is allowed to enter, ', isOfAge({age: 19}));
console.log('Is allowed to enter, ', isOfAge({age: 13}));

Person['greeting'] = function () {
    console.log(this);
    console.log('Hello ', this.name)
    // return 'Hello ', + this.name;
};
// console.log(Person.greeting);  // evaluates to the value of type function
console.log(Person.greeting()); // invoke the function

Person['address'] = Address;
console.log(Person);
// accessing values of a nested object
console.log(Person['address']['name'])
Person.address.name = 'Ntinda Complex, Kampala, Uganda';  //reassigng the nested object
console.log(Person['address']['name']);

let name = 'Nyakato Esther';
console.log( '*****', this);
console.log('dededeeded', this.name);
let personValues = Object.values(Person);
console.log(personValues);
personValues[5] = function(name) {
    console.log('Hello ', name);
};
personValues[5]('Armstrong');


let sample = {}; // declare object
let another = Object(); // declare object
// we use sample [] or sample.keyname to access or assign data to the object sample

function sampleFunc() { //creates a function of name sampleFunc
    // define the function block
    // hold all the logic for this funtion
}

// sampleFunc() invokes / calls the defined function
const newName = (name) => console.log(name);




