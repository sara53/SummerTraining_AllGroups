/**
 * == Agenda
 * functions
 *  -- built in functions
 *  -- user defined function
 *      == function statement
 *      == function expression
 *      -- anonymous function
 *      -- callback function
 *
 * == Hoisting
 */

// params
// function sum(num1, num2) {
// 	num1 = num1 || 0;
// 	num2 = num2 || 0;

// 	return num1 + num2;
// }

// function mult(x) {
// 	return x * 2;
// }

// console.log(mult(sum(3, 4)));

/** */
// sum("Mona", "ali");
// console.log("-----------");
// sum(true, true);
// console.log("------------");
// sum(2, 7);
// console.log("------------");
// sum(2, 7, "mona", true);

// // arguments
// sum(3, 4); // call
// console.log("-------------");
// sum(5, 6);
// console.log("--------");
// sum(10, 4);

// // function statement -- declaration
// function sum(x, y) {
// 	return x + y;
// }

// function expression
// var sum = function (x, y) {
// 	console.log(x + y);
// };

// sum("mona", "ali");
// sum(10, 4);
// var fname;
// console.log(fname);
// fname = "mona";
// console.log(fname);
// var fname
// console.log(fname);
//fname= "mona";
// console.log(fname);

// sum(3, 4);
// var sum = function (x, y) {
// 	console.log(x + y);
// };

// call back function
// var dotnetTrack = function (instName) {
// 	console.log("--- Hello dotnet -----");
// 	console.log("Your inst is : ", instName);
// };
// var phpTrack = function (instName) {
// 	console.log("--- Hello PHP -----");
// 	console.log("Your inst is : ", instName);
// };
// var mearnTrack = function () {
// 	console.log("--- Hello Mearn -----");
// };
// function greet(myFun, name) {
// 	myFun(name);
// 	console.log("welcome @ ITI");
// }
// greet(dotnetTrack, "mona ali");
// greet(function (instName) {
// 	console.log("--- Hello dotnet -----");
// 	console.log("Your inst is : ", instName);
// }, "mona");
/**------------------------------------------ */
// var student1 = "ali";

// var x = 20;

// var student2 = "ahmed";
// var y = 30;

// console.log();

/**-------------------------------------------- */
/** object == properties -- methods
 * prop ==> key : value [any Datatype]
 *
 * == access -->
 *  -- dot notation
 *  -- subscript notation
 */

// var student1 = {
// 	fname: "ali",
// 	age: 20,
// 	address: {
// 		city: "Alex",
// 		code: 123,
// 		street: "saad Street",
// 	},
// 	display: function (name) {
// 		console.log("Welcome @ ITI", name);
// 		return "ITI";
// 	},
// };

// var result = student1.display("PHP"); // call
// console.log(result);
// student1["fname"] = "ahmed";
// student1["gender"] = "male";
// console.log(student1);
// student1.fname = "ahmed"; // override
// student1.gender = "male"; // add
// console.log(student1);

// console.log(student1.gender);
// console.log(student1.address["city"]);
// console.log(student1["address"].city);
// console.log(student1["address"]["city"]);
// console.log(student1.address.city);

// console.log(student1["fname"]);
// console.log(student1.fname);
// console.log(student1["age"]);
// console.log(student1.age);
// console.log(student1["address"]);
// console.log(student1.address);
/**
 * length
 * ---------------------
 * == charAt --> index --> char
 * == indexOf --> char --> index
 * == startWith
 * == endsWith
 * == toUpperCase
 * == toLowerCase
 * == concat
 * == split
 * == trim
 * == trimStart
 * == trimEnd
 */
// var str = "      hello FROM iti        ";

// console.log(`
//     Welcome ${str.trim()}
//     hello PHP Track
// `);

// for (var i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
/**----------------
 * arr
 * -----------------
 * == length
 * -------------------------
 * == push --> after the last element
 * == unshift --> before the first element
 * == pop ==> remove the last element
 * == shift
 * == concat
 * == reverse
 * == join
 * ---------------- */
// var arr = [10, 20, 4, 2, 4];

// /**
//  *  10 - 20 ==> -10
//  *  30 -20 ==> 10
//  *  20 20 --> 0
//  */
// arr.sort(function (x, y) {
// 	return x - y;
// }); // sort -->
// let result = arr.join("||"); // string
// console.log(result);

// console.log(result);
// arr.push("mona");
// arr.push("ali");
// arr.push("123");
// for (var i = 0; i < 3; i++) {
// 	arr.push(i);
// }
// var arr = ["a", "c", "b"]; // ascii -->
// arr.sort();
// console.log(arr);
/**--------
 * PI
 * --------------------
 * == sqrt
 * == pow
 * == abs
 * |-20| ==> |20|
 * == positive --> 1
 * == negative --> -1
 * == 0 --> 0
 * -----------------------
 * == round --> 5.2
 * == floor -->
 * == ceil
 * == random
 * == max
 * == min
 * --------------------
 * ----------- */

// console.log(Math.max(10, 40, 2, 4, 90));
// console.log(Math.min(10, 40, 2, 4, 90));

/**Lab */
/*** ==================================
 * 1-fizzBuzz
 * ====================================
 * 5 --> 5 --> Buzz
 * 3 --> 3 --> fizz
 * 15 --> 3,5 --> fizzBuzz
 * 21 --> 3 -->  fizz
 * 7 --> None
 * ======================================
 * == 2-reverse a string
 * ======================================
 * --- ahmed --> demha
 * -- alaa   --> aala
 * -- hello iti --> iti olleh
 * ======================================
 * 3-take 5 numbers from user
 * ======================================
 * -- sum -- mult -- div
 * [1,2,3,4,5]
 *
 * sum => 15
 * mult -->
 * div -->

 * =========================================
 * 5- take string from user ,
 * == take a char from user
 * -----------------------------------------
 * -- hello from iti --> i --> [11,13]
 * -- hello from iti --> f --> [7]
 * -- i love javascript --> v --> [5,10]
 * ==================================================
 *  arr = [ali,ahmed,pet,hoda,mona,ola]

        [ali,ahmed]
        [ahmed,mona]
     
*/
