import styles from "./Header.module.scss";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import twitterIcon from "../../assets/images/icons/twitter.svg";
import instagramIcon from "../../assets/images/icons/instagram.svg";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__inner}>
					<div className={styles.header__logo}>
						My Logo
					</div>
					<div className={styles.social}>
						<div className={styles.social__link}> 
							<img src={facebookIcon} alt="fb" /> 
						</div>
						<div className={styles.social__link}>
							<img src={twitterIcon} alt="fb" /> 
						</div>
						<div className={styles.social__link}>
							<img src={instagramIcon} alt="fb" /> 
						</div>
						<div className={styles.social__link + " " +
							styles["social__link--color-black"] + " " + 
							styles["social__link--width-wide"]
						}
						>	
							Subscribe for more
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;