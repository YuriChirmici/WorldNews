import styles from "./Intro.module.scss";
import asideImage from "../../../assets/images/intro-aside.jpg";
import rightArrowIcon from "../../../assets/images/icons/arrow-right.svg";
import leftArrowIcon from "../../../assets/images/icons/arrow-left.svg";
import starIcon from "../../../assets/images/icons/star.svg";
import featuredPhoto from "../../../assets/images/news/32.jpg";

const LatestNews = (props) => {
	return (
		<div className={styles.latestNews__item}>
			<div className={styles.latestNews__info}>
				<a href="#">
					<h4 className={styles.latestNews__title}>
						{props.news.title} 
					</h4>
				</a>
				<span> {props.news.author} </span> - 
				<time> {props.news.date} </time>
			</div>
		</div>
	)
}

const FooterNews = (props) => {
	return (
		<div className={styles.breaking__item}>
			<div className={styles.breaking__news}>
				<a href="#">
					<h4 className={styles.breaking__title}>
						{props.news.title} 
					</h4>
				</a>
				<span> {props.news.author} </span> - 
				<time> {props.news.date} </time>
			</div>
		</div>
	)
}

const Intro = (props) => {
	//last 5 news
	const latestNewsList = props.news.slice(props.news.length - 5).reverse();
	const latestNews = latestNewsList.map( news => {
		return <LatestNews key={news.id} news={news} />
	})

	//feature news
	const featuredNews = props.news.filter( news => news.id === props.featured)[0];

	//footer news
	const footerNewsList = props.news.filter( news => props.introFooterNews.includes(news.id)).reverse();

	const footerNews = footerNewsList.map( news => {
		return <FooterNews key={news.id} news={news} />
	})

	return (
		<div className={styles.intro}>
			<div className="container">
				<div className={styles.intro__inner}>
					<div className={styles.intro__main}>
						<div className={styles.featured}>

							<div className={styles.featured__image}>
								<div className={styles.featured__photo}>
									<img src={featuredPhoto} alt="intro" />
									<div className={styles.featured__featured}>
										<img src={starIcon} alt="star" />
										<span>FEATURED</span>	
									</div>
								</div>
							</div>

							<div className={styles.featured__title}>
								<a href="#">
									<h4> {featuredNews.title} </h4>
								</a>
							</div>

							<div className={styles.featured__text}>
								{featuredNews.text}
							</div>

							<div className={styles.featured__button}>
								<a href="#">Read more</a>
							</div>
						</div>

						<div className={styles.latestNews}>
							<h4 className={styles.latestNews__header}>LATEST NEWS</h4>
							<div className={styles.latestNews__list}>
								{latestNews}
							</div>
							<a href="#" className={styles.latestNews__allNews}>
								<span> See all latest news </span>
								<img src={rightArrowIcon} alt="arrow-right" />
							</a>	
						</div>
					</div> { /* /.intro__main */ }

					<div className={styles.breaking}>
						<h4 className={styles.breaking__header}>
							BREAKING NEWS
						</h4>
						<div className={styles.breaking__main}>
							{footerNews}
						</div>
						<div className={styles.breaking__aside}>
							<div className={styles.breaking__breaking}>
								<img src={leftArrowIcon} alt="arrow-left" />
								<span>BREAKING</span>	
							</div>
							<img src={asideImage} alt="aside" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro;