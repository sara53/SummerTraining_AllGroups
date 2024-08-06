// var fname = "Ali"; // string
// var num = 10.259; // number
// var flag = true; // boolean

// fname = "ahmed"; // reassign
// fname = 10; // reassign
// fname = true;
// fname = [];

// var fname;
// fname = "ali";
// console.log(typeof fname);

// var fname = null; // js engine --> fname = {}

// console.log(typeof fname);
// console.log(typeof fname);
// console.log(typeof num);
// console.log(typeof flag);

/**
 * primitive Datatypes
 * ====== string
 * ====== number
 * ====== boolean
 * ====== undefined
 * ====== null
 * reference datatypes
 * ====== object
 *
 */
// Camel Case
// first
// firstSecond
// firstSecondThird
// redeclare

// var fname = 10;

// console.log(typeof fname);

// var fname = String(10);

// console.log(fname);

// console.log(typeof fname);

// var num = Number("mona");

// console.log(num);
// //NaN --> not a number

// console.log(typeof num);
/*** falsy Values
 * -----------------------------
 * == false
 * == 0
 * == null
 * == NaN
 * == undefined
 * == ""
 * ----------Truthy Values------
 */
// var flag = Boolean("dfgf");

// console.log(flag);
/**--------------------------- (+)--------------
 *  == (+,-,*,/)
 *
 * [+] ==> number + number --> add
 * [+] ==> string + string --> concat
 * -- coercion --> js engine automatic converts from datatype to anther datatype
 *
 * [-] ==> number - number ==> sub
 */

// var num1 = "mona"; //Number("mona") == NaN
// var num2 = 10; // 10 NaN - 10 --> NaN
// console.log(num1 - num2);
/**------------------Comparasion Operator
 * [==]  ----> only Values
 * [===] ----> (values & datatypes)
 * -------------------------------- */
// var num1 = "true"; //string("true") => NaN
// var num2 = true; // Boolean -->  1
// console.log(num1 === num2);
// console.log(num1 === num2);
/***=========================================== */

// var color = "blue";
// if (color == "red") {
// 	console.log("Your Fav Color is : red");
// } else if (color == "green") {
// 	console.log("Your Fav Color is : green");
// } else {
// 	console.log("You don't have any fav colors");
// }

// color == "red"
// 	? console.log("Red Color")
// 	: color == "green"
// 	? console.log("green")
// 	: console.log("Else Block");

// var flag = true;

// if (flag) {
// 	console.log();
// }

// for (var i = 0; i < 5; i++) {
// 	console.log("Welcome " + (i + 1));
// }
// var i = 0;
// while (i < 5) {
// 	console.log(i);
// 	i++;
// }
// var i = 6;
// do {
// 	console.log(i);
// 	i++;
// } while (i < 5);
/** Switch -- Regex in JS (self Study) */

/** logical Gates
 *  and &&
 *==
 * == true && true --> true
 * == false && true --> false
 * == true && false --> false
 * == false && false --> false
 * ||
 *
 * === true || true --> true;
 * === true || false --> true
 * === false || true --> true
 * === false || false --> false
 *
 * !
 * true --> false
 * false --> true
 */

/**
 * mona && ali -- > ali
 * true &&  true --> true
 *
 * 0 && mona ----> 0
 *
 * false &&   ---> 0
 *
 *
 * "" && 0 --> ""
 *
 * "alaa" && "" --->
 * ------------------------------
 * mona || ali --> mona
 *
 * 0 || ali --> ali
 *
 * 0 || "" || ali -->
 *
 */

// for (var i = 1; i < 7; i++) {
// 	document.writeln("<h" + i + ">Welcome</h" + i + ">");
// }

// document.writeln("<h1 style='color:red'>Welcome PHP Track</h1>");
// document.writeln("<p>Hello @ ITI </p>");

// var num1 = Number(prompt("Enter Your Num1", 10));
// var num2 = Number(prompt("Enter Your Num2", 20));
// document.writeln(num1 + num2);

// var result = confirm("Are You sure you want to delete this item?");
// result
// 	? document.writeln("Item Deleted")
// 	: document.writeln("Operation cancelled");

/**-----------------Lab Tasks --------------------
 * == 1- take your name and print it in (h1 -- h6)
 *-----------------------------------------------
 * == take an integer from user -->
 *      -- check if the num positive
 *      -- check if the num odd or even
 *------------------------------------------------
 * == take n number until --> zero or sum > 100
 * == show the sum of integers in your document
 *
 * 10
 * 20
 * 10
 * 20
 * 50
 * ---------------------------------------------------------
 * == take a string from the user then count e char in this string
 * == ahmed --> 1
 * == mona --> 0
 * == IEMfe --> 2
 * --------------------------- */
