import Nav from "./Nav";
import {connect} from "react-redux";
import {getLinks, getCity, getTemperature} from "../../../redux/nav-selectors";

const mapStateToProps = (state) => {
	return {
		city: getCity(state),
		temperature: getTemperature(state),
		links: getLinks(state),
	}
}
export default connect(mapStateToProps, {})(Nav);