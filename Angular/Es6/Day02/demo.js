/**
 *  == Asynchrouns Exection in memory
 *  == promise
 *  == oop in js
 */

// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);

// 	console.log("After setTimeout");
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");

// console.log("End");

// var x;
// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 1000);

// function greet(x) {
// 	x(
// 		function () {
// 			console.log("First");
// 		},
// 		function () {
// 			console.log("Second");
// 		}
// 	);
// }

// greet(function (a,b) {
// 	a();
// 	b();
// });

// function getAllProducts() {
// 	var myPromise = new Promise(function (x, y) {
// 		var productsId;
// 		productsId = [100, 200, 300];
// 		productsId ? x(productsId) : y("Error on getting products List");
// 	});

// 	return myPromise;
// }

// function getProductDetails(productId) {
// 	var myPromise = new Promise(function (x, y) {
// 		var product = {
// 			id: productId,
// 			name: "Book",
// 			price: 200,
// 		};

// 		if (product) {
// 			x(product);
// 		} else {
// 			y("Error on getting product Details");
// 		}
// 	});

// 	return myPromise;
// }

// async function execute() {
// 	try {
// 		let productsId = await getAllProducts();
// 		let product = await getProductDetails(productsId[0]);
// 		console.log(product);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// getAllProducts()
// 	.then((prouctsList) => {
// 		return getProductDetails(prouctsList[0]);
// 	})
// 	.then(function (product) {
// 		console.log(product);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

/**
 * pending
 * fulfilled
 * rejected
 */

// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.send();
// xhr.onreadystatechange = function () {
// 	if (xhr.readyState === 4) {
// 		if (xhr.status == 200) {
// 			console.log(xhr.response);
// 		}
// 	}
// };

// let response = fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((reponse) => {
// 		return reponse.json();
// 	})
// 	.then((data) => {
// 		document.writeln(data[0].name);
// 		document.writeln(data[0].email);
// 		document.writeln(data[0].username);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function execute() {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let data = await response.json();
// 	console.log(data);
// }

// execute();
/**------------
 *
 * ----------- */

// var product1 = {
// 	id: 1,
// 	name: "Book",
// 	price: 200,
// };
// var product2 = {
// 	id: 1,
// };
// var product3 = {
// 	id: 1,
// 	name: "Pen",
// };

// document.writeln(
// 	"<h1>" + product1.name + " : price : " + product1.price + "</h1>"
// );
// document.writeln(
// 	"<h1>" + product2.name + " : price : " + product2.price + "</h1>"
// );

// class Product {
// 	constructor(id = "", name = "", price = "") {
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 	}

// 	discount(rate) {
// 		return this.price * rate;
// 	}
// }

// var p1 = new Product(1, "Phone", 200);
// var price = p1.discount(0.5);
// console.log(price);

// parent class -- super class
// inhertane
// class Person {
// 	#id;
// 	constructor(id, name, age, address) {
// 		this.#id = id;
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	display() {
// 		console.log(`Name = ${this.name} ,age= ${this.age}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// var p1 = new Person(1, "ahmed", 33, "banha");

// p1.setId = "new Id";
// console.log( p1.getId );

// p1.name = "new Name"; // set
// console.log(p1.name); // get
// // subClass -- child class
// class User extends Person {
// 	constructor(name, age, address, password) {
// 		super(name, age, address);
// 		this.password = password;
// 	}

// 	generatePass() {
// 		return this.password.toUpperCase() + "!@##" + this.password;
// 	}

// 	display() {
// 		super.display();
// 		console.log(`address = ${this.address} pass =  ${this.password}`);
// 	}
// }

// let newUser = new User("ali", 25, "Banha", "aliAhmed");
// newUser.display();

/**--------------------- */

// class Person {
// 	constructor(name, age) {
// 		if (this.constructor == Person) {
// 			throw "can't take an object from abstract class";
// 		}

// 		this.name = name;
// 		this.age = age;
// 	}

// 	display() {
// 		throw "Method not implemented";
// 	}
// }

// var newPerson = new Person();
// console.log(newPerson);
// class User extends Person {
// 	constructor(name, age, pass) {
// 		super(name, age);
// 	}

// 	display() {
// 		console.log("Welcome");
// 	}
// }

// let myUser = new User();

// myUser.display();
