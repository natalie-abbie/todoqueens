/*
 func performCovidTest
 @param person: object
*/

function performCovidTest (person) {
    let message, myName;
     if (person && typeof person == 'object') {
         // destructuring
         let {name, temperature} = person;
         myName = name;
         if(!temperature) {
             console.log('Please provide your temperature')
         }
         if(!name) {
             myName = 'Jane Doe';
         }

        if (temperature == 33 ) {
            message = `You have normal temperature ${temperature}`;
        } else if (temperature <= 35) {
            message = `Please see a physician for further tests ${temperature}`;
        } else if (temperature >= 37 ) {
            message = `You may have contracted Covid19, please call MOH ${temperature}`;
        } else {
            message = 'status unkown';
     }
     return `${myName}: ${message}`;
 } else {
     message = 'Invalid data provided'
     return `${message}`;
 }
}

// try running this
let covidTest1 = performCovidTest({temperature: 35})
console.log(covidTest1)

let covidTest2 = performCovidTest({temperature: 37})
console.log(covidTest2)

let covidTest3 = performCovidTest({temperature: 45})
console.log(covidTest3)

let covidTest4 = performCovidTest({name: 'Armstrong'})
console.log(covidTest4);

let covidTest5 = performCovidTest('dededemdmededwdjejdjejdjejdej')
console.log(covidTest5);


// reverse the array
let myArray = [1,2,3,4,5,6,7];
const rewind = arr => (Array.isArray(arr) && arr.length) ? arr.reverse(): 'Not an array';
console.log(rewind(234));
console.log(myArray);
console.log(rewind(myArray));
