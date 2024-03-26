import { Link, NavLink, useLoaderData } from "react-router-dom";
import ListedBook from "../components/ListedBook";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ListedBooks = () => {
	const books = useLoaderData();
	const [tabIndex, setTabIndex] = useState(0);

	const readId = JSON.parse(localStorage.getItem("read") || '[]');
	const readBooks = books.filter((book) => {
		return readId.includes(book.bookId);
	});

	const wishId = JSON.parse(localStorage.getItem("wish") || '[]');
	const wishBooks = books.filter((book) => {
		return wishId.includes(book.bookId);
	});

	return (
		<div>
			<h1 className="max-w-full text-center py-8 text-xl bg-gray-100 my-8 rounded-xl font-bold">
				Books
			</h1>
			{/* Dropdown manu */}

			<div className="dropdown mb-4 items-center justify-center flex flex-col">
				<div
					tabIndex={0}
					role="button"
					className="btn rounded-2xl text-lg bg-green-500 text-white m-1 flex justify-center items-center"
				>
					Sort By <FaAngleDown />
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content mt-44 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a>Rating</a>
					</li>
					<li>
						<a>Number of Pages</a>
					</li>
					<li>
						<a>Publish Year</a>
					</li>
				</ul>
			</div>

			{/* tabs */}
			<div className="border-b mt-4">
				<div className="flex flex-start overflow-x-auto overflow-y-hidden flex-nowrap ">
					<Link
						to={"#"}
						onClick={() => setTabIndex(0)}
						className={`flex items-center border-b-0 flex-shrink-0 px-5 py-3 ${
							tabIndex === 0 ? "border" : "border-0"
						} rounded-t-lg `}
					>
						<span>Read Books</span>
					</Link>
					<Link
						to={"#"}
						onClick={() => setTabIndex(1)}
						className={`flex items-center border-b-0 flex-shrink-0 px-5 py-3 ${
							tabIndex === 1 ? " border" : "border-0"
						} rounded-t-lg `}
					>
						<span>Wishlist Books</span>
					</Link>
				</div>
			</div>
			<div className="mt-4">
				{tabIndex === 0 &&
					readBooks.map((book, idx) => (
						<ListedBook key={idx} book={book}></ListedBook>
					))}
				{tabIndex === 1 &&
					wishBooks.map((book, idx) => (
						<ListedBook key={idx} book={book}></ListedBook>
					))}
			</div>
		</div>
	);
};

export default ListedBooks;
