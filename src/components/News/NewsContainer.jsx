import News from "./News";
import {connect} from "react-redux";
import {getNews} from "../../redux/news-selectors";

const NewsContainer = (props) => {
	//transforms ":12" to 12
	const newsId = +props.match.params.news_id.split(":")[1];
	const news = props.news.filter( news => news.id === newsId)[0];
	
	return (
		<>
		{ (news) ?  
			<News news={news} /> : 
			"Page is not found"
		}
		</>
	)
}
const mapStateToProps = (state) => {
	return {
		news: getNews(state),
	}
}

export default connect(mapStateToProps, {})(NewsContainer);