import Head from 'next/head';
import Navbar from '../Components/Navbar';
import Header from '../Components/headerSeries';
import Episodes from '../Components/Episodes';

export default function Series({manga, episodes}){
	const attributes = manga.attributes;

	return (
		<div>
			<Head>
				<title>{attributes.canonicalTitle}</title>
			</Head>
			<Navbar/>
			<Header attributes={attributes}/>
			<div className="d-flex align-items-center analytics">
				<div>
					<div className="puntuacion graphics">
						<h4>Puntuacion</h4>
						<div>
							<svg>
								<circle cx="70" cy="70" r="60"></circle>
							</svg>
							<p>{attributes.averageRating}</p>
						</div>
					</div>
					<div className="graphics m-3">
						<h4>Visto</h4>
						
							<p>{attributes.userCount}</p>
					</div>
					<div className="graphics m-3">
						<h4>Favoritos</h4>
						<p>{attributes.favoritesCount}</p>
					</div>
					<div className="graphics m-3">
						<h4>Popularidad</h4>
						<p>{attributes.popularityRank}</p>
					</div>
					<div className="graphics m-3">
						<h4>Rank</h4>
						<p>{attributes.ratingRank}</p>
					</div>
				</div>
			</div>
			<div className="datos d-flex justify-content-center mt-5 mx-xl-5">
				<div className="col-xl-3 details">
					<iframe src={`https://www.youtube.com/embed/${manga.attributes.youtubeVideoId}`} width="100%" height="200px"></iframe>
					<div className="detalle">
						<h2>Detalle</h2>
						<h4>Ingles</h4>
						<p>{manga.attributes.titles.en}</p>
						<h4>Romaji</h4>
						<p>{manga.attributes.titles.en_jp}</p>
						<h4>Japones</h4>
						<p>{manga.attributes.titles.ja_jp}</p>
						<h4>Status</h4>
						<p className="m-0">{manga.attributes.status}</p>
					</div>
				</div>
				<div className="col-lg-8 d-flex justify-content-center flex-wrap">
					<Episodes episodes={episodes} title={manga.attributes.canonicalTitle}/>
				</div>
			</div>
			<style jsx>{`
				h1,h2,p{
					color: #202020;
				}
				.analytics{
					margin-top: 30px;
					justify-content: flex-end;
				}
				.analytics>div{
					width: 60%;
					margin-right: 10px;
					padding: 20px;
					display: flex;
					justify-content: space-around;
					align-items: center;
					flex-wrap: wrap;
					border-radius: 10px;
					background: white;
				}
				.graphics{
					height: 100%;
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				.puntuacion div{
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
				}
				.puntuacion h4{
					margin: 0;
				}
				.puntuacion p{
					position: absolute;
				}
				

				svg{
					width: 150px;
					height: 150px;
				}
				svg circle{
					width: 150px;
					height: 150px;
					fill: none;
					stroke-width: 10;
					stroke: #0AA9A9;
					transform: translate(5px,5px);
					stroke-dasharray: 377;
					stroke-dashoffset: ${377 - (377 * attributes.averageRating) / 100};
				}

				iframe{
					border: none;
					border-radius: 10px;
				}
				.detalle{
					width: 100%;
					background: white;
					border-radius: 10px 10px 40px 10px;
					padding: 20px;
					position:relative;

				}
				.detalle h2{
					font-weight: 700;
				}
				iframe, .detalle {
					margin: 10px;
				}
				@media(max-width: 992px){
					.analytics{
						margin-top: 170px;
						justify-content: center;
					}
					.analytics>div{
						width: 80%;
						margin: 0;
						
					}
					.details{
						display: flex;
						justify-content: space-around;
						align-items: center;
					}
					.datos{
						flex-direction: column;
					}
					.detalle{
						border-radius: 10px;
					}
				}
				
				@media(max-width: 765px){
					.analytics{
						margin-top: 400px;
					}
				}
				@media(max-width: 649px){
					.analytics{
						margin-top: 500px;
					}
					.analytics>div{
						width: 100%;
						border: none;
					}
					.details{
						flex-direction: column;
						justify-content: center;
					}
					iframe{
						width: 70%;
						height: 50vw;
					}
					.detalle{
						width: 50%;
					}
				}
				@media(max-width: 500px){
					.analytics{
						margin-top: 600px;
					}
					iframe{
						width: 100%;;
						height: 70vw;
					}
					.detalle{
						width: 80%;
					}
				}
				@media(max-width: 400px){
					.analytics{
						margin-top: 700px;
					}
					.detalle{
						width: 100%;
						border: none;
					}
				}
			`}</style>
		</div>
	)
}
Series.getInitialProps = async({query})=>{
	const id = query.id;

	const manga = await fetch(`https://kitsu.io/api/edge/manga/${id}`,{
	    headers:{
	      "Accept": "application/vnd.api+json",
	      "Content-Type": "application/vnd.api+json"
	    }
	  })
	.then(res=>res.json())
	.then(response=>{
		return response.data;
	})
	const episodes = await fetch(manga.relationships.episodes.links.related,{
	    headers:{
	      "Accept": "application/vnd.api+json",
	      "Content-Type": "application/vnd.api+json"
	    }
	})
	.then(res=>res.json())
	.then(response=>{
		return response.data
	})
	
	return {manga, episodes}
}