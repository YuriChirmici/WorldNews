import styles from "./Nav.module.scss";
import cloudIcon from "../../../assets/images/icons/cloud.svg";
import searchIcon from "../../../assets/images/icons/search.svg";

const Nav = (props) => {
	//list of nav links with setted active
	const links = props.links.names.map( (link, i, arr) => (
		<div 
			className={styles.nav__link + (
				(props.links.active === i) ? " " + styles.active: "")} 
			key={i}
		>
			{link}
		</div>)
	)
	return (
		<nav className={styles.nav}>
			<div className="container">
				<div className={styles.nav__inner}>
					<div className={styles.nav__links}>
						{links}
					</div>
					<div className={styles.nav__info}>
						<div className={styles.nav__weather}>
							<img src={cloudIcon} alt="cloud" />
							{props.temperature}, {props.city}
						</div>
						<div className={styles.nav__search}>
							<img src={searchIcon} alt="search" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav;