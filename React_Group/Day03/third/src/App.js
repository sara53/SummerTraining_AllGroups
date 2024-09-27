import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import logo from "./assets/imgs/2.jpg";
import Productpage from "./components/Productpage";

function App() {
	let [inputData, setInputData] = useState("");
	let [title, setTitle] = useState("Welcome");

	useEffect(() => {
		setTitle(`Welcome ${inputData}`);
	}, [inputData]);

	return (
		<>
			<img src='1.jpg' />
			<img src={logo} />
		</>
		// <Productpage />
		// <div className='container p-4'>
		// 	<h1>App Component</h1>
		// 	<p className='lead fs-3 mb-5 text-danger fw-bold'>{title} </p>
		// 	<Login
		// 		setTitle={setTitle}
		// 		inputData={inputData}
		// 		setInputData={setInputData}
		// 	/>
		// </div>

		// <Counter />
	);
}

export default App;
