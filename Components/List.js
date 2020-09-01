import Card from './Card';

export default function List({animes}){

	return(
	 	<div className="d-flex justify-content-center flex-wrap">
	 		{animes.map(anime => (
	 			<Card anime={anime.attributes} type={anime.type} id={anime.id} key={anime.id}/>
	 			)
	 		)}
	 	</div>
	 )
}
