import Navbar from '../Components/Navbar';
import Campos from '../Components/dashboard/mainDashboard';

import {UserProvider} from '../context/user'


export default function Dashboard(){
	return(
		<UserProvider>
			<Navbar/>
			<Campos/>
		</UserProvider>
	)
}

