import Header from "./Header/Header";
import Nav from "./Nav/NavContainer";
import Intro from "./Intro/IntroContainer";
import News from "./News/NewsContainer";

const HomePage = (props) => {
	return (
		<>
			<Header />
			<Nav />
			<Intro />
			<News />
		</>
	)
}

export default HomePage;