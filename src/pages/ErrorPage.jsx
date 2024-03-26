import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
		<div className="flex flex-col justify-center min-h-screen place-items-center">
			<h1 className="text-3xl font-bold">404: route not found</h1>
			<Link to="/">
				<button className="btn btn-ghost">Go Back</button>
			</Link>
		</div>
	);
};

export default ErrorPage;