export default function Card({title, poster, type}){
	return(
		<div className="Card d-flex m-3">
			<img src={poster} alt={title} height="100%"/>
			<div className="px-3 d-flex flex-column justify-content-center">
				<h5 className="font-weight-bold" style={{color: "#353535"}}>{title}</h5>
				<small className="font-weight-bold"style={{color: "rgba(0,0,0,0.5)"}}>{type[0].toUpperCase().concat(type.slice(1))}</small>
			</div>
			<style jsx>{`
				.Card{
					width: 400px;
					height: 100px;
					border: none;
					overflow: hidden;
					border-radius: 4px;
					background: #F6F6F6;
					box-shadow: 0 20px 40px rgba(0,0,0,0.3);
				}
			`}</style>
		</div>
	)
}