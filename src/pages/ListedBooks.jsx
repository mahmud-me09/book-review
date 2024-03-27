import { Link, NavLink, useLoaderData } from "react-router-dom";
import ListedBook from "../components/ListedBook";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ListedBooks = () => {
	const books = useLoaderData();
	const [tabIndex, setTabIndex] = useState(0);

	const readId = JSON.parse(localStorage.getItem("read") || "[]");
	const readBooks = books.filter((book) => readId.includes(book.bookId));

	const wishId = JSON.parse(localStorage.getItem("wish") || "[]");
	const wishBooks = books.filter((book) => wishId.includes(book.bookId));

	const [sortedReadBooks, setSortedReadBooks] = useState([]);

	const [sortedWishBooks, setSortedWishBooks] = useState([]);

	const handleSort = (event, tab) => {
		let selectedSortField = "";
		if (event.target.innerText.toLowerCase() === "rating") {
			selectedSortField = "rating";
		} else if (event.target.innerText.toLowerCase() === "number of pages") {
			selectedSortField = "totalPages";
		} else if (event.target.innerText.toLowerCase() === "publish year") {
			selectedSortField = "yearOfPublishing";
		}

		if (tab === "read") {

			const sorted = [...readBooks].sort((a, b) => {
				if (a[selectedSortField] < b[selectedSortField]) return 1;
				if (a[selectedSortField] > b[selectedSortField]) return -1;
				return 0;
			});

			setSortedReadBooks(sorted);

		} else if (tab === "wishlist") {

			const sorted = [...wishBooks].sort((a, b) => {
				if (a[selectedSortField] < b[selectedSortField]) return 1;
				if (a[selectedSortField] > b[selectedSortField]) return -1;
				return 0;
			});

			setSortedWishBooks(sorted);
		}
	};

	return (
		<div>
			<h1 className="max-w-full text-center py-8 text-xl bg-gray-100 my-8 rounded-xl font-bold">
				Books
			</h1>
			{/* Dropdown menu */}
			<div className="dropdown mb-4 items-center justify-center flex flex-col">
				<div
					tabIndex={0}
					role="button"
					className="btn rounded-2xl text-lg bg-green-500 text-white m-1 flex justify-center items-center"
				>
					Sort By <FaAngleDown />
				</div>
				{tabIndex === 0 ? (
					<ul
						tabIndex={0}
						className="dropdown-content mt-44 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a onClick={(event) => handleSort(event, "read")}>
								Rating
							</a>
						</li>
						<li>
							<a onClick={(event) => handleSort(event, "read")}>
								Number of Pages
							</a>
						</li>
						<li>
							<a onClick={(event) => handleSort(event, "read")}>
								Publish Year
							</a>
						</li>
					</ul>
				) : (
					<ul
						tabIndex={1}
						className="dropdown-content mt-44 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a
								onClick={(event) =>
									handleSort(event, "wishlist")
								}
							>
								Rating
							</a>
						</li>
						<li>
							<a
								onClick={(event) =>
									handleSort(event, "wishlist")
								}
							>
								Number of Pages
							</a>
						</li>
						<li>
							<a
								onClick={(event) =>
									handleSort(event, "wishlist")
								}
							>
								Publish Year
							</a>
						</li>
					</ul>
				)}
			</div>

			{/* tabs */}
			<div className="lg:border-b mt-4">
				<div className="flex flex-col lg:flex-row flex-start overflow-x-auto overflow-y-hidden flex-nowrap ">
					<Link
						to="#"
						onClick={() => setTabIndex(0)}
						className={`flex items-center lg:border-b-0 flex-shrink-0 px-5 py-3 ${
							tabIndex === 0 ? "border" : "border-0"
						} rounded-t-lg `}
					>
						<span>Read Books</span>
					</Link>
					<Link
						to="#"
						onClick={() => setTabIndex(1)}
						className={`flex items-center lg:border-b-0 flex-shrink-0 px-5 py-3 ${
							tabIndex === 1 ? " border" : "border-0"
						} rounded-t-lg `}
					>
						<span>Wishlist Books</span>
					</Link>
				</div>
			</div>
			<div className="mt-4">
				{tabIndex === 0 &&
					(sortedReadBooks.length > 0
						? sortedReadBooks.map((book, idx) => (
								<ListedBook key={idx} book={book}></ListedBook>
						  ))
						: readBooks.map((book, idx) => (
								<ListedBook key={idx} book={book}></ListedBook>
						  )))}
				{tabIndex === 1 &&
					(sortedWishBooks.length > 0
						? sortedWishBooks.map((book, idx) => (
								<ListedBook key={idx} book={book}></ListedBook>
						  ))
						: wishBooks.map((book, idx) => (
								<ListedBook key={idx} book={book}></ListedBook>
						  )))}
			</div>
		</div>
	);
};

export default ListedBooks;
