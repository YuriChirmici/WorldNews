import styles from "./News.module.scss";
import rightArrowIcon from "../../../assets/images/icons/arrow-right.svg";
import { NavLink } from "react-router-dom";

const SmallArticle = (props) => {
	//count == how much elements in row
	const width = (props.count == 4) ? "24%" : "47%";
	return (
		<article className={styles.article + " " + styles["article--small"]} style={{width}}>
			<NavLink to={`/news/:${props.news.id}?`}>
				<div className={styles.article__image}>
					<img src={props.image} alt="news image" />
				</div>
				<div className={styles.article__title}>
					<h4>{props.news.title}</h4> 
				</div>
				<div className={styles.article__date}>
					<time>{props.news.date}</time>
				</div>
			</NavLink>
		</article>
	)
}

const MiddleArticle = (props) => {
	return (
		<article className={styles.article + " " + styles["article--middle"]}>
			<NavLink to={`/news/:${props.news.id}?`}>
				<div className={styles.article__image}>
					<img src={props.image} alt="news image" />
				</div>
				<div className={styles.article__title}>
					<h4>{props.news.title}</h4> 
				</div>
				<div className={styles.article__date}>
					<time>{props.news.date}</time>
				</div>
			</NavLink>
		</article>
	)
}

const BigArticle = (props) => {
	return (
		<article className={styles.article + " " + styles["article--big"]}>
			<div className={styles.article__image}>
				<NavLink to={`/news/:${props.news.id}?`}>
					<img src={props.image} alt="news image" />
				</NavLink>
			</div>
			<div className={styles.article__title}>
				<NavLink to={`/news/:${props.news.id}?`}>
					<h4>{props.news.title}</h4> 
				</NavLink>
			</div>
			<div className={styles.article__date}>
				<span>{props.news.author}</span> - 
				<time>{props.news.date}</time>
			</div>
			<div className={styles.article__text}>
				{props.news.text}
			</div>
			<div className={styles.article__full}>
				<NavLink to={`/news/:${props.news.id}?`}>
					<span>Continue reading this article </span>
					<img src={rightArrowIcon} alt="arrow-right" />
				</NavLink>
			</div>
		</article>
	)
}

const News = (props) => {
	//getting news by their topics
	const newsTopic = props.news.filter( news => (
		props.topics.news.small.includes(news.id))).reverse().map( news => {
			return <SmallArticle key={news.id} news={news} image={news.image} count={2}/>
		})

	const newsBigTopic = props.news.filter( news => (
		props.topics.news.big.includes(news.id))).reverse().map( news => {
			return <BigArticle key={news.id} news={news} image={news.image}/>
		})

	const sexTopic = props.news.filter( news => (
		props.topics.sex.middle.includes(news.id))).reverse().map( news => {
			return <MiddleArticle key={news.id} news={news} image={news.image}/>
		})

	const technologyTopic = props.news.filter( news => (
		props.topics.technology.small.includes(news.id))).reverse().map( news => {
			return <SmallArticle key={news.id} news={news} image={news.image}/>
		})
	const technologyBigTopic = props.news.filter( news => (
		props.topics.technology.big.includes(news.id))).reverse().map( news => {
			return <BigArticle key={news.id} news={news} image={news.image}/>
		})

	const sportTopic = props.news.filter( news => (
		props.topics.sport.small.includes(news.id))).reverse().map( news => {
			return <SmallArticle key={news.id} news={news} image={news.image} count={4}/>
		})

	const specialTopic = props.news.filter( news => (
		props.topics.special.middle.includes(news.id))).reverse().map( news => {
			return <MiddleArticle key={news.id} news={news} image={news.image}/>
		})

	return (
		<>
			<div className="container">
				{ /*news section*/ }
				<section className={styles.section} id="news">
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
				<section className={styles.section} id="sex">
					<div className={styles.section__title}>
						<h3>SEX</h3>
					</div>
					<div className={styles.section__items}>
						<div className={styles["section__items-row"]}>
							{sexTopic}
						</div>
					</div>
				</section>

				{ /*technology section*/ }
				<section className={styles.section} id="technology">
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
			<div className={styles.fullScreen} id="sport">
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
			<div className={styles.fullScreen + " " + styles["fullScreen--red"]} id="special_features">
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