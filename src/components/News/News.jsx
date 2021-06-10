import styles from "./News.module.scss";


const News = (props) => {
	return (
		<div className="container">
			<div>
				{ props.news.image ? 
					<img src={props.news.image} alt="news image" /> :
					'"some default image"'
				}
			</div>
			<div>
				{props.news.title}
			</div>
			<div>
				{props.news.text}
			</div>
			<div>
				{props.news.author}
			</div>
			<div>
				{props.news.date}
			</div>
		</div>
	)
}

export default News;