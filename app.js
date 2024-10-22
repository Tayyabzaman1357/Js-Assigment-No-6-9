document.write("<h1>"+"Assigment 1:"+"</h1>"+"<br>")

document.write("Result:" + "<br>" + "The value of a is: 10" + "<br>" + "........................"+"<br>");
var a = 10;
++a;
document.write("The value of ++a is:"+a+"<br>"+"Now the value of a is: 11"+"<br><br>");

var a=11;
a++;
document.write("The value of a++ is: 11"+"<br>"+"Now the vlaue of a is:"+a+"<br><br>");
document.write("The value of --a is:11"+"<br>")
var a=12;
// var b=a;
--a;
document.write("Now the value of a is:" + a +"<br><br>");

document.write("The value of a-- is: 11"+"<br>");
var a=11;
a--;
document.write("Now the value of a is:" + a+"<br><br>")




// QNO:2;
document.write("<h1>"+"QNO:2;"+"</h1>"+"<br>");
var a= 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("var a=2;"+"<br>"+"var b=1;"+"<br>"+"var result = --a - --b + ++b + b--;"+"<br>")
document.write("Result = "+result+"<br><br>"+"Explaination:"+"A=2;--a;2-1=1 1- --b so b =1;1-1=0;1-0+2=3"+"<br><br><br>");



// QNO:3;
document.write("<h1>"+"QNO:3;"+"</h1>"+"<br>");
let username = prompt("Enter your username:");
if (username) {
    document.write(`Welcome, ${username}!`+"<br><br>");
}


// QNO:4;
document.write("<h1>"+"QNO:4;"+"</h1>"+"<br>");

let num1 = prompt("Enter a number for the multiplication table (leave blank for default 5):");

if (num1 === "" || num1 === null) {
    num1 = 5; // Default value
} else {
    num1 = Number(num1); // Convert input to a number
}

// Generate and display the multiplication table
document.write(num1 + " x 1 = " + (num1 * 1) + "<br>");
document.write(num1 + " x 2 = " + (num1 * 2) + "<br>");
document.write(num1 + " x 3 = " + (num1 * 3) + "<br>");
document.write(num1 + " x 4 = " + (num1 * 4) + "<br>");
document.write(num1 + " x 5 = " + (num1 * 5) + "<br>");
document.write(num1 + " x 6 = " + (num1 * 6) + "<br>");
document.write(num1 + " x 7 = " + (num1 * 7) + "<br>");
document.write(num1 + " x 8 = " + (num1 * 8) + "<br>");
document.write(num1 + " x 9 = " + (num1 * 9) + "<br>");
document.write(num1 + " x 10 = " + (num1 * 10) + "<br>");

// QNO:5;
document.write("<h1>"+"QNO:5;"+"</h1>"+"<br>");
let subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks for Subject 3:"));

// Calculate the total marks and percentage
let totalMarks = subject1 + subject2 + subject3;
let percentage = (totalMarks / 300) * 100; // Assuming each subject is out of 100

// Determine the grade based on the percentage
let grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Display the results
document.write("<h2>Marksheet</h2>");
document.write("Marks in Subject 1: " + subject1 + "<br>");
document.write("Marks in Subject 2: " + subject2 + "<br>");
document.write("Marks in Subject 3: " + subject3 + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");