let age = 21;
// console.log(age);

// let firstName = 'John!';
// console.log('hello,', firstName + "!");

// student = true;

//element by id in dom (Displayed on screen)
// document.getElementById("p2").innerHTML = "You are " + age + " years old.";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;
age %= 6;


//------------------------------ Input---------------------------------------------------------

// let username = window.prompt("Enter your username");
// console.log(username);

//takes text input and displays it when fun ction is clicked
// document.getElementById("myButton").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("p1").innerHTML = username;
// };


//------------------------------- Type Conversion ---------------------------------------------------------

// age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log(typeof(age));
// document.getElementById("p1").innerHTML = "Happy birthday! You are now " + age + " years old";

//------------------------------- Input & Type Conversions  ---------------------------------------------------------
// let a, b, c;

// document.getElementById("calculateButton").onclick = function() {
//     a = Number(document.getElementById("aText").value);
//     b = Number(document.getElementById("bText").value);

//     document.getElementById("p1").innerHTML = "The hypotnuse is " +
//         Math.sqrt(Math.pow(a, 3) + Math.pow(b, 4));

//     //clearing text boxes
//     document.getElementById("aText").innerHTML = "";
// };


//------------------------------- Counter with updating DOM  ---------------------------------------------------------

// let count = 0;
// document.getElementById("increaseBtn").onclick = function() {
//     count++;
//     document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("decreaseBtn").onclick = function() {
//     if (count > 0) {
//         count--;
//         document.getElementById("countLabel").innerHTML = count;
//     } else {
//         window.alert("count cannot be negative")
//     }
// };

// document.getElementById("resetBtn").onclick = function() {
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// };

//------------------------------- Random Number  ---------------------------------------------------------

// let randX; // between 1 and 6
// let randY; // between 1 and 6
// let randZ; // between 1 and 6

// document.getElementById("rollDiceButton").onclick = function() {
//     randX = Math.floor(Math.random() * 6) + 1;
//     randY = Math.floor(Math.random() * 6) + 1;
//     randZ = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("xLabel").innerText = randX;
//     document.getElementById("yLabel").innerText = randY;
//     document.getElementById("zLabel").innerText = randZ;

// }

//------------------------------- String slice  ---------------------------------------------------------

// let fullName = "Ray Kay";
// let firstName;
// let lastName;
// lastName = fullName.slice(fullName.indexOf(" ") + 1);
// firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log("first name is: " + firstName + ". LastName is: " + lastName + ".");

//------------------------------- Checkbox  ---------------------------------------------------------

// const myCheckbox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");

// document.getElementById("myButton").onclick = function() {
//     if (myCheckbox.checked == true)
//         console.log("Subscribed!");
//     else
//         console.log("Not Subscribed!");

//     if (visaBtn.checked || masterCardBtn.checked || payPalBtn.checked)
//         console.log("Payment Selected!");
//     else
//         console.log("Must select payment method")
// }

//------------------------------- Switch Statement  ---------------------------------------------------------

// let grade = 94;

// switch (true) {
//     case (grade < 50):
//         console.log("failed class");
//         break;
//     case (grade >= 50 && grade <= 65):
//         console.log("Grade: D");
//         break;
//     case (grade > 65 && grade <= 75):
//         console.log("Grade: C");
//         break;
//     case (grade > 75 && grade <= 85):
//         console.log("Grade: B");
//         break;
//     case (grade > 85 && grade < 95):
//         console.log("Grade: B");
//         break;
//     case (grade >= 95):
//         console.log("Grade: A+");
//         break;
//     default:
//         console.log("Grade not acceptable");
// }