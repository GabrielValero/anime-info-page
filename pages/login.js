import FormLogin from '../Components/CamposLogin';

import Navbar from '../Components/Navbar';


//context
import {UserProvider} from '../context/user'

export default function LogIn(){

	return(
		<UserProvider>
			<Navbar/>
			<FormLogin/>
			
			<style jsx global>{`
				body{
					background: linear-gradient(90deg, #9400D3 0%, #4B0082 100%);
				}
			`}</style>
		</UserProvider>
	)
}