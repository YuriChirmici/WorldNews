import Intro from "./Intro";
import {connect} from "react-redux";
import {getNews, getFeatured, getBreaking} from "../../../redux/news-selectors";

const mapStateToProps = (state) => {
	return {
		news: getNews(state),
		featured: getFeatured(state),
		breaking: getBreaking(state),
	}
}
export default connect(mapStateToProps, {})(Intro);
