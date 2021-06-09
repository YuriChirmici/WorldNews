const initialState = {
	city: "Sofia",
	temperature: 28,
	links: {
		names: [
			"News",
			"Sex", 
			"Special Features",
			"Technology",
			"Sport",
			"Analysis",
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