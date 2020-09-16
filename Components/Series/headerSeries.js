//Component
import Botons from './Botons';

export default function header({attributes, id, type}){
	return (
		<>
			<div className="header">
				<div className="background-image">
					<img src={attributes.posterImage.original} alt={`${attributes.canonicalTitle} img`} width="100%"/>
				</div>
				<div className="container">
					<div className="container-img">
						<img src={attributes.posterImage.original} alt={`${attributes.canonicalTitle} img`}/>
						<Botons attributes={attributes} id={id} type={type}/>
					</div>
					<div className="container-text">
						<div className="container-title"><h1 className="font-weight-bold">{attributes.canonicalTitle} </h1> {attributes.status == 'finished' ? <div className="ml-2 finished"></div> : <div className="ml-2 ongoing"></div>}</div>
						<br/>
						<p>{attributes.synopsis.slice(0,400)}...</p>
					</div>
				</div>
			</div>
			<style jsx>{`
				.header{
					width: 100%;
					height: 450px;
					position: relative;
					display: flex;
					align-items: center;
				}
				.background-image{
					height: 100%;
					width: 100%;
					position: absolute;
					overflow: hidden;
				}
				.background-image:after{
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 2;
					background: rgba(0,0,0,0.7);
				}
				.background-image>img{
					position: absolute;
					z-index: 0;
					filter: blur(50px);
				}
				.container{
					width: 100%;
					height: 100%;
					position: relative;
					z-index: 3;
					display: flex;
					transform: translateY(25%);
				}
				.container-img{
					min-width: 330px;
				}
				.container-img img{
					box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
				}
				.container-text{
					margin-left: 80px;
				}
				.container-title{
					display: flex;
					justify-content: center;
					 align-items: center;
				}
				.container-title h1{
					color: white;
				}
				.container-title div{
					width: 40px;
					height: 40px;
					background: #30273F;
					border-radius: 20px;
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.container-title div.ongoing:after{
					content: '';
					position: absolute;
					width: 15px;
					height: 15px;
					background: #00FF29;
					box-shadow: 0px 0px 20px #00FF29, 0px 0px 10px #00FF29;
					border-radius: 10px;
				}
				.container-title div.finished:after{
					content: '';
					position: absolute;
					width: 15px;
					height: 15px;
					background: #FF0000;
					box-shadow: 0px 0px 20px #FF0000, 0px 0px 10px #FF0000;
					border-radius: 10px;
				}
				.container-text p{
					color: white;
					width: 80%;
					font-size: 17px;
				}
				@media(max-width: 992px){
					.container{
						transform: translateY(10%);
						max-width: 900px;
					}
					.container-text p{
						width: 100%;
					}
					.container-title div{
						display: none;
					}
				}
				@media(max-width: 778px){
					.container{
						transform: translateY(5%);
					}
				}
				@media(max-width: 765px){
					.container{
						align-items: center;
						flex-direction: column;
					}
					
					.container-text{
						margin: 0 30px;

					}
					.container-text{
						margin-top: 100px;
					}
					.container-text p{
						color: #2A2A2A;
					}
					.container-text h1{
						color: #2A2A2A;
						margin: 0;
					}
					.container-title div{
						display: flex;
						transform: scale(0.7);
					}
				}
				@media(max-width: 400px){
					.container-img{
						width: 100%;
					}
					.container-img img{
						width: 100%;
					}
				}
				@media(min-width: 401px){
					.container-img{
						height: 100%;
					}
					.container-img img{
						height: 100%;
					}
				}
			`}</style>
		</>
	)
}