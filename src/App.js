import './App.scss';
import HomePage from "./components/HomePage/HomePage";
import News from "./components/News/NewsContainer";
import {Route} from "react-router-dom";

function App() {
	return (
		<div>
			<Route 
				path="/"
				exact={true}
				render={() => <HomePage />}
			/>
			<Route path="/news/:news_id?" component={News} />
		</div>
	)
}

export default App;
