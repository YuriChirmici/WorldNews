import News from "./News";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		news: state.news.allNews,
		topics: state.news.topics,
	}
}
export default connect(mapStateToProps, {})(News);