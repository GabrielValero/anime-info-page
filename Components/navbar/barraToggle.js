import Link from 'next/link';

import {verify, logout} from '../../firebase/client';

export default function BarraToggle({user, imgUser}){
	if(user == "Nada") verify();
	return(
		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		  	<div className="navbar-nav">
		    	{user == "Nada" ? <>
		    	<Link href="/singup">
		    		<a className="nav-link">Unete</a>
		    	</Link>
		    	<Link href="/login">
		    		<a className="nav-link">Iniciar Sesion</a>
		    	</Link></> : 
		    	<div className="d-flex align-items-center flex-column user">
		    		<img src={imgUser} alt="imagen de usuario" width="50%" />
		    		<small style={{color: "#E1E1E1", fontWeight: "bold"}}>@{user.slice(0, user.length-10)}</small>
		    		<Link href="/dashboard">
		    			<p className="btn text-center my-3" style={{background: "#47D530", color: "white", fontWeight: "bold"}}>Dashboard</p>
		    		</Link>
		    	</div>}
		    	<Link href="#">
		    		<a className="nav-link">Listas</a>
		    	</Link>
		    	<Link href="#">
		    		<a className="nav-link">Categorias</a>
		    	</Link>
		    	<Link href="#">
		    		<a className="nav-link">Recomendados</a>
		    	</Link>
		    	{user != 'Nada' ? <div className="d-flex justify-content-center mt-3"><input className="btn btn-danger" type="button" value="Logout" onClick={logout}/></div> : null }
		 	 </div>
		 	 <style jsx>{`
		 	 	.navbar-nav{
					background: #30273F;
				}
				input{
					width: 60%;
					font-weight: bold;
				}
				.user p{
					width: 90%;
					border: none;
				}
		 	 	@media(max-width: 600px){
		 	 		.navbar-nav{
						width: 100%;
						text-align: center;
					}
					a{
						color: #EBEBEB;
					}
					a:hover{
						color: #30273F;
						background: #EBEBEB;
					}
					input{
						margin-bottom: 10px;
						width: 100%;
						border-radius: 0;
						font-weight: bold;
					}
					.user p{
						width: 100%;
						border-radius: 0;
					}
				}
				@media(min-width: 600px){
					.navbar-nav{
						width: 200px;
						height: 100vh;
					}
					a{
						
						margin-left: 10px;
						color: #EBEBEB;
						transition-duration: 0.5s;
					}
					a:hover{
						padding-left: 3px;
						border-left: solid 10px #6100FF;
						border-radius: 5px;
						transition-duration: 0.3s;
					}
					
					
				}
		 	 `}</style>
		</div>
	)
}