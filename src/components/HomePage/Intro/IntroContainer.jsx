import Intro from "./Intro";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		news: state.news.news,
		featured: state.news.featured,
		introFooterNews: state.news.introFooterNews
	}
}
export default connect(mapStateToProps, {})(Intro);
