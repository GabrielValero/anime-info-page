import Head from 'next/head';
import Link from 'next/link';


export default function Navbar(){
	return (
		<nav className="navbar">
			<Head>
			<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"/>
				<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossOrigin="anonymous"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
		
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
			</div>
			<div className="principal-options mr-auto ml-3">
			  	<div className="font-weight-bold">
			    	<Link href="#">
			    		<a className="nav-link" style={{
			    			display:"inline-block",
			    			padding:"10px 20px",
			    			background:" #6100FF",
							boxShadow: "-10px -10px 20px rgba(118, 117, 117, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25)",
							borderRadius: "10px",
							color:" white",
							fontWeight: "bold"
			    		}}>Unete</a>
			    	</Link>
			    	<Link href="#">
			    		<a className="nav-link d-inline-block" style={{color:" white",fontWeight: "bold"}}>Iniciar Sesion</a>
			    	</Link>
			 	 </div>
			</div>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			  	<div className="navbar-nav">
			    	<Link href="#">
			    		<a className="nav-link">Unete</a>
			    	</Link>
			    	<Link href="#">
			    		<a className="nav-link">Iniciar Sesion</a>
			    	</Link>
			    	<Link href="#">
			    		<a className="nav-link">Listas</a>
			    	</Link>
			    	<Link href="#">
			    		<a className="nav-link">Categorias</a>
			    	</Link>
			    	<Link href="#">
			    		<a className="nav-link">Recomendados</a>
			    	</Link>
			 	 </div>
			</div>

			<style jsx>{`
				nav{
					height: 90px;
					background: #30273F;
					padding: 0;
					position: relative;
					z-index: 5;
				}
				.navbar-nav{
					background: #30273F;
				}
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
				@media(max-width: 600px){
					.navbar-nav{
						width: 100%;
						text-align: center;
					}
					.navbar-nav a{
						color: #EBEBEB;
					}
					.navbar-nav a:hover{
						color: #30273F;
						background: #EBEBEB;
					}
				}
				@media(min-width: 600px){
					.navbar-nav{
						width: 200px;
						height: 100vh;
					}
					.navbar-nav a{
						
						margin-left: 10px;
						color: #EBEBEB;
						transition-duration: 0.5s;
					}
					.navbar-nav a:hover{
						padding-left: 3px;
						border-left: solid 10px #6100FF;
						border-radius: 5px;
						transition-duration: 0.3s;
					}
				}
				
			`}</style>

			<style jsx global>{`
				html{
					max-width: 100vw;
					overflow-x: hidden;
				}
				body{
					max-width: 100vw;
					overflow-x: hidden;
					padding: 0;
					margin: 0;
					background: #EDF1F5;
				}
				h1,h2,h4,a,p{
					font-family: 'Rubik', sans-serif;
				}
			`}</style>
		</nav>
	);
}