export default function Card({anime}){
	return(
		<>
			<div className="card m-3" key={anime.id}>
				<img className="card-img-top" src={anime.posterImage.small} alt={anime.canonicalTitle} width="100%"/>
				<div className="card-text">
					<p className="text-title">{anime.canonicalTitle.length > 13 ? `${anime.canonicalTitle.slice(0,13)}...` : anime.canonicalTitle}</p>
				</div>
			</div>


			<style jsx>{`
				.card{
					width: 200px;
					overflow: hidden;
					background: #30273F;
					border: none;
					border-radius: 15px;
					position: relative;
				}
				.card-text{
					height: 100%;
					background: #30273F;
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					z-index:2;
				}
				.card-text p{
					padding:0 30px;
					padding-bottom: 10px;
					margin: 0;
					text-align: center;
					color: white;
					font-weight: bold
				}
				.card-text:before{
					content: '';
					position:absolute;
					top:0;
					right: 0;
					z-index:-1;
					width: 120%;
					height: 30px;
					background: #30273F;
					transform: rotate(5deg) translateY(-50%);
				}
			`}</style>
		</>
	)
}