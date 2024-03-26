import React from "react";
import { useLoaderData } from "react-router-dom";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Cell,
	CartesianGrid,
} from "recharts";

const PagesToRead = () => {
	const books = useLoaderData();
	const readIds = JSON.parse(localStorage.getItem("read") || "[]");
	const readBooks = books.filter((book) => readIds.includes(book.bookId));

	const getPath = (x, y, width, height) =>
		`M${x},${y + height}
        C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
			x + width / 2
		}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
			y + height
		} ${x + width}, ${y + height}
        Z`;

	const TriangleBar = (props) => {
		const { fill, x, y, width, height } = props;
		return (
			<path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
		);
	};

	function getRandomColor() {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const readBooksWithColor = readBooks.map((book) => ({
		...book,
		color: getRandomColor(),
	}));

	const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
		return (
			<text
				x={x + width / 2}
				y={y}
				fill="#666"
				textAnchor="middle"
				dy={-6}
			>{`pages: ${value}`}</text>
		);
	};

	return (
		<div className="bg-gray-50 p-16 mb-16 mt-4">
			<ResponsiveContainer width="100%" height={600}>
				<BarChart data={readBooksWithColor}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="bookName" />
					<YAxis dataKey="totalPages" />
					<Bar
						dataKey="totalPages"
						shape={<TriangleBar />}
						label={renderCustomBarLabel}
					>
						{readBooksWithColor.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PagesToRead;
