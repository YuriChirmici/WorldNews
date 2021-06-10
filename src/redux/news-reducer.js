//import of all news images
const imagesBase = require.context("../assets/images/news/", 
	true, /\.jpg/);
const images = {};

imagesBase.keys().forEach(key => {
	// "./32.jpg" => 32
  let imgId = +key.split(".")[1].split("/")[1];
	images[imgId] = imagesBase(key).default;
})


const initialState = {
	allNews: [
		{
			id: 8,
			title: "Minus est dolore ad consequuntur.",
			text: "",
			author: "",
			date: "Dec 2, 2020",
		},
		{
			id: 9,
			title: "Officia soluta nulla cumque eos aut.",
			text: "",
			author: "",
			date: "Dec 1, 2020",
		},
		{
			id: 10,
			title: "Enim voluptatem architecto aut.",
			text: "",
			author: "",
			date: "Dec 2, 2020",
		},
		{
			id: 11,
			title: "Illo voluptatem autem veritatis doloribus facilis.",
			text: "",
			author: "",
			date: "Oct 25, 2020",
		},
		{
			id: 12,
			title: "Qui corrupti quo dolor id excepturi optio quis.",
			text: "",
			author: "",
			date: "Oct 25, 2020",
		},
		{
			id: 13,
			title: "Laborum facilis libero.",
			text: "",
			author: "",
			date: "Oct 25, 2020",
		},
		{
			id: 14,
			title: "Eligendi ut ut.",
			text: "",
			author: "",
			date: "Oct 25, 2020",
		},
		{
			id: 15,
			title: "Molestiae optio eveniet numquam optio molestias dolor ut.",
			text: "",
			author: "",
			date: "Oct 18, 2020",
		},
		{
			id: 16,
			title: "Cupiditate sunt necessitatibus neque placeat.",
			text: "",
			author: "",
			date: "Oct 25, 2020",
		},
		{
			id: 17,
			title: "Laborum nemo est ea eligendi aut ut ut expedita.",
			text: "",
			author: "",
			date: "Jan 6, 2020",
		},
		{
			id: 18,
			title: "Et veniam dolorem sed omnis quidem.",
			text: "",
			author: "",
			date: "Jan 8, 2020",
		},
		{
			id: 19,
			title: "Atque necessitatibus ipsa molestiae aspernatur et recusandae.",
			text: "Ab soluta et tempora laborum et rem. Autem beatae cupiditate consequatur aliquid aut inventore et totam quam. Quo voluptatum quia. Non dolore laborum inventore vel quia est aut deserunt.",
			author: "Lara Adejoro",
			date: "Jan 14, 2020",
		},
		{
			id: 20,
			title: "Non dolorem corporis ducimus alias molestiae vero beatae amet.",
			text: "",
			author: "",
			date: "Dec 2, 2020",
		},
		{
			id: 21,
			title: "Voluptatibus eius autem veritatis est architecto aperiam praesentium.",
			text: "",
			author: "",
			date: "Dec 2, 2020",
		},
		{
			id: 22,
			title: "Magnam quos enim aut ut ex veniam aut commodi sit.",
			text: "",
			author: "",
			date: "Dec 2, 2020",
		},
		{
			id: 23,
			title: "At doloremque id voluptatum dignissimos unde est voluptatem.",
			text: "Sit voluptatum suscipit sunt sed ut ratione alias. Dolorem culpa alias quos. Aliquid iusto laboriosam alias. Optio ullam molestiae et non repellendus sit iste.",
			author: "Adebayo Folorunsho-Francis",
			date: "Dec 3, 2020",
		},
		{
			id: 24,
			title: "Adipisci distinctio quisquam id non vero vel molestiae delectus debitis.",
			text: "",
			author: "",
			date: "Nov 9, 2020",
		},
		{
			id: 25,
			title: "Asperiores sapiente alias voluptas quasi ratione quae dolorem.",
			text: "",
			author: "",
			date: "Dec 2, 2020",
		},
		{
			id: 26,
			title: "Non ut ut nobis.",
			text: "",
			author: "",
			date: "Nov 9, 2020",
		},
		{
			id: 27,
			title: "Et ipsam deleniti mollitia iure et incidunt assumenda expedita.",
			text: "",
			author: "",
			date: "Dec 2, 2020",
		},
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
	breaking: [28, 29, 30, 31],
	topics: {
		news: {
			small: [24, 25, 26, 27],
			middle: [],
			big: [23],
		}, 
		sex: {
			small: [],
			middle: [20, 21, 22],
			big: [],
		},
		technology: {
			small: [15, 16, 17, 18],
			middle: [],
			big: [19],
		},
		sport: {
			small: [11, 12, 13, 14],
			middle: [],
			big: [],
		},
		special: {
			small: [],
			middle: [8, 9, 10],
			big: [],
		}, 
	}
}

initialState.allNews.forEach(news => news.image = images[news.id]);

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default newsReducer;