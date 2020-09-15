import Card from './CardRow';

export default function Campo({data}){
	return (
		<div className="d-flex flex-wrap">
			{data.length>0 ? data.map(serie=>(
				<Card title={serie.name} poster={serie.poster} type={serie.type} key={serie.id}/>
			)) : null }
		</div>
	)
}