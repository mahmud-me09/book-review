import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
	console.log(book);
	return (
		<div>
			<div className="card w-full border shadow-xl p-5">
				<figure className="max-w-[326px] bg-base-200 mx-auto md:px-10 lg:px-20 py-5">
					<img className="h-[230px]" src={book.image} alt="Shoes" />
				</figure>

				<div className="card-body">
					<div className="card-actions justify-start">
						{book.tags.map((tag) => (
							<div className="badge bg-green-50 text-green-500">
								{tag}
							</div>
						))}
					</div>
					<h2 className="card-title font-extrabold">{book.bookName}</h2>
					<p>By: {book.author}</p>
					<div className="flex justify-between items-center mt-8">
						<div>
							<p>{book.category}</p>
						</div>
						<div className="flex items-center gap-2">
							<p>{book.rating}</p>
							<FaRegStar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
