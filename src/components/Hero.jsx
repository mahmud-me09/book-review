import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/heroImage.svg'

const Hero = () => {
    return (
		<div>
			<div className="hero mt-10 bg-base-200 rounded-2xl">
				<div className="hero-content flex-col lg:flex-row-reverse gap-20">
					<img
						src={heroImage}
						className="w-36 lg:w-fit rounded-lg py-10 shadow-2xl"
					/>
					<div>
						<h1 className="text-lg lg:text-5xl leading-relaxed font-bold">
							Books to freshen up <br /> your bookshelf
						</h1>

						<button className="btn bg-green-500 text-white mt-5">
							<Link to="/listed-books">View The List</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;