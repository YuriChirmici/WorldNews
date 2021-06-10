import Footer from "./Footer";
import {connect} from "react-redux";
import {getLinks} from "../../../redux/nav-selectors";

const mapStateToProps = (state) => {
	return {
		links: getLinks(state),
	}
}
export default connect(mapStateToProps, {})(Footer);