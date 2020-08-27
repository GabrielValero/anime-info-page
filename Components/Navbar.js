import Head from 'next/Head';
import Link from 'next/Link';


export default function Navbar(){
	return (
		<nav className="navbar navbar-expand-md">
			<Head>
			<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;900&display=swap" rel="stylesheet"/>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
				<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
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
			  	<div className="navbar-nav ml-auto mr-5">
			    	<Link href="#">
			    		<a className="nav-link">Unete</a>
			    	</Link>
			    	<Link href="#">
			    		<a className="nav-link">Iniciar Sesion</a>
			    	</Link>
			 	 </div>
			</div>

			<style jsx>{`
				nav{
					height: 90px;
					background: #30273F;
					padding: 0;
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
				.navbar-nav{
					display: flex;
					width: 200px;
				}
			`}</style>

			<style jsx global>{`
				body{
					max-width: 100vw;
					background: #EDF1F5;
				}
				h1,h2,h4,a,p{
					font-family: 'Rubik', sans-serif;
				}
			`}</style>
		</nav>
	);
}