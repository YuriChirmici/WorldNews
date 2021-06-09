import {createStore, combineReducers} from "redux";
import newsReducer from "./news-reducer";
import navReducer from "./nav-reducer";

const reducers = combineReducers({
	news: newsReducer,
	nav: navReducer,
})

const store = createStore(reducers);

export default store;