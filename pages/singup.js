import Router from 'next/router'
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';

//componentes
import Navbar from '../Components/Navbar';
import FormSingUp from '../Components/CamposSingUp';

//context
import {UserProvider} from '../context/user'

export default function Singup(){
	
	return(
		<UserProvider>
			<Navbar/>
			
			<FormSingUp/>
		</UserProvider>
	)
}