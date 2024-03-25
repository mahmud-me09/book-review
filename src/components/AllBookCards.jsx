import React from 'react';
import BookCard from './BookCard';

const AllBookCards = ({books}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                books.map((book,idx) => <BookCard key={idx} book={book}></BookCard>)
            }
        </div>
    );
};

export default AllBookCards;