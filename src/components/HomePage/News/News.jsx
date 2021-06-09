import styles from "./News.module.scss";
import rightArrowIcon from "../../../assets/images/icons/arrow-right.svg";

const SmallArticle = (props) => {
	return (
		<article className={styles.article + " " + styles["article--small"]}>
			<div className={styles.article__image}>
				<img src={props.image} alt="news image" />
			</div>
			<div className={styles.article__title}>
				<a href="#"> <h4>{props.news.title}</h4> </a>
			</div>
			<div className={styles.article__date}>
				<time>{props.news.date}</time>
			</div>
		</article>
	)
}

const MiddleArticle = (props) => {
	return (
		<article className={styles.article + " " + styles["article--middle"]}>
			<div className={styles.article__image}>
				<img src={props.image} alt="news image" />
			</div>
			<div className={styles.article__title}>
				<a href="#"> <h4>{props.news.title}</h4> </a>
			</div>
			<div className={styles.article__date}>
				<time>{props.news.date}</time>
			</div>
		</article>
	)
}

const BigArticle = (props) => {
	return (
		<article className={styles.article + " " + styles["article--big"]}>
			<div className={styles.article__image}>
				<img src={props.image} alt="news image" />
			</div>
			<div className={styles.article__title}>
				<a href="#">
					<h4>{props.news.title}</h4>
				</a>
			</div>
			<div className={styles.article__date}>
				<span>{props.news.author}</span> - 
				<time>{props.news.date}</time>
			</div>
			<div className={styles.article__text}>
				{props.news.text}
			</div>
			<div className={styles.article__full}>
				<a href="#">
					<span>Continue reading this article </span>
					<img src={rightArrowIcon} alt="arrow-right" />
				</a>
			</div>
		</article>
	)
}

const News = (props) => {
	//import of all news images
	const imagesBase = require.context("../../../assets/images/news/", 
		true, /\.jpg/);
	const images = {};

	imagesBase.keys().forEach(key => {
		// "./32.jpg" => 32
	  let imgId = +key.split(".")[1].split("/")[1];
		images[imgId] = imagesBase(key).default;
	 })


	//getting news by their topics
	const newsTopic = props.news.filter( news => (
		props.topics.news.small.includes(news.id))).reverse().map( news => {
			return <SmallArticle news={news} image={images[news.id]}/>
		})

	const newsBigTopic = props.news.filter( news => (
		props.topics.news.big.includes(news.id))).reverse().map( news => {
			return <BigArticle news={news} image={images[news.id]}/>
		})

	const sexTopic = props.news.filter( news => (
		props.topics.sex.middle.includes(news.id))).reverse().map( news => {
			return <MiddleArticle news={news} image={images[news.id]}/>
		})

	const technologyTopic = props.news.filter( news => (
		props.topics.technology.small.includes(news.id))).reverse().map( news => {
			return <SmallArticle news={news} image={images[news.id]}/>
		})
	const technologyBigTopic = props.news.filter( news => (
		props.topics.technology.big.includes(news.id))).reverse().map( news => {
			return <BigArticle news={news} image={images[news.id]}/>
		})

	const sportTopic = props.news.filter( news => (
		props.topics.sport.small.includes(news.id))).reverse().map( news => {
			return <SmallArticle news={news} image={images[news.id]}/>
		})

	const specialTopic = props.news.filter( news => (
		props.topics.special.middle.includes(news.id))).reverse().map( news => {
			return <MiddleArticle news={news} image={images[news.id]}/>
		})

	return (
		<>
			<div className="container">
				{ /*news section*/ }
				<section className={styles.section}>
					<div className={styles.section__title}>
						<h3>News</h3>
					</div>
					<div className={styles.section__items}>
						<div className={styles.["section__items-small"]}>
							{newsTopic}
						</div>
						<div className={styles.["section__items-big"]}>
							{newsBigTopic}
						</div>
					</div>
				</section>

				{ /*sex section*/ }
				<section className={styles.section}>
					<div className={styles.section__title}>
						<h3>SEX</h3>
					</div>
					<div className={styles.section__items}>
						{sexTopic}
					</div>
				</section>

				{ /*technology section*/ }
				<section className={styles.section}>
					<div className={styles.section__title}>
						<h3>Technology</h3>
					</div>
					<div className={styles.section__items}>
						<div className={styles.["section__items-big"]}>
								{technologyBigTopic}
						</div>
						<div className={styles.["section__items-small"]}>
							{technologyTopic}
						</div>
					</div>
				</section>

			</div>
			{ /*sport section*/ }
			<div className={styles.fullScreen}>
				<div className="container">
					<section className={styles.fullScreen__inner}>
						<div className={styles.fullScreen__title}>
							<h3>Sport</h3>
						</div>
						<div className={styles.fullScreen__items}>
							{sportTopic}
						</div>
					</section>
				</div>
			</div>

			{ /*special section*/ }
			<div className={styles.fullScreen + " " + styles["fullScreen--red"]}>
				<div className="container">
					<section className={styles.fullScreen__inner}>
						<div className={styles.fullScreen__title}>
							<h3>SPECIAL FEATURES</h3>
						</div>
						<div className={styles.fullScreen__items}>
							{specialTopic}
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default News;