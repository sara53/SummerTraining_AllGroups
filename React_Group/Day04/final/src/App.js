import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import SharedComponent from "./Layouts/SharedComponents";
import NotFound from "./components/NotFound";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { useState } from "react";
import { productsList } from "./models/productsList";

function App() {
	let [products, setProducts] = useState(productsList);
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element={<SharedComponent />}>
					<Route index element={<Home />} />
					<Route
						path='products'
						element={<Products products={products} setProducts={setProducts} />}
					/>
					<Route
						path='products/:id'
						element={
							<ProductDetails products={products} setProducts={setProducts} />
						}
					/>
					<Route
						path='products/:id/edit'
						element={
							<ProductForm products={products} setProducts={setProducts} />
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Route>
			</>
		)
	);
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
