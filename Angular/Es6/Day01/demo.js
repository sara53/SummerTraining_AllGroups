/**
 * Es6
 * ----------------------------
 * == var -- let -- const
 * == rest params
 * == destructing
 * == spread operator
 * == default values
 * == string api
 * == arrows functions
 * == array api
 *------------------------------

 */

/*****************
 * ==charAt
 * == indexOf
 * == startWith 
 * == EndWith
 * == includes 
 * == trim
 * == trimStart
 * == trimEnd
 * 
 * 
 * ************************
 * var
 * == reassign
 * == redeclare
 * == Hoisting
 * == added to window object
 * == function scope
 * ---------------------------------------
 * let
 *  == reassign
 *  == can't redeclare
 *  == can't Hoisting
 *  == not added to window object
 *  == block scope
 *-------------------------------------------
 *const 
    == can't reassign
    == can't redeclare
 *  == can't Hoisting
 *  == not added to window object
 *  == block scope
 ******************************************/

// const arr = [1, 3, 5];

// arr = 1; // reassign

// // arr.push("ali");

// console.log(arr);

// const PI = 3.14;

// console.log(window);

// let fname = "mona";
// console.log(fname);
// console.log(window.fname); // undefined

// function print() {
// 	let test = "angular track";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}

// 	console.log(test);
// 	// console.log("i outside loop : ", i);
// }

// print();

// Destructring
// let x = arr[0];
// let y = arr[1];

// let [, , z] = ["mona", "ahmed", 10, true];

// console.log(z);

// let person = {
// 	fname: "Ali",
// 	age: 25,
// 	color: "red",
// 	products: ["Book", "Pen"],
// };

// let x = person.fname;
// let y = person.age;

// let { fname: fname, color: color } = person;

// let { fname, color, products } = person;

// console.log(fname);
// console.log(color);

// console.log(products);

// let a = 4;

// let b = a;

// a = 5;

// console.log("a : ", a);
// console.log("b : ", b);
//

// let arr1 = ["mona", "ali", 10, true];
// let arr2 = ["Angular", ...arr1, 1, 2, 3];

// // arr1.push("angular");

// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let person1 = {
// 	fname: "ali",
// 	age: 20,
// };

// let person2 = { ...person1, color: "red" };

// console.log("person1 ", person1);
// console.log("person2 ", person2);

// let arr = [10, 20, 3, 5, 70];

// console.log(Math.max(...arr));

// rest params
// function add(...rest) {
// 	console.log(rest);
// }

// add(2, 5, 8, 9, 44);

// let [x, ...y] = [10, 20, 30, 40, 70];

// console.log(x);
// console.log(y);

// default values
// function add(x = 0, y = 0) {
// 	console.log(x + y);
// }

// add(2, 5);

// let str = "welcome from iti";

// let word = "Our emoji is :)";

// console.log(str.includes("iti"));

// console.log(`Your String ${str} ===  ${word}`);
/**=====================
 * == built in function
 * == user defined function
 *      -- function statement (declaration)
 *      -- function expression
 *      -- anonymous function
 *      -- call back function
 *      -- arrow function
 *
 * ===================== */

// console.log(add(2, 4));
// statement
// function add(x, y) {
// 	return x + y;
// }

// expression

// console.log(add2(4, 5));
// var add2 = function (x, y) {
// 	return x + y;
// };
/**========== Arrow function =========== */
//arrow function
// let add = (x, y) => {
// 	return x + y;
// };

// var result = add(4, 6);
// console.log(result);

// let sayHello = (x, y) => x + y;

// let result = sayHello(3);
// console.log(result);

/**
 *
 * this == window
 *
 *
 *
 */
/// window

// var fname = "ali";

// function getName() {
// 	console.log(this.fname);
// }

// window.getName(); // window
// this -- window
// that pattern
// this --> window
// var fname = "ahmed";
// let person = {
// 	fname: "ali",
// 	age: 25,
// 	display: () => {
// 		window.setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/**===================================== */
/** Array APIs
 * == find
 * == findIndex
 * == map
 * == some
 * == every
 * == filter
 * == forEach
 * -- (reduce) -- search
 */

// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 300,
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 100,
// 		cat: "school",
// 	},
// 	{
// 		id: 3,
// 		name: "mouse",
// 		price: 100,
// 		cat: "electronics",
// 	},
// 	{
// 		id: 4,
// 		name: "laptop",
// 		price: 100,
// 		cat: "electronics",
// 	},
// ];

// let result = products.filter(function (item, index) {
// 	return false;
// });

// console.log(result);

let itiTracks = ["PHP", "dotnet", "angular"];

itiTracks.forEach((item, index) => {
	console.log(`${item} ${index}`);
});

// // and
// let result = itiTracks.some(function (item) {
// 	return item.startsWith("P");
// });

// console.log(result);
// let result = itiTracks.map(function (item, index, arr) {
// 	return `<div><h1>${item}</h1></div>`;
// });

// console.log(result);

// let arr = [10, 20, 45, 18, 90];

// let result = arr.findIndex((item) => item > 25);

// console.log(result);

// function findElement(x, y, z) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// 	console.log("z :", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("===============");
// }

// var a = 3;
// b = 4;

// a = 4
// b = 3
