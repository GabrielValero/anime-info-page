import Link from 'next/link';

export default function PrincipalOptions({user}){
	return (
		<div className="principal-options mr-auto ml-3 h-100">
		    {user == 'Nada' ? (
		  		<div className="font-weight-bold h-100 d-flex align-items-center">
		    		<Link href="/singup">
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
			    	<Link href="login">
			    		<a className="nav-link d-inline-block" style={{color:" white",fontWeight: "bold"}}>Iniciar Sesion</a>
			    	</Link>
		 	 	</div>
		    ):
		    <div className="font-weight-bold h-100 d-flex justify-content-center align-items-center">
		     	<img src="/images/Mini bear.png" alt="Osito" height="80%"/>
		     	<Link href="/">
					<a className="inicio"style={{
				    			display:"inline-block",
				    			padding:"10px 20px",
				    			marginLeft:"20px",
				    			background:" #6100FF",
								boxShadow: "-10px -10px 20px rgba(118, 117, 117, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25)",
								borderRadius: "10px",
								color:" white",
								fontWeight: "bold"
				    		}}>Inicio</a>
				</Link>
		    </div>
		} 
		</div>
	)
}