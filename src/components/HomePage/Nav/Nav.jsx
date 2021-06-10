import styles from "./Nav.module.scss";
import cloudIcon from "../../../assets/images/icons/cloud.svg";
import searchIcon from "../../../assets/images/icons/search.svg";
import menuIcon from "../../../assets/images/icons/menu.svg";
import closeIcon from "../../../assets/images/icons/close.svg";

import {useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";


const Nav = (props) => {
	const [activeBurgerClass, setActiveBurgerClass] = useState(true);
	const [activeNavClass, setActiveNavClass] = useState(false);

	const burgerClick = () => {
		setActiveBurgerClass(false);
		setActiveNavClass(true);
	}	

	const navCloseClick = () => {
		setActiveBurgerClass(true);
		setActiveNavClass(false);
	}	

	//list of nav links with setted active
	//to path "Special Features" => "special_features"
	const links = props.links.names.map( (link, i, arr) => (
		<Link 
			className={styles.nav__link} 
			key={i}
			to={link.split(" ").join("_").toLowerCase()}
			onClick={navCloseClick}
			activeClass={styles.active}
			spy={true}
			smooth={true}
			offset={-130}
			duration={500}
		>
			{link}
		</Link>)
	)

	return (
		<nav className={styles.nav}>
			<div className="container">
				<div className={styles.nav__inner}>
					<div 
						className={styles.nav__links + " " + (			
							activeNavClass ? styles.active : "")} 
					>
						<div className={styles.close} onClick={navCloseClick}>
							<img src={closeIcon} alt="menu" />
						</div>
						{links}
					</div>
					<div className={styles.burger + " " + (			
						activeBurgerClass ? styles.active : "")}
						onClick={burgerClick}
					>
						<img src={menuIcon} alt="menu" />
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