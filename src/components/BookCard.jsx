import { FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
    const navigate = useNavigate()
    function handleClick(selectedBook) {
        navigate(`/${selectedBook.bookId}`)
	}
    
	return (
		<Link onClick={()=>handleClick(book)} to = {`/${book.bookId}`}>
			<div className="card w-full border shadow-xl p-5">
				<figure className="max-w-[326px] bg-base-200 mx-auto md:px-10 lg:px-20 py-5">
					<img className="h-[230px]" src={book.image} alt="Shoes" />
				</figure>

				<div className="card-body px-2">
					<div className="card-actions justify-start">
						{book.tags.map((tag, id) => (
							<div key={id} className="badge bg-green-50 text-green-500">
								{tag}
							</div>
						))}
					</div>
					<h2 className="card-title font-semibold lg:font-extrabold">{book.bookName}</h2>
					<p>By: {book.author}</p>
					<div className="flex flex-col lg:flex-row justify-start lg:justify-between mt-3">
						<div>
							<p>{book.category}</p>
						</div>
						<div className="flex justify-start items-center gap-2">
							{book.rating}
							<FaRegStar />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BookCard;
