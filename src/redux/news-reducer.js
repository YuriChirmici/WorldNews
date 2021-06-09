const initialState = {
	news: [
		{
			id: 28,
			title: "This whitening cream can ruin your skin, make you blind, NAFDAC, others warn",
			text: "",
			author: "Yusuff Moshood",
			date: "Dec 3, 2020",
		},
		{
			id: 29,
			title: "This whitening cream can ruin your skin, make you blind, NAFDAC, others warn",
			text: "",
			author: "Yusuff Moshood",
			date: "Dec 3, 2020",
		},
		{
			id: 30,
			title: "WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa",
			text: "",
			author: "Yusuff Moshood",
			date: "Dec 3, 2020",
		},
		{
			id: 31,
			title: "WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa",
			text: "",
			author: "Yusuff Moshood",
			date: "Dec 3, 2020",
		},
		{
			id: 32,
			title: "Malaria vaccine to be tested on 4,800  children — UK scientist",
			text: "Accusamus dolores quia dolorem quidem a suscipit molestias expedita et. Est cum molestiae. Eligendi dolores sint quia velit velit qui odio ab.",
			author: "Adebayo Folorunsho-Francis",
			date: "Dec 7, 2020",
		},
		{
			id: 33,
			title: "TQuaerat maxime placeat laboriosam odit ut animi aut laudantium.",
			text: "",
			author: "Adebayo Folorunsho-Francis",
			date: "Dec 7, 2020",
		},
		{
			id: 34,
			title: "Tempore sed necessitatibus quae fugit consequatur qui laboriosam est eum.",
			text: "",
			author: "Adebayo Folorunsho-Francis",
			date: "Dec 7, 2020",
		},
		{
			id: 35,
			title: "Et dignissimos et autem voluptas et exercitationem eveniet eos voluptas.",
			text: "",
			author: "Tessy Igomu",
			date: "Dec 7, 2020",
		},
		{
			id: 36,
			title: "Repellendus vel quisquam rerum iusto id quibusdam et est labore.",
			text: "",
			author: "Adebayo Folorunsho-Francis",
			date: "Dec 7, 2020",
		}, 
		{
			id: 37,
			title: "Doloremque ullam sed doloribus ut asperiores et sed in ut.",
			text: "",
			author: "Adebayo Folorunsho-Francis",
			date: "Dec 7, 2020",
		},	
	],
	featured: 32,
	introFooterNews: [28, 29, 30, 31]
}

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default newsReducer;