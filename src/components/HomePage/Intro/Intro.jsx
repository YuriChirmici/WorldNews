import styles from "./Intro.module.scss";
import asideImage from "../../../assets/images/intro-aside.jpg";
import rightArrowIcon from "../../../assets/images/icons/arrow-right.svg";
import leftArrowIcon from "../../../assets/images/icons/arrow-left.svg";
import starIcon from "../../../assets/images/icons/star.svg";

import { NavLink } from "react-router-dom";

const LatestNews = (props) => {
	return (
		<div className={styles.latestNews__item}>
			<div className={styles.latestNews__info}>
				<NavLink to={`/news/:${props.news.id}?`}>
					<h4 className={styles.latestNews__title}>
						{props.news.title} 
					</h4>
				</NavLink>
				<span> {props.news.author} </span> - 
				<time> {props.news.date} </time>
			</div>
		</div>
	)
}

const FooterNews = (props) => {
	return (
		<div className={styles.breaking__item}>
			<NavLink to={`/news/:${props.news.id}?`}>
				<div className={styles.breaking__news}>
					
					<h4 className={styles.breaking__title}>
						{props.news.title} 
					</h4>
					
					<span> {props.news.author} </span> - 
					<time> {props.news.date} </time>
				</div>
			</NavLink>
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
	const footerNewsList = props.news.filter( news => props.breaking.includes(news.id)).reverse();

	const footerNews = footerNewsList.map( news => {
		return <FooterNews key={news.id} news={news} />
	})

	return (
		<div className={styles.intro} id="intro">
			<div className="container">
				<div className={styles.intro__inner}>
					<div className={styles.intro__main}>
						<div className={styles.featured}>
							<div className={styles.featured__image}>
								<NavLink to={`/news/:${featuredNews.id}?`}>
									<div className={styles.featured__photo}>
										<img src={featuredNews.image} alt="intro" />
										<div className={styles.featured__featured}>
											<img src={starIcon} alt="star" />
											<span>FEATURED</span>	
										</div>
									</div>
								</NavLink>
							</div>

							<div className={styles.featured__title}>
								<NavLink to={`/news/:${featuredNews.id}?`}>
									<h4> {featuredNews.title} </h4>
								</NavLink>
							</div>
							
							<div className={styles.featured__text}>
								{featuredNews.text}
							</div>

							<div className={styles.featured__button}>
								<NavLink to={`/news/:${featuredNews.id}?`}>
									Read more
								</NavLink>
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