//Variables:
// On one single line, declare three variables with the following names and values:
var firstName = "John", lastName = "Doe", age = 35;
console.log(firstName + " " + lastName + " " + age);

//Events:
//The <button> element should do something when someone clicks on it. Try to fix it!
// <button onclick ="alert('Hello')">Click me.</button>

//The <div> element should turn red when someone moves the mouse over it.
//<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>

// String Methods:
let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");
console.log(txt);

//Array methods:
//Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2);
console.log(fruits);

//Use the correct Array method to sort the fruits array alphabetically.
const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits2.sort();

//DATES:
//Use the correct Date method to set the year of a date object to 2020.
const d = new Date();
d.setFullYear(2020);
console.log(d);

//MATH:
//Use the correct Math method to return the largest number of 10 and 20.
let x = Math.max(10, 20);
console.log(x);

//Use the correct Math method to round a number to the nearest integer.
let x2 = Math.round(5.3);
console.log(x2);

//Use the correct Math method to get the square root of 9.
let x3 = Math.sqrt(9);
console.log(x3);

//BREAK LOOPS:
//Make the loop jump to the next iteration when i is 5.
for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

//HTML DOM:
//Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".
document.getElementsByTagName("p")[0].innerHTML = "Hello";

//Change the text of the first element that has the class name "test".
document.getElementsByClassName("test")[0].innerHTML = "Hello";

//Use HTML DOM to change the value of the image's src attribute.
document.getElementById("image").src = "images/pic_mountain.jpg";

//Use HTML DOM to change the value of the input field.
document.getElementById("myText").value = "Have a nice day!";

//Use the CSS display property to hide the p element.
document.getElementById("demo2").style.display = "none";

//Use the eventListener to assign an onclick event to the <button> element.
document.getElementById("demo3").addEventListener("click", myFunction);
function myFunction() {
    console.log("Success");
}