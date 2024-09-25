
import "./App.css";
import { Content } from "./components/Content";
import { Counter1 } from "./components/Counter1";
import { Login } from "./components/Login";
import Movies from "./components/Movies";
import Register from "./components/Register";

function App() {
	let myTitle = "Register Component"
	let bgColor = "alert alert-info"
	return (
		<>
			<Login />
			{/* <Movies /> */}

			{/* <Register /> */}
			{/* <Content bgColor="bg-dark text-light" />
			<Content bgColor='alert alert-dark'>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, nostrum.</p>
				<h5 className="text-success">Show More</h5>
			</Content > */}


			{/* <Counter1 title={myTitle} bgColor={bgColor} color='green' description="React Group" /> */}

		</>
	);
}

export default App;
