import { Link, NavLink, useLoaderData } from "react-router-dom";
import ListedBook from "../components/ListedBook";
import { useState } from "react";

const ListedBooks = () => {
    const books = useLoaderData()
    const [tabIndex, setTabIndex] = useState(0)
    
    return (
		<div>
			<h1 className="max-w-full text-center py-8 text-xl bg-gray-100 my-8 rounded-xl font-bold">
				Books
			</h1>
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
			{books.map((book, idx) => (
				<ListedBook key={idx} book={book}></ListedBook>
			))}
		</div>
	);
};

export default ListedBooks;