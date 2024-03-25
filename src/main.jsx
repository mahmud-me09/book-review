import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Suggestions from "./pages/Suggestions";
import Contact from "./pages/Contact";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
    errorElement: <div>Hello from error</div>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <div>hello from listed books</div>
      },
      {
        path: '/pages-to-read',
        element: <div>hello from pages to read</div>
      },
      {
        path: '/suggestions',
        element: <Suggestions></Suggestions>
      },
      {
        path: '/contact-us',
        element: <Contact></Contact>
      }
    ]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);