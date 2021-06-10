import News from "./News";
import {connect} from "react-redux";
import {getNews, getTopics} from "../../../redux/news-selectors";

const mapStateToProps = (state) => {
	return {
		news: getNews(state),
		topics: getTopics(state),
	}
}
export default connect(mapStateToProps, {})(News);