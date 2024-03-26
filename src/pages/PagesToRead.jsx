import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

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
		<div>
			<ResponsiveContainer width="100%" height={600}>
				<BarChart data={readBooks}>
					<XAxis dataKey="bookName" />
					<YAxis dataKey="totalPages" />
					<Bar
						dataKey="totalPages"
						fill="#8884d8"
						shape={<TriangleBar />}
						label={renderCustomBarLabel}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default PagesToRead;
