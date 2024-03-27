import React from "react";
import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

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
							<GiHamburgerMenu className="text-3xl" />
						</div>
						<ul
							tabIndex={0}
							className="menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow dark:text-white bg-base-100 rounded-box w-52"
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
					<ul className="menu-horizontal font-semibold hidden lg:flex px-1">
						<a className="btn bg-green-500 text-white mx-3">
							Sign In
						</a>
						<a className="btn bg-sky-300 text-white">Sign Up</a>
					</ul>
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<MdAccountCircle className="text-4xl" />
						</div>
						<ul
							tabIndex={0}
							className="menu-sm font-semibold dropdown-content flex flex-col lg:flex-row gap-2  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-20 lg:w-56"
						>
							<a className="btn bg-green-500 text-white mx-0 lg:mx-3">
								Sign In
							</a>
							<a className="btn bg-sky-300 text-white">Sign Up</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
