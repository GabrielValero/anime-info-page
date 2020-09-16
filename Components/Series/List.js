import Card from './Card';

export default function List({series}){

	return(
	 	<div className="d-flex justify-content-center flex-wrap">
	 		{series.map(serie => (
	 			<Card serie={serie.attributes} type={serie.type} id={serie.id} key={serie.attributes.canonicalTitle}/>
	 			)
	 		)}
	 	</div>
	 )
}
