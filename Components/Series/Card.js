import Link from 'next/link';
import Head from 'next/head';

export default function Card({serie, type, id}){
	return(
		<>
			<Head>
			  <title>Gabriel Valero</title>
			</Head>
			<div className="card m-3">
				<img className="card-img-top" src={serie.posterImage.small} alt={serie.canonicalTitle} width="100%"/>
				<div className="back-text">
					<p>{serie.synopsis.slice(0,80)} ...</p>
					<Link href={`/${type}?id=${id}`} ><a className="back-link btn mt-auto">Ver mas</a></Link>
				</div>
				<div className="card-text">
					<p className="text-title">{serie.canonicalTitle.length > 20 ? `${serie.canonicalTitle.slice(0,17)}...` : serie.canonicalTitle}</p>
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
				.card>.back-text{
					width: 100%;
					height: 90%;
					top:0;
					right:0;
					position: absolute;
					background:rgba(48,49,63,0.9);
					transition-duration: 0.5s;
					opacity: 0;
					display: flex;
					align-items: center;
					flex-direction: column;
				}
				.card>.back-text:hover{
					opacity: 1;
					transition-duration: 0.3s;
				}
				.back-text p{
					color: white;
					padding: 15px;
					font-weight: 500;
					padding-bottom:0;
					margin: 0;
				}
				.back-text a{
					width: 80%;
					color: white;
					margin-bottom: 30px;
					font-weight: 600;
					border: 2px solid #38F341;
				}
				.back-text a:hover{
					background: #38F341;
					box-shadow: 0 0 10px #38F341; 
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
					padding:0 10px;
					padding-bottom: 10px;
					margin: 0;
					text-align: center;
					color: white;
					font-weight: bold;
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
				@media(max-width: 650px){
					.card{
						width: 150px;
					}
					.btn{
						padding: 0;
						margin-bottom: 30px;
					}
					.back-text p{
						font-size: 15px;
					}
					.card-text p{
						padding:0 15px;
						padding-bottom: 10px;
						font-weight: 600;
						font-size: 10px;
					}
				}
			`}</style>
		</>
	)
}
