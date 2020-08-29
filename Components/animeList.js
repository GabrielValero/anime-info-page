import Card from './Card';

export default function AnimeList({animes}){

	return(
	 	<div className="d-flex justify-content-center flex-wrap">
	 		{animes.map(anime => (
	 			<Card anime={anime.attributes} key={anime.id}/>
	 			)
	 		)}
	 	</div>
	 )
}
