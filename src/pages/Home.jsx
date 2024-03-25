import React from 'react';
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router-dom';
import AllBookCards from '../components/AllBookCards';

const Home = () => {
    const books = useLoaderData()
    return (
		<div>
			<Hero></Hero>
			<h1 className="text-3xl font-semibold text-center mt-20 mb-10">
				Books
			</h1>
			<AllBookCards books={books}></AllBookCards>
		</div>
	);
};

export default Home;