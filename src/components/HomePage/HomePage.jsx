import Header from "./Header/Header";
import Nav from "./Nav/NavContainer";
import Intro from "./Intro/IntroContainer";
import News from "./News/NewsContainer";
import Footer from "./Footer/FooterContainer";

const HomePage = (props) => {
	return (
		<>
			<Header />
			<Nav />
			<Intro />
			<News />
			<Footer />
		</>
	)
}

export default HomePage;