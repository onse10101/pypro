var portfolioCollection = [

	{
		"name": "Py1",
		"info": "Front-end: Javascript, CSS and HTML",
		"url": ""
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