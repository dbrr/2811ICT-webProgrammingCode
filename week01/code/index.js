
// Task 2
console.log("Hello World");

var myString = "Hello@World, Node.js Stringsss";
var badWord = "bad word";
var mistype = "Spwlling";

// Task 4
if (badWord == "bad word") {
	badWord = "****";
}

console.log(myString + " " + badWord + " " + mistype);

// Task 3
myString = myString.replace("@", " "); // replace @ with <space>
myString = myString.slice(0,-2); // remove 2 s on the end

console.log(myString); // Output

// TODO: Task 5 & 6
