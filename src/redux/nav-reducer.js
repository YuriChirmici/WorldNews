const initialState = {
	city: "Sofia",
	temperature: 28,
	links: {
		names: [
			"Intro",
			"News",
			"Sex", 
			"Technology",
			"Sport",
			"Special Features",
		],
		active: 0,
	}
}

const navReducer = (state = initialState, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default navReducer;