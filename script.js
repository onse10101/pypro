var portfolioCollection = [

	{
		"name": "Movies-dataset-2021-2023-analysis",
		"info": "top-popular-movies-dataset-2021-2023-analysis using Pandas, matplotlib and tabulate",
		"url": "https://github.com/onse10101/top-popular-movies-dataset-2021-2023-analysis/blob/main/top-popular-movies-dataset-2021-2023-analysis.ipynb"
	},

	{
		"name": "Py2",
		"info": "Front-end: Javascript, CSS and HTML",
		"url": ""
	},
	{
		"name": "PPy3",
		"info": "Front-end: Javascript, CSS and HTML",
		"url": ""
	}

	
];


var vmPortfolio = new Vue({
	el: "#vue-portfolio",
	data: {
		portfolios: portfolioCollection
	}
});