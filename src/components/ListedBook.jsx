import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ListedBook = ({book}) => {
    const navigate = useNavigate();
	function handleClick(selectedBook) {
		navigate(`/${selectedBook.bookId}`);
	}
    return (
		<div className="p-4 border rounded-lg my-4">
			<div className="card lg:card-side bg-base-100">
				<figure className="px-12 py-6 bg-gray-100 ">
					<img className="w-[130px]" src={book.image} alt="Album" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">New album is released!</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div className="card-actions justify-end">
						<Link
							onClick={() => handleClick(book)}
							to={`/${book.bookId}`}
						>
							<button className="btn btn-primary">
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