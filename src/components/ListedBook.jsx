import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

const ListedBook = ({book}) => {
    const navigate = useNavigate();
	function handleClick(selectedBook) {
		navigate(`/${selectedBook.bookId}`);
	}
    return (
		<div className="p-4 border rounded-lg my-4">
			<div className="card lg:card-side gap-4 bg-base-100">
				<figure className="px-2 lg:px-12 py-6 bg-gray-100 ">
					<img className="w-[130px]" src={book.image} alt="Album" />
				</figure>
				<div className="card-body px-0">
					<h2 className="card-title">{book.bookName}</h2>
					<p>By: {book.author}</p>
					<div className="flex flex-col lg:flex-row gap-4">
						<div>
							<strong>Tags: </strong>
							{book.tags.map((tag, id) => (
								<div
									key={id}
									className="badge bg-green-50 text-green-500"
								>
									{tag}
								</div>
							))}
						</div>
						<div className="flex lg:justify-center items-center gap-2">
							<CiLocationOn /> year of Publishing:{" "}
							{book.yearOfPublishing}
						</div>
					</div>
					<div className="flex flex-col lg:flex-row gap-4">
						<div className="flex lg:justify-center items-center gap-2">
							<MdPeopleOutline /> Publisher: {book.publisher}
						</div>
						<div className="flex lg:justify-center items-center gap-2">
							<RiPagesLine /> Pages: {book.totalPages}
						</div>
					</div>
					<hr/>

					<div className="card-actions justify-start gap-4">
						<button className="btn p-6 flex flex-col justify-center items-center bg-blue-200 text-blue-500 rounded-full">
							Category: {book.category}
						</button>
						<button className="btn p-6 flex flex-col justify-center items-center bg-orange-200 text-orange-500 rounded-full">
							Rating: {book.rating}
						</button>
						<Link
							onClick={() => handleClick(book)}
							to={`/${book.bookId}`}
						>
							<button className="btn p-6 flex flex-col justify-center items-center bg-green-500 text-white rounded-full">
								View Detail
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListedBook;