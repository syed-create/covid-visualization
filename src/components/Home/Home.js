import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const borderColor = [
	"rgba(255, 99, 132, 0.2)",
	"rgba(54, 162, 235, 0.2)",
	"rgba(255, 206, 86, 0.2)",
	"rgba(75, 192, 192, 0.2)",
	"rgba(153, 102, 255, 0.2)",
	"rgba(255, 159, 64, 0.2)",
];
const backgroundColor = [
	"rgba(255, 99, 132, 1)",
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
	"rgba(255, 159, 64, 1)",
];
const labels = [
	"Total Deaths",
	"Total Vaccinated",
	"Total Infected",
	"Total Cases",
	"Critical Cases",
	"Recovered Cases",
];
const datasets = [
	{
		label: "Afghanistan",
		data: [12, 19, 3, 5, 2, 22],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "Pakistan",
		data: [16, 19, 35, 51, 23, 6],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "India",
		data: [12, 14, 54, 15, 26, 20],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "Austrailia",
		data: [126, 1920, 355, 100, 2222, 1502],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "England",
		data: [123, 1923, 3324, 5324, 254, 222],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "USA",
		data: [1322, 129, 3453, 523, 3242, 250],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "Iran",
		data: [12234, 139, 323, 534, 234, 21],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "Iraq",
		data: [23412, 4319, 543, 545, 2234, 210],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "Russia",
		data: [1342, 2319, 543, 655, 762, 201],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "Germany",
		data: [1245, 1769, 653, 554, 254, 84],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
	{
		label: "Brazil",
		data: [1234, 1549, 356, 565, 245, 69],
		backgroundColor,
		borderColor,
		borderWidth: 1,
	},
];

const Home = props => {
	const [covidData, setCovidData] = useState({ labels, datasets: [] });

	useEffect(() => {
		onChangeHandler("Afghanistan");
	}, []);

	const onChangeHandler = value => {
		const results = datasets.filter(obj => {
			return obj.label.toLocaleLowerCase() === value.toLocaleLowerCase();
		});
		setCovidData({ ...covidData, datasets: results });
	};

	return (
		<Card className={classes.home}>
			<h1>Welcome back to covid 19 :)</h1>
			<select
				onChange={e => {
					onChangeHandler(e.target.value);
				}}
				className={classes.select}
			>
				{datasets.map(data => (
					<option value={data.label} key={data.label}>
						{data.label}
					</option>
				))}
			</select>
			{covidData && covidData.datasets.length > 0 && (
				<Pie data={covidData} />
			)}
		</Card>
	);
};

export default Home;
