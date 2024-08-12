/** Agenda
 * -- object.keys
 * -- object.values
 * -- object.entries
 * -- object Props in es6
 *
 * == setTimeOut in memory
 * == promises -- async await -- then catch
 * == fetch
 * -----------------------
 *  -- oop in es6 --
 *
 */

// var age = 20;
// var fname = "ali";
// let myKey = "color";
// let person = {
// 	fname, // fname:fname
// 	age, // age:age
// 	display() {
// 		console.log("welcome");
// 	},
// 	[myKey]: "red",
// };

// console.log(person);

// let person = {
// 	fname: "ali",
// 	age: 20,
// 	color: "red",
// };

// let keys = Object.keys(person);
// let values = Object.values(person);
// let values = Object.entries(person);
// console.log(values);
/**========================== */

// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After SetTimeout");
// }

// first();

// setTimeout(() => {
// 	console.log("first");
// }, 0);

// console.log("Second");
// console.log("End");

// var x;

// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 1000);
/**======================== */

// var productsList;
// setTimeout(() => {
// 	productsList = [
// 		{ id: 1, name: "book", price: 200 },
// 		{ id: 2, name: "pen", price: 300 },
// 		{ id: 3, name: "mouse", price: 500 },
// 	];

// 	setTimeout(() => {
// 		var product = productsList[0];
// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

/**================= */

// function greet(myFun) {
// 	myFun(
// 		function () {
// 			console.log("cb1");
// 		},
// 		function () {
// 			console.log("cb2");
// 		}
// 	);
// }

// greet(function (x, y) {
// 	x(); //
// 	y();
// });
// var myPromise = new Promise(function (x, y) {
// 	//x("mona");
// 	y("Error message");
// });
// myPromise
// 	.then((data) => {
// 		console.log(data);
// 		console.log("From then");
// 	})
// 	.catch((errorMs) => {
// 		console.log(errorMs);
// 		console.log("from catch");
// 	});
/** == pending
 *  == fulfilled  -- success
 * == rejected
 */

// function getAllProducts() {
// 	var myPromise = new Promise(function (x, y) {
// 		let productsList = [
// 			{ id: 1, name: "book", price: 200 },
// 			{ id: 2, name: "pen", price: 300 },
// 			{ id: 3, name: "mouse", price: 500 },
// 		];
// 		if (productsList) {
// 			x(productsList);
// 		} else {
// 			y("Error on getting products List");
// 		}
// 	});

// 	return myPromise;
// }

// function getProduct(productsList, productId) {
// 	var myPromise = new Promise(function (resolve, reject) {
// 		var product = productsList.find((product) => product.id == productId);
// 		if (product) {
// 			resolve(product);
// 		} else {
// 			reject("Error on getting product");
// 		}
// 	});
// 	return myPromise;
// }

// async function execute() {
// 	try {
// 		let productsList = await getAllProducts();
// 		let response = await getProduct(productsList, 2);
// 		console.log(response);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// execute();
// getAllProducts()
// 	.then((productsList) => {
// 		return getProduct(productsList, 1);
// 	})
// 	.then((product) => {
// 		console.log(product);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		for (let i = 0; i < data.length; i++) {
// 			document.writeln(`<h1>${data[i].name}</h1>`);
// 		}
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function getData() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		for (let i = 0; i < data.length; i++) {
// 			document.writeln(`<h1>${data[i].name}</h1>`);
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// getData();
/**------------------------------ */
// let product1 = { id: 1, name: "Book", price: 300, cat: "school" };
// let product2 = { id: 2 };
// let product3 = { id: 3, name: "Pen" };

// document.writeln(`<h1>${product1.name}</h1>`);
// document.writeln(`<h1>${product2.name}</h1>`);
// document.writeln(`<h1>${product3.name}</h1>`);

// class Product {
// 	constructor(id, name, price = "") {
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 	}
// 	discount(rate = 0.2) {
// 		return this.price * rate;
// 	}
// }

// let product1 = new Product(1, "book", 300);
// let product2 = new Product(2, "pen", 400);

// console.log(product1.discount(0.5));
// console.log(product1.discount());

// parentClass -- superClass -- inheritance
// class Person {
// 	#name;
// 	constructor(name, age) {
// 		this.#name = name;
// 		this.age = age;
// 	}
// 	display() {
// 		console.log(`${this.name} : ${this.age}`);
// 	}

// 	set setName(value) {
// 		this.#name = value;
// 	}

// 	get getName() {
// 		return this.#name;
// 	}
// }

// let person1 = new Person("ahmed", 30);

// person1.setName = "mona";

// console.log(person1.getName);

// person1.setName("mona"); // set
// console.log(person1.getName()); // call

// person1.age = 30; // set
// console.log(person1.age);// get

// console.log(person1.#name); // get
// subClass-- childClass

// class User extends Person {
// 	constructor(name, age, password) {
// 		super(name, age);
// 		this.password = password;
// 	}

// 	generatePass() {
// 		return this.password.toUpperCase() + "@#$" + this.password;
// 	}
// 	//override --polymorphism
// 	display() {
// 		super.display();
// 		console.log(`${this.password}`);
// 	}
// }

// let myUser = new User("ali", 20, "aliAhmed");
// myUser.display();
// console.log(myUser.generatePass());

// abstract class --
// class Person {
// 	constructor() {
// 		if (this.constructor == Person) {
// 			throw "Can not take object from abstract class";
// 		}
// 	}
// 	display() {
// 		throw "Method is not implemented";
// 	}
// }

// let person = new Person();
// console.log(person);

// class User extends Person {
// 	constructor(name, age, password) {
// 		super(name, age);
// 	}
// 	display() {
// 		console.log("Welcome user");
// 	}
// }
// let user = new User();
// user.display();
