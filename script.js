var portfolioCollection = [

	{
		"name": "Movies-dataset-2021-2023-analysis",
		"info": "Top-popular-movies-dataset-2021-2023-analysis using Pandas, matplotlib and tabulate",
		"url": "https://github.com/onse10101/top-popular-movies-dataset-2021-2023-analysis/blob/main/top-popular-movies-dataset-2021-2023-analysis.ipynb"
	},

	{
		"name": "EDA on data science salaries",
		"info": "Detailed exploration data analysis on data science salaries ",
		"url": "https://github.com/onse10101/EDA-on-data-science-salaries/blob/main/detailed-eda-on-data-science-salaries.ipynb"
	}

	
];


var vmPortfolio = new Vue({
	el: "#vue-portfolio",
	data: {
		portfolios: portfolioCollection
	}
});