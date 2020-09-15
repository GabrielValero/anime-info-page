export default function Toggle(){
	return(
		<div className="button">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<div className="menu">
			  		<div>
			  			<span className="barras barra1"></span>
				  		<span className="barras barra2"></span>
				  		<span className="barras barra3"></span>
			  		</div>
				</div>
			</button>
			<style jsx>{`
				.button{
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.menu{
					width: 40px;
					height: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 10px;
					background: #6100FF;
					box-shadow: -10px -10px 20px rgba(118, 117, 117, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25);
				}
				.menu>div{
					width: 70%;
					height: 70%;
					display: flex;
					justify-content: center;
					flex-direction: column;
				}
				.barras{
					padding: 2.5px;
					margin: 1.5px 0;
					background: white;
					border-radius: 20px;
				}
				.barra1{
					width: 100%;
				}
				.barra2{
					width: 70%;
				}
				.barra3{
					width: 40%;
				}
			`}</style>
		</div>
	)
}