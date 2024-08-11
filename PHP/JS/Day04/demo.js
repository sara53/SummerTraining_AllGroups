/**
 * == events
 *  -- add attribute
 *  -- attach function
 *  -- addEventListener
 *
 * == Bom Object
 *  -- window
 *  -- location
 *  -- screen // self study
 *  -- history
 *  -- navigation
 *
 * == Ajax
 *
 */

// var myWind;
// function openNewWindow() {
// 	myWind = window.open("about.html", "", "width=300,height=300");
// }
// function closeWindow() {
// 	myWind.close();
// }
// function moveToWindow() {
// 	myWind.moveTo(300, 300);
// }
// function moveByWindow() {
// 	myWind.moveBy(100, 100);
// }
// function resizeToWindow() {
// 	myWind.resizeTo(400, 400);
// }
// function resizeByWindow() {
// 	myWind.resizeBy(100, 100);
// }

// setTimeout(function () {
// 	console.log("After 2 seconds");
// }, 2000);

// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);

// var myInterval;
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		span.innerHTML = ++i;
// 	}, 1000);
// }

// function stop() {
// 	clearInterval(myInterval);
// }
// var span = document.getElementById("output");

// function startDownload() {
// 	span.style.display = "block";
// 	setTimeout(function () {
// 		span.innerHTML = '<a href="#google">Click Here ... </a>';
// 	}, 3000);
// }

// function execute() {
// 	location.assign("https://www.google.com.eg/?gws_rd=ssl");
// 	location.replace("https://www.google.com.eg/?gws_rd=ssl");
// 	location.pathname = "/about.html";
// 	console.log(location.pathname);
// 	location.href = " https://www.google.com.eg/?gws_rd=ssl";
// }
// function successCB(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }
// function errorCB() {
// 	console.log("Rejected");
// }

// // successCB({}); // jsEngine

// navigator.geolocation.getCurrentPosition(successCB, errorCB);

// function execute() {}

// console.log(screen);

// var btn = document.getElementById("btn");
// var p = document.getElementById("content");

// function changeContent(e) {
// 	console.log(e.target);
// 	p.innerHTML = "Welcome PHP Track";
// }
// function changeStyle() {
// 	p.style.background = "red";
// }
// function changeStyleWithParams(color) {
// 	p.style.background = color;
// }

// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", changeStyle);

// setTimeout(function () {
// 	console.log("Removed");
// 	btn.removeEventListener("click", changeStyle);
// 	btn.setAttribute("disabled", true);
// }, 3000);
// attach function
// changeContent({target:element})
// btn.onclick = changeContent;
// btn.onclick = function () {
// 	changeContent();
// 	changeStyle();
// };

// btn.onclick = changeStyle;
// btn.onclick = changeContent; // override

// btn.onmouseenter = function () {
// 	changeStyleWithParams("green");
// };

// let person = {
// 	fname: "ali",
// };

// person.onclick = function () {
// 	console.log("fun1");
// };

// person.onclick = function () {
// 	console.log("Fun2");
// };

// person.onclick();

// console.log(person);

// var input1 = document.getElementById("input1");
// var result = document.getElementById("result");

// input1.addEventListener("focus", function () {
// 	input1.style.border = "3px solid blue";
// });
// input1.addEventListener("blur", function () {
// 	input1.style.border = "3px solid orange";
// });
// input1.addEventListener("input", function () {
// 	if (input1.value.length <= 3) {
// 		input1.style.border = "3px solid red";
// 		result.innerHTML = "length > 3";
// 		result.style.color = "red";
// 	} else {
// 		input1.style.border = "3px solid green";
// 		result.innerHTML = "";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("submit");
// 	console.log(input1.value);
// }
function getAllUsers() {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

	xhr.send("");

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var users = JSON.parse(xhr.response);
				for (var i = 0; i < users.length; i++) {
					document.writeln(`<h1>Name : ${users[i].name}</h1>`);
					document.writeln(`<h2>Email : ${users[i].email}</h2>`);
					document.writeln(`<h3>Phone : ${users[i].phone}</h3>`);
					document.writeln(`<button>View User details</button>`);
					document.writeln(`<hr/>`);
				}
			}
		}
	};
}
