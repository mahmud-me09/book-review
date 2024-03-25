import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	const link = (
		<>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-green-500 bg-white border rounded-lg mx-2 border-green-500 p-2"
							: "text-black mx-2 p-2"
					}
					to="/"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-green-500 bg-white border rounded-lg mx-2 border-green-500 p-2"
							: "text-black mx-2 p-2"
					}
					to="/listed-books"
				>
					Listed Books
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-green-500 bg-white border rounded-lg mx-2 border-green-500 p-2"
							: "text-black mx-2 p-2"
					}
					to="/pages-to-read"
				>
					Pages to read
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-green-500 bg-white border rounded-lg mx-2 border-green-500 p-2"
							: "text-black mx-2 p-2"
					}
					to="/suggestions"
				>
					Suggestions
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-green-500 bg-white border rounded-lg mx-2 p-2 border-green-500"
							: "text-black mx-2 p-2"
					}
					to="/contact-us"
				>
					Contact Us
				</NavLink>
			</li>
		</>
	);
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{link}
						</ul>
					</div>
					<a className="text-xl font-bold">Book Vibe</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu-horizontal font-semibold px-1">
						{link}
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn bg-green-500 text-white mx-3">Sign In</a>
					<a className="btn bg-sky-300 text-white">Sign Up</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
