/**
 *  -- var -- let -- const
 *  -- destructuring
 *  -- spread operator
 *  -- arrow functions
 *  -- default values
 *  -- string API
 *  -- rest params
 *  -- Array API
 */

/**
 * var
 * ----------------
 * == reassign
 * == redeclare
 * == Hoisting
 * == added to window object
 * == function scope
 * --------------------------------
 * let
 * == reassign
 * == can't redeclare
 * == can't be hoisted
 * == not added to window object
 * == block scope
 * -------------------------------
 * const
 * == can't reassign
 * == can't redeclare
 * == can't be hoisted
 * == not added to window object
 * == block scope
 * -------------------------------
 */

// const arr = [1, 2];

// console.log(arr);

// const PI = 3.14;
// console.log(PI);

// let fname = "mona";
// console.log(window.fname);

// function printValues() {
// 	let test = "angular track";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(test);
// 		console.log(i);
// 	}
// 	console.log(test);
// 	// console.log("i outside loop is : ", i);
// }

// printValues();

// destructuring
// let arr = [10, "mona", true, 123];

// let [, , z] = ["ali", "PHP", "dotnet"];
// // let x = arr[0];
// // let y = arr[1];

// console.log("z : ", z);

// let person = { fname: "ali", age: 20, color: "red", products: [100, 200, 300] };

// // let x = person.fname;
// // let y = person.color;

// // let { fname: fname, color: color } = person;
// let { fname, color, products, x } = person;

// console.log(fname);
// console.log(color);

// console.log(products);

/**================ Spread operator ==================== */
// let arr1 = [10, "mona", 20, true];
// let arr2 = [1, 3, 4, ...arr1, "ali", "mona"];

// // for (let i = 0; i < arr1.length; i++) {
// // 	arr2[i] = arr1[i];
// // }
// // arr1.push("php");
// // arr2.push("angular");

// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let person1 = { fname: "ali", color: "red" };
// let person2 = { ...person1, gender: "male" };

// console.log("person1 : ", person1);
// console.log("person2 : ", person2);
/**================= rest params ============== */
// function add(_, ...rest) {
// 	console.log(rest);
// }

// add("mona", true, 10, 123, "ola");

// let [x, ...y] = [10, 20, "mona", true];

// console.log(x);
// console.log(y);
/**---------------default values------------------- */
// function sum(x = 0, y = 0) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log(x + y);
// }

// sum(2, 6);
/**---------------------------------------------- */
/**
 *  functions
 *      == built in functions
 *      == user defined functions
 *          -- function statement (declaration)
 *          -- function expression
 *          -- callback function
 *          -- anonymous function
 *          -- IIFE (self invoked function)
 *          -- arrow function
 */

/** statement */

// function sum1(x, y) {
// 	return x + y;
// }

// /** expression */
// let sum2 = function (x, y) {
// 	return x + y;
// };
// /** arrow */
// let sum3 = (x, y) => {
// 	return x + y;
// };

// let square = (x) => x * 2;

// let sayHello = (_) => console.log("Welcome Angular track");

// let sum = (x, y) => x + y;

// console.log(sum(2, 4));
// var result = square(2);
// console.log(result);

// sayHello();
// var fname = "ahmed";
// let person = {
// 	fname: "Ali",
// 	display: function () {
// 		let that = this;
// 		window.setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();
// window
// var fname = "ahmed";
// let person = {
// 	fname: "Ali",
// 	display: () => {
// 		// this --> person
// 		window.setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();

/**
 * == startWith
 * == endWith
 * == includes
 * == trim
 * == trimStart
 * == trimEnd
 *
 */
// let str = "     hello From iti        ";

// console.log(`Test${str.trimEnd()}Welcome`);

// console.log(`Angular Track ${str}
//             ${str}
//             :)

//             Hello

//     `);
/**==============
 * == find
 * == findIndex
 * == map
 * == every
 * == some
 * ================ */

// true && true  && ->false
let itiTracks = ["PHP", "dotNet", "iot", "react"];

itiTracks.forEach((item, index) => {
	console.log(`${index + 1} : ${item}  `);
});
// let result = itiTracks.map(function (item, index, arr) {
// 	return {
// 		id: index + 1,
// 		trackName: item,
// 	};
// });

// let result = itiTracks.some((value, index) => {
// 	return value.startsWith("P");
// });

// console.log(result);

// for (let i = 0; i < result.length; i++) {
// 	document.writeln(`<h1>${result[i]}</h1>`);
// }
// let arr = [10, 20, 55, 12, 6];

// let result = arr.findIndex((item) => item > 25);

// console.log(result);

// jsEngine
// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("--------------");
// }

// let product = [
// 	{
// 		id: 1,
// 		name: "book",
// 		price: 200,
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
// 		price: 500,
// 		cat: "electronics",
// 	},
// 	{
// 		id: 4,
// 		name: "phone",
// 		price: 800,
// 		cat: "electronics",
// 	},
// 	{
// 		id: 5,
// 		name: "chicken",
// 		price: 300,
// 		cat: "food",
// 	},
// ];

// let filteredProduct = product.filter(function (item, index, arr) {
// 	return false; // true
// });

// console.log(filteredProduct);

console.log(`efd` + "Dd");

// var a = 3;

// var b = 4;

// a = 4;
// a = 3;
// // let [x,y] = arr

// let arr = [10, 20, 50, 23, 56];

// function --> max -- min
