/** how to select elements from dom
 * -------------------------------------
 * == getElementById --> element || null
 * == querySelector --> element || null
 * == getElementsByClassName --> [Elements] || []
 * == getElementsByTagName --> [Elements] || []
 * == getElementsByName --> [Elements] || []
 * == querySelectorAll --> [Elements] || []
 *--------------------------------------------------
        == firstElementChild
        == lastElementChild
        == children
        == document.body
        == document.links
        == document.images
        == document.forms
-------------------Change Content ------------------
    == innerText
    == innerHTML
    == textContent
-------------------Change Style ------------------

    == style prop
    == className
    == classList
        -- add
        -- remove
        -- toggle
------------------ Attributes -------------------
 == getAttribute
 == setAttribute
 == hasAttribute
 == toggleAttribute
--------------------- Create Elements From JS----------------------------
 *
 */

// var element = document.querySelector("#header");
// console.log(element);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }

// var div = document.getElementById("header");
// console.log(div.children);

// console.log(document.forms);

// var p = document.querySelector(".content");

// function changeContent() {
// 	p.innerHTML = "<h1>Welcome From ITI</h1>";
// 	p.innerHTML = "Welcome From ITI";
// }
// function changeStyle() {
// 	p.style.backgroundColor = "#1e0b54";
// 	p.style.color = "#fff";
// 	p.style.padding = "30px";
// 	p.style.display = "none";
// // }
// function changeStyle() {
// 	p.classList.toggle("jsClass");
// 	p.classList.remove("myP");
// 	p.classList.add("jsClass");
// 	console.log(p.classList);
// 	p.className += " jsClass";
// 	console.log(p.className);//get
// }

// var input1 = document.getElementById("input1");
// var output = document.getElementById("output");
// var inputs = document.getElementsByName("choose");
// function showAnswer() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			console.log(inputs[i].value);
// 		}
// 	}
// }

// var p1 = document.getElementsByClassName("content1")[0];
// var p2 = document.getElementsByClassName("content2")[0];
// function switchContent() {
// 	var data = p2.innerHTML;
// 	p2.innerHTML = p1.innerHTML;
// 	p1.innerHTML = data;
// }

// var link1 = document.getElementById("link1");
// var link2 = document.getElementById("link2");
// var link3 = document.getElementById("link3");
// var p = document.getElementsByTagName("p")[0];
// function execute() {
// 	if (link1.hasAttribute("href")) {
// 		link1.removeAttribute("href");
// 	} else {
// 		link1.setAttribute("href", "https://www.google.com.eg/");
// 	}
// 	// link1.removeAttribute("href");
// 	// console.log(link1.getAttribute("id"));
// 	// console.log(p.getAttribute("id"));
// 	// p.setAttribute("class", "jsClass");
// }
// <p>Welcome PHP</p>
var div = document.getElementById("parent");
var p = document.getElementById("p1");
var h1 = document.getElementById("h1");
/**----------------------------------------- */
// var element = document.createElement("p");
// element.innerHTML = "Welcome PHP";
// console.log(element);
// h1.after(element);
// document.body.append(element);
// var span = document.createElement("span");
// var text = document.createTextNode("Welcome PHP");
// var result = element.appendChild(span);
// console.log(result);
// span.innerHTML = "Welcome Span";
// console.log(element);
/**----------------------------------------- */

// function createNewElement() {
// 	p.remove();
// }
