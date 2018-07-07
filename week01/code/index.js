// Task 5 
// TODO: NOT WORKING
import { helloWorld } from 'hello-world-npm';

console.log("This is task 5:");
console.log(helloWorld());


// Task 2
console.log("\nThis is task 2:");
console.log("\tHello World");

var myString = "Hello@World, Node.js Stringsss";
var badWord = "bad word";
var mistype = "Spwlling";

// Task 4
console.log("\nThis is task 4:");
if (badWord == "bad word") {
	badWord = "****";
}

console.log(myString + " " + badWord + " " + mistype);

// Task 3
console.log("\nThis is task 3:");
myString = myString.replace("@", " "); // replace @ with <space>
myString = myString.slice(0,-2); // remove 2 s on the end

console.log(myString); // Output

// TODO: Task 6
/* Progress:
	[x] Introduction to JavaScript
	[x] Variables
	[x] Control Flow
	[ ] Functions
 */
