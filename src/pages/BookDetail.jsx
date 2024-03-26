import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetail = () => {
    const {id} = useParams()
    const intId = parseInt(id)
    const bookData = useLoaderData()
    const book = bookData.find((book)=>book.bookId ===intId)
    const notify = (key) => toast(`Already in the ${key} list`);

    function HandleButton(key,id){
		let data = localStorage.getItem(key);
		let BookId = [];
		if (data) {
			BookId = JSON.parse(data);
		}
        if(!BookId.find((idx)=> idx===id)){
            BookId.push(id);
		    localStorage.setItem(key, JSON.stringify(BookId));
        }
        else{
            notify(key)
        }
		
	}

    return (
		<div className="flex flex-col lg:flex-row gap-12 ">
			<div className="p-10 bg-gray-200 rounded-xl">
				<img className="mx-auto" width={425} src={book.image} alt="" />
			</div>
			<div>
				<h1 className="text-2xl font-bold pb-4">{book.bookName}</h1>
				<p className="pb-4">By: {book.author}</p>
				<hr className="pb-4" />
				<p className="pb-4">{book.category}</p>
				<hr className="pb-4" />
				<p className="pb-4">
					<strong>Review:</strong>
					{book.review}
				</p>
				<div className="flex pb-4 gap-4">
					<strong>Tag:</strong>
					<div className="card-actions justify-start">
						{book.tags.map((tag, id) => (
							<div
								key={id}
								className="badge bg-green-50 text-green-500"
							>
								{tag}
							</div>
						))}
					</div>
				</div>
				<hr />
				<div className="overflow-x-auto m-0 px-0">
					<table className="table">
						<tbody>
							<tr className="">
								<td>Number of Pages</td>
								<td>
									<strong>{book.totalPages}</strong>
								</td>
							</tr>
							<tr>
								<td>Publisher:</td>
								<td>
									<strong>{book.publisher}</strong>
								</td>
							</tr>
							<tr>
								<td>Year of Publishing:</td>
								<td>
									<strong>{book.yearOfPublishing}</strong>
								</td>
							</tr>
							<tr>
								<td>Rating:</td>
								<td>
									<strong>{book.rating}</strong>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="flex gap-4">
					<button
						onClick={() => HandleButton("read", intId)}
						className="btn bg-white  border border-gray-300 text-black"
					>
						Read
					</button>
					<button
						onClick={() => HandleButton("wish", intId)}
						className="btn bg-sky-300  text-white"
					>
						Wishlist
					</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default BookDetail;