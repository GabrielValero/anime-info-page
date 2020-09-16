import {useState, useContext, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'

import {loginWithEmail, loginWithGoogle} from '../firebase/client';

//Context
import UserContext from '../context/user'

export default function FormLogin(){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorPass, setErrorPass] = useState('');
	const [errorLogin, setErrorLogin] = useState('');

	const {user} = useContext(UserContext)
	const router = useRouter();

	useEffect(()=>{
		let mounted = true;
		if(user != 'Nada' && mounted) setTimeout(()=>router.push('/'), 1000)
		return ()=>{
			mounted = false;
		}
	}, [user])

	const handleSubmit= (e)=>{
		e.preventDefault();

		if(email.includes('@gmail.com') && password.length > 6){
			setErrorEmail('');
			setErrorPass('');
			loginWithEmail(email, password)
			.then(res=> {
				if(res.error) setErrorLogin('Esta cuenta no existe')
			})
		} else {
			if(!email.includes('@gmail.com')) setErrorEmail('Ingrese un correo valido ejemplo@gmail.com')
			if(password.length < 6) setErrorPass('La contraseña debe tener minimo 6 caracteres')
		}

	}
	return(
		<div className="d-flex justify-content-center align-items-center flex-column-reverse flex-md-row" style={{height:'100vh', background: '#222222'}}>
			<div className="mr-md-5 d-flex justify-content-center align-items-center flex-column">
				<div className="btn btn-large input d-flex align-items-center justify-content-space-around" onClick={loginWithGoogle}>
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="20" height="20"
						viewBox="0 0 24 24"
						style={{fill:"#000000"}}>
					<path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path></svg>
					<p className="m-0 ml-2 font-weight-bold">Inicia Sesión con Google</p>
				</div>
			</div>
			<form method="POST" onSubmit={(e)=> handleSubmit(e)} className="ml-md-5 my-5">
				<div>
					<h2>Inicia Sesión</h2>
					<small style={{color:'#E56464'}}>{errorLogin !='' ? errorLogin : null}</small>
					<input className="form-control text-center" type="text" placeholder="Email" name="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} />
					<small style={{color:'#E56464'}}>{errorEmail !='' ? errorEmail : null}</small>
					
					<input className="form-control mt-2 text-center" type="password" placeholder="Contraseña" name="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} />
					<small style={{color:'#E56464'}}>{errorPass !='' ? errorPass : null}</small>
					<input type="submit" className="btn btn-block mt-4" value="Iniciar Sesion" />
					<Link href="/singup">
					<a><small>¿No tienes cuenta? <span>Registrate</span></small></a>
					</Link>
				</div>
			</form>
		
			<style jsx>{`
					.input{
						background: #E3E3E3;
						box-shadow: -10px -10px 20px rgba(118, 117, 117, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25);
					}

					form{
						width: 350px;
						padding: 50px;
						background: #222222;
						border-radius: 15px;
						box-shadow: -10px -10px 20px rgba(118, 117, 117, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25);
					}
					form div{
						display:flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
					}
					h2{
						color: #F6F6F6;
					}
					small{
						letter-spacing: 1px;
						color: #F1F1F1;
					}
					small span{
						color: #10EC1D;
					}
					input[type="text"], input[type="password"]{
						font-weight: bold;
						color: #525252;
						border: none;
						border-radius: 8px;
						background: rgba(255, 255, 255, 0.7);
					}
					input[type="text"]:hover , input[type="password"]:hover { 
						background: #EDEBEB;
						color: #242424;
					}
					input[type="submit"]{
						width: 90%;
						border-radius: 5px;
						background: #383838;

						color: #EAEAEA;
						font-weight: bold;
					}
					input[type="submit"]:hover{
						background: #9400D3;
						box-shadow: 0 0 10px #9400D3, 0 0 50px #9400D3;
					}
			`}</style>
		</div>
	)
}