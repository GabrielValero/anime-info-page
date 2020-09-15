import React, {useState} from 'react';
import Head from 'next/head';

const Context = React.createContext('Nada')

export function UserProvider({children}){
	const [user, setUser] = useState('Nada')
	const [imgUser, setImg] = useState('Nada');
	return <Context.Provider value={{user, setUser, imgUser, setImg}}>
		
		{children}
	</Context.Provider>
}

export default Context;