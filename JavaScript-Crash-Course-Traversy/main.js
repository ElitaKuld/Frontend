// adds a pop-up
// alert("Hello World!");

// log is a method
console.log("Hello World!");
console.error("This is an error!");
console.warn("This is a warning");

// Variables:
// var, let, const

let age = 30;
console.log(age);
age = 31;
console.log(age);

// const can not be directly reassigned
const age2 = 30;
console.log(age2);

// data types:
// String, Numbers, Boolean, null, undefined, Symbol

const nameMy = "John";
const ageNew = 30;
const rating = 4.5;
const isCool = true;

// type object is not true in this:
const x = null;
// null means an empty variable

//undefined:
const y = undefined;
let z; // undefined too

console.log(typeof ageNew);
console.log(typeof rating);
console.log(typeof nameMy);
console.log(typeof isCool);
console.log(typeof y);
console.log(typeof x);

// Strings:
// Concatenation:
console.log("My name is " + nameMy + " and I am " + ageNew + " years old.");

// Template String:
console.log(`My name is ${nameMy} and I am ${ageNew}`);

const s = "Hello World!";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toLocaleLowerCase());

console.log(s.split(""))

const sp = "technology, computers, it, code";
console.log(sp.split(","));

// Arrays - variables that hold multiple values:
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"];
console.log(fruits)

// can put different types in one array!
const fruits2 = ["apples", "oranges", "pears", 10, true];
console.log(fruits2)

console.log(fruits[1]);

fruits[3] = "grapes";
console.log(fruits)

// ett bättre sätt att lägga till a value
fruits.push("mangos");
console.log(fruits)

// lägga till i början av en array
fruits.unshift("strawberries");
console.log(fruits)

// take the last one off:
fruits.pop();
console.log(fruits)

// kontrollera om detta är en array:
console.log(Array.isArray(fruits));

// index
console.log(fruits.indexOf("oranges"));


// Object literals:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main street",
        city: "Boston",
        state: "MA"
    }
}

// alert(person); // Not a good way - man får object Object
console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

console.log(person.address.city);

// Destructuring:
// Pulling out of this person object:
const { firstName, lastName, address: { city } } = person;

console.log(firstName);
console.log(city);

// add properties:
person.email = "john@gmail.com";
console.log(person);

// Arrays of objects
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        isCompleted: false
    }
];
console.log(todos);

console.log(todos[1].text);

//JSoN Dataformat
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for-loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let j = 0; j < 10; j++) {
    console.log(`For loop number: ${j}`);
}

// while-loop:
let k = 0;
while (k < 10) {
    console.log(`While loop number: ${k}`);
    k++;
}

// looping through arrays:
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
for (let todo of todos) {
    console.log(todo.text);
}
// high order array methods: forEach, map, filter
todos.forEach(function (todo) {
    console.log(todo.text);
});
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted == true;
});
console.log(todoCompleted);

const todoCompleted2 = todos.filter(function (todo) {
    return todo.isCompleted == true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompleted2);

// Conditionals:
const x5 = "10";
// matches the value
if (x5 == 10) {
    console.log("x is 10");
}
else if (x5 > 10) {
    console.log("x is greater than 10");
}
// matches the datatype
if (x5 === 10) {
    console.log("x is 10");
} else {
    console.log("x is not ten");
}

const x6 = 5;
const y5 = 10;
if (x6 > 5 || y5 > 10) {
    console.log("x is more than 5 or y is more than 10");
} else if (x6 == 5 && y5 == 10) {
    console.log("x is more than 5 and y is more than 11");
}

// ternary operator:
// if is true then...else...
const x2 = 10;
const color = x > 10 ? "red" : "blue";
console.log(color);

switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is NOT red or blue");
        break;
}

// Functions:
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

addNumbers(5, 4);
addNumbers(); // Nan betyder not a number

function addNumbers2(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}
addNumbers2();
// man kan overwrite a function!!!:
addNumbers2(5, 5);

function addNumbers3(num1 = 1, num2 = 2) {
    return num1 + num2;
}
console.log(addNumbers3(3, 3));

const addNums = (num1 = 1, num2 = 2) =>
    console.log(num1 + num2);
addNums(5, 5);

// om flera parametrar:
const addNums2 = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNums2(5, 5));

//om en parameter:
const addNums3 = num1 => num1 + 7;
console.log(addNums3(5));

todos.forEach((todo) => console.log(todo.text));