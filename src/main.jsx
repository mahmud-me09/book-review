import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Suggestions from "./pages/Suggestions";
import Contact from "./pages/Contact";
import App from "./App";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
import BookDetail from "./pages/BookDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		// errorElement: <div>Hello from error</div>,
		children: [
			{
				path: "/",
				loader: () => fetch("/book_data.json"),
				element: <Home></Home>,
			},
			{
				path: "/listed-books",
				loader: () => fetch("/book_data.json"),
				element: <ListedBooks></ListedBooks>,
			},
			{
				path: "/pages-to-read",
				element: <PagesToRead></PagesToRead>,
			},
			{
				path: "/suggestions",
				element: <Suggestions></Suggestions>,
			},
			{
				path: "/contact-us",
				element: <Contact></Contact>,
			},
			{
				path: "/:id",
				loader: () => fetch("/book_data.json"),
				element: <BookDetail></BookDetail>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);