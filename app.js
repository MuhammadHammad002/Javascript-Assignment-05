// Q1
// var multiArray = [[]];

// Q2
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// Q3
// for (var i = 1; i <=10; i++) {
//     document.write(i + '<br>');
// }

// Q4
// var userInp =prompt(" Enter a number to show its multiplication table");
// var table =prompt ("Enter length multiplication table")
// for (var i = 1; i <= +table; i++) {
//     document.write(userInp+"x"+i+ "="+ userInp*i + '<br>');
// }

// Q5 
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i <fruits.length; i++) {
//     document.write(fruits[i]+'<br>');
// }
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + '<br>');
// }
// through nested loop
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + '<br>');

//     for (var j = 0; j < fruits.length; j++) {
//         if (i === j) {
//             document.write("Element at index " + j + " is " + fruits[j] + '<br>');
//         }
//     }
// }


    // Q6
// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// var series = [2, "k", 4, "k", 6, "k", 8, "k", 10, "k", 12, "k", 14, "k", 16, "k", 18, "k", 20, "k"];

// document.write('<h1>Counting:</h1><br>');
// for (var i = 0; i < counting.length; i++) {
//     document.write(counting[i] + ' ');
// }

// document.write('<h1>Reverse Counting:</h1><br>');
// for (var i = 0; i < reverseCounting.length; i++) {
//     document.write(reverseCounting[i] + ' ');
// }

// document.write('<h1>Even:</h1><br>');
// for (var i = 0; i < even.length; i++) {
//     document.write(even[i] + ' ');
// }

// document.write('<h1>Odd:</h1><br>');
// for (var i = 0; i < odd.length; i++) {
//     document.write(odd[i] + ' ');
// }

// document.write('<h1>Series:</h1><br>');
// for (var i = 0; i < series.length; i++) {
//     document.write(series[i] + ' ');
// }


// Q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item you want to search:");
var found = false;

// Convert user input to lowercase for case-insensitive comparison
userInput = userInput.toLowerCase();

for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        break;
    }
}

if (found) {
    document.write(userInput + " is available at index " + i + " in our bakery.");
} else {
    document.write("Sorry, " + userInput + " is not available in our bakery.");
}


// Q8
// var a = [24, 53, 78, 91, 12];
// var largest = a[0]; // Assume the first number is the largest

// for (var i = 1; i < a.length; i++) {
//     if (a[i] > largest) {
//         largest = a[i];
//     }
// }

// console.log("The largest number in the array is: " + largest);

// Q9
// var a = [24, 53, 78, 91, 12];
// var smallest = a[0]; // Assume the first number is the smallest

// for (var i = 1; i < a.length; i++) {
//     if (a[i] < smallest) {
//         smallest = a[i];
//     }
// }

// console.log("The smallest number in the array is: " + smallest);

// Q10
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + " ");
//     }
// }
