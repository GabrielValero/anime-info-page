
export default function Episode({episode, title}){
	return (
		<div className="card">
			<img src={episode.attributes.thumbnail.original} alt={title} width="100%" />
			<div>Cap {episode.attributes.number}</div>
			<style jsx>{`
				.card{
					width: 300px;
					height: 100px;
					margin: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					border: none;
					border-radius: 10px; 
					position: relative;
					overflow: hidden;
					box-shadow: 10px 10px 20px rgba(0,0,0,0.25);
				}
				.card div{
					padding: 0 10px;
					position: absolute;
					background: rgba(46,46,46,0.8);
					bottom: 10px;
					right: 10px;
					border-radius: 30px;
					font-weight: bold;
					color: white;
				}
			`}</style>
		</div>
	)
}