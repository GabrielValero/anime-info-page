import {useContext, useEffect, useState} from 'react';

import UserContext from '../../context/user'

import {GetData} from '../../firebase/client';

//Components
import Campo from './Campo';


export default function Campos(){
	const {user} = useContext(UserContext);
	const [fav, setFav] = useState("");
	const [reading, setReading] = useState("");
	const [saved, setSaved] = useState("");
	
	useEffect(()=>{

		let mounted = true;
		if(user !== "Nada"){
			GetData(user).then(doc=>{
				if(mounted){
					setFav(doc.fav);
					setReading(doc.reading);
					setSaved(doc.saved);
				}
			})
		}
		return function cleanup() {
            mounted = false;
        }
	},[user])
	console.log(fav)
	return (
		<div className="px-md-5 px-3" style={{marginTop: "150px"}}>
			<h1>Dashboard</h1>

			<div className="m-5">
				<h2>Favoritos</h2>
				<Campo data={fav}/>
			</div>
			<div className="m-5">
				<h2>Leyendo</h2>
				<Campo data={reading}/>
			</div>
			<div className="m-5">
				<h2>Guardados</h2>
				<Campo data={saved}/>
			</div>
		</div>
	)
}