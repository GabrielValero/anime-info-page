export default function header({attributes}){
	return (
		<>
			<div className="header">
				<div className="background-image">
					<img src={attributes.posterImage.original} alt={`${attributes.canonicalTitle} img`} width="100%"/>
				</div>
				<div className="container">
					<div className="container-img">
						<img src={attributes.posterImage.original} alt={`${attributes.canonicalTitle} img`}/>
						<div className="botons">
							<div className="heart">
								<svg width="50%" height="50%" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								  	<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
								</svg>
							</div>
							<div className="book">
								<svg width="50%" height="50%" viewBox="0 0 16 16" className="bi bi-book-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								  <path fillRule="evenodd" d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
								</svg>
							</div>
							<div className="bookmark">
								<svg width="50%" height="50%" viewBox="0 0 16 16" className="bi bi-bookmark-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								  <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4.5 4.5a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"/>
								</svg>
							</div>
						</div>
					</div>
					<div className="container-text">
						<div className="container-title"><h1 className="">{attributes.canonicalTitle} </h1> {attributes.status == 'finished' ? <div className="ml-2 finished"></div> : <div className="ml-2 ongoing"></div>}</div>
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
				.container-img img{
					box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
				}
				.container .botons{
					width: 100%;

					display: flex;
					justify-content: space-around;
				}
				.botons div{
					width: 60px;
					height: 60px;
					margin-top: 30px;
					border-radius: 100px;
					display: flex;
					justify-content: center;
					align-items: center;
					box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
					color: white;
				}
				.heart{
					background: #FF002E;
				}
				.book{
					background: #0ABD27;
				}
				.bookmark{
					background: #6100FF;
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