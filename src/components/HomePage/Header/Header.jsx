import styles from "./Header.module.scss";
import facebookIcon from "../../../assets/images/icons/facebook.svg";
import twitterIcon from "../../../assets/images/icons/twitter.svg";
import instagramIcon from "../../../assets/images/icons/instagram.svg";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__inner}>

					<div className={styles.header__logo}>
						My Logo
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
							<img src={twitterIcon} alt="twitter" /> 
						</a>
						<a className={styles.social__link} href="http://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						>
							<img src={instagramIcon} alt="instagram" />
						</a>
						<a className={styles.social__link + " " +
							styles["social__link--color-black"] + " " + 
							styles["social__link--width-wide"]
						} 
						href="#"
						>	
							Subscribe for more
						</a>
					</div>

				</div>
			</div>
		</header>
	)
}

export default Header;