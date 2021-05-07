/*
 @param cb => a call back function
 @param name => String

*/
function showName(cb, name) {
    // let name = 'Armstrong'
    // let [cb,name] = params
    return cb(name)
}


// call backs and IFE
function callMe(value) {
    function transformValue () {
        console.log(value);
    }
return transformValue();
}

// below is an anonymus / nameless self invoking function
(
    function(){
        console.log('hello again')
    }
)()

callMe('Hey there');

// arrow function
const changeCase = (name) => name.toUpperCase();

// another arrow function without a parameter
const newName = () => 'yet nothing to see here!';

// anonymus funcs
const randomFunc = function() {
    return 'Yet nothing else!'
}
randomFunc()
console.log(showName(changeCase, 'Vivian'));

// Arrays
let numbers = [];
let names = Array();

names.push('Vivian')
names.push(['Faith', 'Henry', 'Prossy'])
console.log(names);

// add more items
names.push(randomFunc);
names.push({age: 34});
names.push(new Date());
console.log(names)

// call a function in the array
console.log(names[2]())

// add to start of the array
names.unshift('Happy new year');
console.log(names.toString())
names.shift()

console.log(names);
names[2] = 234;
names[1] = 'today'
console.log( 'first array', names);


// spreading arrays into arrays
let namesCopy = [...names];
console.log('copied array', namesCopy);

// getting certain items from the array
let [,age] = namesCopy;
console.log(age);
namesCopy[0] = 'Fanny';
console.log('copied array', namesCopy);


// String
let firstName = '';
firstName = 'Armstrong Muhwezi';
firstName.toLowerCase();
firstName = firstName.replace(' ', '3');
console.log(firstName);
 firstName = 'Armstrong';
 lastName = 'Muhwezi'
 let fullName = firstName.concat(' ', lastName);
 fullName1 = firstName + ' ' + lastName;
 fullName2 = `${firstName} ${lastName}`;
 
 console.log(fullName);
 console.log(fullName, ' ', fullName1, ' ', fullName2)

 let x = fullName.match(firstName);
 console.log(x);


// loops
let number =0;
while(number <= 19){
    console.log('Hello ', number);
    number +=1
}

// switch control state
function isOfAge(person){
    switch (person.age){
       case 12:
           console.log('You can go to the mall');
           break
       case 15:
           console.log('you can go to the beach')
           break
       case 18:
           console.log('you can drive');
           break
        default:
            console.log("you're too old for this")
   }
}

isOfAge({age: 12});
isOfAge({age: 15})
isOfAge({age: 18});
isOfAge({age: 25});


// for loops
// number 19
for( let number=0; number <= 19; number++) {
    console.log('Hey ', number);
}

for(let number =0; number<12; number++) {
    if(number == 9) break;
    console.log('We made it here');
}


let empty = [];
names.forEach(name => empty.push(name));
console.log(empty.length)
for(let item of names) {
    console.log(item);
}


