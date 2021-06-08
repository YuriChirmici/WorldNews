import styles from "./Nav.module.scss";
import cloudIcon from "../../assets/images/icons/cloud.svg";
import searchIcon from "../../assets/images/icons/search.svg";

const Nav = (props) => {
	return (
		<nav className={styles.nav}>
			<div className="container">
				<div className={styles.nav__inner}>
					<div className={styles.nav__links}>
						<div className={styles.nav__link}>Sex</div>
						<div className={styles.nav__link}>Special Features</div>
						<div className={styles.nav__link}>Technology</div>
						<div className={styles.nav__link}>Sport</div>
						<div className={styles.nav__link}>Analysis</div>
					</div>
					<div className={styles.nav__info}>
						<div className={styles.nav__weather}>
							<img src={cloudIcon} alt="cloud" />
							28°, Sofia
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