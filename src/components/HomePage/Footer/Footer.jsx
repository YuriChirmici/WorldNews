import styles from "./Footer.module.scss";
import facebookIcon from "../../../assets/images/icons/facebook.svg";
import twitterIcon from "../../../assets/images/icons/twitter.svg";
import instagramIcon from "../../../assets/images/icons/instagram.svg";

import { Link, animateScroll as scroll } from "react-scroll";


const Footer = (props) => {
	const links = props.links.names.map( (link, i, arr) => (
		<Link 
			className={styles.nav__link} 
			key={i}
			to={link.split(" ").join("_").toLowerCase()}
			spy={true}
			smooth={true}
			offset={-130}
			duration={500}
		>
			{link}
		</Link>)
	)

	return (
		<header className={styles.footer} id="footer">
			<div className="container">
				<div className={styles.footer__inner}>
					<div className={styles.footer__left}>

						<div className={styles.footer__logo}>
						L
						</div>

						<div className={styles.nav}>
							<div className={styles.nav__links}>
									{links.slice(0, Math.floor(links.length / 2))}
							</div>
							<div className={styles.nav__links}>
									{links.slice(Math.floor(links.length / 2))}
							</div>
						</div>

					</div>

					<div className={styles.footer__right}>

						<div className={styles.footer__copyright}>
							Project © 2020
						</div>

						<div className={styles.social}>
							<a className={styles.social__link} href="http://facebook.com" 
								target="_blank"
								rel="noopener noreferrer"
							> 
								<img src={facebookIcon} alt="facebook" /> 
							</a>
							<a className={styles.social__link} href="http://twitter.com" 
							target="_blank"
							rel="noopener noreferrer"
							>
								<img className={styles.square} src={twitterIcon} alt="twitter" /> 
							</a>
							<a className={styles.social__link} href="http://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							>
								<img className={styles.square} src={instagramIcon} alt="instagram" />
							</a>
						</div>

					</div>
				</div>
			</div>
		</header>
	)
}

export default Footer;