// Tutorial: https://www.sitepoint.com/shorthand-javascript-techniques/

// Ternary operator
const x = 20;
const big = x > 10 ? true : false;

// Short-circuit Evaluation Shorthand
// checks that variable is not null, undefined or empty.
const variable1 = null;
const variable2 = variable1 || 'new'; 
console.log(variable2);

// Declaring Variables Shorthand
let a, b, c = 55;

// JavaScript for Loop Shorthand
let arrExmp = [5, 10, 15, 20];
for(let index in arrExmp) {
    console.log(arrExmp[index]);
}

// Decimal base exponents
for (let i = 0; i < 1e5; i = i + 10000) {
    console.log(i);
}


// Arrow Functions Shorthand
sayHello = name => console.log('Hello', name);
sayHello("Marko");

setTimeout(() => console.log('Loaded'), 2000);

// Default Parameter Values
volume = (l, w = 4, c = 3, d) => (l * w + c);
console.log(volume(2));

// Template Literals
let first = "Kevin";
let last = 'Duran';
const welcome = `You have logged in as ${first} ${last}`;
console.log(welcome);

// Spread Operator Shorthand
// joining arrays
const add = [5, 45, 89, 54];
const numbers = [1, 2, ...add];
console.log(numbers);

// Mandatory Parameter Shorthand
mandatory = () => {
  throw new Error('Missing parameter!');
}

foo = (bar = mandatory()) => {
  return bar;
}
//foo();

// Array.find Shorthand
const pets = [
    {
        type: "Cat", 
        name: "Tiger"
    },
    {
        type: 'Dog',
        name: "Tommy"
    }
];
pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');
console.log(pet);

// Object [key] Shorthand
const obj = {
    firstName: "Pero",
    lastName: "Peric",
    full: {
        fullname: 'Pero Peric'
    }
};

let field = 'full';
console.log(obj[field].fullname);

