/**
 * == string
 * == number
 * == boolean
 * == undefined
 * == null
 * == any
 * -----------------------------------
 * == Varaibles
 * == Arrays
 * == Objects
 * -----------------------------------
 * == functions
 * == class
 * == inheritance
 * == interface
 */

// var fname: string = "10";

// fname = "ali";

// fname = true;

// console.log(fname);

// var num: number;

// num = 10;

// console.log(num);
// console.log(num); // error
// num = 10;

// num = true; // error
// num = "ali"; // string -- number

// var fname: number;

// fname = 10;
// fname = "mona";
// console.log(fname); //

// fname = true;

// var fname;

// fname = 10;

// fname = "mona";
// union
// var fname: string | number = "mona";

// fname = "ali";

// fname = 10;

// fname = true; /// error
// fname = 10; // string && number

// let arr: any[] = [10, "mona", true];
// type
// type stringOrNumber = number | string;

// let test: stringOrNumber = "ali";
// let arr: stringOrNumber[] = [];

// arr.push("ali");
// arr.push(123);

// tuple
// let arr: [number, string] = [10, "Welcome"];

// console.log(arr);
/** ---------------------------------- */

// let person = { fname: "ali" }; // string

// person.fname = "ahmed";
// person.fname = 10; // error -- number

// let person: { fname: string; age: number } = {
// 	fname: "ahmed",
// 	age: 10,
// };

// person.age = 30;
// person.color = "red"; // error
// console.log(person);

// let product: { id: number; name: string; price: number; cat: string }[] = [
// 	{ id: 1, name: "Book", price: 200, cat: "school" },
// 	{ id: 2, name: "Pen", price: 100, cat: "school" },
// ];

// console.log(product[9]);

// product.push({});
// product.push(true);

// let product: { id: number }[] = [];
// product.push("ali"); //

// function add(x: number, y: number, ...w: string[]): void {}

// add(20, 30, "ali", "mona");
// add(20, 30);

// add("mona", "mkk");
// add(true, true);
// add("mona", "ali");

// let data: [number, string] = [10, "mona"]; // validation

// function test(x: number, y: string): void {
// 	console.log(`${x}`);
// }

// test(...data); // test(10,"mona")

// function add(x: number = 0, y: number = 0) {}

// add(); // error
// function add(x: number, y?: number) {
// 	console.log(x);
// }

// add(5);
/**========================================== */

// class Person {
// 	// id;
// 	// name;
// 	// constructor(id: number, name: string, age: number) {
// 	// 	this.id = id;
// 	// 	this.name = name;
// 	// }

// 	constructor(private id: number, public name: string, public age: number) {}

// 	display(): void {
// 		console.log("Welcome");
// 	}

// 	get getId() {
// 		return this.id;
// 	}

// 	set setId(newId: number) {
// 		this.id = newId;
// 	}
// }

// let person1 = new Person(2, "ali", 40);
// console.log(person1.getId);

// person1.setId = 50;
// person1.getId();
// person1.setId(23);

// class Person {
// 	constructor(public name: string, public age: number) {}
// 	display(): string {
// 		return "Welcome From Person";
// 	}
// }

// class User extends Person {
// 	constructor(name: string, age: number, public password: string) {
// 		super(name, age);
// 	}

// 	gerneratePass(): string {
// 		return this.password.toUpperCase();
// 	}
// }

/**--------------------------------------------- */

// interface Iproduct {
// 	id: number;
// 	name: string;
// 	price: number;
// 	category: string;
// 	imgSrc?: string;
// 	discount: (rate: number) => number;
// }

// class Product implements Iproduct {
// 	constructor(
// 		public id: number,
// 		public name: string,
// 		public price: number,
// 		public category: string
// 	) {}

// 	discount(rate: number): number {
// 		return this.price * rate;
// 	}
// }

// class X extends Product {}

// let product: Iproduct[] = [
// 	{ id: 1, name: "Book", price: 200, category: "school" },
// 	{ id: 2, name: "Pen", price: 200, category: "school" },
// ];

//============================================
/**
 * class IEmployee{}
 * Class Employee  implement IEmployee
 *  id- name,age,address -- salary
 *  -- bouns (rate)
 *  -- showEmpData
 *
 * -- class Manger extends Employee
 * -- mangerRoles()--> // any data
 *
 * -------------------------------
 * == array -- number | string
 * == array -- IEmployee[]
 * == array -- boolean
 *--------------------------------
 -- function take string1 ,string2
    --- will return concat --> STRING + string
 */
