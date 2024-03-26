import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {id} = useParams()
    const intId = parseInt(id)
    const bookData = useLoaderData()
    const book = bookData[intId-1]
    let readBookId =[]

    function HandleReadButton(id){
        let data = localStorage.getItem('read')
        const dataIds = JSON.parse(data)
        readBookId.push(id)
        localStorage.setItem('read',JSON.stringify(readBookId))
    }

    function setLocalData(key,id){
        readBook = getLocalData(key)
        const readBookIds = [...readBook, id];
         
        readBookStringified = JSON.stringify(readBookIds)
        localStorage.setItem(key,readBookStringified)
    }

    function getLocalData(key){ //key = read, wishlist
        const data = JSON.parse(localStorage.getItem(key))
        return data
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
						onClick={() => HandleReadButton(intId)}
						className="btn bg-white  border border-gray-300 text-black"
					>
						Read
					</button>
					<button className="btn bg-sky-300  text-white">
						Wishlist
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookDetail;