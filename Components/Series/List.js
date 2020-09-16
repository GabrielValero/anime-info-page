import Card from './Card';

export default function List({series, id}){

	return(
	 	<div className="d-flex justify-content-center flex-wrap">
	 		{series.map(serie => (
	 			<Card serie={serie.attributes} type={serie.type} id={serie.id} key={ id == "nombre" ? serie.attributes.slug : serie.id}/>
	 			)
	 		)}
	 	</div>
	 )
}
